const express = require('express');
const router = express.Router();
const BlogPost = require('../models/blogPost');

//Routes
router.get('/', (req, res) => {
    const data = {
        username: 'hammad',
        age: 30
    };
    res.json(data);
})

router.get('/regions', (req, res, next) => {
    BlogPost.collection.distinct("region")
    .then((data) => {
        console.log('Data:', data);
        res.json(data);
    })
    .catch((error) =>{
        console.log('error:', error);
    });
  });

  router.get('/listings', (req, res, next) => {
    BlogPost.find({tag: 'sell'})
    .then((data) => {
        console.log('Data:', data);
        res.json(data);
    })
    .catch((error) =>{
        console.log('error:', error);
    });
  });

router.get('/:date', (req, res) => {
    var date = req.params.date;
    console.log(date);
    BlogPost.aggregate(
        [
          { $match: { $and:[{date: {
            $gte: new Date(new Date(date).setHours(00, 00, 00)),
            $lt: new Date(new Date(date).setHours(23, 59, 59))
             }},{tag: 'rate'}]}}, 
          {
            $group:
              {
                _id: "$region",
                rate: { $last: "$rate" }
              }
          }
        ]
     ).then((data) => {
            console.log('Data:', data);
            res.json(data);
        })
        .catch((error) =>{
            console.log('error:', error);
        });
});

router.post('/save', (req, res) => {
    console.log('Save request body:', req.body);
    const data = req.body;
    //create a new blogpost for incoming data
    const newBlogPost = new BlogPost(data);

    //.save
    newBlogPost.save((error) => {
        if(error){
            res.status(500).json({msg: 'Sorry, internal server errors'});
            return;
        }
        return res.json({
            msg: 'New rate has been saved!!'
        });
    });  
});

router.post('/saveSelling', (req, res) => {
    console.log('Selling request body:', req.body);
    const data = req.body;
    //create a new blogpost for incoming data
    const newBlogPost = new BlogPost(data);

    //.save
    newBlogPost.save((error) => {
        if(error){
            res.status(500).json({msg: 'Sorry, internal server errors'});
            return;
        }
        return res.json({
            msg: 'New rate has been saved!!'
        });
    });  
});


// router.get('/name', (req, res) => {
//     const data = {
//         username: 'tahir',
//         age: 40
//     };
//     res.json(data);
// });

module.exports = router;