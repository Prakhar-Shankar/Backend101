import http from 'http'
import { randomGenerator } from "./features.js";

console.log(randomGenerator())

const server = http.createServer((req,res) => {
    if(req.url === '/')
    {
        res.end("<h1>Home Page</h1>")
    }
    else if(req.url === '/about'){
        res.end(`<h1>Random number is ${randomGenerator()}</h1>`)
    }
    else{
        res.end("<h1>Page not found</h1>")
    }
});

server.listen(5000, () => {
    console.log("Server is running on port 5000")
})