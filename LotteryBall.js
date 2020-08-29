import React, { Component } from 'react';

export default class LotteryBall extends Component {
   render() {
      return <div className='ball'>{this.props.num}</div>;
   }
}
