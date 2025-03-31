
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Key, Save, RefreshCw, Server, Database } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";

const Settings = () => {
  const { toast } = useToast();
  const [apiKey, setApiKey] = useState('');
  const [isSupabaseKeyConfigured, setIsSupabaseKeyConfigured] = useState(false);
  const [checking, setChecking] = useState(true);
  
  // Load API key from localStorage on component mount and check Supabase configuration
  useEffect(() => {
    const savedApiKey = localStorage.getItem('anyscaleApiKey');
    if (savedApiKey) {
      setApiKey(savedApiKey);
    }
    
    // Check if Supabase Edge Function is configured
    const checkSupabaseConfiguration = async () => {
      try {
        setChecking(true);
        const { data, error } = await supabase.functions.invoke('generate-ai-content', {
          body: { 
            prompt: "Test connection", 
            systemPrompt: "Just respond with 'Connection successful'" 
          }
        });
        
        if (!error && data) {
          setIsSupabaseKeyConfigured(true);
        } else {
          console.warn('Supabase Edge Function check failed:', error);
          setIsSupabaseKeyConfigured(false);
        }
      } catch (e) {
        console.warn('Error checking Supabase configuration:', e);
        setIsSupabaseKeyConfigured(false);
      } finally {
        setChecking(false);
      }
    };
    
    checkSupabaseConfiguration();
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
        
        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-navy dark:text-white flex items-center">
            <Key className="mr-2 h-6 w-6 text-teal" /> API Configuration
          </h2>
          
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <Server className="mr-2 h-5 w-5 text-teal" />
              <h3 className="text-lg font-medium text-navy dark:text-white">Supabase API Configuration</h3>
            </div>
            
            {checking ? (
              <p className="text-gray-600 dark:text-gray-300">Checking Supabase configuration...</p>
            ) : (
              <div className="flex items-center space-x-2">
                <Badge variant={isSupabaseKeyConfigured ? "success" : "destructive"} className={`${isSupabaseKeyConfigured ? 'bg-green-500' : 'bg-red-500'} text-white`}>
                  {isSupabaseKeyConfigured ? 'Configured' : 'Not Configured'}
                </Badge>
                <p className="text-gray-600 dark:text-gray-300">
                  {isSupabaseKeyConfigured 
                    ? 'The Anyscale API key is successfully configured in Supabase. AI tools will use this key.' 
                    : 'Anyscale API key not detected in Supabase. Contact your administrator to configure it.'}
                </p>
              </div>
            )}
          </div>
          
          <Separator className="my-6" />
          
          <div>
            <div className="flex items-center mb-4">
              <Database className="mr-2 h-5 w-5 text-teal" />
              <h3 className="text-lg font-medium text-navy dark:text-white">Browser Storage API Key (Fallback)</h3>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {isSupabaseKeyConfigured 
                ? 'The key below is a fallback and will only be used if the Supabase configuration is unavailable.' 
                : 'Since no Supabase API key is configured, the browser storage key below will be used for AI features.'}
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
            <li>Copy the API key and paste it in the field above</li>
            <li>Click "Save API Key" to store it locally in your browser</li>
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
