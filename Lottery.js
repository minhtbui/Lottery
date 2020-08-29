import React, { Component } from 'react';
import LotteryBall from './LotteryBall';

export default class Lottery extends Component {
   static defaultProps = {
      title: 'Lotto',
      numBalls: 6,
      maxNum: 40,
   };
   constructor(props) {
      super(props);
      this.state = {
         num: Array.from({ length: this.props.numBalls }),
      };
   }
   generate = (e) => {
      //generate randome number from 1 - 40
      this.setState((curState) => ({
         num: curState.num.map(
            //create new array 6 slots with rand numbers
            (n) => Math.floor(Math.random() * this.props.maxNum) + 1,
         ),
      }));
   };

   render() {
      return (
         <div className='lottery'>
            <h1>{this.props.title}</h1>
            <div>
               {this.state.num.map((e) => (
                  <LotteryBall num={e} />
               ))}
            </div>
            <button onClick={this.generate}>Generate</button>
         </div>
      );
   }
}
