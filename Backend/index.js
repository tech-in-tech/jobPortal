import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors"
const app = express();
import dotenv from "dotenv"
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js"
import companyRoute from "./routes/company.route.js"
dotenv.config({});



// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());

const corsOption = {
  origin:'http//localhost:5173',
  Credentials:true
}

app.use(cors(corsOption));

const PORT = process.env.PORT || 3000;

// api
// url = "http://localhoast:8000/api"
app.use("/api/v1/user",userRoute);
app.use("/api/v1/company",companyRoute);


app.listen(PORT,()=>{
  connectDB();
  console.log(`Server is listen on port ${PORT}`)
})