const express = require("express");
const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth")

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGODB)
    .then(() => console.log("Db connection succesfull"))
    .catch((err) => {
        console.log(err);
});

app.use(express.json())
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.listen(5000, () => {
    console.log("Backend server running http://localhost:5000");
})