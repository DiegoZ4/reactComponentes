import React, { Component } from 'react';
import './App.css';

/* Components */
import Image from './components/Image';
import Input from './components/Input';

class App extends Component {

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

  constructor() {
    super();

    this.state = {
      inputType: 'text'
    }

    this.onClickChild = this.onClickChild.bind(this);
  }

  // onClick(e) {
  //   this.setState({ text2: "SIEMPRE" });
  // }

  onClickChild(e){
    // alert(0);
    this.setState( {inputType: 'number'} );
  }

  render(){
    return(

      <div>

        <Image
              id={1}
              src={'https://www.fcbarcelona.com/photo-resources/2020/01/15/c73b46a6-adf8-4823-93fe-106cbde2b968/mini_3200x2000-NOTICIA-HORARI_INTERNACIONAL-GRANADA.jpg?width=1200&height=525'}
              onClickChild={this.onClickChild}/>
        <Input id={2} type={this.state.inputType}/>

      </div>

    )
  }
}

export default App;
