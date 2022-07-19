const express =  require('express');
const mongoose = require('mongoose');
const router = require("./routes/book-routes");

const app = express();
app.use(express.json());
app.use("/books",router)

mongoose
    .connect(
        "mongodb+srv://user_67:i2GnzXVBFXheqxyI@cluster0.grvtl.mongodb.net/?retryWrites=true&w=majority"    
    )
    .then(() => console.log("Connectd to Database"))
        .then(() => {
            app.listen(5000);
        }).catch((err)=>console.log(err));





  