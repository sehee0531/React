import React, { Component } from "react";

import WebServiceManager from "../util/webservice_manager";
import Constant from "../global/constant_variable";

class GetRepair extends Component {

    constructor(props) {
        super(props);

        this.state={repairContents:[]}
    }

    componentDidMount() {
        this.callGetRepairAPI().then((response) => {
            console.log(response);            
            this.setState({repairContents:response.repairs});
        });

    }

    async callGetRepairAPI() {
        let manager = new WebServiceManager(Constant.serviceURL+"/GetRepair");
        let response = await manager.start();
        console.log(response);
        if(response.ok)
            return response.json();
        else
            Promise.reject(response);
    }

    render() {
        return(
            <>
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>차량번호</th>
                        <th>고장내역</th>
                        <th>접수일</th>
                    </tr>
                </thead>                
            </table>

            <table>
                <tbody>
                    {this.state.repairContents.map((item,i)=><GetRepairList item={item} key={i}/>)}
                </tbody>
            </table>
            </>
        );
    }
}

class GetRepairList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const item = this.props.item;
        return(
            <tr>
                <td>{item.id}</td>
                <td>{item.carNumber}</td>
                <td>{item.content}</td>
                <td>{item.makeDate}</td>
            </tr>
        )
    }
}

export default GetRepair;
