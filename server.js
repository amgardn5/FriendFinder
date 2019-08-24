const express = require('express');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./app/routing/apiRouts')(app);
require('./app/routing/htmlRouts')(app);

app.listen(process.env.PORT || 8080, function() {
    console.log(`App listening on PORT 8080. http://localhost:8080`);
});