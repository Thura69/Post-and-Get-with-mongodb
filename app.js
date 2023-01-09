const express = require('express');
const dbConnection = require('./mongodb');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/',async (req, res) => {

    const result = await dbConnection();
    const getdata = await result.find().toArray();
    const data = getdata.reverse();
    
    res.render('home', { data });
})

app.post('/',async (req, res) => {
   
   const userInput = req.body.newItem;
    
    const result = await dbConnection();
    const data = await result.insertOne({
        task:userInput
    })



    

    res.redirect('/')
})

app.delete('/:id', async (req, res) => {
    res.send("delete");
    console.log("eeeeeeee")
})

app.listen(3000, () => {
    console.log("good")
});
