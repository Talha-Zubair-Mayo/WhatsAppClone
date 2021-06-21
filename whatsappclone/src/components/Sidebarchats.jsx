import React from "react";
import "../Styles/Sidebarchats.css"
import { Avatar, IconButton } from "@material-ui/core";

function Sidebarchats() {
  return (
    <>
      <div className="Sidebarchat">
       <Avatar />
       <div className="sidebarChat_info">
           <h3>Room Name</h3>
           <p>This Is The Last Message</p>
       </div>
      </div>
    </>
  );
}

export default Sidebarchats;
