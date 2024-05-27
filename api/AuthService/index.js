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
      throw error0;
    }
    connection.createChannel((error1, channel) => {
      if (error1) {
        throw error1;
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

          const userDoc = await User.create({ username, email, password });

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
        const userDoc = await User.findOne({ email });
        if (!userDoc) {
          res.status(400).json("Email or password incorrect!!");
        } else {
          const passOk = bcrypt.compareSync(password, userDoc.password);
          if (passOk) {
            jwt.sign(
              { email, id: userDoc._id, username: userDoc.username },
              SECRET_KEY,
              {},
              (err, token) => {
                if (err) throw err;
                res.cookie("token", token).json({
                  id: userDoc._id,
                  username: userDoc.username,
                  email,
                });
              }
            );
          } else {
            res.status(400).json("Email or password incorrect!!");
          }
        }
      });

      app.get("/profile", (req, res) => {
        const { token } = req.cookies;
        jwt.verify(token, SECRET_KEY, {}, (err, info) => {
          if (err) throw err;
          res.json(info);
        });
      });

      app.post("/logout", (req, res) => {
        res.cookie("token", "").json("ok");
      });

      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
    });
  }
);

