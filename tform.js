// alert("working")
const first_name = document.getElementById("first-name")

const fnameError = document.getElementById("fname-error-msg")

const last_name = document.getElementById("last-name")

const lnameError = document.getElementById("lname-error-msg")

const email_address = document.getElementById("email")

const email_error = document.getElementById("email-error-msg")

const mobile_number = document.getElementById("number")

const num_error = document.getElementById("num-error-msg") 

const password = document.getElementById("password")

const p_error = document.getElementById("p-error-msg")

const repeat_password = document.getElementById("repeat-password")

const rp_error = document.getElementById("rp-error-msg")


first_name.addEventListener("input", function(textF){
    const textInputF = textF.target.value
    console.log(textInputF)
    const regExF = /^[A-Z][a-z]+$/
    const validF = regExF.test(textInputF)

    if(validF){
        fnameError.style.display = "none"
    }else{
        fnameError.style.display = "block"
    }
})

last_name.addEventListener("input", function(textL){
    const textInputL = textL.target.value
    console.log(textInputL)
    const regExL = /^[A-Z][a-z]+$/
    const validL = regExL.test(textInputL)

    if(validL){
        lnameError.style.display = "none"
    }else{
        lnameError.style.display = "block"
    }
})

email_address.addEventListener("input", function(textE){
    const textInputE = textE.target.value
    console.log(textInputE)
    const regExE = /^[a-z]+\d+@([a-z]+\.)[a-z]{2,4}$/
    const validE = regExE.test(textInputE)
    if(validE){
        email_error.style.display = "none"
    }else{
        email_error.style.display = "block"
    }
})

mobile_number.addEventListener("input", function(textN){
    const textInputN = textN.target.value
    console.log(textInputN)
    const regExN = /\d+/
    const validN = regExN.test(textInputN)
    if(validN){
        num_error.style.display = "none"
    }else{
        num_error.style.display = "block"
    }
})

password.addEventListener("input", function(textP){
    const textInputP = textP.target.value
    console.log(textInputP)
    const regExP = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    const validP = regExP.test(textInputP)
    if(validP){
        p_error.style.display = "none"
    }else{
        p_error.style.display = "block"
    }
})

repeat_password.addEventListener("input", function(textRP){
    const textInputRP = textRP.target.value
    console.log(textInputRP)
    const regExRP = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    const validRP = regExRP.test(textInputRP)
    if(validRP){
        rp_error.style.display = "none"
    }else{
        rp_error.style.display = "block"
    }
})