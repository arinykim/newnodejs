var http = require('http');
var fs = require('fs');
var app = http.createserver(function(request,response){
  var url = request.url;
  if(request.url == '/'){
    url = '/index.html';
  }
  if(request.url == '/favicon.ico'){
    return response.writehead(404);
  }
  response.writehead(200)
  response.end(fs.readFileSync(__dirname + url));
});
app.listen(3000);
