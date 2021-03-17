const http = require('http');


const server = http.createServer((req, res) => {
  if(req.url == '/'){

      
      res.write('Welcome to our home page');
      res.end();

  }
  if(req.url == '/about'){


    res.write('Here is our short history');
    res.end()
  }
  
  res.write(
   `
    <h1>OOps!</h1>
    <p>We can't seem</p>
    <a href='/'>Go back</a>
    `
  );
  res.end();

})




server.listen(5000)