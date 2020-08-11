import  axios from 'axios';
import React from 'react';
import './styles.css';
import { Table } from 'reactstrap';

class showRate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            finalArr: [],
            ratesData: [],
            regions: [],
        };
    }

    componentDidMount =async() => {

      let today = new Date();
      let lastDay = ( d => new Date(d.setDate(d.getDate()-1)) )(new Date);
      let lastWeek = ( d => new Date(d.setDate(d.getDate()-7)) )(new Date);
      let lastMonth = ( d => new Date(d.setDate(d.getDate()-30)) )(new Date);

      await this.getRegions();
      await this.getRates(today,'today');
      await this.getRates(lastDay,'lastDay');
      await this.getRates(lastWeek,'lastWeek');
      await this.getRates(lastMonth,'lastMonth');
      };
      
    getRegions = async () => {
      const response = await axios.get('/api/regions')
      const data = await response.data
      this.setState({regions: data})
      var rateArr = []
      for (let i=0;i<this.state.regions.length;i++)
      {
        rateArr.push({region: this.state.regions[i]})
      }
      this.setState({finalArr: rateArr})
      console.log(this.state.finalArr);
    };
   
    getRates = async (date, type) => {
      const response = await axios.get('/api/'+ date)
      const data = await response.data
      this.setState({ratesData: data})
      this.populateRates(type);
    };
    
    populateRates = async (value) => {
      const rateArr = this.state.finalArr
      for (let i=0;i<this.state.regions.length;i++)
      {
        var flag =0;
        var rate =0;
        for(let j=0;j<this.state.ratesData.length;j++)
        {
            if(this.state.regions[i]===this.state.ratesData[j]._id)
            {
              flag=1;
              rate=this.state.ratesData[j].rate;
            }    
        }
        if(flag===1)
        {
          if(value==='today')
            rateArr[i].today = rate;
          else if  (value==='lastDay')
            rateArr[i].lastDay = rate;
          else if  (value==='lastWeek')
            rateArr[i].lastWeek = rate;
          else if  (value==='lastMonth')
            rateArr[i].lastMonth = rate;
        }   
        else
        {
          if(value==='today')
            rateArr[i].today = 0;
          else if  (value==='lastDay')
            rateArr[i].lastDay = 0;
          else if  (value==='lastWeek')
            rateArr[i].lastWeek = 0;
          else if  (value==='lastMonth')
            rateArr[i].lastMonth = 0;
        }
      }
      console.log(rateArr)
      this.setState({finalArr: rateArr});
    };

    displayRates = (dataArr) => {
        if(!dataArr.length) return null;
        return dataArr.map((data, index) => (
        <tr key={index}>
          <th scope="row" style={{ textAlign: 'left' }}>{data.region}</th>
          <td>{data.today}</td>
          <td>{data.lastDay}</td>
          <td>{data.lastWeek}</td>
          <td>{data.lastMonth}</td>
        </tr>
        ));
      };
      
    render(){
        return(
          <div className="ratesTable">
            <Table>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left' }}>Region</th>
                  <th>Today</th>
                  <th>Yesterday</th>
                  <th>Last Week</th>
                  <th>Last Month</th>
                </tr>
              </thead>
              <tbody>
                    {this.displayRates(this.state.finalArr)}
              </tbody>
            </Table>
          </div>
        );
    }
}

export default showRate;
