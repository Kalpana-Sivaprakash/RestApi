const bodyParser = require('body-parser');
const express = require ('express');
const app = express();
app.use(bodyParser.json());

// let items = [
//     { id: 1, name: 'Item 1' },
//     { id: 2, name: 'Item 2' }
// ];



// Start the server
// app.listen(3000, () => {
//     console.log('Server running on http://localhost:3000');
// });

let books = [{id: 1, title: 'Alchemist', Author: 'Paulo Coelho'}, {id: 2, title: 'The Secret', Author: 'Rhonda Byrne'},  {id: 3, title: 'The God of Small Things', Author:'Arundhati Roy'}];

// Read (GET): Get all items
// app.get('/items', (req, res) => {
//     res.json(books);
// });

app.get('/allbooks', (req,res) => {
        res.json(books);
    });    

    app.post('/books', (req, res) =>{
        //const { title } = req.body;
         const newBook = { id: books.length + 1, title, Author };
         items.push(newBook);
         res.status(201).json(newBook);
             });

         app.listen(3000, ()=>{
            console.log('Server running on http://localhost:3000');
         });

 


