import  axios from 'axios';
import React from 'react';
import { Alert, Card, Container, Row, Col, Jumbotron, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './styles.css';
import { get } from 'mongoose';

class showRate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ratesData: [],
            regions: [],
            today: [],
            lastDay: []
        };
    }

    componentDidMount =() => {
        this.getRegions();
      };
   
    getRegions = () => {
      axios.get('/api/regions')
        .then((response) =>{
          const data = response.data;
          this.setState({regions: data});
          let today = new Date();
          let last2Day = ( d => new Date(d.setDate(d.getDate()-2)) )(new Date);
          this.getRates(today);
          console.log('Regions have been received!');
        })
        .catch(() =>{
          alert('Error receiving data!');
        });
    };

    getRates = (date) => {
      axios.get('/api/'+ date)
        .then((response) =>{
          const data = response.data;
          this.setState({ratesData: data});
          console.log(this.state.ratesData);
          this.populateRates('today');
          console.log('Rates have been received!');
        })
        .catch(() =>{
          alert('Error receiving data!');
        });
    };

    populateRates = (value) => {
        const rateArr = []
        for (let i=0;i<this.state.regions.length;i++)
        {
            var flag =0;
            var rate =0;
            for(let j=0;j<this.state.ratesData.length;j++){
                if(this.state.regions[i]===this.state.ratesData[j]._id)
                {
                    flag=1;
                    rate=this.state.ratesData[j].rate;
                }
            }

            if(flag===1)
            {
              rateArr.push(rate);
            }
            else
            {
              rateArr.push(0);
            }
        }
        console.log(rateArr)
        if(rateArr.length !== 0)
        {
          this.setState({[value]: rateArr});
        }
        else
          console.log('condition not met')
      };

    displayRates = (ratesData) => {
        if(!ratesData.length) return null;
    
        //loop over each post to display all posts
        //.map is used for looping
        //index and key is used  to identify  individual post in loop
        return ratesData.map((singleRateData,  index) => (
        <Row key={index}>{singleRateData}</Row>
          // <div key={index} className="blog-post_display">
          //   <h3>{singleRateData._id}</h3>
          //   <p>{singleRateData.rate}</p>
          // </div>
        ));
      };
      
    render(){
        return(
          <div>
            <Container>
              <Row>
                <Col>
                <Row>Region</Row>
                {this.displayRates(this.state.regions)}
                </Col>
                <Col>
                <Row>Today's Rate</Row>
                {this.displayRates(this.state.today)}
                </Col>
                <Col>
                <Row>Last Day's Rate</Row>
                {this.displayRates(this.state.today)}
                </Col>
              </Row>
            </Container>
          </div>
            // <div>
            //     <Container>
            //         <Row>
            //             <Col>Region</Col>
            //             <Col>Today's Rate</Col>
            //             <Col>Last Day's Rate</Col>
            //         </Row>
            //     </Container>
            //     <button onClick={this.populateRates}>Login</button>
            // </div>
        //     <div className="rates-table">
        //     {this.displayRates(this.state.ratesData)}
        //   </div>
        );
    }
}

export default showRate;
