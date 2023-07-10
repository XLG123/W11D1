import { useState, useEffect } from "react";

function Message({ featherCount }) {
  const [sizeClass, setSizeClass] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (featherCount <= 0) {
      setMessage("Oh my! Your bird is naked!");
    } else if (featherCount >= 10) {
      setMessage("Full Turkey!");
    } else {
      setMessage("Coming along...");
    }
  }, [featherCount])

  // useEffect(() => {
  //   // console.log('Message', size);
  //   let className = "";
  //   switch (size) {
  //     case "m":
  //       className = "medium";
  //       break;
  //     case "l":
  //       className = "large";
  //       break;
  //     case "xl":
  //       className = "xlarge";
  //       break;
  //     default:
  //       className = "small";
  //       break;
  //   }
  //   // console.log(className);
  //   setSizeClass(className);
  // }, [size]);

  return (
    <div className = {`message ${sizeClass}`}>
      {message}
    </div>
  );
};

export default Message;