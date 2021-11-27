// merujuk express, body-parser
const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());

let db = [
    {
        id: 1,
        text: 'HomeWork',
        done: 'yes',
    },
    {
        id: 2,
        text: 'Assignment',
        done: 'no',
    },
];

app.get('/', (request, response) => response.send('Jihan Abdul Rohman'));

// GET
app.get('/list', (request, response) => {
    return response.json(db);
});

// GET by id
app.get('/list/:id', (request, response) => {
    const result = db.filter(val => {
        return val.id == request.params.id;
    });
    return response.json(result);
});

// POST
app.post('/list', (request, response) => {
    const newList = {
        id: db.length + 1,
        text: request.body.text,
        done: request.body.done,
    };

    db.push(newList);

    return response.json(newList);
});

// PUT
app.put('/list/:id', (request, response) => {
    const theList = db.filter(val => {
        return val.id == request.params.id;
    });

    if (theList === null) {
        return response.json('Not Found');
    }

    const newList = {
        id: theList[0].id,
        text: request.body.text || theList[0].text,
        done: request.body.done || theList[0].done,
    };


    db[newList];

    return response.json(newList);
});

// DELETE
app.delete('/list/:id', (request, response) => {
    db = db.filter(val => {
        return val.id != request.params.id;
    });

    return response.json(db);
});

// menjalankan server
app.listen(3000, () => console.log('listenig on localhost:3000'));