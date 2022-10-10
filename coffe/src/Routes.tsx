import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { DefaltLayout } from "./layouts/DefaultLayout";
import { CompleteOrder } from "./pages/CompleteOrder";
import { HomePages } from "./pages/Home";

export function Router() {
    return(
        <Routes>
            <Route path="/" element={<DefaltLayout />}>
            <Route path="/" element={<HomePages />} />
            <Route path="completeOrder" element={<CompleteOrder />} />
            </Route>

        </Routes>
    )
}