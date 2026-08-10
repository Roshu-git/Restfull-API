
const logger = (req, res, next)=>{
    console.log(`${req.method} ${req.url}`); 
    res.on('finish', () => { 
        console.log(`Status: ${res.statusCode}`); 
    }); 
    next(); 
};
module.exorts = {logger};