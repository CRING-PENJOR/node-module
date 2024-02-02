const http = require('http');
const fs = require('fs');
const PORT = process.env.PORT;


const hendle = (FileName, statustCode, req, res) => {
    fs.readFile(FileName, "utf-8",
    (err, data) => { 
        if (err){
            console.log(err);
        }else{
            res.writeHead (200 , {
                "content-type" : "text/html"
            });
            res.write(data);
        }

    }
    )
}





const server = http.createServer((req, res) => {
   if(req.url === "/"){
  hendle("index.html", 200, req, res);
    
   }else if (req.url === "/about"){
    hendle("about.html", 200, req, res);
   }
   else if (req.url === "/about"){
    hendle("service.html", 200, req, res);
   }
   
   else if (req.url === "/contact"){
    hendle("contact.html", 200, req, res);
   }
   else{
    hendle("404.html", 200, req, res);
}

});
server.listen(PORT, () => {
    console.log(`server is running`)
});