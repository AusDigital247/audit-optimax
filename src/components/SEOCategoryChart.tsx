
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { cn } from '@/lib/utils';

interface CategoryStat {
  title: string;
  total: number;
  passed: number;
  warnings: number;
  failed: number;
  score: number;
}

interface SEOCategoryChartProps {
  categories: CategoryStat[];
  className?: string;
}

const SEOCategoryChart = ({ categories, className }: SEOCategoryChartProps) => {
  // Format data for the chart
  const data = categories.map(cat => ({
    name: cat.title,
    score: cat.score,
    passed: cat.passed,
    warnings: cat.warnings,
    failed: cat.failed,
    total: cat.total
  }));
  
  // Get color based on score
  const getScoreColor = (score: number) => {
    if (score >= 80) return "#22c55e"; // Green
    if (score >= 60) return "#f59e0b"; // Amber
    return "#ef4444"; // Red
  };
  
  return (
    <div className={cn("w-full h-64", className)}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
          <XAxis type="number" domain={[0, 100]} />
          <YAxis 
            type="category" 
            dataKey="name" 
            width={100}
            tick={{ fontSize: 12 }}
          />
          <Tooltip
            formatter={(value, name) => {
              if (name === 'score') return [`${value}%`, 'Score'];
              return [value, name.charAt(0).toUpperCase() + name.slice(1)];
            }}
            contentStyle={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.95)', 
              borderRadius: '8px',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            }}
          />
          <Bar 
            dataKey="score" 
            name="Score" 
            radius={[0, 4, 4, 0]}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getScoreColor(entry.score)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SEOCategoryChart;
