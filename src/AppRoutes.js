import React from "react";
import Homepg from "./Homepg";
import Pgabijaudi from "./Pgabijaudi";
import Pgerro from "./pgnaoencontrada";
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Pgcruzeiro from "./Pgcruzeiro";

const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Homepg/>}></Route>
                <Route path="/abijaudi" element={<Pgabijaudi/>}></Route>
                <Route path="/cruzeiro" element={<Pgcruzeiro/>}></Route>
                <Route path="/paginanaoecontrada" element={<Pgerro/>}></Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes;