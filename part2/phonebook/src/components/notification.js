import React from "react";

const Notification = ({ type, message }) => {
  if (message === "") return <div className="msg"></div>;
  if (type === "info") return <div className="info">{message}</div>;
  return <div className="error">{message}</div>;
};

export default Notification;
