/*import React from 'react';
import { connect } from 'react-redux';
import { signInAction,signOutAction} from '../src/actions/index';

class GoogleAuth extends React.Component{

    state = {user_id : null};

    /*componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:'930263169550-9177sdnu80f6k3ppgh1iomuncjsfn3fu.apps.googleusercontent.com',
                scope:'email' 
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());



                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) =>{
       if(isSignedIn){
           this.props.signInAction(this.data.token);
       }
       else{
           this.props.signOutAction();
       }
    };

    onSignInClick = (id) => {
        this.props.signInAction(id);
    };

    onSignOutClick = () => {
        this.props.signOutAction();
    };  


    renderAuthButton(){
        if(this.props.formValue=== null){
            return null;
        }
        else if(this.props.formValue){
            return (
                <button onClick={this.onSignOutClick} className="ui red button">
                    <i className=" icon" />
                    Sign Out
                </button>
            );
        }
        else {
            return(
                <button onClick={this.onSignInClick} className="ui red  button">
                    <i className=" icon" />
                    Sign In 
                    </button>
            );
        }
    }

    render(){
        return<div>{this.renderAuthButton()}</div>;
    }
}

/*const mapStateToProps = (state,ownProps) => {
    return{ isSignedIn : state.isSignedIn[ownProps.data.user_id]};
}

export default connect (null,{signInAction,signOutAction})(GoogleAuth);*/