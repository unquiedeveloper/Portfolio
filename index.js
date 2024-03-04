const express = require("express")
require("dotenv").config();
const {connectDB} = require("./connection")
const cors = require("cors")
const routes = require("./routes/routes");
const cookieParser = require("cookie-parser");

const app = express();

const port = 5000;
// connection to db 
connectDB();

//middlewares 
app.use(cors());
app.use(express.json());
app.use(cookieParser())


//routes
app.use("/api", routes);

// listerning to server
app.listen(port,()=>{console.log(`port running on the server ${port}`);})