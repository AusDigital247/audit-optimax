
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings as SettingsIcon, Key, Globe } from 'lucide-react';
import ApiKeySettings from '@/components/ApiKeySettings';
import { useLanguage } from '@/contexts/LanguageContext';

const Settings = () => {
  const { t } = useLanguage();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Settings - AUS Digital</title>
        <meta name="description" content="Configure your settings for AUS Digital's tools" />
      </Helmet>
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-navy dark:text-white flex items-center gap-2">
          <SettingsIcon className="h-8 w-8 text-teal" />
          Settings
        </h1>
        
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Configure your preferences and API keys to enhance your experience with our tools.
        </p>
        
        <Tabs defaultValue="api-keys" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="api-keys" className="flex items-center gap-2">
              <Key className="h-4 w-4" /> API Keys
            </TabsTrigger>
            <TabsTrigger value="language" className="flex items-center gap-2">
              <Globe className="h-4 w-4" /> Language
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="api-keys" className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-navy dark:text-white">API Configuration</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Our tools use Anyscale's API to power the AI content generation features. To use these tools, 
                you need to provide your own API key.
              </p>
              
              <ApiKeySettings />
              
              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg text-blue-800 dark:text-blue-200 mt-6">
                <h3 className="font-semibold">Why do I need to provide an API key?</h3>
                <p className="mt-2 text-sm">
                  We use Anyscale's API to provide AI-generated content. By using your own API key, you maintain 
                  control over your usage and costs. Your API key is stored locally in your browser and is never 
                  sent to our servers.
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="language" className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-navy dark:text-white">Language Settings</h2>
              <p className="text-gray-600 dark:text-gray-300">
                You can switch between English and French using the language switcher in the top right corner of the screen.
              </p>
              
              <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg text-yellow-800 dark:text-yellow-200 mt-6">
                <h3 className="font-semibold">Translation Limitations</h3>
                <p className="mt-2 text-sm">
                  While we provide translation for most of the interface, some dynamic content may still appear in English.
                  We're continuously working to improve our translation coverage.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;
