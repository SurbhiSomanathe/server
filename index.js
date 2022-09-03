import  express, { response }  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://surbhi:surbhi123@cluster0.u0uv12p.mongodb.net/test';

const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`)))
.catch((error) => console.log(error.message));


mongoose
.connect(CONNECTION_URL, {
    useNewUrlParser: true,
})
.then(() => console.log("DB Connected..!"))
.catch(err => console.log(err))

app.use('/api',(request,response) => {
    response.send("Hola US")
})


