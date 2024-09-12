import { useState, useCallback } from "react";
import useAxios from "../../hooks/useAxios.js";
import { login, signup } from "../services/usersApiService.js";
import {
    getUser,
    removeToken,
    setTokenInLocalStorage,
} from "../services/localStorageService.js";
import { useUser } from "../providers/UserProvider.jsx";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel.js";

const useUsers = () => {
    const [users, setUsers] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const { user, setUser, setToken } = useUser();
    useAxios();

    const requestStatus = useCallback(
        (loading, errorMessage, users, user = null) => {
            setIsLoading(loading);
            setUsers(users);
            setUser(user);
            setError(errorMessage);
        },
        [setUser]
    );

    const handleLogin = useCallback(
        async (user) => {
            try {
                const token = await login(user); // Get the token from the API
                if (!token) {
                    throw new Error("Token not found"); // Ensure the token exists
                }
                setTokenInLocalStorage(token); // Store token in local storage
                setToken(token); // Update the state with the token
                const userFromLocalStorage = getUser(); // Decode and retrieve user data from the token
                if (!userFromLocalStorage) {
                    throw new Error("Failed to decode user from token");
                }
                requestStatus(false, null, null, userFromLocalStorage); // Update the user context state
                navigate(ROUTES.CARDS); // Redirect after successful login
            } catch (error) {
                requestStatus(false, error.message, null); // Handle login failure
            }
        },
        [navigate, requestStatus]
    );

    const handleLogout = useCallback(() => {
        removeToken();
        setUser(null);
    }, [setUser]);

    const handleSignup = useCallback(
        async (user) => {
            try {
                const normalizeUser = normalizeUser(user);
                await signup(normalizeUser);
                await handleLogin({
                    email: user.email,
                    password: user.password,
                });
            } catch (error) {
                requestStatus(false, error, null);
            }
        },
        [requestStatus, handleLogin]
    );

    return {
        isLoading,
        error,
        user,
        users,
        handleLogin,
        handleLogout,
        handleSignup,
    };
};

export default useUsers;
