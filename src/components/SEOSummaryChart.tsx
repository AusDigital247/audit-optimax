
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';
import { cn } from '@/lib/utils';

interface SEOSummaryChartProps {
  score: number;
  className?: string;
}

const SEOSummaryChart = ({ score, className }: SEOSummaryChartProps) => {
  // Calculate remaining portion
  const remaining = 100 - score;
  
  // Data for pie chart
  const data = [
    { name: 'Score', value: score },
    { name: 'Remaining', value: remaining }
  ];
  
  // Colors based on score
  const getScoreColor = (value: number) => {
    if (value >= 80) return "#22c55e"; // Green
    if (value >= 60) return "#f59e0b"; // Amber
    return "#ef4444"; // Red
  };
  
  const scoreColor = getScoreColor(score);
  
  return (
    <div className={cn("w-full h-64", className)}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            startAngle={90}
            endAngle={-270}
            paddingAngle={0}
            dataKey="value"
          >
            <Cell key={`cell-0`} fill={scoreColor} />
            <Cell key={`cell-1`} fill="#e5e7eb" />
            <Label
              content={({ viewBox }) => {
                if (!viewBox) return null;
                const { cx, cy } = viewBox;
                return (
                  <g>
                    <text
                      x={cx}
                      y={cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="text-3xl font-bold"
                      fill={scoreColor}
                    >
                      {score}
                    </text>
                    <text
                      x={cx}
                      y={cy + 20}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="text-xs fill-muted-foreground"
                    >
                      out of 100
                    </text>
                  </g>
                );
              }}
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      
      <div className="text-center mt-2">
        <p className={cn(
          "text-sm font-medium",
          score >= 80 ? "text-seo-good" : 
          score >= 60 ? "text-seo-warning" : 
          "text-seo-bad"
        )}>
          {score >= 80 
            ? "Excellent SEO Performance" 
            : score >= 60 
              ? "Good SEO Performance"
              : "Poor SEO Performance"}
        </p>
      </div>
    </div>
  );
};

export default SEOSummaryChart;
