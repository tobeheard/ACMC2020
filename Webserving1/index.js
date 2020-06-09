const express = require('express');
const app = express();
app.listen(3000, () => console.log('Hello! yes I am listening'));
app.use(express.static('public'));