const mongoose =require('mongoose');
function connector() {
    mongoose.connect('mongodb+srv://admin:Rtrpuho6bp81T7HP@cluster0.zxngk.mongodb.net/?retryWrites=true&w=majority')
.then(()=>console.log('connected to DB'))
.catch(()=>console.log("could not connect to Db"))
}
exports.connector=connector