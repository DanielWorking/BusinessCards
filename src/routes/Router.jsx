import React from "react";
import { Route, Routes } from "react-router-dom";
import CardsPage from "../cards/pages/CardsPage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
// import SandboxPage from "../sandbox/SandboxPage";
import ROUTES from "./routesModel.js";
import SignupPage from "../users/pages/SignupPage";
import CardDetailsPage from "../cards/pages/CardDetailsPage";
import CreateCardPage from "../cards/pages/CreateCardPage.jsx";
import EditCardPage from "../cards/pages/EditCardPage.jsx";
import LoginPage from "../users/pages/LoginPage";
import FavCardsPage from "../cards/pages/FavCardsPage.jsx";
//TODO: exprot here all the sandbox

export default function Router() {
    return (
        <Routes>
            <Route path={ROUTES.ROOT} element={<CardsPage />} />
            <Route path={ROUTES.ABOUT} element={<AboutPage />} />
            <Route path={ROUTES.CARDS} element={<CardsPage />} />
            <Route
                path={`${ROUTES.CARD_INFO}/:id`}
                element={<CardDetailsPage />}
            />
            <Route path={ROUTES.CREATE_CARD} element={<CreateCardPage />} />
            <Route
                path={`${ROUTES.EDIT_CARD}/:id`}
                element={<EditCardPage />}
            />
            <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.FAV_CARDS} element={<FavCardsPage />} />
            {/* <Route path={ROUTES.SANDBOX} element={<SandboxPage />}>
                <Route path="fetch" element={<DataFetch />} />
                <Route path="custom-hook" element={<DataFetch />} />
                <Route path="propTypes" element={<DataFetch />} />
                <Route path="props" element={<DataFetch />} />
                <Route path="lifecycle" element={<DataFetch />} />
                <Route path="use-callback" element={<DataFetch />} />
                <Route path="loops" element={<DataFetch />} />
                <Route path="events" element={<DataFetch />} />
                <Route path="use-memo" element={<DataFetch />} />
                <Route path="axios" element={<DataFetch />} />
            </Route> */}
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
}
