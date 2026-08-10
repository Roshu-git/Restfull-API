// Logs request method, URL and response status

const logger = (req, res, next)=>{

    // Log request method and URL
    console.log(`${req.method} ${req.url}`); 

    // Log status code after response is sent
    res.on('finish', () => { 
        console.log(`Status: ${res.statusCode}`); 
    }); 
    next();  // move to next middleware/route
};
module.exports = logger;