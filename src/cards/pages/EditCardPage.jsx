import React, { useEffect } from "react";
import { useNavigate, Navigate, useParams } from "react-router-dom";
import useForm from "../../forms/hooks/useForm.js";
import initialCardForm from "../helpers/initialForms/initialCardForm.js";
import cardSchema from "../models/cardSchema.js";
import useCards from "../hooks/useCards.js";
import { useUser } from "../../users/providers/UserProvider";
import ROUTES from "../../routes/routesModel.js";
import { Container } from "@mui/material";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input.jsx";
import mapCardToModel from "../helpers/normalization/mapCardToModel.js";
import normalizeCard from "../helpers/normalization/normalizeCard.js";

export default function EditCardPage() {
    const { handleUpdateCard, handleGetCard, card } = useCards();

    const { user } = useUser();
    const { id } = useParams();
    const navigate = useNavigate();
    const { value, ...rest } = useForm(initialCardForm, cardSchema, () =>
        handleUpdateCard(card._id, {
            ...normalizeCard({ ...value.data }),
            bizNumber: card.bizNumber,
            user_id: card.user_id,
        })
    );

    useEffect(() => {
        handleGetCard(id).then((data) => {
            if (user._id !== data.user_id) navigate(ROUTES.CARDS);
            const modeledCard = mapCardToModel(data);
            rest.setData(modeledCard);
        });
    }, []);

    if (!user) return <Navigate replace to={ROUTES.CARDS} />;

    return (
        <>
            <Container
                sx={{
                    paddingTop: 8,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Form
                    onSubmit={rest.onSubmit}
                    onReset={rest.handleReset}
                    onChange={rest.validateForm}
                    styles={{ maxWidth: "800px" }}
                    to={ROUTES.CARDS}
                    title="Edit card"
                >
                    <Input
                        name="title"
                        label="title"
                        error={value.errors.title}
                        onChange={rest.handleChange}
                        data={value.data}
                        sm={6}
                    />
                </Form>
            </Container>
        </>
    );
}
