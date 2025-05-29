const bodyParser = require('body-parser');
const express = require ('express');
const app = express();
app.use(bodyParser.json());

let books = [{id: 1, title: 'Alchemist', Author: 'Paulo Coelho'}, 
    {id: 2, title: 'The Secret', Author: 'Rhonda Byrne'}, 
    {id: 3, title: 'The God of Small Things', Author:'Arundhati Roy'}, 
    {id: 4, title: 'The Blue Umbrella', Author:'Ruskin Bond'}];

    app.post('/books', (req, res) =>{
        const { title } = req.body;
         const newBook = { id: books.length + 1, title, Author };
         items.push(newBook);
         res.status(201).json(newBook);

         app.listen(3000, ()=>{
            console.log('Server running on http://localhost:3000');
         });

 


    });