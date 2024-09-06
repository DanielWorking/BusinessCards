import React from "react";
import PropTypes from "prop-types";
import { CardHeader, CardMedia, Divider } from "@mui/material";

export default function CardHeaderComponent({ image, alt, title, subtitle }) {
    return (
        <>
            <CardMedia sx={{ height: 140 }} image={image} alt={alt} />
            <CardHeader title={title} subheader={subtitle} />
            <Divider variant="middle" />
        </>
    );
}
CardHeaderComponent.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
};
