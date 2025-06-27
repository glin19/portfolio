import { supabase } from './supabase'

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export async function submitContactForm(data: ContactFormData) {
  try {
    // Debug: Test Supabase connection
    console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL)
    console.log('Form data:', data)

    const { data: result, error } = await supabase
      .from('contacts')
      .insert([
        {
          name: data.name,
          email: data.email,
          message: data.message
        }
      ])
      .select()

    if (error) {
      throw error
    }

    return { success: true, data: result }
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    }
  }
}