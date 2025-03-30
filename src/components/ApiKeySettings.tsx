
import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Key, Save, Check, RefreshCw } from 'lucide-react';

const ApiKeySettings: React.FC = () => {
  const { toast } = useToast();
  const [apiKey, setApiKey] = useState<string>('');
  const [saved, setSaved] = useState<boolean>(false);

  // Load existing API key from localStorage on component mount
  useEffect(() => {
    const storedKey = localStorage.getItem('anyscaleApiKey');
    if (storedKey) {
      setApiKey(storedKey);
      setSaved(true);
    }
  }, []);

  const handleSaveApiKey = () => {
    if (!apiKey.trim()) {
      toast({
        title: "Error",
        description: "Please enter a valid API key",
        variant: "destructive",
      });
      return;
    }

    localStorage.setItem('anyscaleApiKey', apiKey.trim());
    setSaved(true);
    toast({
      title: "Success",
      description: "API key saved successfully",
      variant: "default",
    });
  };

  const handleClearApiKey = () => {
    localStorage.removeItem('anyscaleApiKey');
    setApiKey('');
    setSaved(false);
    toast({
      title: "API Key Cleared",
      description: "Your API key has been removed from this browser",
      variant: "default",
    });
  };

  return (
    <Card className="glass-morphism border-none">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Key className="h-5 w-5 text-teal" />
          Anyscale API Key Settings
        </CardTitle>
        <CardDescription>
          Enter your Anyscale API key to enable content generation features. Your key is stored 
          locally in your browser and never sent to our servers.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="api-key">Anyscale API Key</Label>
            <Input
              id="api-key"
              type="password"
              value={apiKey}
              onChange={(e) => {
                setApiKey(e.target.value);
                setSaved(false);
              }}
              placeholder="Enter your Anyscale API key"
              className="glass-input"
            />
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <p>To get your Anyscale API key:</p>
            <ol className="list-decimal list-inside space-y-1 mt-2">
              <li>Sign up or log in at <a href="https://www.anyscale.com/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">anyscale.com</a></li>
              <li>Navigate to your account dashboard</li>
              <li>Find the API section and generate a new key</li>
              <li>Copy and paste it here</li>
            </ol>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          onClick={handleClearApiKey}
          className="glass-button-outline flex items-center gap-2"
        >
          <RefreshCw className="h-4 w-4" /> Clear Key
        </Button>
        <Button 
          onClick={handleSaveApiKey}
          className="glass-button-primary text-white flex items-center gap-2"
          disabled={!apiKey.trim() || saved}
        >
          {saved ? <Check className="h-4 w-4" /> : <Save className="h-4 w-4" />}
          {saved ? "Saved" : "Save Key"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ApiKeySettings;
