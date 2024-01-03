import React from "react";
import { Chatting, Modal } from "../Components/Chat/index";

const chat = () => {
  return (
    <div>
      <Chatting />
      <Modal />
      <script type="module" src="script.js"></script>;
    </div>
  );
};

export default chat;
