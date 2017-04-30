const express = require('express');
const router = require('./routers.js');
const app = express();
const bodyParser = require('body-parser');

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/..'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use('/speech', router);


app.listen(app.get('port'), function (err) {
    if (err)  console.error (err);
    else console.log(`listening at port ` + app.get('port'));
});