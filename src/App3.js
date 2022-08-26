import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "./pages/main_page";
import GetRepairPage from "./pages/get_repair";
import PutRepairPage from "./pages/put_repair";
import UploadPage from "./pages/upload_file";
import GetRepairImagePage from "./pages/get_repair_image";

class App3 extends Component {
    render() {
        return (
            <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/GetRepair" element={<GetRepairPage />} />
                    <Route path="/PutRepair" element={<PutRepairPage />} />
                    <Route path="/PutFile" element={<UploadPage />} />
                    <Route path="/GetRepairImage" element={<GetRepairImagePage />} />
                </Routes>
            </BrowserRouter>
            </>
        );
    }
}

export default App3;