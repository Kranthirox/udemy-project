const express= require('express')
const app=express()
const port=4000
const Joi =require('joi')
const router = express.Router();
const logger =require("./logger")
app.use(express.json());
app.use(express.urlencoded())


app.use(logger)

const courses = [
  { id: 1, name: 'course1' },  
  { id: 2, name: 'course2' },  
  { id: 3, name: 'course3' },  
];

app.get('/', (req, res) => {
  res.send(courses);
});



app.listen(port, () => {
    console.log("listening")
  });