
module.exports = function(app){
 
    var db = require('../routes/db');
    var api = require('../routes/api');
    
    app.use('/db', db);
    app.use('/api', api);
}