import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';

const TimelineItem = ({ year, title, description, isLeft = true }) => {
  return (
    <div className={`flex gap-8 items-start ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
      <div className="flex-1">
        <Card className="transition-all duration-300 hover:shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3">
              <span className="text-4xl font-bold text-primary/20" style={{ fontVariantNumeric: 'tabular-nums' }}>
                {year}
              </span>
            </div>
            <CardTitle className="text-xl mt-2">{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="leading-relaxed text-base">
              {description}
            </CardDescription>
          </CardContent>
        </Card>
      </div>
      
      <div className="relative flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20" />
        <div className="w-0.5 h-full bg-border absolute top-4" />
      </div>
      
      <div className="flex-1" />
    </div>
  );
};

export default TimelineItem;