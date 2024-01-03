import React, { useState, useEffect } from "react";

//INTERNAL IMPORT
import { useStateContext } from "../Context/index";
const index = () => {
  //STATE MANAGEMENT VARIABLE
  const { DAPP_NAME, listMembership } = useStateContext();
  return (
    <div className="icon-custom">
      <p>{DAPP_NAME}</p>
      <button onClick={() => listMembership()}>LIST MEMBERSHIP</button>
    </div>
  );
};

export default index;
