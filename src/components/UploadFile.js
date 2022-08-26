import React, { Component } from "react";
import Constant from "../global/constant_variable";
import WebServiceManager from "../util/webservice_manager";

class UploadFile extends Component {
    constructor(props) {
        super(props);

        this.state={
            carNumber:null,
            centerID:null,
            content:null,
            file:null};
        
    }

    uploadFile=() => {
        console.log(this.state);
        this.callUploadFileAPI().then((response) => {
            console.log(response);
        });
    }

    async callUploadFileAPI() {
        let manager = new WebServiceManager(Constant.serviceURL+"/PutFile","post");
        manager.addFormData("data",{carNumber:this.state.carNumber,centerID:this.state.centerID,content:this.state.content});
        manager.addBinaryData("file1",this.state.file);
        let response = await manager.start();
        if(response.ok)
            return response.json();
    }

    render() {
        return (
            <div>
                <table cellSpacing="1" cellPadding="3">
                    <tbody>                		        
			        <tr>
                        <th>차량번호</th>
                        <td><input type="text" placeholder="차량번호를 입력하세요" onChange={(e)=>this.setState({carNumber:e.target.value})}/></td></tr>
                    <tr>
                        <th>센터 ID</th>
                        <td><input type="text" placeholder="정비소 ID를 입력하세요" onChange={(e)=>this.setState({centerID:e.target.value})}/></td></tr>
                    <tr>
                        <th>고장내역</th>
                        <td><input type="text" placeholder="고장내역을 입력하세요" onChange={(e)=>this.setState({content:e.target.value})}/></td></tr>
                    <tr>
				        <th>차량사진</th>
				        <td><input type="file" onChange={(e)=>this.setState({file:e.target.files[0]})}/></td></tr>
                    <tr>
                        <td colSpan="2"><button onClick={this.uploadFile}>전송</button></td></tr>
                    </tbody>
		        </table>
            </div>
        );
    }
}

export default UploadFile;