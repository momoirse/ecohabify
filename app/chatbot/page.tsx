"use client";

import React from "react";
import { ClientMotionDiv } from "../components/home_assets/ClientMotion";
import { MyPhoto } from "../components/home_assets/my_photo";
import Chatbot from "../components/chatbot_assets/Chatbot";
import {
  ThemedContainer,
  ThemedH1,
  ThemedH3,
  ThemedP,
} from "../components/ThemedComponents";

export default function ChatBot() {
  return (
    <ClientMotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="min-h-screen py-20 pt-20"
    >
      <Chatbot />
      {/* add chat bot here */}
    </ClientMotionDiv>
  );
}
