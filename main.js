const express= require('express')
const app=express()
const port=4000
const Joi =require('joi')
const router = express.Router();
const logger =require("./logger")
app.use(express.json());
app.use(express.urlencoded())
const DB =require('./mongadb')

DB.connector()
app.use(logger)


app.get('/', (req, res) => {
  res.send(courses);
});



app.listen(port, () => {
    console.log("listening")
  });