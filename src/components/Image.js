import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {

  constructor(){
    super();

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    // this.setState({ text2: "SIEMPRE" });
    // alert("Viva el Futbol");
    this.props.onClickChild();
  }

  render(){

    return(
      <div onClick={ this.onClick }>
        <p> { "ID= " + this.props.id } </p>
        <img src={ this.props.src }/>
      </div>
    );

  }
}

Image.propTypes = {

  id:PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  onClickChild:PropTypes.func.isRequired

}

export default Image;
