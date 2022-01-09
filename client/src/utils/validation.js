

export const onlyLetterValidation = (data) => {
    const regex = new RegExp("^[a-zA-Z]+$");
    const result = regex.test(data);
    if(!data) return false;
    return result;
}

export const emailValidation = (data) => {
    const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

    const result = regex.test(data)
    if(!data) return false;

    return result;
}

export const registerValidation = (data) => {
    if(!data.firstname || !data.lastname || !data.email) return [false, "uzupełnij puste pola"];
    const fnVal = data.firstname && onlyLetterValidation(data.firstname);
    const lnVal = data.lastname && onlyLetterValidation(data.lastname);
    const emailVal = data.email && emailValidation(data.email)
    console.log(fnVal, lnVal)
    if(!fnVal) return [false, "Pole firstname powinno zawierać tylko litery"]
    if(!lnVal) return [false, "Pole lastname powinno zawierać tylko litery"]
    if(!emailVal) return [false, "Niepoprawny format adresu email"]

    return [true, ""]
}