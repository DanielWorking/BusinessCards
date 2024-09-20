import React, { useState } from "react";
import { Avatar, Box, IconButton, Tooltip } from "@mui/material";
import { useCustomTheme } from "../../../providers/CustomThemeProvider";
import { useUser } from "../../../users/providers/UserProvider";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SearchBar from "./SearchBar";
import ROUTES from "../../../routes/routesModel.js";
import NavItem from "../../../routes/components/NavItem";

export default function RightNavigation() {
    const [anchorEl, setAnchorEl] = useState(null);
    const { user } = useUser();

    const { isDark, toggleDarkMode } = useCustomTheme();

    return (
        <>
            <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
                <SearchBar />
                <IconButton onClick={toggleDarkMode} sx={{ marginLeft: 1 }}>
                    {isDark ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>
                {!user && (
                    <Box>
                        <NavItem label="signup" to={ROUTES.SIGNUP} />
                        <NavItem label="login" to={ROUTES.LOGIN} />
                    </Box>
                )}
                {user && (
                    <Tooltip title="Open settings">
                        <IconButton
                            sx={{
                                p: 0,
                                display: "inline-flex",
                                marginRight: 2,
                            }}
                            onClick={(e) => setAnchorEl(e.target)}
                        >
                            <Avatar
                                alt="Bird"
                                src="/assets/images/avatar.png"
                            />
                        </IconButton>
                    </Tooltip>
                )}
            </Box>
        </>
    );
}
