import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
import Statedata from './Statedata';
class India extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <img src="https://www.countryflags.io/in/shiny/64.png" alt="India"/>
                    <h3>INDIA</h3>
                </div>

                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-3">
                            <Card className="badge badge-danger" style={{ width: '18rem' }}>
                                <Card.Body className="text-center">
                                    <Card.Title>TOTAL CASES</Card.Title>
                                    <h3>192345</h3>
                                    <Card.Text>
                                        [Today:25]
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3">
                            <Card className="badge badge-warning" style={{ width: '18rem' }}>
                                <Card.Body className="text-center">
                                    <Card.Title>ACTIVE CASES</Card.Title>
                                    <h3>192345</h3>
                                    <Card.Text>
                                        [Today:25]
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3">
                            <Card className="badge badge-success" style={{ width: '18rem' }}>
                                <Card.Body className="text-center">
                                    <Card.Title>RECOVERED</Card.Title>
                                    <h3>192345</h3>
                                    <Card.Text>
                                        [Today:25]
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3">
                            <Card className="badge badge-dark" style={{ width: '18rem' }}>
                                <Card.Body className="text-center">
                                    <Card.Title>DEATH</Card.Title>
                                    <h3>192345</h3>
                                    <Card.Text>
                                        [Today:25]
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                <Statedata/>

                </div>
            </div>
        );
    }
}

export default India;