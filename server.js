const express = require('express'); 
const request = require('request'); 
const cors = require('cors');
const app = express();

app.use(cors({
  origin: 'http://localhost:4200'
}))


app.get('/api', function(req, res){ 
  const searchTerm = req.get('search');
  console.log(req.get('search'))
  request(`https://api.yelp.com/v3/businesses/search?term=restaurants&location=calgary&categories=${searchTerm}`, function (error, response, body) { 
    if (!error && response.statusCode === 200) { 
      res.send(body); 
    }
    if(error) {
      console.log(error);
    } 
   })
   .auth(null, null, true, 'WVpTr5z0iyGLH-7mkFeZDwHaM1FHDhd1dXR1ZOCgoxRU5dbmrNHz0zQP0SIDMfwdsz5qN1mOuLAykBvncTOp1xSI4n1waEloijfmMUcCFO_3rIxBBDtuGKA0JJIiYnYx');
});



app.listen(8080);
console.log('Server running on port 8080...');