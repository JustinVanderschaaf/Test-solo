import React from "react";

import { useDispatch, useSelector } from "react-redux";

function ProjectList() {
  const shelf = useSelector((store) => store.shelfReducer);
  const user = useSelector((store) => store.user);
  console.log(user, "***********is user");
  console.log("shelf is ", shelf);

  return (
    <div className="container">
      <ul>
        {shelf.map((item) => (
          <li key={item.url} className="photo">
            {item.description} <img src={`uploads/${item.url}`} />{" "}
            {user.id === item.user_id && <Delete itemId={item.id} />}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
