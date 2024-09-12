import React from "react";
import { Route, Routes } from "react-router-dom";
import CardsPage from "../cards/pages/CardsPage";
import AboutPage from "../pages/AboutPage";
// import ErrorPage from "../pages/ErrorPage.jsx";
import Error from "../components/Error.jsx";
import ROUTES from "./routesModel.js";
import FavCardsPage from "../cards/pages/FavCardsPage";
import LoginPage from "../users/pages/LoginPage";
import MyCardsPage from "../cards/pages/MyCardsPage";
import SandboxPage from "../sandbox/SandboxPage";
import SignupPage from "../users/pages/SignupPage";
import CardDetailsPage from "../cards/pages/CardDetailsPage";
import EditCardPage from "../cards/pages/EditCardPage";
import CreateCardPage from "../cards/pages/CreateCardPage.jsx";

export default function Router() {
    return (
        <Routes>
            <Route path={ROUTES.ROOT} element={<CardsPage />} />
            <Route path={ROUTES.ABOUT} element={<AboutPage />} />
            <Route path={ROUTES.CARDS} element={<CardsPage />} />
            <Route path={ROUTES.MY_CARDS} element={<MyCardsPage />} />
            <Route path={ROUTES.FAV_CARDS} element={<FavCardsPage />} />
            <Route
                path={ROUTES.CARD_INFO + "/:id"}
                element={<CardDetailsPage />}
            />
            <Route path={ROUTES.CREATE_CARD} element={<CreateCardPage />} />
            <Route
                path={ROUTES.EDIT_CARD + "/:id"}
                element={<EditCardPage />}
            />
            <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            //TODO: need to create apropriate pages:
            {/* <Route path={ROUTES.USER_PROFILE} element={< />} /> */}
            {/* <Route path={ROUTES.EDIT_USER} element={< />} /> */}
            <Route path={ROUTES.LOGO} element={<CardsPage />} />
            <Route path={ROUTES.SANDBOX} element={<SandboxPage />} />
            //TODO: need to understand which one to use for 404 error page:
            {/* <Route path="*" element={<ErrorPage />} /> */}
            <Route path="*" element={<Error />} />
        </Routes>
    );
}
