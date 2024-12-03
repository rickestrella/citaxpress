import React from "react";
import "./notification.module.css"

interface NotificationProps {
    content: string;
    type?: string;
}

const Notification: React.FC<NotificationProps> = ({ content, type }) => {
  return (
    <div className={`notification ${type === "error" ? "bg-red-700" : ""}`}>
      <p>{content}</p>
      <span className="progress"></span>
    </div>
  );
};

export default Notification;
