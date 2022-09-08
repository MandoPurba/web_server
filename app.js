const fs = require('fs');
const http = require('http');
const port = 3000
const renderHTML = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write('Error: file not found');
    }else{
      res.write(data);
    }
    res.end();
  })
} 

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });

  const url = req.url;
  switch (url) {
    case '/':
      renderHTML('./index.html', res);
      break;
    case '/about':
      renderHTML('./about.html', res);
      break;
    default:
      renderHTML('404.html', res)
      break;
  }
}).listen(port, () => {
  console.log(`Server runing on ${port}`);
});