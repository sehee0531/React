import React, { Component } from "react";

import Template from "../templates/ui_consistis_template";
import UploadFile from "../components/UploadFile";


class UploadPage extends Component {
    render() {
        return (
          <>
            <Template>
              <UploadFile />
            </Template>
          </>
        );
    }
}

export default UploadPage;