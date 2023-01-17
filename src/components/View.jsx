"use client";
import mongoose from "mongoose";
import { useEffect } from "react";


function View() {
//   useEffect(() => {
//     mongoose
//       .connect(MONGO_URI)
//       .then(() => {
//         console.log("MONGODB CONNECTED!");
//       })
//       .catch((err) => {
//         console.log("MONGODB ERROR : " + err);
//       });
//   }, []);

  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}

export default View;
