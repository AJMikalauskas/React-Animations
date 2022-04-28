import React, { useState } from "react";

import {Transition} from "react-transition-group";
// CSSTransition Component
import { CSSTransition } from "react-transition-group";
import "./Modal.css";


// use this to clearly show animation timing, pass into timeout property of <Transition> tag
const animationTiming = {
    // duration for adding 
    enter: 400,
    // duration for removal
    exit: 1000
}

const modal = props => {
    //const [initialState, seInitialState] = useState();

  // Same as Backdrop.js -> 4 states are (entering, entered, exiting, exited)
    // using 4 states from the react transition group <Transition> tags
        // need to adjust this, ? and :, need to make conditionals of the ? and : to be based on the states
            // If props.show is entering, use classname of ModalOpened,
            // if props.show is exiting, use classnmae of ModalClosed,
                // else use null
//   const cssClasses = [
//     "Modal",
//     props.show === "entering"
//       ? "ModalOpened"
//       : props.show === "exiting"
//       ? "ModalClosed"
//       : null,
//   ];

    // With Transition tags in this file, cssClasses moves into the <Transition> tags, so that in it
        // can use state anonymous function param below  and change classe string based on state which has 4 states.

  return (
      // Replace with CSSTransition tags
            // Same Logic as seen above in cssClasses
            // This is dynamic data so return statement is the dynamic with the return having the (), state uses arrow function ability as seen
                // used state in defining cssClasses
    // <Transition in={props.show} timeout={animationTiming} mountOnEnter unmountOnExit> 
    // {state => {
    //     const cssClasses = ["Modal", state === 'entering' ? "ModalOpened" : state === "exiting" ?  "ModalClosed" : null];

    //     return(<div className={cssClasses.join(" ")}>
    //         <h1>A Modal</h1>
    //         <button className="Button" onClick={props.closed}>
    //             Dismiss
    //         </button>
    //     </div>);
    // }}

// CSS Transition Here
    // special property to pass into CSS Transition called classNames="", holds CSS classes that should be added to the wrapped element,
        //  so the main div pending on state of transition, keeps "Modal" className on div but can merge other class names onto the modal
    
    // if pass classNames, has multiple and cycles through classes, if classNames = "fade-slide" -> cycles through 4 states
        // "fade-slide-enter" -> "fade-slide-enter-active", "fade-slide-exit" -> "fade-slide-exit-active"
            // Add to Modal.css -> added to the active classes which is the entering and eixting states theoretically
                // ModalOpened class uses this CSS  ->  animation: openModal 0.4s ease-out forwards; for "fade-slide-enter-active"
                // ModalClosed class uses this CSS  -> animation: closeModal 0.4s ease-out forwards; for "fade-slide-exit-active"
    
    // can customize CSSTransition property of classNames, change to dynamic and pass in JS object
        // pretty similar to above with 4 properties representing the 4 states at which CSS classes will be applied
            // "fade-slide-enter-active" has same CSS as ModalOpened class, just represented in object here
            // "fade-slide-exit-active" has same CSS as ModalClosed class, just represented in object here
<CSSTransition in={props.show} timeout={animationTiming} classNames={{
    enter: '',
    enterActive: 'ModalOpened',
    exit: 'ModalClosed',
    exitActive: ''
}} mountOnEnter unmountOnExit>
    <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
            Dismiss
        </button>
    </div>
</CSSTransition>
    //</Transition>
  );
};

export default modal;
