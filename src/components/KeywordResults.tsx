
import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Download, 
  Copy, 
  BookmarkPlus, 
  ListFilter,
  TrendingUp 
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export interface KeywordResult {
  keyword: string;
  searchVolume?: number;
  difficulty?: number;
  cpc?: number;
  type: string;
}

interface KeywordResultsProps {
  results: KeywordResult[];
  isLoading: boolean;
  seedKeyword: string;
}

const KeywordResults: React.FC<KeywordResultsProps> = ({
  results,
  isLoading,
  seedKeyword
}) => {
  if (isLoading) {
    return (
      <Card className="w-full mt-8">
        <CardHeader className="text-center">
          <CardTitle>Generating Keywords</CardTitle>
          <CardDescription>Please wait while we find the best keywords for "{seedKeyword}"</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center py-10">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-10 w-10 bg-muted rounded-full animate-spin mb-4"></div>
            <div className="h-4 w-48 bg-muted rounded mb-2"></div>
            <div className="h-4 w-32 bg-muted rounded"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (results.length === 0) {
    return null;
  }

  // Get unique keyword types
  const keywordTypes = [...new Set(results.map(result => result.type))];

  // Function to handle download as CSV
  const handleDownloadCSV = () => {
    const headers = ["Keyword", "Search Volume", "Difficulty", "CPC", "Type"];
    const csvContent = [
      headers.join(","),
      ...results.map(item => 
        [
          `"${item.keyword}"`, 
          item.searchVolume || "N/A", 
          item.difficulty || "N/A", 
          item.cpc ? `$${item.cpc}` : "N/A",
          item.type
        ].join(",")
      )
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `keywords-for-${seedKeyword}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to copy all keywords to clipboard
  const handleCopyKeywords = () => {
    const keywordsText = results.map(result => result.keyword).join("\n");
    navigator.clipboard.writeText(keywordsText);
    // You would use toast here
  };

  const getKeywordTypeBadgeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'long-tail':
        return "bg-blue-500 hover:bg-blue-600";
      case 'question':
        return "bg-purple-500 hover:bg-purple-600";
      case 'buyer-intent':
        return "bg-green-500 hover:bg-green-600";
      case 'informational':
        return "bg-amber-500 hover:bg-amber-600";
      case 'commercial':
        return "bg-red-500 hover:bg-red-600";
      default:
        return "bg-gray-500 hover:bg-gray-600";
    }
  };

  return (
    <Card className="w-full mt-8">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div>
            <CardTitle className="text-2xl">Keyword Results</CardTitle>
            <CardDescription>
              Found {results.length} keywords related to "{seedKeyword}"
            </CardDescription>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" onClick={handleCopyKeywords}>
              <Copy className="h-4 w-4 mr-2" /> Copy All
            </Button>
            <Button variant="outline" size="sm" onClick={handleDownloadCSV}>
              <Download className="h-4 w-4 mr-2" /> Download CSV
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all">
          <TabsList className="mb-4 flex flex-wrap">
            <TabsTrigger value="all">All Keywords</TabsTrigger>
            {keywordTypes.map(type => (
              <TabsTrigger key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all">
            <div className="border rounded-md">
              <ScrollArea className="h-[400px]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Keyword</TableHead>
                      <TableHead className="w-[120px]">Search Volume</TableHead>
                      <TableHead className="w-[120px]">Difficulty</TableHead>
                      <TableHead className="w-[80px]">CPC</TableHead>
                      <TableHead className="w-[120px]">Type</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {results.map((result, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{result.keyword}</TableCell>
                        <TableCell>{result.searchVolume || "N/A"}</TableCell>
                        <TableCell>
                          {result.difficulty !== undefined ? (
                            <div className="flex items-center">
                              <div className="w-16 h-2 bg-gray-200 rounded-full mr-2">
                                <div 
                                  className={cn(
                                    "h-full rounded-full",
                                    result.difficulty < 30 ? "bg-green-500" : 
                                    result.difficulty < 60 ? "bg-yellow-500" : "bg-red-500"
                                  )}
                                  style={{ width: `${result.difficulty}%` }}
                                ></div>
                              </div>
                              <span>{result.difficulty}</span>
                            </div>
                          ) : (
                            "N/A"
                          )}
                        </TableCell>
                        <TableCell>{result.cpc ? `$${result.cpc}` : "N/A"}</TableCell>
                        <TableCell>
                          <Badge className={cn("text-white", getKeywordTypeBadgeColor(result.type))}>
                            {result.type}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>
            </div>
          </TabsContent>

          {keywordTypes.map(type => (
            <TabsContent key={type} value={type}>
              <div className="border rounded-md">
                <ScrollArea className="h-[400px]">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Keyword</TableHead>
                        <TableHead className="w-[120px]">Search Volume</TableHead>
                        <TableHead className="w-[120px]">Difficulty</TableHead>
                        <TableHead className="w-[80px]">CPC</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {results
                        .filter(result => result.type === type)
                        .map((result, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{result.keyword}</TableCell>
                            <TableCell>{result.searchVolume || "N/A"}</TableCell>
                            <TableCell>
                              {result.difficulty !== undefined ? (
                                <div className="flex items-center">
                                  <div className="w-16 h-2 bg-gray-200 rounded-full mr-2">
                                    <div 
                                      className={cn(
                                        "h-full rounded-full",
                                        result.difficulty < 30 ? "bg-green-500" : 
                                        result.difficulty < 60 ? "bg-yellow-500" : "bg-red-500"
                                      )}
                                      style={{ width: `${result.difficulty}%` }}
                                    ></div>
                                  </div>
                                  <span>{result.difficulty}</span>
                                </div>
                              ) : (
                                "N/A"
                              )}
                            </TableCell>
                            <TableCell>{result.cpc ? `$${result.cpc}` : "N/A"}</TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </ScrollArea>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <div className="text-sm text-muted-foreground">
          <TrendingUp className="h-4 w-4 inline mr-1" />
          Showing top {results.length} keywords by relevance
        </div>
        <Button variant="outline" size="sm">
          <ListFilter className="h-4 w-4 mr-2" /> Apply Filters
        </Button>
      </CardFooter>
    </Card>
  );
};

export default KeywordResults;
