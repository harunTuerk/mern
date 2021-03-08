require("dotenv/config")
const express =     require('express')
const cors    =     require('cors')
const bodyParser =  require('body-parser')
const mongoose   =  require('mongoose')

const postRoutes = require("./routes/postRoutes")

const app = express()
app.use(bodyParser.json())

// middelware 
app.use("/api/posts", postRoutes)
app.use((error, req, res, next) =>{
    res.status(error.code || 500).json({message: error.message || "ein unbekannter Fehler ist aufgetreten "})
})

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,

}). then(() =>{
    app.listen(process.env.SERVER_PORT , () => {
        console.log("Server sagt HI")
    })
})

.catch(err => 
    {throw new Error(err)}
)



