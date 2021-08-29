import React from 'react';
import Cookies from 'js-cookie';
import { Icon, Card, Button, Label } from 'semantic-ui-react';
import moment from 'moment';

export class JobSummaryCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card key={this.props.job.id} className="manageJob">
                <Card.Content>
                    <Card.Header className="Pascal">{this.props.job.title}
                    </Card.Header>
                    <Label ribbon="right" color="black">
                        <Icon name='user' /> <span>  0</span>
                    </Label>
                    <Card.Meta className="margin-top-10px">
                        {this.props.job.location.city}, {this.props.job.location.country}
                    </Card.Meta>
                    <Card.Description>
                        {this.props.job.summary}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div>
                        <span>
                            <Button color='red' >
                                Expired
                            </Button>
                        </span>
                        <span className='ui two float-right'>
                            <Button basic color='twitter' className="margin-0" onClick={(e) => this.props.toggleCloseJob(true, this.props.job.id)}>
                                <Icon name="ban" />Close
                            </Button>
                            <Button basic color='twitter' className="margin-0" onClick={(e) => this.props.toggleEditJob(e, true, this.props.job.id)}>
                                <Icon name="edit" />Edit
                            </Button>
                            <Button basic color='twitter' className="margin-0">
                                <Icon name="copy" /> Copy
                            </Button>
                        </span>
                    </div>
                </Card.Content>
            </Card>
        )
    }
}