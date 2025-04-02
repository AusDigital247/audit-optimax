
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const ANYSCALE_API_URL = 'https://api.endpoints.anyscale.com/v1/chat/completions';
const MODEL = 'mistralai/Mixtral-8x7B-Instruct-v0.1';

// Get the API key from environment variables
const ANYSCALE_API_KEY = Deno.env.get('ANYSCALE_API_KEY');

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
    if (!ANYSCALE_API_KEY) {
      console.error('Missing ANYSCALE_API_KEY environment variable');
      return new Response(
        JSON.stringify({ error: 'API key not configured' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    const { prompt, systemPrompt, type } = await req.json();
    
    console.log('Processing AI content request with prompt:', prompt);
    console.log('System prompt:', systemPrompt || 'Default system prompt');
    console.log('Request type:', type || 'Default content type');
    
    // Forward to Anyscale API
    const response = await fetch(ANYSCALE_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${ANYSCALE_API_KEY}`,
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

    // If the response is not successful, throw an error
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Anyscale API error:', errorData);
      return new Response(
        JSON.stringify({ error: errorData.error?.message || 'Unknown API error' }),
        { 
          status: response.status, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Handle successful response
    const data = await response.json();
    return new Response(
      JSON.stringify({ content: data.choices[0].message.content }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  } catch (error) {
    console.error('Edge function error:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Unknown error' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
