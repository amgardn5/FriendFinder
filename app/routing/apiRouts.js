var friends = require("../data/friends");
const express = require('express');
const path = require('path');

const app = express();

module.exports = (app) => {

    // A GET route with the url /api/friends. 
    // This will be used to display a JSON of all possible friends.
    app.get("/api/friends", (req, res ) => {
        res.json(friend.data);
    });

    // A POST routes /api/friends. 
    // This will be used to handle incoming survey results. 
    // This route will also be used to handle the compatibility logic.
    app.post("/api/friends", (req, res) => {
        let data = req.body;
        var friend = findFriend(data.scores);

        res.send(friends.data[friend]);

    });
};

function findFriend(data){
    var friend_id = 0;
    var max_diff = 99;
    for(let i=0; i < friends.data.length; i++){
        let friend = friends.data[i];
        let diff = 0;
        for(let j=0; j < friend.scores.length; j++){
            diff += Math.abs(friend.scores[j] - parseInt(data[j]));
        }
        if (diff < max_diff){
            console.log("new match old score="+ max_diff + " new score: "+ diff);
            max_diff = diff;
            friend_id = i;
        }
    }
    console.log(friend_id);
    return friend_id;
};