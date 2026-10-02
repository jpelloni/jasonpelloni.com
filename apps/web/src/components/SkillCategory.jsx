import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';

const SkillCategory = ({ title, icon: Icon, skills, variant = 'default' }) => {
  return (
    <Card className={`transition-all duration-300 hover:shadow-lg ${variant === 'primary' ? 'border-primary/50' : ''}`}>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-2xl">
          {Icon && <Icon className="h-6 w-6 text-primary" />}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge 
              key={index} 
              variant={variant === 'primary' ? 'default' : 'secondary'}
              className="text-sm px-3 py-1 transition-all duration-200 hover:scale-105"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillCategory;