import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";

export default function PageHeader({ title, subtitle }) {
    return (
        <>
            <Typography variant="h2" component="h1" color="initial">
                {title}
            </Typography>
            <Typography variant="h5" component="h2" color="initial">
                {subtitle}
            </Typography>
            <Divider sx={{ my: 2 }} />
        </>
    );
}

PageHeader.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
};
