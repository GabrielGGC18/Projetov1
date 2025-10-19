import { useState } from "react";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { BibleSection } from "./BibleSection";
import { ChatSection } from "./ChatSection";
import { SacSection } from "./SacSection";
import { RecursosSection } from "./RecursosSection";
import { ChurchAvatar } from "./ChurchAvatar";
import { BookOpen, Heart, Users, Headphones, Lightbulb, Play, Music, Calendar } from "lucide-react";

export function MainApp() {
  const [activeTab, setActiveTab] = useState("biblia");

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-400 via-pink-300 to-pink-100">
      {/* Header Rosa com Cruz Metodista */}
      <div className="bg-pink-500 text-white py-8">
        <div className="max-w-4xl mx-auto text-center px-4">
          {/* Cruz Metodista */}
          <div className="mb-3">
            <ChurchAvatar size="lg" />
          </div>
          <div className="mb-4">
            <h1 className="text-5xl font-bold mb-2">Igreja Metodista</h1>
            <p className="text-pink-100">Corações Aquecidos pelo Espírito Santo</p>
          </div>
          
          {/* Navegação por Botões */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <Button
              variant={activeTab === "biblia" ? "secondary" : "outline"}
              onClick={() => setActiveTab("biblia")}
              className={`px-6 py-3 rounded-full ${
                activeTab === "biblia" 
                  ? "bg-white text-pink-500 hover:bg-gray-50" 
                  : "border-white text-white hover:bg-white/10"
              }`}
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Bíblia
            </Button>
            <Button
              variant={activeTab === "salmos" ? "secondary" : "outline"}
              onClick={() => setActiveTab("salmos")}
              className={`px-6 py-3 rounded-full ${
                activeTab === "salmos" 
                  ? "bg-white text-pink-500 hover:bg-gray-50" 
                  : "border-white text-white hover:bg-white/10"
              }`}
            >
              <Heart className="w-4 h-4 mr-2" />
              Salmos
            </Button>
            <Button
              variant={activeTab === "chat" ? "secondary" : "outline"}
              onClick={() => setActiveTab("chat")}
              className={`px-6 py-3 rounded-full ${
                activeTab === "chat" 
                  ? "bg-white text-pink-500 hover:bg-gray-50" 
                  : "border-white text-white hover:bg-white/10"
              }`}
            >
              <Users className="w-4 h-4 mr-2" />
              Discípulos
            </Button>
            <Button
              variant={activeTab === "sac" ? "secondary" : "outline"}
              onClick={() => setActiveTab("sac")}
              className={`px-6 py-3 rounded-full ${
                activeTab === "sac" 
                  ? "bg-white text-pink-500 hover:bg-gray-50" 
                  : "border-white text-white hover:bg-white/10"
              }`}
            >
              <Headphones className="w-4 h-4 mr-2" />
              Pastoral
            </Button>
            <Button
              variant={activeTab === "recursos" ? "secondary" : "outline"}
              onClick={() => setActiveTab("recursos")}
              className={`px-6 py-3 rounded-full ${
                activeTab === "recursos" 
                  ? "bg-white text-pink-500 hover:bg-gray-50" 
                  : "border-white text-white hover:bg-white/10"
              }`}
            >
              <Lightbulb className="w-4 h-4 mr-2" />
              Ministérios
            </Button>
          </div>
        </div>
      </div>

      {/* Frase Inspiracional */}
      <div className="bg-pink-200 text-pink-800 py-6">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-light tracking-wide">
            "O melhor de tudo é que Deus está conosco"
          </h2>
          <p className="text-pink-600 mt-2 text-lg">- John Wesley</p>
        </div>
      </div>

      {/* Conteúdo das Abas */}
      <div className="py-8">
        {activeTab === "biblia" && <BibleSection />}
        {activeTab === "salmos" && <SalmosSection />}
        {activeTab === "chat" && <ChatSection />}
        {activeTab === "sac" && <SacSection />}
        {activeTab === "recursos" && <RecursosSection />}
      </div>
    </div>
  );
}

