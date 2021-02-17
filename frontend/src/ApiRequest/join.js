export const signup = user => {

    
         
    return    fetch(`${process.env.REACT_APP_API_URL}/auth/signup`,{
        method : "POST",
        headers : {
            Accept : "application/json",
        },
        body: user
    })
    .then(response => {
        
        return response.json()
    })
    .catch(err => {console.log(err)});

   // return   this.signup;
};