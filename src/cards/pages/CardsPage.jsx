import { Container } from "@mui/material";
import React from "react";
import PageHeader from "../../components/PageHeader";
import Cards from "../components/Cards";

export default function CardsPage() {
    const cards = [
        {
            _id: "63765801e20ed868a69a62c4",
            title: "first",
            subtitle: "subtitle",
            description: "testing 123",
            phone: "050-0000000",
            email: "test1@gmail.com",
            web: "https://www.test1.co.il",
            image: {
                url: "/assets/images/business-card.jpg",
                alt: "Business card image",
            },
            address: {
                state: "",
                country: "country",
                city: "tel-aviv",
                street: "Shinkin",
                houseNumber: 3,
                zip: 1234,
            },
            bizNumber: 1000000,
            user_id: "63765801e20ed868a69a62c2",
        },
        {
            _id: "63765801e20ed868a69a62c5",
            title: "second",
            subtitle: "subtitle",
            description: "testing 456",
            phone: "050-1111111",
            email: "test2@gmail.com",
            web: "https://www.test2.co.il",
            image: {
                url: "/assets/images/business-card.jpg",
                alt: "Business card image",
            },
            address: {
                state: "",
                country: "country",
                city: "jerusalem",
                street: "King George",
                houseNumber: 10,
                zip: 5678,
            },
            bizNumber: 1000001,
            user_id: "63765801e20ed868a69a62c3",
        },
        {
            _id: "63765801e20ed868a69a62c6",
            title: "third",
            subtitle: "subtitle",
            description: "testing 789",
            phone: "050-2222222",
            email: "test3@gmail.com",
            web: "https://www.test3.co.il",
            image: {
                url: "/assets/images/business-card.jpg",
                alt: "Business card image",
            },
            address: {
                state: "",
                country: "country",
                city: "haifa",
                street: "Herzl",
                houseNumber: 15,
                zip: 91011,
            },
            bizNumber: 1000002,
            user_id: "63765801e20ed868a69a62c4",
        },
    ];
    return (
        <>
            <Container sx={{ mt: 2 }}>
                <PageHeader
                    title="Cards"
                    subtitle="on this page you can find all business cards from all categories"
                />
                <Cards cards={cards} />
            </Container>
        </>
    );
}
