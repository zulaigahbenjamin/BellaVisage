
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import Router from "./routes/route.js";

// Assuming your './config/database.js' exports the 'connection' object
import connection from './config/database.js';

const app = express();
const port = +process.env.PORT || 5002

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(Router);

app.get('/', (req, res)=> {
    res.json({
        msg: "You're home"
    })
})

    // Start the server after connecting to the database
    app.listen(5002, () =>
        console.log('Server running at http://localhost:5002')
        );