import React from "react";
import { SideBar, Chat, Help, History, Subscription, Sitting } from "./index";

const Chatting = () => {
  return (
    <section className="chatting-wrapper pt-0">
      <SideBar />
      <div className="tab-content">
        <Chat />

        <Help />
        <History />
        <Subscription />
        <Sitting />
      </div>
    </section>
  );
};

export default Chatting;
