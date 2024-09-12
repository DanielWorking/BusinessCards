import axios from "axios";

const apiUrl = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users";

export const login = async (userLogin) => {
    try {
        const { data } = await axios.post(`${apiUrl}/login`, userLogin);
        console.log("Login Response:", data); // Check if the token is in this response
        return data;
    } catch (error) {
        return Promise.reject(
            error.response ? error.response.data : error.message
        );
    }
};

export const signup = async (normalaizedUser) => {
    try {
        const { data } = await axios.post(apiUrl, normalaizedUser);
        return data;
    } catch (error) {
        return Promise.reject(error.message);
    }
};
