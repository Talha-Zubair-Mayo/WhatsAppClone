import { useEffect, useState } from "react";
import "./App.css";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import Pusher from "pusher-js";
import axios from "axios";

function App() {
  const [messaged, setMessage] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/Messages/sync").then((response) => {
      setMessage(response.data);
    });
  }, []);

  useEffect(() => {
    var pusher = new Pusher("5159c83267bb5f62017f", {
      cluster: "mt1",
    });

    var channel = pusher.subscribe("messages");
    channel.bind("inserted", function (Newmessages) {
      setMessage([...messaged, Newmessages]);
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messaged]);

  console.log(messaged);

  return (
    <div className="app">
      <div className="app_body">
        {/* SideBar  */}
        <Sidebar />
        {/* Chat Component */}
        <Chat messaged={messaged} />
      </div>
    </div>
  );
}

export default App;
