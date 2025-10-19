import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Footer() {
  return (
    <footer id="contato" className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Church Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Igreja Esperança</h3>
              <p className="text-primary-foreground/80 mb-4">
                Uma comunidade de fé, esperança e amor onde todos são bem-vindos 
                para crescer espiritualmente juntos.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="p-2 h-auto">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 h-auto">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 h-auto">
                  <Youtube className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contato</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span className="text-primary-foreground/80">
                    Rua da Esperança, 123<br />
                    Centro, São Paulo - SP<br />
                    01000-000
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3" />
                  <span className="text-primary-foreground/80">
                    (11) 1234-5678
                  </span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3" />
                  <span className="text-primary-foreground/80">
                    contato@igrejaesperanca.com.br
                  </span>
                </div>
              </div>
            </div>

            {/* Service Times */}
            <div>
              <h3 className="text-xl font-bold mb-4">Horários dos Cultos</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Clock className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Domingos</p>
                    <p className="text-primary-foreground/80 text-sm">
                      Culto da Manhã: 9h<br />
                      Culto da Noite: 19h
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Quartas-feiras</p>
                    <p className="text-primary-foreground/80 text-sm">
                      Estudo Bíblico: 19h30
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-bold mb-4">Fique Conectado</h3>
              <p className="text-primary-foreground/80 mb-4">
                Receba nossas novidades, eventos e mensagens especiais.
              </p>
              <div className="space-y-3">
                <Input 
                  placeholder="Seu e-mail" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button variant="secondary" className="w-full">
                  Inscrever-se
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20" />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-primary-foreground/80 text-sm">
              © 2025 Igreja Esperança. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-primary-foreground/80 hover:text-white text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-white text-sm transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}