import React, { Component } from "react";

import Template from "../templates/ui_consistis_template";
import Main from "../components/Main";

class MainPage extends Component {
    render() {
        return (
            <>
                <Template>
                    <Main/>
                </Template>
            </>
        );
    }
}

export default MainPage;