const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
const Pusher = require("pusher");

/* Importing Schema */
const Whatsapp = require("../models/Whatsappschema");

router.use(express.json());
app.use(express.urlencoded({ expexted: false }));
router.use(cors());
+router.post("/Whtaspp", (req, res) => {});



router.post("/Messages/new", async (req, res) => {
  const { message, name, recieved } = req.body;
  if ((!message, !name,!recieved)) {
    res.status(422).json({ error: "Please Fill All Feilds" });
  }
  try {
    const Whatsappd = new Whatsapp({ message, name, recieved });
    console.log(Whatsappd);
    const DataSaved = await Whatsappd.save();

    return res.status(201).send(DataSaved);
  } catch (error) {
    return res.status(400).send({ Error: "Failed To Insert Message" + error });
  }
});

router.get("/Messages/sync", (req, res) => {
  Whatsapp.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

module.exports = router;
