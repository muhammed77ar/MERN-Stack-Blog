const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const amqp = require("amqplib/callback_api");
const articleRoutes = require("./routes/articleRoutes");



mongoose.connect("mongodb://localhost:27017/articles", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));
  

  const app = express();
    app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
    app.use(express.json());
    app.use("/uploads", express.static(__dirname + "/uploads"));

    
   

amqp.connect("amqps://nkytyksc:JKvl2UDhejMV4gwU86n9q7S8gbycbzvE@moose.rmq.cloudamqp.com/nkytyksc", (error0, connection) => {
  if (error0) {
    throw error0;
  }
  connection.createChannel((error1, channel) => {
    if (error1) {
      throw error1;
    }
  
    app.use("/articles", articleRoutes);

    const PORT = process.env.PORT || 4001;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  });
});


//JI0hU8pk4FDHjxbD
