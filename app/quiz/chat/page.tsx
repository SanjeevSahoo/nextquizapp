"use client";

import { useEffect } from "react";
import io from "Socket.IO-client";
let socket;

const Home = () => {
  const socketInitializer = async () => {
    await fetch("/api/socket");
    socket = io();

    socket.on("connect", () => {
      console.log("connected");
    });
  };

  useEffect(() => {
    socketInitializer();
  }, []);

  return null;
};

export default Home;
