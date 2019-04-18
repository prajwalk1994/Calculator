var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors({ origin: 'http://localhost:3002', credentials: false }));

app.post('/calculate', function(req, resp){
  console.log(req.body);
  const data = {
    result : eval(req.body.expression)
  };
  resp.end(JSON.stringify(data));
  console.log("Expression evaluated. Result: " +data.result);
})

app.listen(3001,function(){
  console.log("Listening at 3001");
})
