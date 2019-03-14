import React from 'react';
import { connect } from 'react-redux';
import { editPostAction } from '../../actions/index';
import ListForm from './ListForm';
import _ from 'lodash';


class EditPostList extends React.Component {
  
        
        onSubmit = (formValue) => {
          // console.log(formValue)
           this.props.editPostAction(this.props.match.params.id,formValue);
       };

       render(){
          /* if(!this.props.post){
               return<div>Loading...</div>
           }*/
          
           return(
            <div>
               <h2>Edit Post</h2>
                <ListForm
                    /*initialValues={_.pick(this.formValue.posts.title.rendered)}*/
                    onSubmit={this.onSubmit} 
                />
            </div>
           );
       }
   }




const mapStateToProps = (state,ownProps) => {
        console.log("mapStateToProps",ownProps);
        return {posts : state.post[ownProps.match.params.id]};
};

export default connect(mapStateToProps,{editPostAction})(EditPostList)
//import { Field,reduxForm} from 'redux-form';

