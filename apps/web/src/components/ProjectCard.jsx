import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { Button } from '@/components/ui/button.jsx';

const ProjectCard = ({ title, description, technologies, demoUrl, githubUrl }) => {
  return (
    <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="leading-relaxed">{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="flex-1">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="gap-3 mt-auto">
        {demoUrl && (
          <Button 
            asChild 
            size="sm" 
            className="transition-all duration-200 active:scale-95"
          >
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          </Button>
        )}
        {githubUrl && (
          <Button 
            asChild 
            variant="outline" 
            size="sm"
            className="transition-all duration-200 active:scale-95"
          >
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              Code
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;