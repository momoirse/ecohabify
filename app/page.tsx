"use client";
import * as dotenv from "dotenv";
dotenv.config();
import React from "react";
import { Hero } from "./components/home_assets/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
