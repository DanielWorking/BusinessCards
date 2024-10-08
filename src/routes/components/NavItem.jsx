import React from "react";
import { Button, Typography } from "@mui/material";
import { string } from "prop-types";
import NavBarLink from "./NavBarLink";

export default function NavItem({ label, to, color }) {
    return (
        <NavBarLink to={to} color={color}>
            <Button color="inherit">
                <Typography>{label}</Typography>
            </Button>
        </NavBarLink>
    );
}

NavItem.propTypes = {
    label: string.isRequired,
    to: string.isRequired,
    color: string,
};
