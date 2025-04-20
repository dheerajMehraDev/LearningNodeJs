

import http from 'http';

const PORT = process.env.PORT;

const server = http.createServer((req,res) => {
  try {
    if(req.method == 'GET'){
      if(req.url == '/'){
        res.setHeader('content-type' , 'text/html');
        res.end('<h1> this is plain html </h1>')
      } else if(req.url == '/about'){
        res.setHeader('content-type' , 'text/html');
        res.end('<h1> this is plain html for about </h1>')
      } else {
        res.setHeader('content-type' , 'text/plain');
        res.end('this is plan text for all the requests');
      }
    } else {
      res.end('go to get request');
    }
  } catch (error) {
    throw new Error("can not access");
  }
});


server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
