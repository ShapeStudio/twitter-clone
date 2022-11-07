
import "./App.css";
import Tweet from "./Tweet";
import { useEffect, useState } from "react";

export default function NoPermission(props) {
    console.log(props)
  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "#f7a7a6",
        left: 10,
        bottom: 10,
        borderRadius: 12,
        padding: 8
      }}
    >
      <h3 style={{margin:0}}>You do not have permission to perform this action</h3>
    </div>
  );
}