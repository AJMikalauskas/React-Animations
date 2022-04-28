import React, { Component } from "react";

import Transition from "react-transition-group/Transition";
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  // This represents useState
  state = {
    modalIsOpen: false,
    showBlock: false
  }

  showModal = () => {
    this.setState({modalIsOpen: true});
  }

  closeModal = () => {
    this.setState({modalIsOpen: false}); 
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        {/* This is to toggle the states of the showBlock shown above -> added minor styling to this toggle by the className="Button",
        <br/>, and margin:'auto' */}
        <button className="Button" onClick={() => this.setState(prevState => ({showBlock: !prevState.showBlock}))}>Toggle</button>
        {/*  This is the JSX conditional based on the state of the showBlock -> toggles a red squared to to div below */}
        <br/>
        {/* {this.state.showBlock ? (<div style={{
          background: 'red', 
          width: 100,
          height: 100,
          margin: 'auto'
        }}></div>): null} */}
      
      
      {/* Replace above JSX conditional with <Transition></Transition>, Changing to React Transition/Animation not CSS fully based anymore.
      in property is the conditional based on, here is the state of showBlock so if true, what's in the Transition tag will show, if false ->  no show. 
      timeout is the number of seconds/miliseconds between the 4 main states(entering -> entered)+ (exiting -> exited)*/}
        <Transition in={this.state.showBlock} timeout={300}>
          {/* This will show an initial value of exited since it's value is false. If toggle btn clicked, it originally shows "entering"
          and finishes on "entered". If toggle btn clicked again, it shows "exiting" and finished on "exited" */}
          {state => <p>{state}</p>}
        </Transition>


          {/* Stop from being in DOM by mountOnEnter property and unmountOnExit property, causes stopping of animation though,
          Can have animation on exit by changing to [opacity: state === "exiting" ? 0 : 1], use exiting for animation not exited */}

          {/* 6 different transition events passed into Transition tags, includes:
          - onEnter, onEntering, onEntered, onExit, onExiting, onExited */}
          {/* Consoles onEnter 1st, onEntering 2nd, onEntered 3rd. If toggle btn pressed twice, consoles onExit 1st, onExiting 2nd, onExited 3rd */}
        <Transition in={this.state.showBlock} timeout={300} mountOnEnter unmountOnExit
          onEnter={() => console.log('onEnter')}
          onEntering={() => console.log('onEntering')}
          onEntered={() => console.log('onEntered')}
          onExit={() => console.log('onExit')}
          onExiting={() => console.log('onExiting')}  
          onExited={() => console.log('onExited')}
        >
          {/* This will show an initial value of exited since it's value is false. If toggle btn clicked, it originally shows "entering"
          and finishes on "entered". If toggle btn clicked again, it shows "exiting" and finished on "exited" */}
          {state => ( <div style={{
          background: 'red', 
          width: 100,
          height: 100,
          margin: 'auto',
          // Can adjust CSS properties based on the state being any of the 4 states(entering,entered,exiting,exited).
            // if the state is exited, make opacity 0, if state not exited, make opacity 1
              // animate opacity by transition property -> not animated without it
          transition: 'opacity 1s ease-out',
          opacity: state === 'exiting' ? 0 : 1
        }}></div>)}
        </Transition>

        {/* state of true or false for modalIsOpen is passed into show props of both the Modal.js and Backdrop.js.
        Part of cssClasses array which is joined together in both the Modal.js and Backdrop.js files.
        Based on this true/false the backdrop/modal will show, Could use better naming because it's true false value is for both Modal
        and Backdrop. */}
        {/* To get the backdrop and modal components to not show in the background, JSX conditionally show 
        {this.state.modalIsOpen ? <Modal show={this.state.modalIsOpen} closed={this.closeModal} /> : null } */}

        {/* Changed modal showing JSX conditional to Transition tag */}
        {/* <Transition in={this.state.modalIsOpen} timeout={300} mountOnEnter unmountOnExit>
          {state => (
            // Since the state of modalIsOpen is the state parameter here, we can just follow as above, 
              // where they pass in this.state.modalIsOpen to the show props, can replace with state since state here is this.state.modalIsOpen
                //simple fix and easy to see -> change cssClasses in Modal.js to be based on the 4 states
            <Modal show={state} closed={this.closeModal}/>
          )}
        </Transition> */}

        {/*  Can also just wrap these <Transition> tags around Modal.js JSX, an alternate solution instead of putting transition tag
        in here and putting Modal component in the transition tags -> just call Modal tag in here and teansition is already in Modal.js*/}
        <Modal show={this.state.modalIsOpen} closed={this.closeModal} />

        {this.state.modalIsOpen ? <Backdrop show /> : null}

        <button className="Button" onClick={this.showModal}>Open</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
