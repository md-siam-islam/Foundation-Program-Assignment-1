
const validateUsername = (username) => {

    if(username.length < 3){
        return "Too Short" 
    }else if(username.includes(" ")){
        return "No Spaces Allowed"
    }else if(username.toLowerCase().includes("admin")){
        return "Reserved Word"
    }else{
        return "Available"
    }
   
};