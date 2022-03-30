const http = require('http');
const path = require('path');
const fs = require('fs');
require('dotenv').config();
const readAndServe = function(contentType,fileName,res){
    fs.readFile(path.join(__dirname, fileName), (err, buffer)=>{
        res.setHeader('Content-Type', contentType);
        res.writeHead(200);
        res.end(buffer)
    })
};
const handlingRequest = function(req, res){
    if(req.method == 'GET'){
        switch(req.url){
            case '/index.html':
            case '/page1.html':
            case '/page2.html':
               readAndServe('text/html',req.url,res);
               break;
            default:
                readAndServe('text/html','/index.html',res);
                break; 
        }
    }
    else if(req.method=='POST'){
        readAndServe('application/json','file.json',res);
    }
};
const app = http.createServer(handlingRequest);

const server = app.listen(process.env.PORT, process.env.HOST, ()=>{
    console.log(`${process.env.SERVER_START_UP_MSG} http://${process.env.HOST}:${server.address().port}`);
});

