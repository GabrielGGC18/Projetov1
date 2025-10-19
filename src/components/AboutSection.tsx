import { Card, CardContent } from "./ui/card";
import { Heart, Users, Book } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Sobre Nossa Igreja
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Somos uma comunidade cristã dedicada a compartilhar o amor de Deus e crescer juntos na fé
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1729089049653-24312fdca908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBwcmF5aW5nJTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzU2NDM3MTU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Pessoas orando juntas"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">
              Nossa Missão
            </h3>
            <p className="text-muted-foreground mb-6">
              Somos chamados a ser luz no mundo, compartilhando o evangelho de Jesus Cristo 
              através do amor, serviço e comunhão. Nossa igreja é um lugar onde pessoas de 
              todas as idades podem crescer espiritualmente e encontrar propósito.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Amor</h4>
                  <p className="text-sm text-muted-foreground">
                    Demonstramos o amor de Cristo em tudo que fazemos
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Comunidade</h4>
                  <p className="text-sm text-muted-foreground">
                    Construímos relacionamentos genuínos e duradouros
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Book className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Palavra</h4>
                  <p className="text-sm text-muted-foreground">
                    Fundamentamos nossa fé na Palavra de Deus
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}