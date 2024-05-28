require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./models/User");
const cookieParser = require("cookie-parser");
const amqp = require("amqplib/callback_api");

const PORT = process.env.PORT || '4000';
const SECRET_KEY = process.env.SECRET_KEY;

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

amqp.connect(
  "amqps://nkytyksc:JKvl2UDhejMV4gwU86n9q7S8gbycbzvE@moose.rmq.cloudamqp.com/nkytyksc",
  (error0, connection) => {
    if (error0) {
      console.error("AMQP connection error:", error0);
      return;
    }
    connection.createChannel((error1, channel) => {
      if (error1) {
        console.error("AMQP channel error:", error1);
        return;
      }
      const app = express();
      
      app.use(cors({ credentials: true, origin: process.env.FRONTEND_URL || 'http://localhost:5173' }));
      app.use(express.json());
      app.use(cookieParser());

      app.post("/register", async (req, res) => {
        const { username, email, password, confirmPassword } = req.body;

        if (password !== confirmPassword) {
          return res.status(400).json({ error: "Passwords do not match" });
        }
        try {
          const existingUser = await User.findOne({
            $or: [{ username }, { email }],
          });
          if (existingUser) {
            return res.status(400).json({ error: "Username or email already exists" });
          }

          const hashedPassword = await bcrypt.hash(password, 10);
          const userDoc = await User.create({ username, email, password: hashedPassword });

          res.status(201).json(userDoc);
        } catch (error) {
          console.error("Error creating user:", error);
          if (error.name === 'ValidationError') {
            const errors = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({ errors });
          }
          res.status(500).json({ error: "Server error" });
        }
      });

      app.post("/login", async (req, res) => {
        const { email, password } = req.body;
        try {
          const userDoc = await User.findOne({ email });
          if (!userDoc) {
            return res.status(400).json("Email or password incorrect!!");
          }
          
          const passOk = await bcrypt.compare(password, userDoc.password);
          if (passOk) {
            jwt.sign(
              { email, id: userDoc._id, username: userDoc.username },
              SECRET_KEY,
              {},
              (err, token) => {
                if (err) {
                  console.error("JWT sign error:", err);
                  return res.status(500).json({ error: "Server error" });
                }
                res.cookie("token", token, { httpOnly: true }).json({
                  id: userDoc._id,
                  username: userDoc.username,
                  email,
                });
              }
            );
          } else {
            res.status(400).json("Email or password incorrect!!");
          }
        } catch (error) {
          console.error("Login error:", error);
          res.status(500).json({ error: "Server error" });
        }
      });

      app.get("/profile", (req, res) => {
        const { token } = req.cookies;
        if (!token) {
          return res.status(401).json({ error: "Unauthorized" });
        }
        jwt.verify(token, SECRET_KEY, {}, (err, info) => {
          if (err) {
            console.error("JWT verify error:", err);
            return res.status(401).json({ error: "Unauthorized" });
          }
          res.json(info);
        });
      });

      app.post("/logout", (req, res) => {
        res.cookie("token", "", { httpOnly: true }).json("ok");
      });

      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
    });
  }
);
