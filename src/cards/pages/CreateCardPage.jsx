import React from "react";
import { useUser } from "../../users/providers/UserProvider";
import { Button, Typography } from "@mui/material";
import ROUTES from "../../routes/routesModel.js";
import { useNavigate } from "react-router-dom";

export default function CreateCardPage() {
    const { user } = useUser();
    const navigate = useNavigate();
    if (!user || (user && user.isBusiness))
        return (
            <>
                <Typography variant="h5">
                    Oops... The requested URL was not found on this server
                </Typography>
                <Button
                    variant="text"
                    color="primary"
                    onClick={() => navigate(ROUTES.CARDS)}
                >
                    Click here to return tp the page...
                </Button>
            </>
        );

    //! not finished this page
    //TODO: page 384 in react presentation

    return <></>;
}
