import React, { useState } from "react";

function Notification({ children, getData }) {
  const [isClosed, setIsClosed] = useState(false);

  const closeNotify = () => {
    setIsClosed(true);
  };

  if (isClosed) {
    return null;
  }

  return (
    <div className={getData ? "notificationSucess" : "notificationFailed"}>
      <div className="notifyChildren">{children}</div>
      <div className="closeBtn_ver_z" onClick={closeNotify}>
        X
      </div>
    </div>
  );
}

export default Notification;
