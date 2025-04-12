import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, XCircle, ExclamationTriangle, QuestionMarkCircle,
  ArrowRight, ExternalLink, FileText, Code, Search,
  BarChart, LineChart, PieChart, Gauge, ShieldAlert,
  Users, ScrollText, LayoutDashboard, Zap, Terminal,
  Globe, BookOpen, FileCheck, Cpu, RefreshCcw, Activity,
  MonitorSmartphone, Target, Sparkles, BrainCircuit, MoveUpRight,
  ChevronRight, Workflow, Database, BookOpenCheck, FileSearch,
  Code2, Laptop, Rocket, Layout, ScrollText as Scroll,
  MonitorCheck, Network, ListChecks, Lightbulb, TrendingUp,
  MessageSquare, Share2, Heart, CloudCog, Settings,
  AlertTriangle, Info, HelpCircle, AlertOctagon, CheckSquare,
  Square, Circle, Triangle, Star, Plus, Minus, Divide,
  Equal, Hash, Percent, AtSign, DollarSign, EuroSign,
  PoundSign, YenSign, Bitcoin, Ethereum, File, Folder,
  Calendar, Clock, MapPin, Phone, Mail, Camera, Video,
  Image, Music, Volume1, Volume2, VolumeX, Mic, Mic2,
  Headphones, Bluetooth, Wifi, BatteryFull, BatteryCharging,
  CreditCard, Banknote, ShoppingCart, Package, Truck, Home,
  Building, School, University, Hospital, Church, Flag,
  Award, Trophy, Gift, Gem, Diamond, Compass, Map,
  Anchor, Umbrella, Cloud, Sun, Moon, Thermometer,
  Droplet, Fire, Leaf, Tree, Cactus, Flower, Seedling,
  PawPrint, Bone, Fish, Bug, Spider, Ant, Bee,
  Ladybug, Snail, Worm, Cat, Dog, Horse, Cow,
  Pig, Chicken, Duck, Turkey, Dove, Bird, Owl,
  Eagle, Hawk, Swan, Flamingo, Parrot, Penguin,
  Kiwi, Peacock, Toucan, Hummingbird, Ostrich, Vulture,
  Crow, Raven, Seagull, Swallow, Sparrow, Robin,
  Bluejay, Cardinal, Goldfinch, Finch, Wren, Mockingbird,
  Thrush, Nightingale, Canary, Parrot2, Macaw, Cockatoo,
  Lovebird, Budgie, Finch2, Canary2, Goldfinch2, Robin2,
  Sparrow2, Swallow2, Seagull2, Raven2, Crow2, Vulture2,
  Ostrich2, Hummingbird2, Toucan2, Peacock2, Kiwi2, Penguin2,
  Parrot3, Flamingo2, Swan2, Hawk2, Eagle2, Owl2, Bird2,
  Dove2, Turkey2, Duck2, Chicken2, Pig2, Cow2, Horse2,
  Dog2, Cat2, Worm2, Snail2, Ladybug2, Bee2, Ant2,
  Spider2, Bug2, Fish2, Bone2, PawPrint2, Seedling2, Flower2,
  Cactus2, Tree2, Leaf2, Fire2, Droplet2, Thermometer2, Moon2,
  Sun2, Cloud2, Umbrella2, Anchor2, Map2, Compass2, Diamond2,
  Gem2, Gift2, Trophy2, Award2, Flag2, Church2, Hospital2,
  University2, School2, Building2, Home2, Truck2, Package2,
  ShoppingCart2, Banknote2, CreditCard2, BatteryCharging2, Wifi2,
  Bluetooth2, Headphones2, Mic22, Mic2, VolumeX2, Volume22, Volume12,
  Music2, Image2, Video2, Camera2, Mail2, Phone2, MapPin2,
  Clock2, Calendar2, Folder2, File2, Ethereum2, Bitcoin2, YenSign2,
  PoundSign2, EuroSign2, DollarSign2, AtSign2, Percent2, Hash2,
  Equal2, Divide2, Minus2, Plus2, Star2, Triangle2, Circle2,
  Square2, CheckSquare2, AlertOctagon2, HelpCircle2, Info2, AlertTriangle2,
  Settings2, CloudCog2, Heart2, Share22, MessageSquare2, TrendingUp2,
  Lightbulb2, ListChecks2, Network2, MonitorCheck2, Scroll2, Layout2,
  Rocket2, Users2, ShieldAlert2, Gauge2, PieChart2, LineChart2,
  BarChart2, Search2, Code22, FileText2, ExternalLink2, ArrowRight2,
  QuestionMarkCircle2, ExclamationTriangle2, XCircle2, CheckCircle2
} from 'lucide-react';

