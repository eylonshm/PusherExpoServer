import express from "express";
import Pusher from "pusher";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: process.env.PUSHER_CLUSTER,
  useTLS: true,
});

app.post("/trigger-event", (req, res) => {
  const { channel, event, message } = req.body;
  pusher.trigger(channel, event, { message: message });
  console.log("eventTriggered", { channel, event, message });
  res.send("Event triggered");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
