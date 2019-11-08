let DBUtil = require('../Utils/DBUtil');
exports.login= (req, res, next)=>{
    let emailaddress = req.body.email;
    let password = req.body.password;
    let results = DBUtil.login(emailaddress, password, req, res);
};



