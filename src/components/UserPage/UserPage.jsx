import React, { useState } from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import ProjectList from "../ProjectList";

function AddProject() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const [subtitle, setSubtitle] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    dispatch({
      type: "GET_PROJECT_PHOTOS",
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
    <form action="/api/images" encType="multipart/form-data" method="post">
    <div className="form-group">
      <input type="file" className="form-control-file" name="uploaded_file"/>
      <input type="text" className="form-control" placeholder="Number of speakers" name="description"/>
      <input type="submit" value="Add picture!" className="btn btn-default"/>            
    </div>
    <ProjectList />
    </form>
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
