import React, { Component } from "react";

import SideMenuBarTemplate from "./side_menu_template";
import TopMenuTemplate from "./top_menu_template";

import style from "../scss/Template.module.scss";

class Template extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
            <div className={style.tem_wrap}>
                <SideMenuBarTemplate/>
                <div className={style.tem_contents}>
                    <TopMenuTemplate/>
                    <div>{this.props.children}</div>
                </div>
            </div>
            </>
        )
    }
}


export default Template;