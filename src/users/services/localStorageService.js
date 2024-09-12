import { jwtDecode } from "jwt-decode";
const TOKEN = "token";

export const setTokenInLocalStorage = (jwtToken) => {
    console.log("Setting token in localStorage:", jwtToken);
    localStorage.setItem(TOKEN, jwtToken);
};

export const removeToken = () => localStorage.removeItem(TOKEN);

export const getToken = () => {
    localStorage.getItem(TOKEN);
    try {
        const token = localStorage.getItem(TOKEN);
        console.log("Token retrieved from localStorage:", token);
        return token;
    } catch (error) {
        console.log("Cant get token from localstorage: ", error);
        return null;
    }
};

export const getUser = () => {
    try {
        const myToken = getToken();
        console.log("the token is: " + myToken);
        return jwtDecode(myToken);
    } catch (error) {
        console.error("Invalid token", error);
        return null;
    }
};
