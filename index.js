const express = require("express");
const cors = require("cors");
const sequelize = require("./models/connection");
const login = require("./routes/login_routes");
const loginAdmin = require("./routes/login_admin_routes");
const dataBarang = require("./routes/data_barang_routes");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json({ limit: "200mb" }));
app.use(express.urlencoded({ extended: false }));

sequelize
  .sync()
  .then(() => console.log("database terkonek"))
  .catch((err) => console.log(err));

app.use("/api", login);
app.use("/api", loginAdmin);
app.use("/api", dataBarang);

app.get("/", (req, res) => {
  res.send("teh");
});

app.listen(PORT || 80, () => console.log("Terkonek di port " + PORT));
