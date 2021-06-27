import  express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/student.js";

const app = express();
app.use(bodyParser.json({limit: "20mb" , extended: true}));
app.use(bodyParser.urlencoded({limit: "20mb" , extended: true}));
app.use(cors());

const Murl ='mongodb+srv://raj:raj2000@cluster0.gh8tn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT ||5000;

mongoose.connect(Murl , {
   useNewUrlParser:true, 
   useUnifiedTopology:true,
   useCreateIndex: true,
   useFindAndModify: true,
})
.then (()=> 
   console.log("Connection with mongo is success")
)
.catch((err) => 
   console.log(err.message)
);


app.use(router);

app.listen(PORT, () => console.log(`yoyo at ${PORT}`))

