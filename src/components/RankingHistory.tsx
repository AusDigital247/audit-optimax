
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { History, Trash2 } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

interface KeywordRanking {
  keyword: string;
  position: number | null;
  url: string | null;
  searchEngine: string;
  timestamp: string;
  status: 'checking' | 'complete' | 'error';
  message?: string;
}

interface RankingHistory {
  domain: string;
  keywords: KeywordRanking[];
}

interface RankingHistoryProps {
  onClearHistory: () => void;
}

const RankingHistory: React.FC<RankingHistoryProps> = ({ onClearHistory }) => {
  const [history, setHistory] = React.useState<RankingHistory[]>([]);
  
  React.useEffect(() => {
    const savedHistory = localStorage.getItem('rankingHistory');
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory));
      } catch (error) {
        console.error('Error parsing ranking history:', error);
      }
    }
  }, []);
  
  const clearHistory = () => {
    localStorage.removeItem('rankingHistory');
    setHistory([]);
    onClearHistory();
    toast({
      title: "History Cleared",
      description: "Your ranking check history has been cleared.",
    });
  };
  
  if (history.length === 0) {
    return (
      <Card className="mt-6">
        <CardContent className="pt-6 flex flex-col items-center justify-center min-h-[200px]">
          <History className="h-16 w-16 text-slate-300 dark:text-slate-600 mb-4" />
          <p className="text-center text-slate-500 dark:text-slate-400">
            No ranking history found. Check some keywords to start building your history.
          </p>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <div className="space-y-6 mt-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold dark:text-white">Your Ranking History</h2>
        <Button variant="outline" size="sm" onClick={clearHistory} className="flex items-center gap-1">
          <Trash2 className="h-4 w-4" />
          <span>Clear History</span>
        </Button>
      </div>
      
      {history.map((entry, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{entry.domain}</CardTitle>
            <CardDescription>
              Last checked on {new Date(entry.keywords[0].timestamp).toLocaleString()}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {entry.keywords.map((keyword, kidx) => (
                <div key={kidx} className="flex items-center justify-between bg-slate-50 dark:bg-slate-800 p-3 rounded-md">
                  <div>
                    <span className="font-medium">{keyword.keyword}</span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {keyword.searchEngine}
                    </p>
                  </div>
                  <div>
                    {keyword.position ? (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200">
                        Position: {keyword.position}
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                        Not ranked
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default RankingHistory;
