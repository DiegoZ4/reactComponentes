import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  componentWillMount(){
      console.log("Hola estoy ejecutando el metodo Will Mount");
  }

  componentDidMount(){
      console.log("Hola estoy ejecutando el metodo Did Mount");
  }

  componentWillUnmount(){
      console.log("Hola estoy ejecutando el metodo Will Unmount");
  }

  componentWillReceiveProps(){
      console.log("Hola estoy ejecutando el metodo Will Receive Props");
  }

  componentShouldUpdate(){
      console.log("Hola estoy ejecutando el metodo Should Update");
  }

  componentWillUpdate(){
      console.log("Hola estoy ejecutando el metodo Will Update");
  }

  render(){

    return(
      <div>
        <input
            type={ this.props.type }
            id={ this.props.id } />
      </div>
    );

  }
}

Input.propTypes = {
  id:PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
}

export default Input;
