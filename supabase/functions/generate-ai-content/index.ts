
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

// Anyscale API configuration
const ANYSCALE_API_URL = 'https://api.endpoints.anyscale.com/v1/chat/completions';
const MODEL = 'mistralai/Mixtral-8x7B-Instruct-v0.1';

// CORS headers for the request
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get the request payload
    const { prompt, systemPrompt } = await req.json();
    
    // Use API key from Supabase Vault
    const apiKey = Deno.env.get('ANYSCALE_API_KEY');
    
    if (!apiKey) {
      throw new Error('ANYSCALE_API_KEY is not set in Supabase secrets');
    }

    console.log('Making request to Anyscale API');
    
    const response = await fetch(ANYSCALE_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          {
            role: "system",
            content: systemPrompt || "You are a helpful assistant that generates high-quality blog content and writing assistance."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 2000,
      })
    });

    const data = await response.json();
    
    if (!response.ok) {
      console.error('Anyscale API error:', data);
      throw new Error(`Anyscale API error: ${data.error?.message || 'Unknown error'}`);
    }

    const content = data.choices[0].message.content;
    
    return new Response(JSON.stringify({ content }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in generate-ai-content function:', error);
    
    return new Response(JSON.stringify({ 
      error: error.message || 'An error occurred processing your request'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
