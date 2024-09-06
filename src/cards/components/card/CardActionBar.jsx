import React from "react";
import PropTypes from "prop-types";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, IconButton, CardActions } from "@mui/material";

export default function CardActionBar({
    handleCardDelete,
    handleCardLike,
    handleCardEdit,
}) {
    return (
        <CardActions
            sx={{ justifyContent: "space-between", marginTop: "auto" }}
        >
            <Box>
                <IconButton onClick={handleCardDelete}>
                    <DeleteIcon />
                </IconButton>
                <IconButton onClick={handleCardEdit}>
                    <ModeEditIcon />
                </IconButton>
            </Box>
            <Box>
                <IconButton>
                    <CallIcon />
                </IconButton>
                <IconButton onClick={handleCardLike}>
                    <FavoriteIcon />
                </IconButton>
            </Box>
        </CardActions>
    );
}

CardActionBar.propTypes = {
    handleCardDelete: PropTypes.func.isRequired,
    handleCardLike: PropTypes.func.isRequired,
    handleCardEdit: PropTypes.func.isRequired,
};
