var express = require('express');
var router = express.Router();
var path = require('path');
var cors = require('cors');
var app = express();
var port = process.env.PORT || 8080;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors());
app.use(router);
app.use(express.static(path.join(__dirname, 'public')));

router.get('/', function(req, res) {
    res.render('index');
});

router.get('/:query', function(req, res) {
    var query = req.params.query;
    res.json(getTimestamp(query));
});

function getTimestamp(query) {
    var timestamp = {
        unix: null, 
        natural: null
    };

    var date;
    if (!isNaN(parseInt(query))) {
        date = new Date(parseInt(query));
    } else {
        date = new Date(query);
    }

    if (!isNaN(date.getTime())) {
        timestamp.unix = date.getTime();
        timestamp.natural = getNaturalDate(date);
    }

    return timestamp;
}

function getNaturalDate(date) {
    var m = ['January', 'February', 'March', 'April', 'May', 
            'June', 'July', 'August', 'September', 'Obtober', 
            'November', 'December'];
    return m[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear(); 
}

app.listen(port, function() {
    console.log('Listening on port: ', port);
});