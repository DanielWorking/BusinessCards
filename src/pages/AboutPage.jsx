import { Box, Container, ListItem, Typography } from "@mui/material";
import React from "react";
import PageHeader from "../components/PageHeader";

export default function AboutPage() {
    return (
        <Container>
            <PageHeader
                title="About Page"
                subtitle="On this page you can find explanations about using the application"
            />
            <Container
                sx={{
                    mt: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Container sx={{ flex: 1, mr: 2 }}>
                    <Typography variant="h6">About Page</Typography>
                    <Typography variant="body1" component="paragraph">
                        At BusinessConnect, we're dedicated to facilitating
                        meaningful connections between businesses and potential
                        clients or partners. Our platform serves as a dynamic,
                        digital space where businesses can showcase their
                        information and users can discover new opportunities.
                        <Typography variant="h6">Benefits</Typography>
                        <ListItem>
                            Eco-friendly alternative to traditional paper
                            business cards
                        </ListItem>
                        <ListItem>
                            Easy to update and always current information
                        </ListItem>
                        <ListItem>
                            Accessible from anywhere with an internet connection
                        </ListItem>
                        <ListItem>
                            Facilitates networking and business-to-business
                            connections
                        </ListItem>
                        <ListItem>
                            Helps businesses increase their online visibility
                        </ListItem>
                    </Typography>
                </Container>
                <Container sx={{ flex: 1 }}>
                    <img
                        src="/assets/images/card.png"
                        alt="Card"
                        style={{ width: "100%", maxWidth: 400 }}
                    />
                </Container>
            </Container>
        </Container>
    );
}
