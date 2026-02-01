import express from 'express';
import { ENV } from './lib/env.js';

const app = express();


console.log(ENV.PORT);

app.get("/HEALTH", (req, res) => {
    res.status(200).json({msg:"api is up and running"})
})


app.listen(ENV.PORT, () => console.log("Server running on port 3000", ENV.PORT));