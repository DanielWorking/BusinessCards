import React, { memo } from "react";
import { node, func, string, number, object } from "prop-types";
import { Grid2, Box, Typography } from "@mui/material";
import LoopIcon from "@mui/icons-material/Loop";
import FormButton from "../components/FormButton";
import { useNavigate } from "react-router-dom";

function Form({
    title = "",
    onSubmit,
    onReset,
    disabled,
    to = "/",
    color = "inherit",
    spacing = 1,
    styles = {},
    children,
}) {
    const navigate = useNavigate();
    return (
        <>
            <Box
                component="form"
                color={color}
                sx={{ mt: 2, p: { xs: 1, sm: 2 }, ...styles }}
                onSubmit={onSubmit}
                autoComplete="off"
                noValidate
            >
                <Typography align="center" variant="h5" component="h1" mb={2}>
                    {title.toUpperCase()}
                </Typography>

                <Grid2 container spacing={spacing}>
                    {children}
                </Grid2>
                <Grid2 container spacing={1} my={2} direction="row" width="100">
                    <Grid2 size={{ xs: 12, sm: 6 }}>
                        <FormButton
                            node="cancel"
                            color="error"
                            component="div"
                            variant="outlined"
                            onClick={() => navigate(to)}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 6 }}>
                        <FormButton
                            node={<LoopIcon />}
                            component="div"
                            variant="outlined"
                            onClick={onReset}
                        />
                    </Grid2>
                    <Grid2 size={{ xs: 12 }}>
                        <FormButton
                            node="Submit"
                            variant="outlined"
                            onClick={onSubmit}
                            disabled={!!disabled()}
                            size="large"
                        />
                    </Grid2>
                </Grid2>
            </Box>
        </>
    );
}

Form.propTypes = {
    children: node.isRequired,
    onSubmit: func.isRequired,
    color: string.isRequired,
    to: string.isRequired,
    spacing: number.isRequired,
    onReset: func.isRequired,
    disabled: func.isRequired,
    title: string.isRequired,
    styles: object.isRequired,
};

export default memo(Form);
