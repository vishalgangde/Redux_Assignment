import React from 'react';
import { Field,reduxForm} from 'redux-form';
import { createPostAction } from '../../actions/index';  
import { connect } from 'react-redux';



class CreatePost extends React.Component{

    renderError({touched,error}){
        if(touched && error){
            return(
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({input,label,meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        //console.log(meta);
        
        return(
                <div className={className}>
                    <label>{label}</label>
                    
                    <input {...input}  autoComplete="off" />
                    {this.renderError(meta)}
            </div>
        );
        
    }
    /*if(inputType === "select") {
        /* onScroll={this.onScrollThatCallsPreventDefault}
      onScrollPassive={this.onScrollThatJustListens} */
       

    onSubmit = (formValues) => {
        this.props.createPostAction(formValues);
        
    }

    render(){
        //console.log(this.props);
        //if(localStorage.getItem("authToken")){
        return(
            <div>
                
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field inputType="text" name="title" component={this.renderInput} label="Enter Title" />
                <Field inputType="text" name="content" component={this.renderInput} label="Enter Description" />
                <select name="status"  label="Select Status" >
                <option value="publish">publish</option>
                <option value="future">future</option>
                <option value="draft">draft</option>
                <option value="pending">pending</option>
                <option value="private">private</option>
                </select>
            
          
                <button className="ui button primary">Submit</button>
            </form>
            </div>
            
        );
    }
}
//publish, future, draft, pending, private


const validate = (formValues) => {
    const error = {};

    if(!formValues.title && /[^a-zA-Z0-9 ]/.test(formValues)){
        error.title = 'Please Enter a title';
    }
    

    if(!formValues.content){
        error.content = 'Please Enter a description';
    }

    if(!formValues.status){
        error.status = 'Please Enter a Status';
    }

    return error;
}

    const Wrapped = reduxForm({
        form : 'CreatePost',
        validate
    })(CreatePost);

    export default connect(null,{createPostAction})(Wrapped)

