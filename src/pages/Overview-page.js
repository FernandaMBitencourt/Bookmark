import React from "react";
import { Overview } from "./../component/Overview/Overview";
import { useNavigate } from "react-router-dom";

const OverviewPage = () => {

    /**
     * The function make the navagation to overview page
     */
    const navigate = useNavigate();

    return (
        <Overview navigate={navigate} />
    )
}

export default OverviewPage;