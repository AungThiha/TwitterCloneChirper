var express = require('express');
var port = process.env.PORT || 8080;

var login = require('./app/login');
var chirps = require('./app/chirps');

var app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.use(login.routes);
app.use(chirps);

app.get('*', login.required, function (req, res) {
  res.render('index', {
    user: login.safe(req.user)
  });
});

app.listen(port);

console.log("Listening On PORT ", port);