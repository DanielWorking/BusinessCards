import { jwtDecode } from "jwt-decode";
const TOKEN = "token";

export const setTokenInLocalStorage = (jwtToken) => {
    localStorage.setItem(TOKEN, jwtToken);
};

export const removeToken = () => localStorage.removeItem(TOKEN);

export const getToken = () => {
    localStorage.getItem(TOKEN);
    try {
        const token = localStorage.getItem(TOKEN);
        return token;
    } catch (error) {
        return null;
    }
};

export const getUser = () => {
    try {
        const myToken = getToken();
        return jwtDecode(myToken);
    } catch (error) {
        console.error("Invalid token", error);
        return null;
    }
};
