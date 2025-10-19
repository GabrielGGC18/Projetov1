import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-primary">
              Igreja Esperança
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
              Início
            </a>
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
              Sobre Nós
            </a>
            <a href="#ministerios" className="text-foreground hover:text-primary transition-colors">
              Ministérios
            </a>
            <a href="#eventos" className="text-foreground hover:text-primary transition-colors">
              Eventos
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors">
              Contato
            </a>
            <Button>
              Visite-nos
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t">
            <div className="py-4 space-y-4">
              <a href="#inicio" className="block text-foreground hover:text-primary transition-colors">
                Início
              </a>
              <a href="#sobre" className="block text-foreground hover:text-primary transition-colors">
                Sobre Nós
              </a>
              <a href="#ministerios" className="block text-foreground hover:text-primary transition-colors">
                Ministérios
              </a>
              <a href="#eventos" className="block text-foreground hover:text-primary transition-colors">
                Eventos
              </a>
              <a href="#contato" className="block text-foreground hover:text-primary transition-colors">
                Contato
              </a>
              <Button className="w-full">
                Visite-nos
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}