
const express = require('express');
const app = express();
const connectDB = require('./config/db');
const Hero  = require('./models/heroModel');


connectDB();

// the middleware - before we can use the create method
app.use(express.json());


app.get('/superhero', async(req, res)=>{
    try {
        const heros = await Hero.find({});
        res.json(heros);
    } catch (error) {

        console.log("can't find the data " + error.msg)
        
    }
});

// displayig superhero using an ID 
app.get('/superhero/:id', async(req, res)=>{
    try {
        const hero = await Hero.findById(req.params.id);
        res.json(hero);
    } catch (error) {
        console.log(error);
        
    }
});

// creating a new superhero
app.post('/superhero', async(req, res)=>{
    try {
        await Hero.create({
            superheroname: req.body.superheroname,
            name : req.body.name,
        });
        
        res.json({msg: "Superhero created..."});
              
    } catch (error) {
        
        console.log(error);
    }
    
})

//editing superhero with a ID 
app.put('/superhero/:id', async(req, res)=>{
    try {
        await Hero.findByIdAndUpdate(req.params.id, {
            superheroname: req.body.superheroname,
            name : req.body.name,
        });
        res.json({msg: "Superhero has been updated..."});

        
    } catch (error) {
        console.log(error);
        
    }
})

app.delete('/superhero/:id', async(req, res)=>{

    try {
        const deleted = await Hero.findByIdAndDelete(req.params.id);
        res.json({msg:'Superhero deleted...'});
    } catch (error) {
        console.log(error);
        
    }
    
});

app.get('/superhero',(req, res)=>{
    res.json({msg:'showing all your superhero'})
})


app.get('/', (req, res)=>{
    res.send('know you can make it, believe in yourself');
})

app.listen(3000, ()=>console.log('server is listening on port 3000'));