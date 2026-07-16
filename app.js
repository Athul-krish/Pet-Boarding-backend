const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Pet = require("./models/Pet");

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb://athulkrishnapanamakkal:athul123@ac-pikpijl-shard-00-00.wjtqgxj.mongodb.net:27017,ac-pikpijl-shard-00-01.wjtqgxj.mongodb.net:27017,ac-pikpijl-shard-00-02.wjtqgxj.mongodb.net:27017/PetDb?ssl=true&replicaSet=atlas-a3e10y-shard-0&authSource=admin&appName=Cluster0",
  )
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

//add pet route
app.post("/addpet", async (req, res) => {
  try {
    const pet = new Pet(req.body);

    await pet.save();

    res.json({
      status: "success",
      message: "Pet Registered Successfully",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});




//view pet route
app.post("/viewpet", async (req, res) => {
  try {
    const data = await Pet.find();

    res.json(data);
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});




app.listen(3000, () => {
  console.log("Server Running...");
});
