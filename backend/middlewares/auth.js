const {SECRET}=process.env
const jwt=require("jsonwebtoken")

exports.auth = (req, res, next) => {
  /* 
0. check if token is valid or not if token is valid show him the dashboard if not valid redirect him  to login page again
*/
  try {
    // access token from the req.cookie
      const {token}=req.cookies
       if(!token){
        return res.status(404).send("token is missing")
       }
    // validate this token 
    try {
        const decode =jwt.verify(token,SECRET)
        req.user=decode
    } catch (error) {
        console.log("token is invalid")
        console.log(error)
    }
    // this decode is actually a payloas that you have passed  while creating toke 
    // lets add this decode value to req 

  } catch (error) { 
    console.log("error in auth")
    console.log(error)
  }
  next();
};
