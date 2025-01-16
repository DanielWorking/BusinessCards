import React, { useEffect } from "react";
import { useUser } from "../../users/providers/UserProvider";
import ROUTES from "../../routes/routesModel.js";
import { useNavigate } from "react-router-dom";
import useForm from "../../forms/hooks/useForm.js";
import initialCardForm from "../helpers/initialForms/initialCardForm.js";
import cardSchema from "../models/cardSchema.js";
import useCards from "../hooks/useCards.js";
import CreateCardForm from "../helpers/form/CreateCardForm.jsx";
import PageHeader from "../../components/PageHeader.jsx";
import { Container } from "@mui/material";

export default function CreateCardPage() {
    const { user } = useUser();
    const navigate = useNavigate();
    const { handleCreateCard } = useCards();

    const { value, ...rest } = useForm(
        initialCardForm,
        cardSchema,
        handleCreateCard
    );
    const { data, errors } = value;
    const { onSubmit, handleChange, handleReset, validateForm } = { ...rest };

    useEffect(() => {
        // redirect to cards page if user is not defined
        if (!user || !user.isBusiness || user.isAdmin) {
            navigate(ROUTES.CARDS);
        }
    }, [user, navigate]);

    return (
        <>
            <Container>
                <PageHeader
                    title="Create Card Page"
                    subtitle="On this page you can create new card of you're business"
                />
                <CreateCardForm
                    onSubmit={onSubmit}
                    onReset={handleReset}
                    disabled={validateForm}
                    error={errors}
                    handleChange={handleChange}
                    data={data}
                />
            </Container>
        </>
    );
}
