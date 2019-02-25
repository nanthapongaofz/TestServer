const express = require('express');
const bodyParser = require('body-parser');

const knexDB = require('./knex');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.get('/api/v1.0',(req,res) => {
	knexDB.select('event_data').from('events').limit(10).then(
		function(data){
			res.send(JSON.stringify(data))
		}
	);
});



app.listen(3000,() => console.log('Server is running on 3000'));

module.exports = app;
