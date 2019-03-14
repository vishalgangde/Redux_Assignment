import React from 'react';
import { connect } from 'react-redux';
import {signOutAction} from '../../actions/index';

class Logout extends React.Component{
  
  onSubmit = () => {
    //console.log(this.props.signInAction(formValues));
    this.props.signOutAction();
    //console.log('onSubmit', callback);
}
  
  
  
  render(){
    return(
      <div  onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">></div>
    );
  }
}


export default connect(null,signOutAction)(Logout);