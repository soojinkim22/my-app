import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
//import UploadModal from './UploadModal';

class FileUpload extends Component {

    constructor(props) {
        super(props);
        //this.state = {};
        var config = {};
        //awdx.init(config);
    }

    render() {
        return (
            <ButtonToolbar>
                <Button bsStyle="info">
                    自動職歴設定
                </Button>
            </ButtonToolbar>
        );
      }
}

export default FileUpload;