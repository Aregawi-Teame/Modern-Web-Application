
module.exports.add = function(req){
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.query.num2);
    return num1+num2;
}