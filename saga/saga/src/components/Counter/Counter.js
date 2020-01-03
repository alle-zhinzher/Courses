import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incCounter, decCounter } from '../../actions/counter';
import { startComputing } from '../../actions/math';

import './Counter.scss';

class Counter extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const value = e.target.newValue.value;
        this.props.startComputingT(value)
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });
    render() {
        return (
            <div className="counter">
                {
                    this.props.counter.isComputing ?
                    <p className="counter__coputing">Computing...</p>
                    :
                    <div className="counter__table">
                        <button className="btn btn--dec" onClick={this.props.decCounter}>-</button>
                            <span className="value">{this.props.counter.value}</span>
                        <button className="btn btn--inc" onClick={this.props.incCounter}>+</button>
                    </div>
                }
                <form className="form" onSubmit={this.handleSubmit}>
                    <label className="form__title">Do all Math Operation</label>
                    <input className="form__input" name="newValue" type="number"></input><br></br>
                    <input className="form__button" type="submit"></input>
                </form>
                {
                    this.props.math.isComputing & !this.props.math.error ?
                        <div className="calculation">
                            <p className="calculation__result">MUL: {this.props.math.mul}</p>
                            <p className="calculation__result">DIV: {this.props.math.div}</p>
                            <p className="calculation__result">SQRT: {this.props.math.sqrt}</p>
                        </div>
                        : <></>
                    
                }
                {
                    this.props.math.error ? <p> {this.props.math.error}</p> : <></>
                }
            </div>
        );
    };
};


const mapStateToProps = ({ counter, math }) => ({
    counter,
    math,
});

const mapDispatchToProps = dispatch => ({
    incCounter: () => dispatch(incCounter()),
    decCounter: () => dispatch(decCounter()),
    startComputingT: value => dispatch(startComputing(value)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);