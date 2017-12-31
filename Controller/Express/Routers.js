
module.exports = function(app){
 
    var index = require('./routes/index');
    var user = require('./routes/user');
    
    app.use('/', index);
    app.use('/user', user);
}