const knexDB = require('knex')({
	client: 'pg',
	connection: 'postgres://root:root@ppsmartbot.com:5432/homeassistant'
})

module.exports = knexDB;
