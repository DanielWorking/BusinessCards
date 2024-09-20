import React, { memo } from "react";
import { arrayOf, bool, string, func } from "prop-types";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import Cards from "./Cards";
import cardType from "../models/types/cardType";

export default function CardsFeedback({
    isLoading,
    error,
    cards,
    onDelete,
    onLike = () => {},
}) {
    if (isLoading) return <Spinner />;
    if (error) return <Error errorMessage={error} />;
    if (!cards || cards.length === 0)
        return (
            <div>
                {" "}
                Oops, there are no business cards in the database that match the
                parameters you entered
            </div>
        );
    return <Cards cards={cards} onDelete={onDelete} onLike={onLike} />;
}

CardsFeedback.propTypes = {
    isLoading: bool.isRequired,
    error: string,
    cards: arrayOf(cardType),
    onDelete: func.isRequired,
    onLike: func.isRequired,
};

memo(CardsFeedback);
