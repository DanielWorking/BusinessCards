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
    const { handleUpdateCard, handleGetCard, card } = useCards();

    const { user } = useUser();
    const { id } = useParams();
    const navigate = useNavigate();
    const { value, ...rest } = useForm(initialCardForm, cardSchema, () =>
        handleUpdateCard(card._id, {
            ...normalizeCard({ ...value.data }),
            bizNumber: card.bizNumber,
            user_id: card.user_id,
        })
    );

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
                    onChange={rest.validateForm}
                    styles={{ maxWidth: "800px" }}
                    to={ROUTES.CARDS}
                    title="Edit card"
                >
                    <Input
                        name="title"
                        label="title"
                        error={value.errors.title}
                        onChange={rest.handleChange}
                        data={value.data}
                        sm={6}
                    />
                </Form>
            </Container>
        </>
    );
}

//* code of teacher:
// import { Container } from "@mui/material";
// import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import CardForm from "../components/CardForm";
// import useCards from "../hooks/useCards";
// import useForm from "../../forms/hooks/useForm";
// import initialCardForm from "../helpers/initialForms/initialCardForm";
// import cardSchema from "../models/cardSchema";
// import mapCardToModel from "../helpers/normalization/mapToModel";
// import normalizeCard from "../helpers/normalization/normalizeCard";
// import CardComponent from "../components/card/CardComponent";

// export default function EditCardPage() {
//   const { id } = useParams();
//   const { handleUpdateCard, getCardById, card } = useCards();
//   const {
//     data,
//     errors,
//     setData,
//     handleChange,
//     handleReset,
//     validateForm,
//     onSubmit,
//   } = useForm(initialCardForm, cardSchema, (data) =>
//     handleUpdateCard(id, data)
//   );

//   useEffect(() => {
//     if (card) {
//       setData(mapCardToModel(card));
//     } else {
//       getCardById(id);
//     }
//   }, [card]);

//   return (
//     <div>
//       <Container
//         sx={{
//           paddingTop: 8,
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <CardForm
//           title="edit card"
//           onSubmit={onSubmit}
//           onReset={handleReset}
//           errors={errors}
//           validateForm={validateForm}
//           onInputChange={handleChange}
//           data={data}
//         />
//         {card && (
//           <CardComponent
//             card={{ _id: id, ...normalizeCard(data) }}
//             handleDelete={() => {}}
//             handleEdit={() => {}}
//             handleLike={() => {}}
//           />
//         )}
//       </Container>
//     </div>
//   );
// }
