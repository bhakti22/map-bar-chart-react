import React from 'react';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

class RangeSlider extends React.Component{
  render(){
    return(
      <Range
        allowCross={this.props.allowCross}
        max={this.props.max}
        min={this.props.min}
        value={this.props.range}
        onChange={this.props.onHandleRangeChange} />
    )
  }
}

export default RangeSlider;
