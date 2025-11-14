
const mongoose = require('mongoose')

const DB_URI = 'mongodb+srv://pthemajor1:lebo1990@cluster0.dmc3i5g.mongodb.net/?appName=Cluster0'

const connectDB = async()=>{
    try {
        await mongoose.connect(DB_URI)
        console.log('Database connected...')
        
    } catch (error) {
        console.log('error while connecting' + error.message)
        
    }
}

module.exports = connectDB;