export interface SEOItem {
  name: string;
  status: 'pass' | 'fail' | 'warning' | 'info';
  message: string;
  points: number;
  link?: string;
}

export interface SEOCategory {
  title: string;
  items: SEOItem[];
}

interface SEOResultsProps {
  url: string;
  keyword?: string;
  score: number;
  categories: SEOCategory[];
  contentFetched: boolean;
  onReset: () => void;
}

const SEOResults: React.FC<SEOResultsProps> = ({ url, keyword, score, categories, contentFetched, onReset }) => {
  const getStatusIcon = (status: SEOItem['status']) => {
    switch (status) {
      case 'pass':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'fail':
        return <XCircle className="h-5 w-5 text-red-500" />;
      case 'warning':
        return <ExclamationTriangle className="h-5 w-5 text-yellow-500" />;
      case 'info':
      default:
        return <QuestionMarkCircle className="h-5 w-5 text-blue-500" />;
    }
  };

  const getScoreColorClass = (score: number): string => {
    if (score >= 80) {
      return 'text-green-500';
    } else if (score >= 60) {
      return 'text-yellow-500';
    } else {
      return 'text-red-500';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">SEO Analysis Results</h2>
          <p className="text-white/80">
            Analysis for <a href={url} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">{url}</a>
            {keyword && <>, Keyword: <span className="font-semibold">{keyword}</span></>}
          </p>
        </div>
        <button
          onClick={onReset}
          className="px-4 py-2 bg-navy-light text-white rounded-lg hover:bg-navy transition-colors"
        >
          Analyze Another Website
        </button>
      </div>

      <div className="bg-white/90 dark:bg-navy/70 p-6 rounded-xl shadow-lg border border-gray-300 dark:border-white/20">
        <h3 className="text-xl font-semibold mb-4 text-navy dark:text-white">Overall Score</h3>
        <div className="flex items-center">
          <div className={`text-4xl font-bold mr-3 ${getScoreColorClass(score)}`}>{score.toFixed(1)}</div>
          <p className="text-navy-dark dark:text-white/90">Out of 100</p>
        </div>
      </div>

      {categories.map((category, index) => (
        <div key={index} className="bg-white/90 dark:bg-navy/70 rounded-xl shadow-lg border border-gray-300 dark:border-white/20 p-6">
          <h3 className="text-xl font-semibold mb-4 text-navy dark:text-white">{category.title}</h3>
          <ul className="space-y-3">
            {category.items.map((item, itemIndex) => (
              <li key={itemIndex} className="flex items-start gap-3">
                {getStatusIcon(item.status)}
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-navy-dark dark:text-white/90">{item.name}</span>
                    <span className="text-sm text-gray-500">{item.points.toFixed(1)} points</span>
                  </div>
                  <p className="text-sm text-navy-light dark:text-gray-400">{item.message}</p>
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-teal hover:underline text-sm">
                      Learn more <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {!contentFetched && (
        <div className="bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-500 text-red-700 dark:text-red-400 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Content Not Fetched!</strong>
          <span className="block sm:inline">The content of the page could not be fetched. This might be due to network issues or the site blocking our crawler. Some analysis might be incomplete.</span>
        </div>
      )}
    </div>
  );
};

export default SEOResults;
