"use client";

import React, { useState } from "react";
import { ClientMotionDiv } from "../components/home_assets/ClientMotion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCity,
  FaNetworkWired,
} from "react-icons/fa";
import {
  ThemedContainer,
  ThemedH1,
  ThemedH2,
  ThemedH3,
  ThemedP,
  ThemedInput,
  ThemedTextarea,
  ThemedButton,
  ThemedLabel,
} from "../components/ThemedComponents";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    urbanChallenge: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement RIACT-specific form submission logic
    console.log("RIACT Urban Resilience Inquiry:", formData);
    alert(
      "Thank you for your urban resilience inquiry! Our team will review and respond soon."
    );
    setFormData({ name: "", email: "", organization: "", urbanChallenge: "" });
  };

  const contactInfo = [
    {
      icon: FaCity,
      title: "Urban Research Hub",
      description: "RIACT Urban Resilience Research Center @tecnico ULisboa",
      color: "text-green-600",
    },
    {
      icon: FaEnvelope,
      title: "Email",
      description: "seyedi.rezvani@tecnico.ulisboa.pt",
      color: "text-green-600",
    },
    {
      icon: FaNetworkWired,
      title: "Community Network",
      description: "Global Urban Adaptation Platform",
      color: "text-purple-600",
    },
  ];

  return (
    <ClientMotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-24 pt-32"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <ThemedH1 className="text-center mb-12">
            Connect with RIACT Urban Resilience (DEMO INFORMATION - JUST TESTING
            IN DEVELOPMENT MODE)
          </ThemedH1>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <ThemedContainer className="p-8">
              <ThemedH2 className="mb-8">Urban Resilience Network</ThemedH2>
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center mb-6">
                  <div className={`text-4xl mr-6 ${info.color}`}>
                    <info.icon />
                  </div>
                  <div>
                    <ThemedH3 className="text-xl mb-2">{info.title}</ThemedH3>
                    <ThemedP>{info.description}</ThemedP>
                  </div>
                </div>
              ))}
            </ThemedContainer>

            {/* Contact Form */}
            <ThemedContainer className="p-8">
              <ThemedH2 className="mb-8">Urban Challenge Inquiry</ThemedH2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <ThemedLabel htmlFor="name">Name</ThemedLabel>
                  <ThemedInput
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4">
                  <ThemedLabel htmlFor="email">Email</ThemedLabel>
                  <ThemedInput
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="mb-4">
                  <ThemedLabel htmlFor="organization">Organization</ThemedLabel>
                  <ThemedInput
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Your Organization"
                  />
                </div>
                <div className="mb-6">
                  <ThemedLabel htmlFor="urbanChallenge">
                    Urban Resilience Challenge
                  </ThemedLabel>
                  <ThemedTextarea
                    id="urbanChallenge"
                    name="urbanChallenge"
                    value={formData.urbanChallenge}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Describe the urban resilience challenge you're addressing..."
                  />
                </div>
                <ThemedButton type="submit" className="w-full">
                  Submit Urban Resilience Inquiry
                </ThemedButton>
              </form>
            </ThemedContainer>
          </div>
        </div>
      </div>
    </ClientMotionDiv>
  );
}
