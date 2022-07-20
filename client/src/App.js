import './App.css';
import io from 'socket.io-client';
import { useState } from 'react';

const socket = io.connect("http://localhost:3001");

function App() {
  const [userName, setUserName] = useState("");
  const [room, setRoom] = useState("");

  // establishes connection between the user and the socket.io room
  const joinRoom = () => {

  }

  return (
    <div className="App">
      <h3>Join Chat Room</h3>
      <input
        type="text"
        placeholder="John..."
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Room ID..."
        onChange={(event) => {
          setRoom(event.target.value);
        }}
      />
      <button>Join Room</button>
    </div>
  );
}

export default App;