let DBUtil = require('../Utils/DBUtil');
//load emails
exports.loadEmails= (req, res, next)=>{
    let user = req.session.user;
    if(user) {
        let userId = user.id;
        DBUtil.loadEmails(userId, req, res);
    }
};