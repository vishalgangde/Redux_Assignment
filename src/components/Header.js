import React from 'react';
import { Link } from 'react-router-dom';
import {signInAction} from '../actions/index';
import {RegisterUserAction} from '../actions/index';
import { connect } from 'react-redux';



class Header extends React.Component{

    render(){
       // if(localStorage.getItem("authToken")){
        
    
        return(
                <div className="ui secondary pointing menu">
                    <button className="ui outline blue button ">
                        <Link to="/" className="item">Posts</Link>
                    </button>
                    
                    <div className="right menu">
                            <button className="ui outline pink button ">
                                 <Link to="/posts/createpost" className="item">Create Post</Link>
                            </button>
                    </div>
                        
                        <div className="right menu">
                            <button className="ui outline button negative" size="lg">
                                    <Link to="/user/signin" className="item" >Sign In</Link>
                                
                            </button>
                        </div>
                        <div className="right menu">
                            <button className="ui outline green button">
                                    <Link to="/user/register" className="item">Registration</Link>
                            </button>
                        </div>
                </div>
                );

                 }   
                
            }
    

    



export default connect (null,{RegisterUserAction,signInAction})(Header);