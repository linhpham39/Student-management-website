import express from "express";
import connect from "./config/db.js";
import studentRoute from "./routes/studentRoute.js";

import cors from "cors";
const app = express();
app.use(cors())

const PORT = 3000;
connect();

app.use(express.json());
app.use('/', studentRoute);


app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
});
