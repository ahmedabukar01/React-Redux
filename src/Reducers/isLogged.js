const isLogged = (state = false, action) => {
    switch(action.type){
        case "sign_in":
            return !state;
    }
}

export default isLogged;