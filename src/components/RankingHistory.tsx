
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { History, Trash2, BarChart2, Calendar, Clock } from 'lucide-react';
import { toast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

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
  
  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  if (history.length === 0) {
    return (
      <Card className="mt-6 border border-slate-200 dark:border-slate-700">
        <CardContent className="pt-6 flex flex-col items-center justify-center min-h-[200px]">
          <History className="h-16 w-16 text-slate-300 dark:text-slate-600 mb-4" />
          <p className="text-center text-slate-500 dark:text-slate-400 max-w-md">
            No ranking history found. Check some keywords to start building your history.
          </p>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <div className="space-y-6 mt-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-navy dark:text-white flex items-center gap-2">
          <History className="h-5 w-5 text-teal dark:text-teal-light" />
          Your Ranking History
        </h2>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={clearHistory} 
          className="flex items-center gap-1 border-red-300 text-red-600 hover:bg-red-50 hover:text-red-700 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900/30 dark:hover:text-red-300"
        >
          <Trash2 className="h-4 w-4" />
          <span>Clear History</span>
        </Button>
      </div>
      
      <ScrollArea className="max-h-[600px] pr-3">
        <div className="space-y-6">
          {history.map((entry, index) => (
            <Card key={index} className="border border-slate-200 dark:border-slate-700 overflow-hidden">
              <CardHeader className="bg-slate-50 dark:bg-slate-800/50">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-navy dark:text-white">{entry.domain}</CardTitle>
                    <CardDescription className="flex items-center mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Checked on {formatDate(entry.keywords[0].timestamp)}</span>
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="bg-teal/10 text-teal border-teal/20 dark:bg-teal/20 dark:text-teal-light dark:border-teal/30">
                    {entry.keywords.length} {entry.keywords.length === 1 ? 'keyword' : 'keywords'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  {entry.keywords.map((keyword, kidx) => (
                    <div key={kidx} className="flex items-center justify-between bg-slate-50 dark:bg-slate-800 p-3 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                      <div>
                        <div className="font-medium text-navy dark:text-white">{keyword.keyword}</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center">
                          <Globe className="h-3 w-3 mr-1" />
                          {keyword.searchEngine}
                        </div>
                      </div>
                      <div>
                        {keyword.position ? (
                          <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200 dark:bg-teal-900 dark:text-teal-200 dark:hover:bg-teal-800">
                            <BarChart2 className="h-3 w-3 mr-1" />
                            Position: {keyword.position}
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="bg-amber-100 text-amber-800 hover:bg-amber-200 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:hover:bg-amber-800/30 dark:border-amber-800/30">
                            Not ranked
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="bg-slate-50/50 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-700/50 text-xs text-slate-500 dark:text-slate-400 flex justify-between">
                <div className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{new Date(entry.keywords[0].timestamp).toLocaleTimeString()}</span>
                </div>
                {entry.keywords[0].url && (
                  <a 
                    href={entry.keywords[0].url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-teal hover:text-teal-600 dark:text-teal-light dark:hover:text-teal-light/80"
                  >
                    View ranking URL
                  </a>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default RankingHistory;

function Globe(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
