import React, { Component } from "react";
import { Link } from "react-router-dom";

import style from "../scss/SideMenubar.module.scss";

class SideMenuBarTemplate extends Component {
    render() {
        return (
            <div className={style.side_wrap}>
                <ul className={style.side_menulist}>
                    <Link to="/">
                        <p>홈</p>
                    </Link>
                    <Link to="/GetRepair">
                        <p>수리내역 보기</p>
                    </Link>
                    <Link to="/PutRepair">
                        <p>수리내역 업로드</p>
                    </Link>
                    <Link to="/PutFile">
                        <p>파일 업로드</p>
                    </Link>
                    <Link to="/GetRepairImage">
                        <p>수리내역 보기(이미지포함)</p>
                    </Link>
                </ul>
            </div>
        );
    }
}

export default SideMenuBarTemplate;