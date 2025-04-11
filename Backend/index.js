import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js"
import companyRoute from "./routes/company.route.js"
import jobRoute from "./routes/job.route.js"
import applicationRoute from "./routes/application.route.js"
import path from "path"

dotenv.config({});

const app = express();
// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());

const corsOption = {
  origin:'https://jobportal-c12o.onrender.com',
  credentials:true
}

app.use(cors(corsOption));

const PORT = process.env.PORT || 3000;

const _dirname = path.resolve();

// api
// url = "http://localhoast:8000/api"
app.use("/api/v1/user",userRoute);
app.use("/api/v1/company",companyRoute);
app.use("/api/v1/job",jobRoute);
app.use("/api/v1/application",applicationRoute);


app.use(express.static(path.join(_dirname,"/Frontend/dist")))
app.get('*',(_,res)=>{
res.sendFile(path.resolve(_dirname,"Frontend","dist","index.html"))
})

app.listen(PORT,()=>{
  connectDB();
  console.log(`Server is listen on port ${PORT}`)
})