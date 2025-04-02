
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
    // Validate API key configuration
    if (!ANYSCALE_API_KEY) {
      console.error('Missing ANYSCALE_API_KEY environment variable');
      return new Response(
        JSON.stringify({ 
          error: 'API key not configured', 
          details: 'Please add the Anyscale API key in Supabase Edge Function secrets' 
        }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Parse incoming request body
    const { prompt, systemPrompt, type } = await req.json();
    
    // Detailed logging for debugging
    console.log('Processing AI content request:', {
      promptLength: prompt?.length,
      systemPromptLength: systemPrompt?.length,
      requestType: type
    });
    
    // Forward request to Anyscale API
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

    // Enhanced error handling
    if (!response.ok) {
      const errorData = await response.text();
      console.error('Anyscale API error:', {
        status: response.status,
        statusText: response.statusText,
        errorBody: errorData
      });
      
      return new Response(
        JSON.stringify({ 
          error: 'API request failed', 
          details: errorData,
          status: response.status 
        }),
        { 
          status: response.status, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Process successful response
    const data = await response.json();
    return new Response(
      JSON.stringify({ 
        content: data.choices[0].message.content,
        metadata: {
          model: MODEL,
          tokenUsage: data.usage
        }
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  } catch (error) {
    // Comprehensive error logging
    console.error('Edge function error:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });

    return new Response(
      JSON.stringify({ 
        error: 'Unexpected error', 
        details: error.message || 'Unknown error occurred' 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
