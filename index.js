const express = require('express');
const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.status(200)
        .render('index')
        .end();
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});