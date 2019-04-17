import React, { Component } from 'react';
import './style.scss';

const INITIAL_STATE = {
    visible: false
}

/**
 * StickySlider is a wrapper component with two physical states controlled through css
 * 
 * Mobile (0-800px): Fixed sliding menu that opens from the bottom
 * Desktop (801px+): Sticks to the containers top so it is always visivle when scrolling
 */
export default class StickySlider extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE }
    }

    /**
     * When the toggle is clicked, reverse the visible state
     */
    toggleSlider = () => {
        this.setState({
            visible: !this.state.visible
        });
    }

    render() {
        return (
            <div className={`sticky-slider ${this.state.visible ? 'open' : 'closed'}`}>
                <div className="sticky-slider__toggle" onClick={this.toggleSlider}>
                    <span className={`fas ${this.state.visible ? 'fa-chevron-down' : 'fa-chevron-up'}`}></span>
                </div>
                {this.props.children}
            </div>
        )
    }
}