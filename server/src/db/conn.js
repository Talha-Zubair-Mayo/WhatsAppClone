require("dotenv").config();
const mongoose = require("mongoose");
const DB = process.env.Database;
const Pusher = require("Pusher");
/* Creating a Database */
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`Connected To Online Db Successfully...... `);
  })
  .catch((err) => {
    console.log(`Connection failed` + err);
  });

/*Pusher  */

const pusher = new Pusher({
  appId: "1185729",
  key: "5159c83267bb5f62017f",
  secret: "da219fcf1362fa6e27b2",
  cluster: "mt1",
  useTLS: true,
});

const db = mongoose.connection;
db.once("open", () => {
  console.log(`Database is connected`);
  const msgCollection = db.collection("whatsappdatas");
  const changeStream = msgCollection.watch();
  changeStream.on("change", (change) => {
    console.log(`The Stream Is Changed`, change);

    if (change.operationType === "insert") {
      const messagedetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
        name: messagedetails.name,
        message: messagedetails.message,
        TimeStamp: messagedetails.TimeStamp,
      });
    }
    else 
    {
      console.log(`Error Triggering Pusher`);
    }
  });
});
