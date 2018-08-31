import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

class BarChartCustom extends React.Component{
  render(){
    return(
      <BarChart width={this.props.width} height={this.props.height} data={this.props.data}>
        <XAxis dataKey="Rating" stroke="#0c9" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar type="monotone" dataKey="Hotels Count" fill="#0c9" barSize={30} />
      </BarChart>
    )
  }
}

export default BarChartCustom;
