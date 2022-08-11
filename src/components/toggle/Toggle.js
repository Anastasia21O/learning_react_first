import React, {Component} from "react";



class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
           // probaTest: false
        };

        // Це зв’язування необхідне, щоб «this» працював у зворотному виклику
        this.handleClick = this.handleClick.bind(this);
    }

    // Ось це трішки не зрозуміле (prevState - попередній стан)
    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

export default Toggle