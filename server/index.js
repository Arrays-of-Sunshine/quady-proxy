const express = require('express');
const parser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8000;

app.use('/products/*', express.static('public'));
app.use('/css', express.static('public/styles.css'));

app.listen(PORT, () => {
    console.log(`Listening to PORT http://localhost:${PORT}`);
});