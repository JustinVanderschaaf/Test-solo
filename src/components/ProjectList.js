import React from "react";

import { useDispatch, useSelector } from "react-redux";

function ProjectList() {
  const projectPhotos= useSelector((store) => store.projectPhotoReducer);
  const user = useSelector((store) => store.user);
  console.log("this is user",user );
  console.log("projectPhotos is ", projectPhotos);

  return (
    <div className="container">
      <ul>
        {projectPhotos.map((photo) => (
          <li key={photo.url} className="photo">
            {photo.description} <img src={`uploads/${photo.url}`} />{" "}
            {user.id === photo.user_id && <Delete itemId={photo.id} />}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
