"use client";

import React, { useState } from "react";
import { ClientMotionDiv } from "../components/home_assets/ClientMotion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBuilding,
  FaTools,
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
    propertyType: "",
    propertyLocation: "",
    renovationGoals: "",
    energyEfficiencyNeeds: "",
    timeline: "",
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
    console.log("EcoHabify Renovation Inquiry:", formData);
    alert(
      "Thank you for your sustainable renovation inquiry! Our team will contact you soon."
    );
    setFormData({
      name: "",
      email: "",
      propertyType: "",
      propertyLocation: "",
      renovationGoals: "",
      energyEfficiencyNeeds: "",
      timeline: "",
    });
  };

  const contactInfo = [
    {
      icon: FaBuilding,
      title: "(To be opend after approval)",
      description: "(To be opend after approval)",
      color: "text-green-600",
    },
    {
      icon: FaEnvelope,
      title: "Contact Email",
      description: "Mahtabgholipour73@gmail.com, Acmanoori1373@gmail.com",
      color: "text-green-600",
    },
    {
      icon: FaPhone,
      title: "Phone Numbers",
      description: "+98 (939)197-0847, +98 (991)901-3842",
      color: "text-green-600",
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
            Transform Your Home into an Eco-Friendly Space
          </ThemedH1>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <ThemedContainer className="p-8">
              <ThemedH2 className="mb-8">Connect with Our Experts</ThemedH2>
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

            {/* Updated Contact Form */}
            <ThemedContainer className="p-8">
              <ThemedH2 className="mb-8">
                Sustainable Renovation Inquiry
              </ThemedH2>
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
                  <ThemedLabel htmlFor="propertyType">
                    Property Type
                  </ThemedLabel>
                  <ThemedInput
                    type="text"
                    id="propertyType"
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    placeholder="Apartment, House, Historic Building, etc."
                  />
                </div>

                <div className="mb-4">
                  <ThemedLabel htmlFor="propertyLocation">
                    Location in Portugal
                  </ThemedLabel>
                  <ThemedInput
                    type="text"
                    id="propertyLocation"
                    name="propertyLocation"
                    value={formData.propertyLocation}
                    onChange={handleChange}
                    placeholder="City/Region in Portugal"
                  />
                </div>

                <div className="mb-4">
                  <ThemedLabel htmlFor="energyEfficiencyNeeds">
                    Energy Efficiency Goals
                  </ThemedLabel>
                  <ThemedTextarea
                    id="energyEfficiencyNeeds"
                    name="energyEfficiencyNeeds"
                    value={formData.energyEfficiencyNeeds}
                    onChange={handleChange}
                    rows={3}
                    placeholder="What energy efficiency improvements are you looking for?"
                  />
                </div>

                <div className="mb-6">
                  <ThemedLabel htmlFor="renovationGoals">
                    Renovation Goals
                  </ThemedLabel>
                  <ThemedTextarea
                    id="renovationGoals"
                    name="renovationGoals"
                    value={formData.renovationGoals}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Describe your sustainable renovation goals..."
                  />
                </div>
                <div className="mb-4">
                  <ThemedLabel htmlFor="timeline">
                    Expected Timeline
                  </ThemedLabel>
                  <ThemedInput
                    type="text"
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    placeholder="When would you like to start?"
                  />
                </div>
                <ThemedButton type="submit" className="w-full">
                  Start Your Sustainable Renovation Journey
                </ThemedButton>
              </form>
            </ThemedContainer>
          </div>
        </div>
      </div>
    </ClientMotionDiv>
  );
}
