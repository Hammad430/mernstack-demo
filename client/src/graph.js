import React from 'react';
import {Line} from 'react-chartjs-2';
import  axios from 'axios';
import './styles.css';

class graph extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }
    componentDidMount(){
        //this.getRates();
        console.log(this.createDate(new Date(),-1));
    }

    createDate = (today,offset) => {
        today = new Date(today.setDate(today.getDate()+offset));
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        return today = dd + '/' + mm + '/' + yyyy;
    };
   
    getRates = async () => {
      const response = await axios.get('/api/rates/Last30')
      //console.log('getRates api called')
      const data = await response.data
      //this.setState({ratesData: data})
      // this.state.ratesData.forEach(element => {
      //   console.log(element)
      // });
    };
      
    render(){
      return(
          <div>
              <p>page under construction</p>
          </div>
      );
}
}

export default graph;


// const state = {
//   labels: ['January', 'February', 'March',
//            'April', 'May'],
//   datasets: [
//     {
//       label: 'Rainfall',
//       fill: true,
//       lineTension: 0.5,
//       //backgroundColor: 'rgba(75,192,192,1)',
//       backgroundColor: "rgba(153,255,51,0.6)",
//       borderColor: 'rgba(0,0,0,1)',
//       borderWidth: 2,
//       data: [65, 59, 80, 81, 56]
//     },
//     {
//         label: 'Humidity',
//         fill: true,
//         lineTension: 0.5,
//         //backgroundColor: 'rgba(175,19,129,11)',
//         backgroundColor: "rgba(255,153,0,0.6)",
//         borderColor: 'rgba(1,1,1,1)',
//         borderWidth: 2,
//         data: [20, 39, 50, 61, 96]
//       }
//   ]
// }

// export default class graph extends React.Component {
//   render() {
//     return (
//       <div className="graphDiv">
//         <Line
//           data={state}
//           options={{
//             title:{
//               display:true,
//               text:'Average Rainfall per month',
//               fontSize:20
//             },
//             legend:{
//               display:true,
//               position:'right'
//             }
//           }}
//         />
//       </div>
//     );
//   }
// }