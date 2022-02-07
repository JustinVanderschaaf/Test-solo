// import React, { useState } from "react";
// import LogOutButton from "../LogOutButton/LogOutButton";
// import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from "react";
// import ProjectList from "../ProjectList";
// import axios from "axios";

// function AddProject() {
//   const dispatch = useDispatch();
//   const user = useSelector((store) => store.user);
//   const [subtitle, setSubtitle] = useState("");
//   const [uploaded_file, setUploaded_file] = useState("");

//   const itemToAdd = {
//     description: subtitle,
//     filename: uploaded_file,
//   };

//   useEffect(() => {
//     dispatch({
//       type: "GET_PROJECT_PHOTOS",
//     });
//   }, []);

//   function onFormSubmit(e) {
//     console.log("are we doing stuff?");
//     e.preventDefault();

//     const config = {
//       headers: {
//         contentType: "multipart/form-data",
//       },
//     };
//     axios
//       .post("/api/images", itemToAdd, config)
//       .then((response) => {
//         alert("The file is successfully uploaded");
//       })
//       .catch((error) => {});
//   }

//   return (
//     <>
//       <div className="container">
//         <h2>Welcome, {user.username}!</h2>
//         <p>Your ID is: {user.id}</p>
//       </div>
//       <form onSubmit={onFormSubmit}>
//         <div className="form-group">
//           <input
//             type="file"
//             className="form-control-file"
//             name="uploaded_file"
//             onChange={(evt) => setUploaded_file(evt.target.files[0].name)}
//           />
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Description"
//             name="description"
//             onChange={(evt) => setSubtitle(evt.target.value)}
//           />

//           <input
//             type="submit"
//             value="Add picture!"
//             className="btn btn-default"
//           />
//         </div>
//         <ProjectList />
//       </form>
//       <LogOutButton className="btn" />
//     </>
//   );
// }

// export default AddProject;
