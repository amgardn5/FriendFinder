const express = require('express');
const path = require('path');

const app = express();

module.exports = (app) => {
    
    // A GET Route to /survey which should display the survey page.
    app.get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });

    //A default, catch-all route that leads to home.html which displays the home page.
    // Should be listed last, always!
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

}