
import React, { useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from "react";
import ProjectList from "../ProjectList"




function AddProject () {

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');



  useEffect(() => {
    dispatch({
      type: "GET_SHELF",
    });
  }, []);

  // const itemToAdd = {
  //     description: description,
  //     image_url: image,
  //     user_id: user.id
  // }

  // const onAddItem = (evt) => {
  //     evt.preventDefault();
  //     console.log('itemToAdd is:', itemToAdd);
  
  //     dispatch({ 
  //         type: 'ADD_ITEM',
  //         payload: itemToAdd
  //     });
  
  // };

  return (
      <div>
          <h2>Add Item to Shelf</h2>
          <form  action="/api/add" method="post" encType="multipart/form-data" >
              <label htmlFor='description'>Description</label>
              <br></br>
              <input
                  value={description}
                  onChange={evt => setDescription(evt.target.value)}
              />
              {/* <br></br>
              <label htmlFor='image'>Image URL</label>
              <br></br>
              <input
                  value={image}
                  onChange={evt => setImage(evt.target.value)}
              /> */}
              <br></br>
              <input type="file" name="avatar" />
              <button>Add Item</button>
              <ProjectList/>
          </form> 
      </div>
  );
}

export default AddProject;








// function UserPage() {
//   // this component doesn't do much to start, just renders some user reducer info to the DOM
//   
//   return (
//     <div className="container">
//       <h2>Welcome, {user.username}!</h2>
//       <p>Your ID is: {user.id}</p>
//       <LogOutButton className="btn" />
//     </div>
//   );
// }

// // this allows us to use <App /> in index.js
// export default UserPage;
