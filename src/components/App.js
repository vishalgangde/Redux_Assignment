import React from 'react';
import {Router, Switch , Route } from 'react-router-dom';
import SignIn from './user/SignIn';
import Register from './user/Register';
import CreatePost from './posts/CreatePost';
import PostList from './posts/PostList';
import DeletePost from './posts/DeletePost';
import EditPost from './posts/EditPostList';
import Header from './Header';
import history from '../history';
import ShowList from './posts/ShowList';

class App extends React.Component{
    render(){
        return(
            <Router history={history}>
            <div className="App">
                <Header />
                <Switch>
                    <Route path='/' exact component={PostList} />   
                    <Route path='/user/signin' exact component={SignIn} />
                    <Route path='/user/register' exact component={Register} />
                    <Route path='/posts/createpost' exact component={CreatePost} />
                    <Route path='/posts/edit/:id' exact component={EditPost} />
                    <Route path="/posts/delete/:id" exact component={DeletePost} />
                    <Route path="/posts/:id" exact component={ShowList} />
                </Switch>
                </div>
            </Router>
        );
    }
}

export default App;