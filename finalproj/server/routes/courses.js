const express = require("express");
const {check, validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const auth = require("./../middleware/auth");

const User = require("../models/User");
const { findOneAndUpdate } = require("../models/User");

router.get('/list', auth, async(req,res) => {
    try {
        const user = await User.findById(req.user.id);
        res.json(user);
    } catch(e) {
        res.send({message: 'Error in Fetching User'});
    }
});

router.post('/add', auth, async(req,res) => {
    try {
        const newcourse = {
            courseName: req.body.courseName,
            totalScore: req.body.totalScore,
            socrePerHole: req.body.socrePerHole
        };
        const user = await User.findById(req.user.id);
        const courselist = user.courses;
        courselist.push(newcourse);
        user.courses = courselist;
        await user.save();
        res.send(user);
        // User.findOneAndUpdate({user},{$push: {courses: newcourse}}, function(err, lst) {
        //     if (err) {
        //         console.log(err);
        //         res.json({msg: 'cant add'})
        //     } else {
                
        //         res.json(user)
        //     }
        // })
        

    } catch(e) {
        res.send({message: 'cant add item'});
    }
});

// router.post('/delete', auth, async(req,res) => {
//     try {
//         const item = req.body;
//         const user = await User.findById(req.user.id);
//         User.findOneAndUpdate({user},{$pull: {shoppinglist: item}}, function(err, lst) {
//             if (err) {
//                 console.log(err);
//                 res.json({msg: 'cant add'})
//             } else {
//                 res.json({
//                     status:'delete successful', lst,
//                 })
//             }
//         })
        

//     } catch(e) {
//         res.send({message: 'cant del item'});
//     }
// })















module.exports = router;