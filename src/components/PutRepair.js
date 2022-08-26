import React, { Component } from "react";
import { Alert, Button } from "react-bootstrap";


import { GrClose } from "react-icons/gr";
import style from "../scss/modal/m_db.module.scss";

import WebServiceManager from "../util/webservice_manager";
import Constant from "../global/constant_variable";

class PutRepair extends Component {

    constructor(props) {
        super(props);

        this.state={carNumber:null,centerID:null,content:null,
        alertShow:false}
    }

    sendRepair=()=> {
        console.log(this.state);
        this.callPutRepairAPI().then((response) => {
            console.log(response);
            if(response.count>0) {
                this.setState({alertShow:true});
            }
        });
    }

    async callPutRepairAPI() {
        let manager = new WebServiceManager(Constant.serviceURL+"/PutRepair","post");
        manager.addFormData("data",{carNumber:this.state.carNumber,centerID:this.state.centerID,content:this.state.content});
        let response = await manager.start();
        
        if(response.ok)
            return response.json();
    }

    render() {
        return(
            <>
            <table cellPadding="0" cellSpacing="10">
                <tbody>
                <tr>
                    <th>차량번호</th><td><input type="text" name="carNumber" onChange={(e)=>this.setState({carNumber:e.target.value})}></input></td>
                </tr>
                <tr>
                    <th>센터ID</th><td><input type="text" name="centerID" onChange={(e)=>this.setState({centerID:e.target.value})}></input></td>
                </tr>
                <tr>
                    <th>고장내역</th><td><input type="text" name="content" onChange={(e)=>this.setState({content:e.target.value})}></input></td>
                </tr>
                <tr>
                    <td colSpan="2"><input type="button" value="전송" onClick={this.sendRepair}></input></td>
                </tr>
                </tbody>
            </table>    


            <Alert show={this.state.alertShow} variant="success">
                <Alert.Heading>데이터 업로드</Alert.Heading>
                <p>성공적으로 업로드되었습니다.</p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => this.setState({alertShow:false})} variant="outline-success">확인</Button></div>
            </Alert>        
            </>
        );
    }
}

export default PutRepair;
