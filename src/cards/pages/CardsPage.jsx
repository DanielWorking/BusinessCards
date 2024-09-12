import React, { useEffect } from "react";
import { Container } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";

export default function CardsPage() {
    const { value, handleGetCards, handleDeleteCard, handleLikeCard } =
        useCards();
    const { isLoading, error, filteredCards } = value;

    useEffect(() => {
        console.log("Fetching cards..."); // Log before fetching
        handleGetCards().then(() => {
            console.log("Cards fetched and state updated"); // Log after fetching
        });
    }, []);

    useEffect(() => {
        console.log("Filtered cards: ", filteredCards); // Log filteredCards to see the data
    }, [filteredCards]);

    const onDeleteCard = async (cardId) => {
        await handleDeleteCard(cardId);
        await handleGetCards();
    };

    const onLikeCard = async (cardId) => {
        await handleLikeCard(cardId);
        await handleGetCards();
    };

    return (
        <>
            <Container>
                <PageHeader
                    title="Cards Page"
                    subtitle="Here you can find business cards from all categories"
                />
                <CardsFeedback
                    isLoading={isLoading}
                    error={error}
                    cards={filteredCards}
                    onDelete={onDeleteCard}
                    onLike={onLikeCard}
                />
            </Container>
        </>
    );
}
