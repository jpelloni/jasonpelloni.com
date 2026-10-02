import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Moon, Sun, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet.jsx';

const Header = () => {
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/engineering-philosophy', label: 'Philosophy' },
    { path: '/projects', label: 'Projects' },
    { path: '/work-with-me', label: 'Work With Me' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-xl font-bold tracking-tight hover:text-primary transition-colors">
            Jason Pelloni
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`text-sm font-medium transition-colors hover:text-primary relative ${isActive(link.path) ? 'text-primary' : 'text-muted-foreground'}`}
              >
                {link.label}
                {isActive(link.path) && <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-primary" />}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2 mr-2 border-r pr-4">
              <Button variant="ghost" size="icon" asChild aria-label="Email">
                <a href="mailto:jpelloni@gmail.com">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild aria-label="LinkedIn">
                <a href="https://www.linkedin.com/in/jason-pelloni-63609b9/" target="_blank" rel="noopener noreferrer" title="Add LinkedIn URL here">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <Button variant="ghost" size="icon" onClick={toggleTheme} className="transition-all duration-200 hover:bg-accent active:scale-95" aria-label="Toggle theme">
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.path} 
                      to={link.path} 
                      onClick={() => setIsOpen(false)} 
                      className={`text-lg font-medium transition-colors hover:text-primary ${isActive(link.path) ? 'text-primary' : 'text-muted-foreground'}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="border-t my-4 pt-4 flex gap-4">
                    <Button variant="outline" asChild className="w-full justify-start gap-2">
                      <a href="mailto:jpelloni@gmail.com">
                        <Mail className="h-4 w-4" /> Email Me
                      </a>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;