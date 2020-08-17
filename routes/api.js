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

//   router.get('/:date', (req, res) => {
//     var date = req.params.date;
//     BlogPost.aggregate(
//         [
//             {
//                 $project:
//                 {
//                 _id: 0,
//                 date: {$dateToString: { format: "%d-%m-%Y", date: "$timeStamp" }},
//                 region: 1,
//                 rate: 1,
//                 tag: 1
//                 }
//             },
//           { $match: { $and:[{date: date},{tag: 'rate'}]}}, 
//           {
//             $project:
//               {
//                 _id: 0,
//                 region: 1,
//                 rate: 1
//               }
//           }
//         ]
//      ).then((data) => {
//             console.log('Data:', data);
//             res.json(data);
//         })
//         .catch((error) =>{
//             console.log('error:', error);
//         });
// });

  router.get('/:date', (req, res) => {
    var date = req.params.date;
    BlogPost.aggregate(
        [
          { $match: { $and:[{date: date},{tag: 'rate'}]}}, 
          {
            $project:
              {
                _id: 0,
                region: 1,
                rate: 1
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

// router.get('/:date', (req, res) => {
//     var date = req.params.date;
//     console.log(date);
//     BlogPost.aggregate(
//         [
//           { $match: { $and:[{date: {
//             $gte: new Date(new Date(date).setHours(00, 00, 00)),
//             $lt: new Date(new Date(date).setHours(23, 59, 59))
//              }},{tag: 'rate'}]}}, 
//           {
//             $group:
//               {
//                 _id: "$region",
//                 rate: { $last: "$rate" }
//               }
//           }
//         ]
//      ).then((data) => {
//             console.log('Data:', data);
//             res.json(data);
//         })
//         .catch((error) =>{
//             console.log('error:', error);
//         });
// });

router.get('/rates/Last:days', (req, res) => {
    var days = req.params.days;
    var dateStart = new Date();
    var dateEnd = ( d => new Date(d.setDate(d.getDate()-days)) )(new Date);
    console.log(dateStart);
    console.log(dateEnd);
    BlogPost.aggregate(
        [
          { $match: { $and:[{timeStamp: {
            $gte: new Date(new Date(dateEnd).setHours(00, 00, 00)),
            $lt: new Date(new Date(dateStart).setHours(23, 59, 59))
             }},{tag: 'rate'}]}
            },
            {
              $sort: {timeStamp:1}
            },
          {
            $group:
              {
                _id: "$region",
                rate: { $push: "$rate" }
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

// router.post('/save', (req, res) => {
//     console.log('Save request body:', req.body);
//     const data = req.body;
//     //create a new blogpost for incoming data
//     const newBlogPost = new BlogPost(data);

//     //.save
//     newBlogPost.save((error) => {
//         if(error){
//             res.status(500).json({msg: 'Sorry, internal server errors'});
//             return;
//         }
//         return res.json({
//             msg: 'New rate has been saved!!'
//         });
//     });  
// });

router.post('/save', (req, res) => {
    //console.log('Save request body:', req.body);
    const data = req.body;
    BlogPost.updateOne({region: data.region, date: data.date, tag: data.tag },data,{upsert: true}).then((data) => {
        console.log('Data:', data);
        res.json({msg: 'New rate has been saved!!'});
    }).catch((error) =>{
        console.log('error:', error);
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