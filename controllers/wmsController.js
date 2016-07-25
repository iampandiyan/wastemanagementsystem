var bodyParser=require('body-parser'); //used to parse the data during the form submission(POST)
var mongoose=require('mongoose'); //used for the mongodb operations

//connect to database
mongoose.connect('mongodb://test:test@ds027215.mlab.com:27215/todo');

//Create a schema
var todoSchema=new mongoose.Schema({
  city:String,
  area:String,
  cmplntDtl:String,
  raisedBy:String
});
//Create Model
var Todo=mongoose.model('Todo',todoSchema);

var urlencodedParser=bodyParser.urlencoded({extended:false});

module.exports = function(app){

app.get('/getCmplnt',function(req,res){
  //get data from mongodb and send the JSON to response
  res.contentType("application/json"); //set content type as JSON
  Todo.find({},function(err,data){
    if(err) throw error;
    res.json(data);
  });
});

app.post('/addCmplnt',urlencodedParser,function(req,res){
  //get data from req and add it to mongodb
    var newTodo=Todo(req.body).save(function(err,data){
    if(err) throw err;
    res.json(data);
  });
});

//Initial Home page
app.get('/',function(req,res){
  res.render('home');
});

};
