var express = require('express');
var app = express();

//app.use(express.static('public'));

// app.get('/', function(req, res) {
//     res.send('Hello World');
// });

app.set('view engine', 'ejs');


app.get('/', function(req, res) {

    var title = 'Index';

    res.render('index', { title: title });
});

app.get('/about', function(req, res) {

    var title = 'about';

    var text = {
        name: 'Claus',
        title: 'Sir'
    }

    res.render('about', { title: title, text: text });
});

app.listen(3000);
