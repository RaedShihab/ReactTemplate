const express = require('express');
const db = require('./db');
const User = require('./models');
const router = express.Router();

router.get("/users", (req, res) => {
 User.findAll()
 .then(users => {
    let usersArr = users.map(user => {
        return {firstname: user.firstname, lastname: user.lastname}
     })
     console.log('daaaaata', usersArr)
     res.send(usersArr)
 })
});

router.post('/add', (req, res)=> {
    console.log('kkkkkkkkkkkkkk',req.body)
    User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname
    })
    .then(user => {res.sendStatus(200); console.log(user)})
})
db.sync();

module.exports = router;
