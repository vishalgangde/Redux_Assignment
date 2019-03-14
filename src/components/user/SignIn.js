import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { signInAction} from '../../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SignIn extends React.Component {
    renderError({ touched, error }) {
        //console.log({error});
        //console.log({touched})

        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({ input, type, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} type={type} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );

    }

    onSubmit = (formValues) => {
        
        this.props.signInAction(formValues);
        console.log( this.props.signInAction(formValues));
        //console.log('onSubmit', callback);
    }
    
    


    render() {
    //console.log(this.props);
        return (
            <div>
                <div>
                     <h2>Log-in Here </h2>
                </div>
                <div className="ui secondary pointing menu">
                    <div className="right menu">
                        <button className="ui red button " >
                            <Link to="/home" className="item" >Log Out</Link>
                        </button>
                    </div>
                </div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                    <Field
                        name="username"
                        type="text"
                        component={this.renderInput}
                        label="UserName"
                    />
                    <Field
                        name="password"
                        type="password"
                        component={this.renderInput}
                        label="Password"
                    />
                    <button className="ui button primary">Submit</button>
                </form>
            </div>

        );
    }
}

    const validate = (formValues) => {
    const errors = {};

        if (!formValues.username) {
            errors.username = 'Must enter valid user name';
        }
        else if (formValues.username.length < 15) {
            errors.username = 'Must be 15 characters or less'
        }

        if (!formValues.password) {
            errors.password = 'Required';
        }
        if (!formValues.cfm_password) {
            errors.cfm_password = 'Required';
        } else if (formValues.cfm_password !== formValues.password) {
            errors.cfm_password = 'Password mismatched';
        }
        return errors;

    }

    const logVal = reduxForm({
    form: 'SignIn',
    validate
    })(SignIn);

    export default connect(null, { signInAction})(logVal);