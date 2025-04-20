
import http from 'http';
const PORT = 8003;

const users = [
    {id : 1 , uName : 'dheeraj'}, 
    {id : 2 , uName : 'mehra'}
];
const server = http.createServer((req,res) =>{
    
    if(req.url === '/api/users'){
        res.setHeader('Content-Type','application/json');
        res.write(JSON.stringify(users));
        res.end();
    } else {
        res.setHeader('Contenty-Type' , 'application/json');
        res.statusCode = 404;
        res.write(JSON.stringify({messege : 'not found'}));
        res.end();
    }
});

server.listen((PORT) , () => console.log(`listening on ${PORT}`));