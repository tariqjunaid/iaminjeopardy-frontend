import React, { Component } from 'react';

class MyCountdown extends Component {

   constructor(props) {
      super(props);

      this.state = {
         countDown: 120
      }
   }

   // shouldComponentUpdate() {
   //    return false
   // }

   componentDidMount() {
      this.interval = setInterval(() => {
         this.countDown();
      }, 1000)
   }
   
   //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
   componentWillUnmount() {
      clearInterval(this.interval)
   }
   countDown = () => {
      this.setState({ countDown: this.state.countDown - 1 })
      if (this.state.countDown === 0)
         clearInterval(this.interval)
   }

   // test = () => this.props.handleResults()
   
   render() {
      return (
         <div>
            {this.state.countDown === 0 ? this.props.handleResults() : this.state.countDown}
         </div>
         
         // <Countdown className="column" date={Date.now() + 15000}>
         //    {/* <Completionist /> */}
         //    <Completionist handleResults={this.props.handleResults}/>
         // </Countdown>
      )
   }
}

export default MyCountdown;
