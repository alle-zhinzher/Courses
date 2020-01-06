import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeColor } from '../../actions/color'
import './DivColor.scss'

export class DivColor extends Component {
    state = {
        color: 'blue' 
    }

    chengeColor = (e) => e.target.style.backgroundColor = "red"
    render() {
        return (
            <div>
    
                <div onClick={this.chengeColor} className={`div div--${this.state.color}`}>ewrewr</div>
            </div>
        )
    }
}

const mapStateToProps = ({color}) => ({
    color
})

const mapDispatchToProps = dispatch =>({
    changeColor: () => dispatch(changeColor())
})

export default connect(mapStateToProps, mapDispatchToProps)(DivColor)
