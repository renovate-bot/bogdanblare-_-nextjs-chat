import React, { useState, useEffect, useContext } from "react";
import { Context } from "../context";
import { useRouter } from "next/router"
import dynamic from "next/dynamic";

const ChatEngine = dynamic(() =>
import("react-chat-engine").then((module) => module.ChatEngine)
);
const MessageFormSocial = dynamic(() =>
import("react-chat-engine").then((module) => module.MessageFormSocial)
);

export default function Chats() {
  const { username, secret } = useContext(Context);
  const [ showChat, setShowChat ] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof document !== null) {
      setShowChat(true);
    }
  }, []);

  useEffect(() => {
    if (username.lenght === 0 || secret.lenght === 0) router.push("/")
  });

  if (!showChat) return <div />;

  return (
    <div className="background">
     <div className="shadow">
      <ChatEngine
        height="calc(100vh - 200px)"
        projectID="89b9a160-f387-4998-af40-de3d522322a3"
        userName={username}
        userSecret={secret}
        renderNewMessageForm={() => <MessageFormSocial/>}
        />
    </div>
  </div>
  );
}
