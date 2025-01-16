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
    const { handleGetCard, handleUpdateCard, value } = useCards();
    const { card } = value;
    const { user } = useUser();
    const { id } = useParams();
    const navigate = useNavigate();
    const { ...rest } = useForm(initialCardForm, cardSchema, () => {
        handleUpdateCard(card._id, {
            ...normalizeCard({ ...rest.value.data }),
            bizNumber: card.bizNumber,
            user_id: card.user_id,
        });
    });

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
                    handleChange={rest.handleChange}
                    styles={{ maxWidth: "800px" }}
                    to={ROUTES.CARDS}
                    title="Edit card"
                    color="inherit"
                    spacing={1}
                    disabled={rest.validateForm}
                >
                    <Input
                        name="title"
                        label="title"
                        error={rest.value.errors.title}
                        handleChange={rest.handleChange}
                        data={rest.value.data}
                        sm={6}
                    />
                    <Input
                        name="subtitle"
                        label="subtitle"
                        error={rest.value.errors.subtitle}
                        handleChange={rest.handleChange}
                        data={rest.value.data}
                        sm={6}
                    />
                    <Input
                        name="description"
                        label="description"
                        error={rest.value.errors.description}
                        handleChange={rest.handleChange}
                        data={rest.value.data}
                        sm={6}
                    />
                    <Input
                        name="phone"
                        label="phone"
                        error={rest.value.errors.phone}
                        handleChange={rest.handleChange}
                        data={rest.value.data}
                        sm={6}
                    />
                    <Input
                        name="email"
                        label="email"
                        error={rest.value.errors.email}
                        handleChange={rest.handleChange}
                        data={rest.value.data}
                        sm={6}
                    />
                    <Input
                        name="webUrl"
                        label="Web"
                        error={rest.value.errors.Web}
                        handleChange={rest.handleChange}
                        data={rest.value.data}
                        sm={6}
                        required={false}
                    />
                    <Input
                        name="imageUrl"
                        label="Image URL"
                        error={rest.value.errors.url}
                        handleChange={rest.handleChange}
                        data={rest.value.data}
                        sm={6}
                    />
                    <Input
                        name="imageAlt"
                        label="imag eAlt"
                        error={rest.value.errors.alt}
                        handleChange={rest.handleChange}
                        data={rest.value.data}
                        sm={6}
                    />
                    <Input
                        name="state"
                        label="state"
                        error={rest.value.errors.state}
                        handleChange={rest.handleChange}
                        data={rest.value.data}
                        sm={6}
                        required={false}
                    />
                    <Input
                        name="country"
                        label="country"
                        error={rest.value.errors.country}
                        handleChange={rest.handleChange}
                        data={rest.value.data}
                        sm={6}
                    />
                    <Input
                        name="city"
                        label="city"
                        error={rest.value.errors.city}
                        handleChange={rest.handleChange}
                        data={rest.value.data}
                        sm={6}
                    />
                    <Input
                        name="street"
                        label="street"
                        error={rest.value.errors.street}
                        handleChange={rest.handleChange}
                        data={rest.value.data}
                        sm={6}
                    />
                    <Input
                        name="houseNumber"
                        label="House Number"
                        error={rest.value.errors.houseNumber}
                        handleChange={rest.handleChange}
                        data={rest.value.data}
                        sm={6}
                    />
                    <Input
                        name="zip"
                        label="zip"
                        error={rest.value.errors.zip}
                        handleChange={rest.handleChange}
                        data={rest.value.data}
                        sm={6}
                        required={false}
                    />
                </Form>
            </Container>
        </>
    );
}
