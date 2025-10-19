import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Calendar, Clock, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function EventsSection() {
  const events = [
    {
      title: "Culto Dominical",
      date: "Todos os Domingos",
      time: "9h e 19h",
      location: "Templo Principal",
      type: "Culto",
      description: "Momentos de louvor, adoração e estudo da Palavra de Deus"
    },
    {
      title: "Estudo Bíblico",
      date: "Todas as Quartas",
      time: "19h30",
      location: "Salão de Estudos",
      type: "Estudo",
      description: "Aprofundamento na Palavra com discussões e reflexões"
    },
    {
      title: "Retiro Espiritual 2025",
      date: "15-17 de Março",
      time: "Todo o dia",
      location: "Sítio Esperança",
      type: "Retiro",
      description: "Final de semana especial de renovação espiritual e comunhão"
    },
    {
      title: "Noite de Oração",
      date: "Primeira Sexta do Mês",
      time: "20h às 22h",
      location: "Templo Principal",
      type: "Oração",
      description: "Momento especial de oração pelos pedidos da igreja e comunidade"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Culto": return "bg-blue-100 text-blue-800";
      case "Estudo": return "bg-green-100 text-green-800";
      case "Retiro": return "bg-purple-100 text-purple-800";
      case "Oração": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="eventos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Próximos Eventos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Participe dos nossos eventos e fortaleça sua fé em comunidade
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">
              Junte-se à Nossa Comunidade
            </h3>
            <p className="text-muted-foreground mb-6">
              Nossos eventos são oportunidades especiais para crescimento espiritual, 
              comunhão e fortalecimento da fé. Venha participar e fazer parte desta 
              família em Cristo.
            </p>
            <Button size="lg">
              Ver Calendário Completo
            </Button>
          </div>
          
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1753014871672-b23b1335fec7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjb21tdW5pdHklMjBnYXRoZXJpbmd8ZW58MXx8fHwxNzU2Mzk2NzI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Comunidade da igreja reunida"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className={getTypeColor(event.type)}>
                    {event.type}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {event.description}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    {event.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}