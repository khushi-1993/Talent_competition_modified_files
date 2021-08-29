import React from 'react';
import Cookies from 'js-cookie';
import { Button, Modal } from 'semantic-ui-react'

export class CloseJob extends React.Component {
    constructor(props) {
        super(props);
        this.selectJob = this.selectJob.bind(this)
    }

    selectJob() {
        var cookies = Cookies.get('talentAuthToken');
        $.ajax({
             url: 'http://localhost:51689/listing/listing/closeJob',
           // url: 'https://talentservicestalent20210820232613.azurewebsites.net/listing/listing/closeJob',
            headers: {
                'Authorization': 'Bearer ' + cookies,
                'Content-Type': 'application/json'
            },
            type: "POST",
            dataType: "json",
            data: JSON.stringify(this.props.id),
            success: function (res) {
                if (res.success) {
                    TalentUtil.notification.show(res.message, "success", null, null);
                }
                else {
                    TalentUtil.notification.show(res.message, "error", null, null);
                }
                this.props.toggleCloseJob(false,this.props.id)
                this.props.init()
            }.bind(this),
            error: function (res) {
                console.log(res.status)
            }
        })
    }

    render() {
        return (
            <div>
              <Modal
              size="tiny" className="confirmation-modal"
                open={this.props.open}
              >
                <Modal.Header>Close Job</Modal.Header>
                <Modal.Content >
                  <div>Are you sure want to close job?</div>
                </Modal.Content>
                <Modal.Actions>
                  <Button color='black' onClick={() => this.props.toggleCloseJob(false,this.props.id)}>
                    Cancel
                  </Button>
                  <Button
                    content="Close"
                    labelPosition='right'
                    icon='ban'
                    onClick={(e) => this.selectJob(e)}
                    negative
                  />
                </Modal.Actions>
              </Modal>
            </div>
          )
    }
}