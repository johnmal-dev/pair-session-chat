import "./ChatRoom.css";
import ChatForm from "../ChatForm/ChatForm";
import ChatMessages from "../ChatMessages/ChatMessages";

function ChatRoom({ socket, messages, setMessages, roomId }) {
  return (
    <div className="ChatRoom">
      <h1 className="title">CHAT ROOM</h1>
      <ChatMessages messages={messages} />
      <ChatForm
        setMessages={setMessages}
        messages={messages}
        socket={socket}
        roomId={roomId}
      />
    </div>
  );
}

export default ChatRoom;