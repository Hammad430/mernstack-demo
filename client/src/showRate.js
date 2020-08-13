import  axios from 'axios';
import './styles.css';
import { Table } from 'reactstrap';
import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

class showRate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            finalArr: [],
            ratesData: [],
            regions: [],
            width: window.innerWidth,
            activeTab: '1',
            flag: 0
        };
    }

    toggle = tab => {
      if(this.state.activeTab !== tab) this.setState({activeTab: tab});
    }

    componentWillMount() {
      window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
      this.setState({ width: window.innerWidth });
    };

    componentDidMount = () => {

      let today = new Date();
      let lastDay = ( d => new Date(d.setDate(d.getDate()-1)) )(new Date);
      let lastWeek = ( d => new Date(d.setDate(d.getDate()-7)) )(new Date);
      let lastMonth = ( d => new Date(d.setDate(d.getDate()-30)) )(new Date);

      this.getRegions();
      this.getRates(today,'today');
      this.getRates(lastDay,'lastDay');
      this.getRates(lastWeek,'lastWeek');
      this.getRates(lastMonth,'lastMonth');
      };
      
    getRegions = async () => {
      const response = await axios.get('/api/regions')
      const data = await response.data
      this.setState({regions: data})
      const rateArr = []
      for (let i=0;i<this.state.regions.length;i++)
      {
        rateArr.push({region: this.state.regions[i]})
      }
      this.setState({finalArr: rateArr})
    };
   
    getRates = async (date, type) => {
      const response = await axios.get('/api/'+ date)
      const data = await response.data
      this.setState({ratesData: data})
      this.populateRates(type);
    };
    
    populateRates = (value) => {
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

      displayRatesMob = (dataArr,tabId) => {
        if(!dataArr.length) return null;
        if(tabId===1)
        {
          return dataArr.map((data, index) => (
            <tr key={index}>
              <th scope="row" style={{ textAlign: 'left' }}>{data.region}</th>
              <td>{data.today}</td>
            </tr>
            ));
        }
        else if(tabId===2)
        {
          return dataArr.map((data, index) => (
            <tr key={index}>
              <th scope="row" style={{ textAlign: 'left' }}>{data.region}</th>
              <td>{data.lastDay}</td>
            </tr>
            ));
        }
        else if(tabId===3)
        {
          return dataArr.map((data, index) => (
            <tr key={index}>
              <th scope="row" style={{ textAlign: 'left' }}>{data.region}</th>
              <td>{data.lastWeek}</td>
            </tr>
            ));
        }
        else if(tabId===4)
        {
          return dataArr.map((data, index) => (
            <tr key={index}>
              <th scope="row" style={{ textAlign: 'left' }}>{data.region}</th>
              <td>{data.lastMonth}</td>
            </tr>
            ));
        }        
      };
      
    render(){
      const { width } = this.state;
      const isMobile = width <= 500;
          
      if (isMobile) {
        return (
        <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === '1' })}
            onClick={() => { this.toggle('1'); }}
          >
            Today
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === '2' })}
            onClick={() => { this.toggle('2'); }}
          >
            Yesterday
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === '3' })}
            onClick={() => { this.toggle('3'); }}
          >
            Last Week
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === '4' })}
            onClick={() => { this.toggle('4'); }}
          >
            Last Month
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={this.state.activeTab}>
        <TabPane tabId="1">
          <Table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>Region</th>
                <th>Rate</th>
              </tr>
            </thead>
            <tbody>
                  {this.displayRatesMob(this.state.finalArr,1)}
            </tbody>
          </Table>
        </TabPane>
        <TabPane tabId="2">
        <Table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>Region</th>
                <th>Rate</th>
              </tr>
            </thead>
            <tbody>
                  {this.displayRatesMob(this.state.finalArr,2)}
            </tbody>
          </Table>
        </TabPane>
        <TabPane tabId="3">
        <Table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>Region</th>
                <th>Rate</th>
              </tr>
            </thead>
            <tbody>
                  {this.displayRatesMob(this.state.finalArr,3)}
            </tbody>
          </Table>
        </TabPane>
        <TabPane tabId="4">
        <Table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>Region</th>
                <th>Rate</th>
              </tr>
            </thead>
            <tbody>
                  {this.displayRatesMob(this.state.finalArr,4)}
            </tbody>
          </Table>
        </TabPane>
      </TabContent>
    </div>
      );
      } else {
        return (
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
}

export default showRate;
