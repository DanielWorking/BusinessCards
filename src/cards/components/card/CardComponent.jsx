import * as React from "react";
import PropTypes from "prop-types";
import cardType from "../../models/types/cardType.js";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardHeaderComponent from "./CardHeaderComponent";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";

export default function CardComponent({
    card,
    handleCardDelete,
    handleCardLike,
    handleCardEdit,
}) {
    return (
        <Card
            sx={{ width: 250, m: 2, display: "flex", flexDirection: "column" }}
        >
            <CardActionArea>
                <CardHeaderComponent
                    image={card.image.url}
                    alt={card.image.alt}
                    title={card.title}
                    subtitle={card.subtitle}
                />

                <CardBody
                    phone={card.phone}
                    address={card.address}
                    bizNumber={card.bizNumber}
                />
            </CardActionArea>
            <CardActionBar
                handleCardDelete={handleCardDelete}
                handleCardLike={handleCardLike}
                handleCardEdit={handleCardEdit}
            />
        </Card>
    );
}

CardComponent.propTypes = {
    card: cardType.isRequired,
    handleCardDelete: PropTypes.func.isRequired,
    handleCardLike: PropTypes.func.isRequired,
    handleCardEdit: PropTypes.func.isRequired,
};
