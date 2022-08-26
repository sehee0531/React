import React, { Component } from "react";

import Template from "../templates/ui_consistis_template";
import GetRepairImage from "../components/GetRepairImage";


class GetRepairImagePage extends Component {
    render() {
        return (
          <>
            <Template>
              <GetRepairImage />
            </Template>
          </>
        );
    }
}

export default GetRepairImagePage;
