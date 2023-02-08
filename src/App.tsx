import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";

import "./App.scss";
import { ROUTES_BY_NAME } from "./constants";
import Layout from "./Layout";

const Journal = React.lazy(() => import("./pages/journal/Journal"));
const Insight = React.lazy(() => import("./pages/insight/Insight"));

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path={ROUTES_BY_NAME.HOME} element={<Home />} />
                    <Route
                        path={ROUTES_BY_NAME.JOURNAL}
                        element={
                            <React.Suspense fallback={<>...</>}>
                                <Journal />
                            </React.Suspense>
                        }
                    />
                    <Route
                        path={ROUTES_BY_NAME.INSIGHT}
                        element={
                            <React.Suspense fallback={<>...</>}>
                                <Insight />
                            </React.Suspense>
                        }
                    />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
