import React from 'react';
import { SinglePostListAction } from '../../actions/index';
import { connect } from 'react-redux';

class ShowList extends React.Component{
    componentDidMount(){
        
        const { id } = this.props.match.params.id;
        this.props.SinglePostListAction(id);
    }


    render(){
        if(!this.props.posts)
        return <div>Loding...</div>;

        return(
            <div>
                <button className="ui outline green button">Show Post</button>
                <h2>{this.props.posts.title.rendered}</h2>
                <h4>{this.props.posts.content.rendered}</h4>
            </div>
        );

        
    }
}


const mapStateToProps = (state,ownProps) => {
    return {posts: state.post[ownProps.match.params.id]};
};

export default connect(mapStateToProps,{SinglePostListAction})(ShowList);