'use client';

import React, { useState, useEffect } from 'react';
import { 
  testSupabaseConnection, 
  initializeTestTable, 
  fetchTestData 
} from '@/src/lib/supabase';

export default function DatabaseTestPage() {
  const [connectionStatus, setConnectionStatus] = useState<{
    success: boolean;
    message: string;
  }>({ success: false, message: 'Connecting...' });

  const [testData, setTestData] = useState<any[]>([]);

  useEffect(() => {
    async function testConnection() {
      try {
        // Initialize the test table
        const initResult = await initializeTestTable();
        
        if (!initResult.success) {
          setConnectionStatus({
            success: false,
            message: `Table Initialization Failed: ${initResult.error}`
          });
          return;
        }

        // Test connection
        const connectionResult = await testSupabaseConnection();
        
        if (connectionResult.success) {
          // Fetch test data
          const dataResult = await fetchTestData();
          
          if (dataResult.success) {
            setTestData(dataResult.data || []);
            setConnectionStatus({
              success: true,
              message: 'Supabase Connection and Data Fetch Successful!'
            });
          } else {
            setConnectionStatus({
              success: false,
              message: `Data Fetch Failed: ${dataResult.error}`
            });
          }
        } else {
          setConnectionStatus({
            success: false,
            message: `Connection Failed: ${connectionResult.error}`
          });
        }
      } catch (error) {
        setConnectionStatus({
          success: false,
          message: `Unexpected Error: ${String(error)}`
        });
      }
    }

    testConnection();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Supabase Connection Test</h1>
        
        <div 
          className={`
            p-4 rounded-lg mb-4 
            ${connectionStatus.success 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
            }
          `}
        >
          {connectionStatus.message}
        </div>

        {connectionStatus.success && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Test Data:</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              {testData.length > 0 ? (
                <ul className="space-y-2">
                  {testData.map((item) => (
                    <li 
                      key={item.id} 
                      className="bg-white p-2 rounded shadow-sm"
                    >
                      {item.name} (ID: {item.id})
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No test data found.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
