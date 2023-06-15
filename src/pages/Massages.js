import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPosts, deletePost, selectPosts} from '../redux/reducers/postSlice';

function Messages() {
    const dispatch = useDispatch();
    const userId = 1;
    const posts = useSelector(selectPosts);

    useEffect(() => {
        dispatch(fetchPosts(userId));
    }, [dispatch, userId]);

    const handleDeletePost = (postId) => {
        dispatch(deletePost({userId, postId})).then(() => {
            dispatch(fetchPosts(userId))
        });
    };

    const filteredPosts = posts.filter((post) => post.isRead === 0);
    console.log(filteredPosts)

    return (
        <div>
            <h1>Post List</h1>
            {filteredPosts.map((post) => (
                <div key={post.id}>
                    <h2>{post.message}</h2>
                    <button onClick={() => handleDeletePost(post.id)}>Delete</button>
                    <button>View More</button>
                </div>
            ))}
        </div>
    );
}

export default Messages;
