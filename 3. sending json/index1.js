
import http from 'http';
const PORT = 8003;

const users = [
    {id : 1 , uName : 'dheeraj'}, 
    {id : 2 , uName : 'mehra'}
];

// logger middleware 
function logger(req,res,next){
    console.log(`requrest received : ${req.url}`);
    next(req,res);
}

// handle post request 
function handlePostRequest(req,res){
    let body = '';
    req.on('data' ,(chunk) =>{
        body += chunk;
    });
    req.on('end' , () => {
       let  newUser = JSON.parse(body);
         users.push(newUser);
        res.statusCode = 201;
        res.setHeader('Content-Type','application/json');
        res.write(JSON.stringify(users));
        res.end();
    });
}

// Routes handler 
function routesHandler(req,res){
    
    if(req.method === 'GET' && req.url === '/api/users'){
        res.setHeader('Content-Type','application/json');
        res.write(JSON.stringify(users));
        res.end();
    }
    else if(req.url === '/api/users' && req.method  === 'POST'){
        handlePostRequest(req,res);
       
    }
    else {
        res.setHeader('Contenty-Type' , 'application/json');
        res.statusCode = 404;
        res.write(JSON.stringify({messege : 'not found'}));
        res.end();
    }
}
const server = http.createServer((req,res) =>{
    logger(req,res,() =>{
        routesHandler(req,res);
    });
});

server.listen((PORT) , () => console.log(`listening on ${PORT}`));