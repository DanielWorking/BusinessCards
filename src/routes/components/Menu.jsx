import React from "react";
import MuiMenu from "@mui/material/Menu";
import { Box, MenuItem } from "@mui/material";
import ROUTES from "../routesModel.js";
import { useUser } from "../../users/providers/UserProvider";
import useUsers from "../../users/hooks/useUsers";
import MenuLink from "./MenuLink";

export default function Menu({ isOpen, anchorEl, onClose }) {
    const { user } = useUser();
    const { handleLogout } = useUsers();

    const onLogout = () => {
        handleLogout();
        onClose();
    };

    return (
        <>
            <MuiMenu
                open={isOpen}
                onClose={onClose}
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
                <Box>
                    <MenuLink
                        text="about"
                        navigateTo={ROUTES.ABOUT}
                        onClick={onClose}
                        styles={{ display: { xs: "block", md: "none" } }}
                    />
                    {!user && (
                        <>
                            <MenuLink
                                text="login"
                                navigateTo={ROUTES.LOGIN}
                                onClick={onClose}
                                styles={{
                                    display: { xs: "block", md: "none" },
                                }}
                            />
                            <MenuLink
                                text="signup"
                                navigateTo={ROUTES.SIGNUP}
                                onClick={onClose}
                                styles={{
                                    display: { xs: "block", md: "none" },
                                }}
                            />
                        </>
                    )}
                    {user && (
                        <>
                            <MenuLink
                                text="profile"
                                navigateTo={ROUTES.USER_PROFILE}
                                onClick={onClose}
                            />
                            <MenuLink
                                text="edit account"
                                navigateTo={ROUTES.EDIT_USER}
                                onClick={onClose}
                            />
                            <MenuItem onClick={onLogout}>Logout</MenuItem>
                        </>
                    )}
                </Box>
            </MuiMenu>
        </>
    );
}
