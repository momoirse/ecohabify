"use client";

import React from "react";
import { ClientMotionDiv } from "../components/home_assets/ClientMotion";
import { MyPhoto } from "../components/home_assets/my_photo";
import {
  ThemedContainer,
  ThemedH1,
  ThemedH3,
  ThemedP,
} from "../components/ThemedComponents";

export default function Team() {
  return (
    <ClientMotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-24 pt-32"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ThemedH1 className="mb-8">About EcoHabify</ThemedH1>

          <ThemedContainer>
            <MyPhoto />
          </ThemedContainer>
        </div>
      </div>
    </ClientMotionDiv>
  );
}
