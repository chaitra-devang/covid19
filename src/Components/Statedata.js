import Axios from 'axios';
import React, { Component } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

class Statedata extends Component {

    constructor() {
        super();
        this.state = {
            stateData: {}
        }
    }

    componentDidMount() {
        Axios.get('https://api.covid19india.org/state_district_wise.json').then(response => {
            this.setState({ stateData: response.data });

        })
    }

    render() {

        let keys = Object.keys(this.state.stateData);
        return (
            <div className="row">
                <div className="col-md-12">

                    <Accordion>
                        {
                            keys.map((itm, ky) => {

                                let districts = this.state.stateData[itm].districtData;
                                let districtKeys = Object.keys(districts);
                                let totalActive=0;
                                let totalConfirmed=0;
                                let totalDeath=0;
                                let totalRecovery=0;
                                let districtList=[];

                                for(let dist in districts){
                                    totalActive += districts[dist].active;
                                    totalConfirmed += districts[dist].confirmed;
                                    totalDeath += districts[dist].deceased;
                                    totalRecovery += districts[dist].recovered;
                                    let ob= districts[dist];
                                    ob["district_name"]=dist;
                                    districtList.push(ob);

                                    
                                }
                                return (
                                    <Card>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="secondary" eventKey={ky}>
                                                {itm}<span className="btn-danger p-2 mr-2 ml-2"> Total Cases: {totalConfirmed}</span> <span className="btn-warning p-2 mr-2" >Total Active: {totalActive}</span> <span className="btn-success p-2 mr-2" >Total Recovered: {totalRecovery}</span><span className="btn-dark p-2 mr-2" > Total Death: {totalDeath}</span>
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey={ky}>
                                            <Card.Body>
                                                <table className="table table-bordered table-striped">
                                                    <thead>
                                                        <tr>
                                                            <td>District</td>
                                                            <td>Confirmed</td>
                                                            <td>Active</td>
                                                            <td>Recovered</td>
                                                            <td>Deaths</td>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            districtList.map((itm,ky)=>{
                                                                return(
                                                                    <tr>
                                                                        <td>{itm.district_name}</td>
                                                                        <td>{itm.confirmed}</td>
                                                                        <td>{itm.active}</td>
                                                                        <td>{itm.recovered}</td>
                                                                        <td>{itm.deceased}</td>
                                                                    </tr>
                                                                )
                                                            })
                                                        }
                                                    </tbody>
                                                </table>

                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                )
                            })
                        }

                    </Accordion>
                </div>

            </div>
        );
    }
}

export default Statedata;