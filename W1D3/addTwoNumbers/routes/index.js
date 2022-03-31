const express =require('express');
const router = express.Router();
const calcController = require("../controllers/calcController")


router.get('/add/:num1',(req,res)=>{
    res.status(200).json({"Result": calcController.add(req)});
})
module.exports = router;