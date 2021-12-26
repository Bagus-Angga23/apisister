// const express = require('express')
import express from "express"
import mongoose from "mongoose"
import routeNotif from "./routes/index.js"

const app = express()
const port = 3030
    //koneksi
mongoose.connect("mongodb://localhost:27017/uassister", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
// jika gagal maka
db.on('error', (error) => console.log(error));
// jika berhasil maka
db.once('open', () => console.log("Database Connected"));
app.use(express.json());
app.use('/notification', routeNotif);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});