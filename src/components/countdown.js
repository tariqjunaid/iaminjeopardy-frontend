import React, { Component } from 'react';

class MyCountdown extends Component {

   constructor(props) {
      super(props);

      this.state = {
        countDown: 15
      }
   }

   // shouldComponentUpdate() {
   //    return false
   // }

   componentDidMount() {
      setInterval(() => {
         console.log(this.state.countDown)
         this.countDown();
      }, 1000)

   }

   
   countDown = () => {
   
   this.setState({
         countDown: this.state.countDown - 1
      })
   }

   test = () => {
      this.props.handleResults()
   }
   


   render() {
      return (
         // <Countdown className="column" date={Date.now() + 15000}>
         //    {/* <Completionist /> */}
         //    <Completionist handleResults={this.props.handleResults}/>
         // </Countdown>
         <div>
            {
               this.state.countDown === 0 ? this.test() : this.state.countDown
            }
         </div>
      )
   }
}
export default MyCountdown;