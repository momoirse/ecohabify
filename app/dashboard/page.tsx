'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ClientMotionDiv } from '../components/home_assets/ClientMotion';

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <ClientMotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-3xl mx-auto">
        <ClientMotionDiv
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-xl rounded-lg p-8"
        >
          <h1 className="text-4xl font-bold mb-6 text-green-600">
            Your Sustainable Home Journey
          </h1>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Your Profile</h2>
              <div className="space-y-2">
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>User ID:</strong> {user.id}</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Renovation Tools</h2>
              <div className="space-y-4">
                <button 
                  className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
                  onClick={() => router.push('/energy-assessment')}
                >
                  Smart Energy Assessment
                </button>
                <button 
                  className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
                  onClick={() => router.push('/renovation-plan')}
                >
                  Renovation Plan
                </button>
                <button 
                  className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
                  onClick={() => router.push('/contractors')}
                >
                  Find Eco-Friendly Contractors
                </button>
              </div>
            </div>
          </div>
        </ClientMotionDiv>
      </div>
    </ClientMotionDiv>
  );
}
