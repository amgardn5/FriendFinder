var friend = require("../data/friends");

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

    });
};


function findFriend(data){

};