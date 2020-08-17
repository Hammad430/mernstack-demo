import  axios from 'axios';
import React from 'react';
import { Alert, Card, Container, Row, Col, Jumbotron, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './styles.css';

class addRate extends React.Component{
    constructor(props){
        super(props);
        this.state = {regions:["Punjab","Sindh","Balochistan","KPK","Federal" ],
                        Alertvisible: false 
        };
    }

    resetForm = () => { 
        document.getElementById("rateForm").reset();
      }

    createDate = (today,offset) => {
        today = new Date(today.setDate(today.getDate()+offset));
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        return today = dd + '-' + mm + '-' + yyyy;
    };

    handleSubmit(e) {

        e.preventDefault();
        const payload = {
            region: this.region.value,
            rate: this.rate.value,
            tag: 'rate',
            date: this.createDate(new Date(),0),
            timeStamp: Date.now()
          };
        console.log(payload);
        axios({
            url:'/api/save',
            method:'POST',
            data: payload
          })
            .then(() => {
              console.log('New rate sent to the server!');
              this.setState({
            
                Alertvisible: true, 
                alertColor: 'primary', 
                message: 'New rate added'}, 
                
                ()=> {window.setTimeout(()=>{this.setState({Alertvisible:false})},3000)
                });
                this.resetForm();
            })
            .catch(() => {
              console.log('Internal server error!');
            });;
        };      

    render(){
        var regionList = this.state.regions;
        regionList = regionList.map(function(regionList, index){
            return(
                <option key={index} value={regionList}>{regionList}</option>
            )
        });
        return(
        <div className="addRate">
        <div class="container h-100">
        <div class="row h-100 justify-content-center align-items-center">
        <Container className="rateContainer">
        <Row>
        <Col>
        <Card>
        <Form id="rateForm" onSubmit={this.handleSubmit.bind(this)}>
        <Row>
        <Col className="rateCol">
        <br/>
        <p className="rateFormTitle">Enter Todays Rate</p>
        <Jumbotron>
        <FormGroup>
        <Label>Select Region</Label>
        <Input type="select" innerRef={(region) => (this.region = region)}>
            {regionList}
        </Input>
        </FormGroup>
        <FormGroup>
        <Label>Enter Rate</Label>
        <Input type="number" placeholder="123" innerRef={(rate) => (this.rate = rate)} />
        </FormGroup>
        <div className="alertDiv">
        <Alert color={this.state.alertColor} isOpen={this.state.Alertvisible}> {this.state.message} </Alert>
        </div>
        </Jumbotron>
        <Button block className="butt">Add</Button>
        <br/>
      </Col>
      </Row>
      </Form>
      </Card>
      </Col>
      </Row>
      </Container> 
        </div>
        </div>
        </div>
        );
    }
}

export default addRate;

