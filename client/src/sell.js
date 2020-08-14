import  axios from 'axios';
import React from 'react';
import { Alert, Card, Container, Row, Col, Jumbotron, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './styles.css';

class sell extends React.Component{
    constructor(props){
        super(props);
        this.state = {regions:["Punjab","Sindh","Balochistan","KPK","Federal" ],
        Alertvisible: false 
        };
    }

    resetForm = () => { 
        document.getElementById("sellForm").reset();
    }

    handleSubmit(e) {

        e.preventDefault();
        const payload = {
            shedName: this.shed.value,
            sellRate: this.rate.value,
            address: this.address.value,
            contact: this.contact.value,
            city: this.city.value,
            region: this.region.value,
            tag: 'sell'   
          };
        console.log(payload);
        axios({
            url:'/api/saveSelling',
            method:'POST',
            data: payload
          })
            .then(() => {
              console.log('New rate sent to the server!');
              this.setState({
            
                Alertvisible: true, 
                alertColor: 'primary', 
                message: 'Selling details added'}, 
                
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
        <Container>
        <Row>
        <Col>
        <Form className="sellForm" id="sellForm" onSubmit={this.handleSubmit.bind(this)}>
            <Row>
                <br/>
                <p className="sellFormTitle">Enter Flock Details</p>
            </Row>
            <Jumbotron className="sellJumbotron">
            <Row form>
            <Col md={6}>
                <FormGroup>
                    <Label>Shed Name</Label>
                    <Input type="text" placeholder="enter shed name e.g (Chick House)"
                    innerRef={(shed) => (this.shed = shed)} />
                </FormGroup>
            </Col>
            <Col md={6}>
                <FormGroup>
                    <Label>Selling Rate</Label>
                    <Input type="number" placeholder="enter selling rate e.g (123 /Kg)"
                    innerRef={(rate) => (this.rate = rate)} />
                </FormGroup>
            </Col>
            </Row>
                <FormGroup>
                    <Label>Address</Label>
                    <Input type="text" placeholder="1234 Main St"
                    innerRef={(address) => (this.address = address)}/>
                </FormGroup>
                <FormGroup>
                    <Label>Contact No</Label>
                    <Input type="text" placeholder="0345 8509705"
                    innerRef={(contact) => (this.contact = contact)}/>
                </FormGroup>
            <Row form>
            <Col md={6}>
                <FormGroup>
                  <Label>City</Label>
                  <Input type="text" placeholder="Islamabad"
                  innerRef={(city) => (this.city = city)}/>
                </FormGroup>
            </Col>
            <Col md={6}>
                <FormGroup>
                    <Label>Select Region</Label>
                    <Input type="select" innerRef={(region) => (this.region = region)}>
                    {regionList}
                    </Input>
                </FormGroup>
            </Col>
            </Row>
            <div className="alertDiv">
                <Alert color={this.state.alertColor} isOpen={this.state.Alertvisible}> {this.state.message} </Alert>
            </div>
            </Jumbotron>
            <Button block className="sellButt">Submit</Button>
            <br/>
        </Form>
        </Col>
        </Row>
        </Container>    
        </div>
        );
    }
}


export default sell;

