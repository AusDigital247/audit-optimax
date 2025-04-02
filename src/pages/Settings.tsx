
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Key, Save, RefreshCw, Server, Database, CheckCircle2, AlertCircle } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Settings = () => {
  const { toast } = useToast();
  const [apiKey, setApiKey] = useState('');
  const [edgeFunctionStatus, setEdgeFunctionStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [edgeFunctionMessage, setEdgeFunctionMessage] = useState('Checking Edge Function status...');
  const [checking, setChecking] = useState(true);
  
  // Load API key from localStorage on component mount and check Edge Function status
  useEffect(() => {
    const savedApiKey = localStorage.getItem('anyscaleApiKey');
    if (savedApiKey) {
      setApiKey(savedApiKey);
    }
    
    // Check if Edge Function is working
    const checkEdgeFunction = async () => {
      try {
        setChecking(true);
        // Try to call the edge function with a simple test prompt
        const { data, error } = await supabase.functions.invoke('anyscale-chat', {
          body: { 
            prompt: 'Test connection', 
            systemPrompt: 'Respond with OK if you can see this message.',
            type: 'test'
          }
        });

        if (error) {
          console.error('Edge function error:', error);
          setEdgeFunctionStatus('error');
          setEdgeFunctionMessage(`Edge Function error: ${error.message || 'Unknown error'}`);
        } else {
          setEdgeFunctionStatus('success');
          setEdgeFunctionMessage('Edge Function is working properly. You can now use the AI features.');
        }
      } catch (e) {
        console.error('Error checking Edge Function:', e);
        setEdgeFunctionStatus('error');
        setEdgeFunctionMessage('Could not connect to Edge Function. Please check your Supabase setup.');
      } finally {
        setChecking(false);
      }
    };
    
    checkEdgeFunction();
  }, []);
  
  const handleSaveApiKey = () => {
    try {
      localStorage.setItem('anyscaleApiKey', apiKey);
      toast({
        title: "API Key Saved",
        description: "Your Anyscale API key has been saved successfully to browser storage.",
        variant: "default",
      });
    } catch (error) {
      console.error("Error saving API key:", error);
      toast({
        title: "Error Saving API Key",
        description: "There was an error saving your API key. Please try again.",
        variant: "destructive",
      });
    }
  };
  
  const handleClearApiKey = () => {
    localStorage.removeItem('anyscaleApiKey');
    setApiKey('');
    toast({
      title: "API Key Cleared",
      description: "Your Anyscale API key has been removed from browser storage.",
      variant: "default",
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <Helmet>
        <title>Settings | SEO Audit Tool</title>
        <meta name="description" content="Configure your SEO Audit Tool settings and API keys." />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-navy dark:text-white">Settings</h1>
        
        <Alert 
          variant={edgeFunctionStatus === 'success' ? "default" : "destructive"}
          className="mb-6"
        >
          <div className="flex items-center gap-2">
            {edgeFunctionStatus === 'loading' ? (
              <div className="animate-spin h-5 w-5 border-2 border-primary border-t-transparent rounded-full"></div>
            ) : edgeFunctionStatus === 'success' ? (
              <CheckCircle2 className="h-5 w-5" />
            ) : (
              <AlertCircle className="h-5 w-5" />
            )}
            <AlertTitle>Edge Function Status</AlertTitle>
          </div>
          <AlertDescription>{edgeFunctionMessage}</AlertDescription>
        </Alert>
        
        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-navy dark:text-white flex items-center">
            <Key className="mr-2 h-6 w-6 text-teal" /> API Configuration
          </h2>
          
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <Server className="mr-2 h-5 w-5 text-teal" />
              <h3 className="text-lg font-medium text-navy dark:text-white">Supabase Edge Function</h3>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              This application uses a Supabase Edge Function to securely proxy requests to the Anyscale API.
              The Edge Function avoids CORS issues and provides better security by keeping your API key on the server side.
            </p>
            
            <div className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-800">
              <h4 className="font-medium mb-2">Important Note</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                The Anyscale API key should be configured as a secret in your Supabase project.
                Go to Supabase Dashboard &gt; Settings &gt; API &gt; Edge Function Secrets 
                and add a secret named <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">ANYSCALE_API_KEY</code> with your API key.
              </p>
            </div>
          </div>
          
          <Separator className="my-6" />
          
          <div>
            <div className="flex items-center mb-4">
              <Database className="mr-2 h-5 w-5 text-teal" />
              <h3 className="text-lg font-medium text-navy dark:text-white">Browser Storage API Key (Legacy)</h3>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The browser storage method is no longer used with the Edge Function approach.
              This setting is kept for backward compatibility only.
            </p>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="apiKey" className="text-navy dark:text-white">Anyscale API Key (Browser Storage)</Label>
                <Input
                  id="apiKey"
                  type="password"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="Enter your Anyscale API key"
                  className="mt-1"
                />
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Your API key is stored locally in your browser and is never sent to our servers.
                </p>
              </div>
              
              <div className="flex gap-4">
                <Button onClick={handleSaveApiKey} className="bg-teal hover:bg-teal-dark flex items-center">
                  <Save className="mr-2 h-4 w-4" /> Save API Key
                </Button>
                <Button variant="outline" onClick={handleClearApiKey} className="flex items-center">
                  <RefreshCw className="mr-2 h-4 w-4" /> Clear API Key
                </Button>
              </div>
            </div>
          </div>
        </Card>
        
        <Separator className="my-8" />
        
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4 text-navy dark:text-white">How to Get an Anyscale API Key</h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-600 dark:text-gray-300">
            <li>
              Visit the <a href="https://anyscale.com/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">Anyscale website</a>
            </li>
            <li>Create an account or sign in to your existing account</li>
            <li>Navigate to the API section in your account settings</li>
            <li>Generate a new API key</li>
            <li>Copy the API key</li>
            <li>Go to your Supabase project dashboard and add the key as an Edge Function secret named <code className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded">ANYSCALE_API_KEY</code></li>
          </ol>
          <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
            <p className="text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> The Anyscale API is a paid service. You will need a valid subscription to use their API services.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
