import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Baby, Users2, Music, HelpingHand, GraduationCap, Star } from "lucide-react";

export function MinistriesSection() {
  const ministries = [
    {
      icon: <Baby className="w-8 h-8" />,
      title: "Ministério Infantil",
      description: "Educação cristã e atividades especiais para crianças de 0 a 12 anos",
      schedule: "Domingos às 9h e 19h"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Ministério Jovem",
      description: "Encontros, estudos bíblicos e atividades para jovens de 13 a 25 anos",
      schedule: "Sábados às 19h"
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Ministério de Louvor",
      description: "Grupos musicais que lideram o louvor nos cultos e eventos especiais",
      schedule: "Ensaios: Quintas às 19h"
    },
    {
      icon: <Users2 className="w-8 h-8" />,
      title: "Grupos de Vida",
      description: "Pequenos grupos para comunhão, estudo bíblico e oração durante a semana",
      schedule: "Vários horários"
    },
    {
      icon: <HelpingHand className="w-8 h-8" />,
      title: "Ministério Social",
      description: "Ações sociais, distribuição de alimentos e apoio às famílias carentes",
      schedule: "Sábados às 14h"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Escola Bíblica",
      description: "Cursos e estudos aprofundados da Palavra de Deus para todas as idades",
      schedule: "Domingos às 8h"
    }
  ];

  return (
    <section id="ministerios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nossos Ministérios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Participe dos nossos ministérios e descubra como Deus pode usar seus dons e talentos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="text-primary mb-4 flex justify-center">
                  {ministry.icon}
                </div>
                <CardTitle className="text-xl">{ministry.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  {ministry.description}
                </p>
                <p className="font-medium text-sm text-primary mb-4">
                  {ministry.schedule}
                </p>
                <Button variant="outline" size="sm">
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}