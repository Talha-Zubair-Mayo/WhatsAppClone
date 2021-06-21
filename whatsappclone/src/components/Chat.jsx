import React from "react";
import "../Styles/Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";

function Chat({ messaged }) {
  return (
    <>
      <div className="chat">
        <div className="chat_header">
          <Avatar />
          <div className="chat_headerinfo">
            <h3>Room Name</h3>
            <p>Last Seen At</p>
          </div>
          <div className="chat_headerRight">
            <IconButton>
              <SearchOutlinedIcon />
            </IconButton>
            <IconButton>
              <AttachFileIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>

        <div className="chat_body">
          {messaged.map((mess) => {
            return<p className={`chat_Message ${mess.recieved&&"Chat_reciver"}`}>
              <span className="chatname">{mess.name}</span>
              {mess.message}
              <span className="ChaTtimestamp">{new Date().toUTCString()}</span>
            </p>;
          })}

          {/* <p className="chat_Message Chat_reciver">
            <span className="chatname">Talha</span>
            This is A Message
            <span className="ChaTtimestamp">{new Date().toUTCString()}</span>
          </p> */}
        </div>
        <div className="chat_footer">
          <InsertEmoticonIcon />
          <form>
            <input type="text" placeholder="Type A Message" />
            <button type="submit">Send Message</button>
          </form>
          <MicIcon />
        </div>
      </div>
    </>
  );
}

export default Chat;
