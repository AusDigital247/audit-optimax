
import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";

const formSchema = z.object({
  seedKeyword: z.string().min(3, {
    message: "Keyword must be at least 3 characters.",
  }),
  industry: z.string().optional(),
  keywordType: z.string().default("all"),
});

interface KeywordGeneratorFormProps {
  onSubmit: (values: z.infer<typeof formSchema>) => void;
  isLoading: boolean;
}

const KeywordGeneratorForm: React.FC<KeywordGeneratorFormProps> = ({
  onSubmit,
  isLoading
}) => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      seedKeyword: "",
      industry: "",
      keywordType: "all"
    },
  });

  const handleFormSubmit = (values: z.infer<typeof formSchema>) => {
    if (!values.seedKeyword.trim()) {
      toast({
        title: "Error",
        description: "Please enter a seed keyword",
        variant: "destructive",
      });
      return;
    }
    
    onSubmit(values);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="seedKeyword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold">Seed Keyword</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter a keyword (e.g., SEO, digital marketing)" 
                      className="h-12 text-base" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="industry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Industry (Optional)</FormLabel>
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an industry" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="ecommerce">E-commerce</SelectItem>
                        <SelectItem value="real-estate">Real Estate</SelectItem>
                        <SelectItem value="travel">Travel</SelectItem>
                        <SelectItem value="food">Food & Restaurant</SelectItem>
                        <SelectItem value="fashion">Fashion & Apparel</SelectItem>
                        <SelectItem value="automotive">Automotive</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="keywordType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Keyword Type</FormLabel>
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="long-tail">Long-tail Keywords</SelectItem>
                        <SelectItem value="question">Question Keywords</SelectItem>
                        <SelectItem value="buyer-intent">Buyer Intent Keywords</SelectItem>
                        <SelectItem value="informational">Informational Keywords</SelectItem>
                        <SelectItem value="commercial">Commercial Keywords</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full" 
              size="lg"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center">
                  <span className="animate-spin mr-2">⏳</span> Generating...
                </span>
              ) : (
                <span className="flex items-center">
                  <Search className="mr-2 h-5 w-5" /> Generate Keywords
                </span>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default KeywordGeneratorForm;
