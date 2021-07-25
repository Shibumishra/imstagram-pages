import React,{useState} from 'react'
import { FaComment, FaTelegramPlane, FaRegHeart } from "react-icons/fa";

const Posts = () => {
    const [posts, setpost] = useState([
        {id:1, image: "https://images.unsplash.com/photo-1502818364365-08cda033fee1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=890&q=80" , name: "Vivek", comment: "There is no such thing as a perfect person, but someone’s heart can have a perfect intention."},
        {id:2, image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" , name: "Rajnish", comment: "If there would be an award for being lazy, I would send someone to pick it up for me."}
    ])

    const postComment= (e) => {
        e.preventDefault();
    }
    return (
     <>
     {posts.map(post=>(
        <div className="posts" key={post.id}>
        <div className="posts_header">
            <div className="posts_header_avator">{post.name[0]}</div>
            <div className="posts_header-name">{post.name}</div>
        </div>
        <div className="posta_img">
            <img src={post.image} alt={post.name} />
        </div>
        <div style={{marginLeft: "10px"}}>
        <FaRegHeart className="navbar__icons" style={{margin: "5px", color: "red"}} />
        <FaComment className="navbar__icons" style={{margin: "5px"}} />
        <FaTelegramPlane className="navbar__icons" style={{margin: "5px"}}/>
        </div>
        <div>
            <span className="posts-header-avator">{post.name[0]}</span><p style={{ margin: "10px 20px"}}>{post.comment}</p>
        </div>
        <form onSubmit={postComment}>
                  <input type="text" 
                    className="comment_input" 
                    placeholder="Add a comment.."
                    required 
                  />
                </form> 
    </div>
     ))}
     </>
    );
};

export default Posts