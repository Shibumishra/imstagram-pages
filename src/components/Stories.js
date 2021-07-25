import React,{ useState } from 'react';

const Stories = () => {
    const [state, setState] = useState([
        {id:1, image: "https://images.unsplash.com/photo-1619194617062-5a61b9c6a049?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" , name: "Vivek"},
        {id:2, image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" , name: "Rajnish"},
        {id:3, image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" , name: "Utkarsh"},
        {id:4, image: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=402&q=80" , name: "Nikhil"},
        {id:5, image: "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" , name: "Shashi"},
        {id:6, image: "https://images.unsplash.com/photo-1492447273231-0f8fecec1e3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80" , name: "Hariom"},
        {id:7, image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=364&q=80" , name: "Shibu"},
        {id:8, image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80" , name: "Deepika"},
        {id:9, image: "https://images.unsplash.com/photo-1621353269062-6aa0165576f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80" , name: "Parash"}
    ]);
    return (
    <div className="stories">
      {state.map((user)=>(
        <div className="stories_info" key={user.id}>
            <div className="stories_img">
                <span>
                    <img src={user.image} alt={user.name} />
                </span>
            </div> 
            <div className="stories_name">{user.name}</div>
        </div>
        ))}
    </div> 
    );
}
 
export default Stories;