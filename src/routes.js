import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OverviewPage from './pages/Overview-page';
import ResultPage from './pages/Result-page';

/**
 * Routes component 
 * 
 * @returns 
 */

const RoutesService = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<OverviewPage/>} />
                <Route path="/result" element={<ResultPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesService;