import React from 'react';
import {Line} from 'react-chartjs-2';
import  axios from 'axios';
import './styles.css';

class graph extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            labels: [],
            datasets:[]
        };
    }
    componentDidMount(){
        this.getGraphData(7);
    }

    createDate = (today,offset) => {
        today = new Date(today.setDate(today.getDate()+offset));
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        return today = dd + '-' + mm + '-' + yyyy;
    };

    // random_rgba = () => {
    //     var o = Math.round, r = Math.random, s = 255;
    //     return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
    // }

    randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    randomByte = () => this.randomNumber(0, 255)
    randomPercent = () => (this.randomNumber(50, 100) * 0.01).toFixed(2)
    randomCssRgba = () => `rgba(${[this.randomByte(), this.randomByte(), this.randomByte(), this.randomPercent()].join(',')})`
   
    getGraphData = async (days) => {
      const response = await axios.get('/api/rates/Last'+days)
      const data = await response.data
      console.log(data)
      var datasets = []
      var labels = []
      var count = data[0].rate.length-1
      data[0].rate.forEach(element => {
          labels.push(this.createDate(new Date(),-count))
          count-=1
      });
      this.setState({labels: labels})
      data.forEach(element => {
          var color=this.randomCssRgba()
          console.log(color)
        datasets.push({
            label: element._id,
            fill: false,
            lineTension: 0.5,
            borderColor: color,
            data: element.rate
        })
      }); 
      console.log(datasets)
      this.setState({datasets: datasets})
    };
      
    render(){
      return(
        <div className="graphDiv2">
        <Line
         data={this.state}
         options={{
           title:{
             display:true,
             text:'Rates per Region',
             fontSize:20
           },
           legend:{
             display:true,
             position:'bottom'
           }
         }}
       />
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