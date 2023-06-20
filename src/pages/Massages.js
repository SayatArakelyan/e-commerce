import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, deletePost, selectPosts } from '../redux/reducers/postSlice';
import { Collapse, Button } from 'antd';
import jwt_decode from "jwt-decode";

const { Panel } = Collapse;

function Messages({user}) {
    const dispatch = useDispatch();
    const token = JSON.parse(user);
    const decoded = jwt_decode(token);
    const userId = decoded.id;
    const posts = useSelector(selectPosts);


    useEffect(() => {
        dispatch(fetchPosts(userId));
    }, [dispatch, userId]);

    const handleDeletePost = (postId) => {
        dispatch(deletePost({ userId, postId })).then(() => {
            dispatch(fetchPosts(userId));
        });
    };

    const filteredPosts = posts.filter((post) => post.isRead === 0);
    console.log(posts)

    return (
        <div>
            <h1>Post List</h1>
            <Collapse accordion>
                {filteredPosts.map((post) => (
                    <Panel header={post.message} key={post.id}>
                        <div>
                            <p>{post.message}</p>
                            <Button onClick={() => handleDeletePost(post.id)} style={{backgroundColor:"#000c24"}}>Delete</Button>

                        </div>
                    </Panel>
                ))}
            </Collapse>
        </div>
    );
}

export default Messages;
