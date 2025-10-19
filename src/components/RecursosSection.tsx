import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  BookOpen, 
  Play, 
  Calendar, 
  Users, 
  Heart, 
  Cross, 
  Music, 
  Lightbulb,
  Star,
  ExternalLink,
  Church,
  Flame,
  Handshake
} from "lucide-react";

export function RecursosSection() {
  const recursos = [
    {
      categoria: "Estudos Bíblicos",
      items: [
        {
          titulo: "Plano de Leitura Bíblica Wesleyana",
          descricao: "Método de John Wesley para leitura sistemática das Escrituras",
          tipo: "Plano",
          popularidade: 5,
          link: "#"
        },
        {
          titulo: "Estudos dos Sermões de Wesley",
          descricao: "Mergulhe nos ensinamentos do fundador do metodismo",
          tipo: "Estudo",
          popularidade: 4,
          link: "#"
        },
        {
          titulo: "Grupos de Estudo Bíblico",
          descricao: "Participe de células de estudo na sua comunidade",
          tipo: "Comunidade",
          popularidade: 5,
          link: "#"
        }
      ]
    },
    {
      categoria: "Disciplinas Espirituais",
      items: [
        {
          titulo: "Meios de Graça",
          descricao: "Práticas espirituais instituídas por Deus para nossa santificação",
          tipo: "Disciplina",
          popularidade: 5,
          link: "#"
        },
        {
          titulo: "Oração Metodista",
          descricao: "Tradições de oração na herança wesleyana",
          tipo: "Oração",
          popularidade: 4,
          link: "#"
        },
        {
          titulo: "Jejum Bíblico",
          descricao: "A prática do jejum como disciplina espiritual",
          tipo: "Disciplina",
          popularidade: 3,
          link: "#"
        }
      ]
    },
    {
      categoria: "Vida Cristã",
      items: [
        {
          titulo: "Santificação Progressiva",
          descricao: "Crescimento na santidade através da graça de Deus",
          tipo: "Ensino",
          popularidade: 4,
          link: "#"
        },
        {
          titulo: "Servir ao Próximo",
          descricao: "Práticas de amor e serviço na tradição metodista",
          tipo: "Missão",
          popularidade: 5,
          link: "#"
        },
        {
          titulo: "Mordomia Cristã",
          descricao: "Administrando os dons de Deus com responsabilidade",
          tipo: "Administração",
          popularidade: 3,
          link: "#"
        }
      ]
    }
  ];

  const ministerios = [
    {
      nome: "Adoração e Louvor",
      descricao: "Cultue a Deus através da música e adoração",
      icone: <Music className="w-6 h-6" />,
      cor: "bg-purple-100 text-purple-600"
    },
    {
      nome: "Missões",
      descricao: "Levando o evangelho a todas as nações",
      icone: <Cross className="w-6 h-6" />,
      cor: "bg-blue-100 text-blue-600"
    },
    {
      nome: "Ação Social",
      descricao: "Servindo aos necessitados em nome de Cristo",
      icone: <Handshake className="w-6 h-6" />,
      cor: "bg-green-100 text-green-600"
    },
    {
      nome: "Educação Cristã",
      descricao: "Formação bíblica para todas as idades",
      icone: <BookOpen className="w-6 h-6" />,
      cor: "bg-yellow-100 text-yellow-600"
    }
  ];

  const sitesReferencia = [
    {
      nome: "Igreja Metodista do Brasil",
      descricao: "Site oficial da denominação metodista brasileira",
      url: "https://metodista.org.br",
      categoria: "Oficial"
    },
    {
      nome: "Conselho Mundial Metodista",
      descricao: "Organização mundial das igrejas metodistas",
      url: "https://worldmethodistcouncil.org",
      categoria: "Internacional"
    },
    {
      nome: "Centro Metodista de Educação",
      descricao: "Recursos educacionais e formativos",
      url: "#",
      categoria: "Educação"
    },
    {
      nome: "Missão Metodista",
      descricao: "Trabalhos missionários e evangelísticos",
      url: "#",
      categoria: "Missão"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl text-primary mb-4 flex items-center justify-center gap-2">
          <Church className="w-8 h-8" />
          Ministérios e Recursos
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore nossa biblioteca de recursos para fortalecer sua jornada de fé metodista, 
          incluindo estudos bíblicos, disciplinas espirituais e ministérios da igreja.
        </p>
      </div>

      {/* Banner Principal */}
      <Card className="relative overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1743332333988-313576b4571e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRob2Rpc3QlMjBjaHVyY2glMjBjcm9zcyUyMGJpYmxlfGVufDF8fHx8MTc1NjU2NDYyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Igreja Metodista"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <CardContent className="relative z-10 p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            "Fazei todo o bem que puderdes, por todos os meios que puderdes"
          </h3>
          <p className="text-muted-foreground mb-6">- John Wesley</p>
          <Button size="lg" className="bg-pink-500 hover:bg-pink-600">
            Explorar Ministérios
          </Button>
        </CardContent>
      </Card>

      {/* Recursos por Categoria */}
      <div className="space-y-8">
        {recursos.map((categoria, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              {categoria.categoria}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {categoria.items.map((item, itemIndex) => (
                <Card key={itemIndex} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <Badge variant="secondary">{item.tipo}</Badge>
                      <div className="flex gap-1">
                        {renderStars(item.popularidade)}
                      </div>
                    </div>
                    <CardTitle className="text-lg">{item.titulo}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{item.descricao}</p>
                    <Button variant="outline" className="w-full">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Acessar
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Ministérios */}
      <div>
        <h3 className="text-xl font-semibold mb-6">Ministérios da Igreja</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ministerios.map((ministerio, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-full ${ministerio.cor} flex items-center justify-center mx-auto mb-4`}>
                  {ministerio.icone}
                </div>
                <h4 className="font-semibold mb-2">{ministerio.nome}</h4>
                <p className="text-sm text-muted-foreground">{ministerio.descricao}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Sites de Referência */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Cross className="w-5 h-5" />
            Sites de Referência Metodista
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {sitesReferencia.map((site, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-secondary/50 transition-colors">
                <div>
                  <h4 className="font-semibold">{site.nome}</h4>
                  <p className="text-sm text-muted-foreground">{site.descricao}</p>
                  <Badge variant="outline" className="mt-1 text-xs">
                    {site.categoria}
                  </Badge>
                </div>
                <Button variant="ghost" size="sm">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Eventos e Programação */}
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Programação da Semana</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-l-4 border-pink-400 pl-4">
              <h4 className="font-semibold">Culto Dominical</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Adoração, pregação da Palavra e comunhão fraternal todos os domingos.
              </p>
              <span className="text-xs text-pink-600">Domingos às 9h e 19h</span>
            </div>
            <div className="border-l-4 border-pink-400 pl-4">
              <h4 className="font-semibold">Reunião de Oração</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Momento de intercessão e fortalecimento espiritual comunitário.
              </p>
              <span className="text-xs text-pink-600">Quartas às 19h30</span>
            </div>
            <div className="border-l-4 border-pink-400 pl-4">
              <h4 className="font-semibold">Estudo Bíblico</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Aprofundamento nas Escrituras com metodologia wesleyana.
              </p>
              <span className="text-xs text-pink-600">Sextas às 19h</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Próximos Eventos Especiais</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3 p-3 bg-secondary rounded-lg">
              <Calendar className="w-5 h-5 text-pink-600 mt-1" />
              <div>
                <h4 className="font-semibold">Conferência Metodista</h4>
                <p className="text-sm text-muted-foreground">Encontro anual da região metodista</p>
                <Badge variant="outline" className="mt-1">15-17 Março</Badge>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-secondary rounded-lg">
              <Heart className="w-5 h-5 text-pink-600 mt-1" />
              <div>
                <h4 className="font-semibold">Retiro de Casais</h4>
                <p className="text-sm text-muted-foreground">Fortalecimento matrimonial cristão</p>
                <Badge variant="outline" className="mt-1">25-26 Fevereiro</Badge>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-secondary rounded-lg">
              <Users className="w-5 h-5 text-pink-600 mt-1" />
              <div>
                <h4 className="font-semibold">Missão Urbana</h4>
                <p className="text-sm text-muted-foreground">Ação social na comunidade local</p>
                <Badge className="mt-1 bg-pink-100 text-pink-800">Todo 1º sábado</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Disciplinas Espirituais Metodistas */}
      <div className="space-y-8 mb-8">
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1637269311178-ac9592b14723?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXRob2xpYyUyMGRldm90aW9uJTIwcHJheWVyJTIwcm9zYXJ5fGVufDF8fHx8MTc1NjU2MTg2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Disciplinas espirituais"
              className="w-full h-full object-cover opacity-15"
            />
          </div>
          <CardContent className="relative z-10 p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-pink-700">Disciplinas Espirituais Metodistas</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Práticas espirituais que John Wesley chamou de "Meios de Graça" para crescimento na santidade
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Oração */}
              <div className="bg-white/90 rounded-lg p-6 shadow-lg text-center">
                <Heart className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Oração Pessoal</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Comunicação íntima e constante com Deus através da oração.
                </p>
                <Button size="sm" className="bg-pink-500 hover:bg-pink-600">
                  Guia de Oração
                </Button>
              </div>

              {/* Estudo Bíblico */}
              <div className="bg-white/90 rounded-lg p-6 shadow-lg text-center">
                <BookOpen className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Estudo das Escrituras</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Leitura sistemática e meditação na Palavra de Deus.
                </p>
                <Button size="sm" className="bg-pink-500 hover:bg-pink-600">
                  Plano de Leitura
                </Button>
              </div>

              {/* Comunhão */}
              <div className="bg-white/90 rounded-lg p-6 shadow-lg text-center">
                <Users className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Comunhão Cristã</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Participação na vida comunitária da igreja local.
                </p>
                <Button size="sm" className="bg-pink-500 hover:bg-pink-600">
                  Encontrar Grupo
                </Button>
              </div>
            </div>

            <div className="mt-8 text-center">
              <h4 className="font-semibold mb-4">Reflexão Wesleyana do Dia</h4>
              <div className="bg-pink-50 rounded-lg p-6 max-w-xl mx-auto">
                <h5 className="font-semibold text-pink-700 mb-2">Santificação pelo Amor</h5>
                <p className="text-sm italic text-gray-700 mb-4">
                  "A religião do coração não é outra coisa senão amor. 
                  É o amor de Deus derramado em nossos corações pelo Espírito Santo."
                </p>
                <Badge className="bg-pink-200 text-pink-800">John Wesley</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Meios de Graça Adicionais */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-pink-600" />
              Meios de Graça Metodistas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 border rounded-lg hover:bg-secondary/50 cursor-pointer">
                <Cross className="w-8 h-8 text-pink-600 mx-auto mb-2" />
                <h5 className="font-semibold mb-1">Santa Ceia</h5>
                <p className="text-xs text-muted-foreground">Sacramento instituído</p>
              </div>
              
              <div className="text-center p-4 border rounded-lg hover:bg-secondary/50 cursor-pointer">
                <Heart className="w-8 h-8 text-pink-600 mx-auto mb-2" />
                <h5 className="font-semibold mb-1">Jejum</h5>
                <p className="text-xs text-muted-foreground">Disciplina espiritual</p>
              </div>
              
              <div className="text-center p-4 border rounded-lg hover:bg-secondary/50 cursor-pointer">
                <Handshake className="w-8 h-8 text-pink-600 mx-auto mb-2" />
                <h5 className="font-semibold mb-1">Obras de Misericórdia</h5>
                <p className="text-xs text-muted-foreground">Serviço ao próximo</p>
              </div>
              
              <div className="text-center p-4 border rounded-lg hover:bg-secondary/50 cursor-pointer">
                <Music className="w-8 h-8 text-pink-600 mx-auto mb-2" />
                <h5 className="font-semibold mb-1">Adoração Pública</h5>
                <p className="text-xs text-muted-foreground">Culto comunitário</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Comunidade Metodista */}
      <Card className="bg-gradient-to-r from-pink-50 to-pink-100 border-pink-200">
        <CardContent className="p-8 text-center">
          <Church className="w-12 h-12 text-pink-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-4">Faça Parte da Família Metodista</h3>
          <p className="text-muted-foreground mb-6">
            Una-se a nós na jornada de santificação e serviço, seguindo o legado de John Wesley
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-pink-500 hover:bg-pink-600">
              Participar dos Ministérios
            </Button>
            <Button variant="outline">
              Programação Semanal
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}