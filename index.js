const app = require('./app');

require('./api/controllers/UserController')(app);
require('./routes/authRoutes')(app);

const port = process.env.PORT || 3000;
var server = app.listen(port, function () {
    console.log('Express server listening on port ' + port);
});