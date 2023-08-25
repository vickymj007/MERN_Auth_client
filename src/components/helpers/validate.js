//check empty fields
export const isEmpty = (value)=>{
    return !value ? true : false
}

//check email format
export const isEmail = (email)=>{
    const emailRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    return emailRegex.test(email)
}

//check password length
export const isLength = (password)=>{
    return password.length < 6
}

//check password match 
export const isMatch = (password, confirmPassword)=>{
    return password === confirmPassword
}