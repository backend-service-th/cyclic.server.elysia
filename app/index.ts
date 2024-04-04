import express from "express";
import multer from "multer";
import cors from "cors";

const app = express();
app.use( cors() );

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post('/', upload.single('image'), ( Request, Response ) => {
    console.log( Request.file )
    Response.status(200).json({ message:"Null" })
})

app.listen(8080)
