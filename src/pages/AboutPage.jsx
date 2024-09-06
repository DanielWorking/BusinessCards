import { Container, Grid2 } from "@mui/material";
import React from "react";
import PageHeader from "../components/PageHeader";

export default function AboutPage() {
    return (
        <>
            <Container maxWidth="lg">
                <PageHeader
                    title="About Page"
                    subtitle="On this page you can find explanation about using the application"
                />
                <Grid2 container spacing={0} sx={{ flexDirection: "row" }}>
                    <Grid2 xs={12} md={8} alignSelf="center" sx={{ flex: "1" }}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Nostrum adipisci nisi, exercitationem et est nobis
                        explicabo. Optio vel maxime quidem animi omnis facere
                        libero dolorum totam amet debitis ab dignissimos
                        incidunt voluptas nemo atque ducimus illum impedit
                        consequatur, sequi, eos id sed. Corrupti repudiandae,
                        earum natus tempore accusamus sunt est? Fuga rem omnis
                        nisi ipsum obcaecati neque exercitationem accusantium.
                        Repellendus illo totam voluptate assumenda accusantium
                        quis minus eum impedit id mollitia, amet, temporibus
                        dolorem explicabo et veritatis deleniti sunt facere
                        illum, at labore sed nobis consequuntur esse alias.
                        Accusamus et repudiandae incidunt culpa voluptates vel
                        cum aliquam tenetur ad? Quo?
                    </Grid2>
                    <Grid2
                        xs={4}
                        sx={{
                            display: {
                                md: "flex",
                                xs: "none",
                            },
                            justifyContent: "center",
                            flex: "2",
                        }}
                    >
                        <img
                            src="/assets/images/card.png"
                            alt="card"
                            style={{ maxWidth: 400, flex: 1 }}
                        />
                    </Grid2>
                </Grid2>
            </Container>
        </>
    );
}
