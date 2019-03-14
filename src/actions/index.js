import posts from '../apis/posts';
import post1 from '../apis/post1';
import history from '../history' 


import {
    SIGN_OUT,
    POST_LIST,
    SINGLE_POST_LIST,
    //UPDATE_USER,
    CREATE_POST,
    EDIT_POST,
    DELETE_POST,
    
} from './types'
//import history from '../history';
import {toastr} from 'react-redux-toastr';

//const toastrSuccessFunction = (title,msg) => toastr.success(title,msg)
//const toastrWarningFunction = (title,msg) => toastr.error(title,msg) 



export const signInAction = (formValues) => async (dispatch) => {
    console.log(formValues)

        try{
            //sign api calling with post method also use local storage and toaster
            const response  = await posts.post('/jwt-auth/v1/token',{...formValues});
            console.log(response);
            
            localStorage.setItem("authToken",response.data.token);
            localStorage.setItem("displayname",response.data.user_display_name);
            localStorage.setItem("userId",response.data.user_id);
            console.log('renderAdminList',localStorage.getItem('userId'));
            console.log('renderAdminList',localStorage.getItem('authToken'));
            console.log('renderAdminList',localStorage.getItem('displayname'));
            
            toastr.success(`SignIn Successfully`,`${formValues.username}`)
            history.push('/');
        
        }
        catch(error){
            console.log('renderAdminList',localStorage.getItem('userId'));
            toastr.error(`WARNING!!!Please Try Again`,`${formValues.username}`)
            //toastrSuccessFunction(`SignIn Successful`,`${formValues.username}`)
        }
       
    }
      
//log out action creator with local storage and toaster
export const signOutAction = () => async (dispatch) =>  {

    
    localStorage.removeItem("authToken");
    console.log("authToken",localStorage.removeItem('authToken'));
    
    localStorage.removeItem("displayname");
    console.log("displayname",localStorage.removeItem('displayname'));

    localStorage.removeItem("userId");
    console.log("userId",localStorage.removeItem('userId'));
    
    };

//registration action creator with api calling with post method
export const RegisterUserAction = formValues => async (dispatch) => {
    console.log(formValues)
        try{
            const response = await posts.post('/wp/v2/users/register',{ ...formValues } );
            //toastrSuccessFunction(`${response.data.message}`,`${formValues.username}`)
            console.log(response.data,'RegisterUser');
            toastr.success(`SignIn Successfully`,`${formValues.username}`)
            history.push('/user/signin');
        }
    

        catch(error){
            toastr.error(`WARNING!!!Please Try Again`,`${formValues.username}`)
            //toastrWarningFunction(`Registeration Failed`,`${formValues.username}`);
        }

};

//post-create action creator with post method 
export const createPostAction = formValues => async (dispatch,getState) => {
    try{
    //{user_id} = getState.data()
            const response = await post1.post('/wp/v2/posts', { ...formValues });
            console.log(response);
            dispatch({ type: CREATE_POST, payload: response.data });
            toastr.success(`Create Post Successfully`,`${formValues.username}`)
            history.push('/');
    }
    catch(error){
        toastr.error(`WARNING!!!Please Try Again`,`${formValues.username}`)
    }
};


//list of all post action creator with get method 
export const postListAction = () => async (dispatch) => {
    //console.log(header)
            const response = await posts.get('/wp/v2/posts');
            console.log("postList data",response.data);
            dispatch({ type: POST_LIST, payload: response.data });
};


 //single post action creator with get method
export const SinglePostListAction = id => async (dispatch) => {
            const response = await post1.get(`/wp/v2/posts/${id}`);
            console.log(response);
            dispatch({type: SINGLE_POST_LIST, payload: response.data});
}; 


//edit-post action creator with put method 
export const editPostAction = (id,formValues) => async (dispatch) => {
    try{
            const response = await post1.put(`/wp/v2/posts/${id} `,{...formValues});
            console.log("EditPost",response);
            dispatch({ type: EDIT_POST, payload: response.data });
            toastr.success(`Edit Post Successfully`,`${formValues.username}`)
            history.push('/');
    }

    catch(error){
        toastr.error(`WARNING!!!Please Try Again`,`${formValues.username}`)
    }
};


//delete-post action creator with delete method 
export const deletePostAction = (id) => async (dispatch) => {
    try{
            const response = await post1.delete(`/wp/v2/posts/${id}`);
            console.log("DeletePostid",response);
            dispatch({ type: DELETE_POST, payload: id });
            toastr.success(`Delete Post Successfully`,`${id}`)
            history.push('/');
    }

    catch(error){
        toastr.error(`WARNING!!!Please Try Again`,`${id}`)
    }
};


/*export const userUpdateAction = (id,formValue) => async (dispatch) => {
            const response = await posts.put(`/wp/v2/users/${id}`,{...formValue});
            console.log("userUpdateAction",response);
            dispatch({type: UPDATE_USER, payload : id});
};*/


