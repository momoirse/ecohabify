import { createClient } from '@supabase/supabase-js';

// Create two Supabase clients: one for public access, one for admin operations
export const supabasePublic = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '', 
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '', 
  process.env.SUPABASE_SERVICE_ROLE_KEY || '',
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
);

// Test connection function
export async function testSupabaseConnection() {
  try {
    // Simple test to check connection
    const { data, error } = await supabasePublic
      .from('test_table')
      .select('*')
      .limit(1);

    if (error) {
      console.error('Supabase Connection Error:', error);
      return { success: false, error: error.message };
    }

    console.log('Supabase Connection Successful!', data);
    return { success: true, data };
  } catch (err) {
    console.error('Unexpected Supabase Error:', err);
    return { success: false, error: String(err) };
  }
}

// Advanced table initialization with admin client
export async function initializeTestTable() {
  try {
    // Check if table exists using admin client
    const { data, error: checkError } = await supabaseAdmin
      .from('test_table')
      .select('id', { count: 'exact' });

    if (checkError && checkError.code !== 'PGRST116') {
      console.error('Table Check Error:', checkError);
      return { success: false, error: checkError.message };
    }

    // If table doesn't exist, create it with admin privileges
    if (checkError && checkError.code === 'PGRST116') {
      const { error: createError } = await supabaseAdmin.rpc('create_test_table', {
        table_name: 'test_table'
      });

      if (createError) {
        console.error('Table Creation Error:', createError);
        return { success: false, error: createError.message };
      }
    }

    // Insert test data if table is empty
    const { count, error: countError } = await supabaseAdmin
      .from('test_table')
      .select('*', { count: 'exact' });

    if (countError) {
      console.error('Count Error:', countError);
      return { success: false, error: countError.message };
    }

    if (count === 0) {
      const { error: insertError } = await supabaseAdmin
        .from('test_table')
        .insert([
          { name: 'Test Entry 1' },
          { name: 'Test Entry 2' }
        ]);

      if (insertError) {
        console.error('Insert Error:', insertError);
        return { success: false, error: insertError.message };
      }
    }

    return { success: true };
  } catch (err) {
    console.error('Unexpected Error:', err);
    return { success: false, error: String(err) };
  }
}

// Function to fetch test data
export async function fetchTestData() {
  try {
    const { data, error } = await supabasePublic
      .from('test_table')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Fetch Error:', error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err) {
    console.error('Unexpected Error:', err);
    return { success: false, error: String(err) };
  }
}
