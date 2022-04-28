import React, { Component } from 'react';
// Animate Lists not only by <Transition>
    // also need <TransitionGroup></TransitionGroup> tags/import
import { TransitionGroup } from 'react-transition-group';
import { CSSTransition } from 'react-transition-group';
import './List.css';



class List extends Component {
    state = {
        items: [1, 2, 3]
    }

    addItemHandler = () => {
        this.setState((prevState) => {
            return {
                items: prevState.items.concat(prevState.items.length + 1)
            };
        });
    }

    removeItemHandler = (selIndex) => {
        this.setState((prevState) => {
            return {
                items: prevState.items.filter((item, index) => index !== selIndex)
            };
        });
    }

    render () {
        const listItems = this.state.items.map( (item, index) => (
            // Applied key={index} to the CSSTransition tag because it is the mapped item now since it wraps around the <li> tags,
                // shouldn't be in the <li> tag -> receives error if no timeout and classNames property in CSSTransition tag
                    // define "fade" classNames in List.css
            <CSSTransition key={index} classNames="fade" timeout={300}>
            <li 
                className="ListItem" 
                onClick={() => this.removeItemHandler(index)}>{item}</li>
            </CSSTransition>
        ) );

        return (
            <div>
                <button className="Button" onClick={this.addItemHandler}>Add Item</button>
                <p>Click Item to Remove.</p>
                {/* Replace ul tags with <TransitionGroup></TransitionGroup> 
                <ul className="List">
                    {listItems}
                </ul> */}
                {/* This will render as div, but can change to ul by component property, can apply className property in the same way.
                Cannot render as ul, this <TransitionGroup> tag also requires the <Transition> or <CSSTransition>tag, cannot act as full ul */}
                {/* TransitionGroup tags are able to handle multiple animated items, and determine when 1 element in the list changes(remove/add).
                It also manually adds the "in" property to <Transition> or <CSSTransition> tag */}
                <TransitionGroup component="ul" className="List">
                    {listItems}
                </TransitionGroup>
            </div>
        );
    }
}

export default List;