import React, { Component } from "react";
import Constant from "../global/constant_variable";
import WebServiceManager from "../util/webservice_manager";

class GetRepairImage extends Component {
    constructor(props) {
        super(props);

        this.state={repairContents:[]};
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
                        <th>차량사진</th>
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

        this.state={imageURL:null};
    }

    componentDidMount() {
        this.callGetRepairImageAPI().then((response) => {
            this.setState({imageURL:URL.createObjectURL(response)});
        });
    }

    async callGetRepairImageAPI() {
        let manager = new WebServiceManager(Constant.serviceURL+"/GetRepairImage?repairID="+this.props.item.id);
        let response = await manager.start();
        if(response.ok)
            return response.blob();
        else
            Promise.reject(response);
    }

    render() {
        const item = this.props.item;
        return(
            <tr>
                <td>{item.id}</td>
                <td>{item.carNumber}</td>
                <td>{item.content}</td>
                <td>{item.makeDate}</td>
                <td><img src={this.state.imageURL} width="100px"></img></td>
            </tr>
        )
    }
}

export default GetRepairImage;