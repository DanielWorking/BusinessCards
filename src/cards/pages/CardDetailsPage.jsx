import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";
import PageHeader from "../../components/PageHeader";

export default function CardDetailsPage() {
    const { id } = useParams();
    return (
        <>
            <Container maxWidth="lg">
                <PageHeader
                    title="Business Details"
                    subtitle="Here you can find more details about the business"
                />
                <div>Details of card: {id}</div>
            </Container>
        </>
    );
}
