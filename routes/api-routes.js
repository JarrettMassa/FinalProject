//Dependencies
var db = require("../models");
var request = require('request');

module.exports = function(app,db) {
//================================GET ROUTES================================

    app.post("/signup/newuser", function(req, res) {
        // findAll returns all entries for a table when used with no options
        
        db.User.findAll({  where: {email: req.body.email}}).then(function(dbUser) {

            if (JSON.stringify(dbUser).length == 2){

                request.post({
                    url: 'https://api.deepai.org/api/image-similarity',
                    headers: {
                        'Api-Key': 'dd5f9443-dc6b-480f-a2e9-7cfc57c79386'
                    },
                    formData: {
                        'image1': req.body.photo,
                        'image2': 'https://media.licdn.com/dms/image/C4D03AQHFtc6iqGmp_w/profile-displayphoto-shrink_800_800/0?e=1545868800&v=beta&t=otk6eXxcyHh1MqH7IqfZnQWPNHHqsvDvl8CkmZlq-Es',
                    }
                }, function callback(err, httpResponse, body) {
                    if (err) {
                        console.error('request failed:', err);
                        return;
                    }

                    db.User.create({
                        email: req.body.email,
                        first_name: req.body.fname,
                        last_name: req.body.lname,
                        distance: JSON.parse(body).output.distance,
                        password: req.body.password,
                        picture: req.body.photo
                    })

                    res.json("UserCreated");    // User doesn't exist. Ok to create user.
                }); // End request.post
                
            }
            else {
                res.json("UserExists");    // User exists. Can't create.
            }

        });
    });



    app.post("/signin/user", function(req, res) {
        db.User.findAll({  where: {email: req.body.email}}).then(function(dbUser) {

            if (JSON.stringify(dbUser).length == 2){
                res.json("NoUser");    // User doesn't exist. Can't log in.
            }
            else if (req.body.password.toLowerCase() != dbUser[0].password.toLowerCase()){
                res.json("BadPW");
            }
            else {
                res.json("UserOk");    
            }
        });
    });



    app.post("/getuser", function(req, res) {
        db.User.findAll({ where: {email: req.body.email}}).then(function(dbUser) {
            res.json(dbUser);    
        });
    });



    app.post("/getmatches", function(req, res) {

        db.User.findAll({ where: {email: req.body.email}}).then(function(dbUser) {
            var currentUser = dbUser[0];

            db.User.findAll({}).then(function(allUsers) {

                var tempUsers = allUsers;
                var responseArray = [];
                let emailArray = [];
                var distanceArray = [];

                for (var i = 0; i < allUsers.length; i++){
                    emailArray[i] = allUsers[i].email;
                    distanceArray[i] = allUsers[i].distance;
                }


                for (i = 0; i < tempUsers.length; i++){
                     tempUsers[i].distance = Math.abs(tempUsers[i].distance - currentUser.distance);
                }

                tempUsers.sort(compare);


                for (i = 0; i < 5; i++){
                    responseArray.push(tempUsers[i]);

                    for (j = 0; j < emailArray.length; j++){
                        if (responseArray[i].email == emailArray[j]){
                            responseArray[i].distance = distanceArray[j];

                        }
                    }
                }

                res.json(responseArray);    
            });
        });
    });


    function compare(a, b) {
        const distanceA = a.distance;
        const distanceB = b.distance;
        let comparison = 0;

        if (distanceA > distanceB) {
            comparison = 1;
        } 
        else if (distanceA < distanceB) {
            comparison = -1;
        }
        return comparison;
    }

};//end module.exports
