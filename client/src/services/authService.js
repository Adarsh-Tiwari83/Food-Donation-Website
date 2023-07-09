export const handleLogin = (e, email, password, role) => {
    e.preventDefault();
    try {
        if (!email || !role || !password) {
            return alert("please provide all the detail");
        }
        console.log('login', e, email, password, role);
    } catch (error) {
        console.log(error);
    }
}

export const handleRegister = (e,
    name,
    role,
    email,
    password,
    organisationName,
    website,
    address,
    phone) => {
    e.preventDefault();
    try {
        console.log('register', e,
            name,
            role,
            email,
            password,
            organisationName,
            website,
            address,
            phone);
    } catch (error) {
        console.log(error);
    }

}