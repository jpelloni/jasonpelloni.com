import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 text-muted-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand & Tagline */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <Link to="/" className="text-xl font-bold tracking-tight text-foreground hover:text-primary transition-colors inline-block w-fit">
              Jason Pelloni
            </Link>
            <p className="text-sm font-medium leading-relaxed max-w-sm">
              Senior Backend Developer | AWS Specialist <br/> 
              15+ Years Experience
            </p>
            <div className="flex items-center gap-3 mt-2">
              <Button variant="ghost" size="icon" asChild className="hover:bg-accent hover:text-accent-foreground rounded-full">
                <a href="mailto:jpelloni@gmail.com" aria-label="Email">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:bg-accent hover:text-accent-foreground rounded-full">
                <a href="https://www.linkedin.com/in/jason-pelloni-63609b9/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (Placeholder)">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">Navigation</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm hover:text-primary transition-colors">Home</Link>
              <Link to="/about" className="text-sm hover:text-primary transition-colors">About</Link>
              <Link to="/skills" className="text-sm hover:text-primary transition-colors">Skills</Link>
              <Link to="/philosophy" className="text-sm hover:text-primary transition-colors">Philosophy</Link>
              <Link to="/projects" className="text-sm hover:text-primary transition-colors">Projects</Link>
              <Link to="/work-with-me" className="text-sm hover:text-primary transition-colors">Work With Me</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">Contact</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3 text-sm">
                <Mail className="h-4 w-4 mt-0.5 text-primary" />
                <a href="mailto:jpelloni@gmail.com" className="hover:text-primary transition-colors">
                  jpelloni@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Phone className="h-4 w-4 mt-0.5 text-primary" />
                <a href="tel:+18133689415" className="hover:text-primary transition-colors">
                  (813) 368-9415
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <span>Valrico, FL 33594</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <span>© {new Date().getFullYear()} Jason Pelloni. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;