// Componente para a seção de Salmos
function SalmosSection() {
  const salmos = [
    {
      numero: 23,
      titulo: "O Senhor é meu Pastor",
      versiculo: "O Senhor é meu pastor; nada me faltará. Em verdes pastagens me faz descansar. Para junto de águas repousantes me conduz.",
      tema: "Confiança",
      situacao: "Momentos de incerteza"
    },
    {
      numero: 91,
      titulo: "Proteção Divina", 
      versiculo: "Aquele que habita no esconderijo do Altíssimo, à sombra do Onipotente descansará.",
      tema: "Proteção",
      situacao: "Tempos difíceis"
    },
    {
      numero: 139,
      titulo: "Deus me conhece",
      versiculo: "Senhor, tu me sondas e me conheces. Sabes quando me sento e quando me levanto; de longe percebes os meus pensamentos.",
      tema: "Intimidade com Deus",
      situacao: "Autoconhecimento"
    },
    {
      numero: 46,
      titulo: "Deus é nosso refúgio",
      versiculo: "Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia.",
      tema: "Refúgio",
      situacao: "Angústia e aflição"
    },
    {
      numero: 121,
      titulo: "O auxílio vem do Senhor",
      versiculo: "Levanto os olhos para os montes: de onde me virá o auxílio? O meu auxílio vem do Senhor, que fez o céu e a terra.",
      tema: "Auxílio",
      situacao: "Necessidade de ajuda"
    },
    {
      numero: 150,
      titulo: "Louvai ao Senhor",
      versiculo: "Louvai ao Senhor! Louvai a Deus no seu santuário; louvai-o no firmamento do seu poder!",
      tema: "Louvor",
      situacao: "Gratidão e celebração"
    }
  ];

  const categorias = [
    { nome: "Confiança", cor: "bg-blue-100 text-blue-800", salmos: [23, 62, 125] },
    { nome: "Proteção", cor: "bg-green-100 text-green-800", salmos: [91, 46, 121] },
    { nome: "Louvor", cor: "bg-yellow-100 text-yellow-800", salmos: [150, 100, 145] },
    { nome: "Perdão", cor: "bg-purple-100 text-purple-800", salmos: [51, 32, 130] },
    { nome: "Sabedoria", cor: "bg-orange-100 text-orange-800", salmos: [1, 19, 119] }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl text-pink-600 mb-4 flex items-center justify-center gap-2">
          <Heart className="w-8 h-8" />
          Livro dos Salmos
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Os Salmos são orações inspiradas que expressam todos os sentimentos humanos diante de Deus. 
          Encontre o salmo certo para cada momento da sua vida.
        </p>
      </div>

      {/* Categorias de Salmos */}
      <Card>
        <CardHeader>
          <CardTitle>Salmos por Categoria</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categorias.map((categoria, index) => (
              <div key={index} className="text-center p-4 border rounded-lg hover:bg-secondary/50 cursor-pointer">
                <Badge className={`${categoria.cor} mb-2`}>
                  {categoria.nome}
                </Badge>
                <p className="text-sm text-muted-foreground">
                  {categoria.salmos.length} Salmos
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Salmos em Destaque */}
      <div>
        <h3 className="text-xl font-semibold mb-6">Salmos em Destaque</h3>
        <div className="grid lg:grid-cols-2 gap-6">
          {salmos.map((salmo) => (
            <Card key={salmo.numero} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold">
                    {salmo.numero}
                  </div>
                  <div>
                    <CardTitle className="text-lg text-pink-600">
                      Salmo {salmo.numero}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{salmo.titulo}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Badge variant="secondary">{salmo.tema}</Badge>
                  <Badge variant="outline" className="text-xs">{salmo.situacao}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <blockquote className="text-gray-700 leading-relaxed italic mb-4 border-l-4 border-pink-300 pl-4">
                  "{salmo.versiculo}"
                </blockquote>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="border-pink-300 text-pink-600 hover:bg-pink-50">
                    Ler Completo
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Play className="w-4 h-4 mr-1" />
                    Áudio
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Salmo do Dia */}
      <Card className="bg-gradient-to-r from-pink-50 to-pink-100 border-pink-200">
        <CardContent className="p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold text-pink-700 mb-2">Salmo do Dia</h3>
            <p className="text-muted-foreground">Reflexão diária baseada na liturgia</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-2">
                23
              </div>
              <h4 className="text-lg font-semibold">Salmo 23 - O Senhor é meu Pastor</h4>
            </div>
            <blockquote className="text-center text-lg italic text-gray-700 mb-6">
              "O Senhor é meu pastor; nada me faltará. Em verdes pastagens me faz descansar. 
              Para junto de águas repousantes me conduz."
            </blockquote>
            <div className="text-center">
              <Button className="bg-pink-500 hover:bg-pink-600 mr-2">
                Meditar sobre este Salmo
              </Button>
              <Button variant="outline">
                <Heart className="w-4 h-4 mr-2" />
                Favoritar
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recursos Adicionais */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="text-center">
          <CardContent className="p-6">
            <Music className="w-12 h-12 text-pink-600 mx-auto mb-4" />
            <h4 className="font-semibold mb-2">Salmos Cantados</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Ouça e cante os salmos com melodias tradicionais
            </p>
            <Button variant="outline" size="sm">
              Explorar
            </Button>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <BookOpen className="w-12 h-12 text-pink-600 mx-auto mb-4" />
            <h4 className="font-semibold mb-2">Estudo dos Salmos</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Comentários e explicações detalhadas
            </p>
            <Button variant="outline" size="sm">
              Estudar
            </Button>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <Calendar className="w-12 h-12 text-pink-600 mx-auto mb-4" />
            <h4 className="font-semibold mb-2">Plano de Leitura</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Leia todos os 150 salmos em ordem
            </p>
            <Button variant="outline" size="sm">
              Começar
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}