var config = {
	server: {
		port: process.env.PORT || 11300
	},
	queue: {
		host: 'localhost',
		port: 5672,
		login: 'test',
		password: 'test',
		vhost: '/'
	},
	channel: 'new-events'
};

module.exports = config;
