
import React from 'react';
import RankCheckerComponent from '@/components/RankChecker';
import SEOHead from '@/components/SEOHead';

const RankCheckerPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Google Rank Checker Tool | Check Your SERP Positions"
        description="Free tool to check your website's ranking positions in Google search results. Track your SEO performance with our easy-to-use rank checker."
        keywords="rank checker, SERP checker, keyword ranking, SEO position tracker, google position checker"
      />
      <RankCheckerComponent />
    </div>
  );
};

export default RankCheckerPage;
