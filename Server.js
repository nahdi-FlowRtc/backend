import { Connect } from "./Connection/Connection.js";
import dotenv from "dotenv";
import  cors from "cors"
import express from "express"
import tutorials from "./routes/tutorials.js"
import CreatePosts from "./helpers/CreatePosts.js";
 
dotenv.config();
Connect(process.env.URL_MOGNGO)


const app = express();
app.use(cors());
app.use(express.json());

app.use('/tutorials', tutorials);
//CreatePosts()
app.listen(5000, () => console.log('Server running on port 5000 🚀'));




