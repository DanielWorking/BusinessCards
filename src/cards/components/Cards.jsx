import React from "react";
import PropTypes from "prop-types";
import CardComponent from "./card/CardComponent";
import { Container, Typography } from "@mui/material";
import cardType from "../models/types/cardType";

export default function Cards({ cards }) {
    const handleCardDelete = (id) => {
        console.log("you deleted card number: " + id);
    };
    const handleCardLike = (id) => {
        console.log("you liked card number: " + id);
    };
    const handleCardEdit = (id) => {
        console.log("you edited card number: " + id);
    };

    // Ensure cards is an array before calling map
    if (!Array.isArray(cards) || cards.length === 0) {
        return (
            <Typography m={2}>
                Oops... it seems there are no business cards to display
            </Typography>
        );
    }

    return (
        <Container sx={{ display: "flex", flexWrap: "wrap" }}>
            {cards.map((card) => (
                <CardComponent
                    card={card}
                    key={card._id}
                    handleCardDelete={() => handleCardDelete(card._id)}
                    handleCardLike={() => handleCardLike(card._id)}
                    handleCardEdit={() => handleCardEdit(card._id)}
                />
            ))}
        </Container>
    );
}

Cards.propTypes = {
    cards: PropTypes.arrayOf(cardType).isRequired,
};
