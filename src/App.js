import React from 'react';
import './App.css';
import Header from './Header' ;
import Items from './Items' ;

class App extends React.Component {
  constructor(props) {
    super(props) ;
    this.handleInput = this.handleInput.bind( this ) ;
    this.addState = this.addState.bind( this ) ;
    this.deleteOneItem =  this.deleteOneItem.bind( this ) ;
    this.handleChangeType = this.handleChangeType.bind( this ) ;
    this.state = {
      items : [] ,
      message: '' ,
    } ;
  }

  handleInput(e) {
    this.setState( {
      message : e.target.value ,
    } ) ;
  }
  
  addState() {
    if ( this.state.message === '' ) {
      return null ;
    }
    this.setState( (state)=>{
      return {
        items : [ ...state.items , { message : state.message , type : true } ] ,
        message : '' ,
      }
    } ) ;
  }

  deleteOneItem( index ) {
    this.setState( ( state ) => {
      state.items.splice( parseFloat(index) , 1 ) ;
      return state.items ;
    } ) ;
  }

  handleChangeType(event) { 
    this.setState( (state) => { debugger ;
      state.items[parseFloat(event)].type = !state.items[parseFloat(event)].type ;
      return state ;
    } ) ;
  }

  render() {
    console.log( this.state ) ;
    const conteiner = {
      width : '700px' ,
      margin : '20px auto' ,
    }
    return (
      <div style = {conteiner} >
        <Header onChange = {this.handleInput} onClick = {this.addState} value = {this.state.message} />
        <Items state = {this.state} deleteOneItem = { this.deleteOneItem } changeType = {this.handleChangeType} />
      </div>
    )
  }
}

export default App ;