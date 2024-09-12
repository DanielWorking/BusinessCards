import axios from "axios";
import { useSnackbar } from "../providers/SnackbarProvider";
import { useEffect } from "react";
import { useUser } from "../users/providers/UserProvider";

const useAxios = () => {
    const snack = useSnackbar();
    const { token } = useUser();

    useEffect(() => {
        axios.defaults.headers.common["x-auth-token"] = token;
        console.log("Token set:", token);
        if (snack) {
            axios.interceptors.request.use(
                (data) => {
                    console.log("Request data:", data);
                    return Promise.resolve(data);
                },
                (error) => {
                    console.log("Request error:", error);
                    return Promise.reject(error);
                }
            );

            axios.interceptors.response.use(null, (error) => {
                console.error("Error:", error);
                if (error.response && error.response.status >= 400) {
                    snack("error", error.message);
                }
                return Promise.reject(error);
            });
        }
    }, [snack, token]);
};

export default useAxios;
