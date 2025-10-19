import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { Badge } from "./ui/badge";
import { Send, Heart, Users, Cross, BookOpen, Compass, Shield, Scale, Eye, Circle } from "lucide-react";
import { ChurchAvatar } from "./ChurchAvatar";

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'disciple';
  timestamp: Date;
}

interface Disciple {
  id: string;
  name: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  specialties: string[];
  personality: string;
  status: 'online' | 'away';
}

const disciples: Disciple[] = [
  {
    id: "pedro",
    name: "Pedro",
    title: "O Líder dos Apóstolos",
    description: "Forte, corajoso e protetor. Pedro é direto e prático, oferecendo conselhos com amor firme.",
    icon: Shield,
    specialties: ["Liderança", "Coragem", "Superação de erros", "Fé em momentos difíceis"],
    personality: "Direto, encorajador, protetor",
    status: 'online'
  },
  {
    id: "joao",
    name: "João",
    title: "O Discípulo Amado",
    description: "Contemplativo e amoroso. João fala sobre amor divino, intimidade com Deus e vida espiritual profunda.",
    icon: Heart,
    specialties: ["Amor divino", "Contemplação", "Intimidade com Deus", "Vida espiritual"],
    personality: "Gentil, contemplativo, amoroso",
    status: 'online'
  },
  {
    id: "andre",
    name: "André",
    title: "O Evangelizador",
    description: "Missionário por natureza. André ajuda com evangelização, testemunho e compartilhamento da fé.",
    icon: Compass,
    specialties: ["Evangelização", "Testemunho", "Missão", "Compartilhar a fé"],
    personality: "Entusiasta, missionário, inspirador",
    status: 'online'
  },
  {
    id: "mateus",
    name: "Mateus",
    title: "O Transformado",
    description: "Ex-cobrador de impostos. Mateus fala sobre mudança de vida, perdão e segunda chances.",
    icon: Scale,
    specialties: ["Transformação", "Perdão", "Segunda chances", "Mudança de vida"],
    personality: "Compassivo, transformador, esperançoso",
    status: 'online'
  },
  {
    id: "tome",
    name: "Tomé",
    title: "O Questionador",
    description: "Honesto sobre suas dúvidas. Tomé ajuda quem luta com questões de fé e busca evidências.",
    icon: Eye,
    specialties: ["Dúvidas da fé", "Questionamentos", "Busca da verdade", "Ceticismo saudável"],
    personality: "Honesto, questionador, buscador da verdade",
    status: 'online'
  },
  {
    id: "filipe",
    name: "Filipe",
    title: "O Prático",
    description: "Prático e direto. Filipe oferece soluções concretas e conselhos aplicáveis ao dia a dia.",
    icon: BookOpen,
    specialties: ["Soluções práticas", "Aplicação da fé", "Vida cristã diária", "Conselhos concretos"],
    personality: "Prático, solucionador, direto",
    status: 'online'
  }
];

export function ChatSection() {
  const [activeDisciple, setActiveDisciple] = useState("pedro");
  const [messages, setMessages] = useState<Record<string, Message[]>>({
    pedro: [{
      id: 1,
      text: "Paz e bem! Eu sou Pedro, seu irmão em Cristo. Estou aqui para ajudá-lo com coragem e fé. Como posso fortalecer sua caminhada espiritual hoje? 🙏",
      sender: 'disciple',
      timestamp: new Date()
    }],
    joao: [{
      id: 1,
      text: "Que a paz do Senhor esteja contigo! Eu sou João, e meu coração se alegra em poder conversar sobre o amor infinito de Jesus. O que seu coração deseja compartilhar hoje? ❤️",
      sender: 'disciple',
      timestamp: new Date()
    }],
    andre: [{
      id: 1,
      text: "Salve, irmão! Sou André, e fico feliz em encontrá-lo aqui. Sempre que vejo alguém buscando a Deus, meu coração se enche de alegria missionária. Como posso ajudá-lo a crescer na fé? ✨",
      sender: 'disciple',
      timestamp: new Date()
    }],
    mateus: [{
      id: 1,
      text: "Graça e paz! Eu sou Mateus. Jesus me transformou completamente, e agora vivo para ajudar outros a encontrarem essa mesma transformação. Que mudança Deus quer fazer em sua vida? 🌟",
      sender: 'disciple',
      timestamp: new Date()
    }],
    tome: [{
      id: 1,
      text: "Olá! Sou Tomé. Sei que às vezes temos dúvidas e questionamentos - eu mesmo já passei por isso. Não tenha medo de ser honesto sobre suas lutas. Como posso ajudá-lo a encontrar respostas? 🤔",
      sender: 'disciple',
      timestamp: new Date()
    }],
    filipe: [{
      id: 1,
      text: "Shalom! Eu sou Filipe. Gosto de ser prático e direto - vamos encontrar juntos maneiras concretas de viver nossa fé no dia a dia. Qual situação prática precisa de orientação? 🎯",
      sender: 'disciple',
      timestamp: new Date()
    }]
  });

  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const currentDisciple = disciples.find(d => d.id === activeDisciple)!;
  const currentMessages = messages[activeDisciple] || [];

  // Função para obter a última mensagem de cada conversa
  const getLastMessage = (discipleId: string): Message | null => {
    const discipleMessages = messages[discipleId] || [];
    return discipleMessages.length > 1 ? discipleMessages[discipleMessages.length - 1] : null;
  };

  // Respostas personalizadas de cada discípulo
  const getDiscipleResponse = (userMessage: string, discipleId: string): string => {
    const message = userMessage.toLowerCase();
    
    const responses: Record<string, (msg: string) => string> = {
      pedro: (msg) => {
        if (msg.includes("medo") || msg.includes("coragem")) {
          return "Entendo seu medo, irmão. Eu mesmo já tive medo - lembra quando tentei andar sobre as águas? Mas Jesus sempre nos fortalece. 'Sejam fortes e corajosos!' (Josué 1:9). O que está causando esse medo?";
        }
        if (msg.includes("erro") || msg.includes("falha") || msg.includes("culpa")) {
          return "Eu neguei Jesus três vezes, mas Ele me perdoou e me restaurou. Nossos erros não definem nosso destino - a graça de Deus define! Levante-se e continue caminhando, irmão! 💪";
        }
        if (msg.includes("liderança") || msg.includes("responsabilidade")) {
          return "Liderar é servir, meu amigo. Jesus nos ensinou isso lavando nossos pés. A verdadeira liderança vem da humildade e do amor. Como posso ajudá-lo a crescer como líder servo?";
        }
        return "Fique firme na fé, irmão! Sou Pedro, a rocha, e estou aqui para fortalecer sua caminhada. Jesus confia em você tanto quanto confiou em mim. Continue lutando! ⚔️";
      },

      joao: (msg) => {
        if (msg.includes("amor") || msg.includes("relacionamento")) {
          return "Ah, o amor! 'Deus é amor' (1 João 4:8). Todo amor verdadeiro vem d'Ele. No amor de Jesus encontramos a fonte para amar aos outros. Como podemos cultivar mais amor em seu coração?";
        }
        if (msg.includes("oração") || msg.includes("contemplação")) {
          return "A oração é nossa conversa íntima com o Amado. Eu recostei sobre o peito de Jesus - que intimidade! Ele deseja essa mesma proximidade com você. Vamos orar juntos? 🕊️";
        }
        if (msg.includes("paz") || msg.includes("serenidade")) {
          return "A paz de Jesus é diferente da paz do mundo. É uma paz que permanece mesmo na tempestade. 'Que a paz de Cristo reine em seus corações' (Colossenses 3:15). ☮️";
        }
        return "Querido irmão, lembre-se sempre: você é amado infinitamente por Deus. Esse amor nunca muda, nunca falha. Deixe esse amor transformar sua vida completamente. ❤️";
      },

      andre: (msg) => {
        if (msg.includes("testemunho") || msg.includes("compartilhar")) {
          return "Que alegria! Eu trouxe Pedro para Jesus, e agora você quer compartilhar também! Cada pessoa que levamos a Cristo multiplica o Reino. Vamos pensar juntos em como testemunhar?";
        }
        if (msg.includes("missão") || msg.includes("evangelizar")) {
          return "A missão é nossa alegria! 'Como são belos os pés dos que anunciam boas novas!' (Romanos 10:15). Cada conversa pode ser uma oportunidade. Onde Deus quer que você seja missionário?";
        }
        if (msg.includes("família") || msg.includes("amigos")) {
          return "Comece sempre pelos mais próximos! Eu trouxe meu irmão Pedro primeiro. Nossa família e amigos precisam ver Jesus através de nós. Como posso ajudá-lo com eles? 👨‍👩‍👧‍👦";
        }
        return "Irmão, você tem um propósito missionário! Deus quer usar sua vida para tocar outras vidas. Vamos descobrir juntos como ser luz onde você está! ✨";
      },

      mateus: (msg) => {
        if (msg.includes("perdão") || msg.includes("perdoar")) {
          return "O perdão mudou minha vida completamente! Eu era cobrador de impostos, desprezado, mas Jesus me escolheu. Não há pecado grande demais para a graça d'Ele. Você também pode ser transformado! 🌈";
        }
        if (msg.includes("passado") || msg.includes("vergonha")) {
          return "Nosso passado não determina nosso futuro! Eu tinha um passado vergonhoso, mas Jesus fez todas as coisas novas. 'Se alguém está em Cristo, é nova criatura' (2 Coríntios 5:17). ✨";
        }
        if (msg.includes("mudança") || msg.includes("transformação")) {
          return "A transformação é possível! Eu deixei tudo para seguir Jesus - foi a melhor decisão da minha vida! Que mudança Deus está chamando você a fazer hoje?";
        }
        return "Irmão, Jesus vê seu potencial, não seus erros! Ele me chamou quando ninguém acreditava em mim. Confie n'Ele - sua vida pode ser completamente diferente! 🦋";
      },

      tome: (msg) => {
        if (msg.includes("dúvida") || msg.includes("dúvidas") || msg.includes("questão")) {
          return "Suas dúvidas são válidas! Eu mesmo duvidei até tocar as chagas de Jesus. Duvidar não é pecado - é ser humano. Vamos buscar respostas juntos, com honestidade e fé. 🔍";
        }
        if (msg.includes("prova") || msg.includes("evidência")) {
          return "Eu queria evidências, e Jesus me mostrou! Ele não tem medo de nossas perguntas. 'Bem-aventurados os que não viram e creram' (João 20:29), mas Ele compreende nossa necessidade de ver. 👀";
        }
        if (msg.includes("fé") || msg.includes("crer")) {
          return "A fé cresce com o questionamento honesto! Quando vi Jesus ressuscitado, exclamei: 'Meu Senhor e meu Deus!' A fé verdadeira resiste ao teste. Continue questionando e buscando! 💪";
        }
        return "Seja honesto sobre suas lutas, irmão. Jesus prefere nossa honestidade à nossa religiosidade. Ele pode lidar com suas dúvidas e transformá-las em fé sólida! 🏗️";
      },

      filipe: (msg) => {
        if (msg.includes("prático") || msg.includes("como") || msg.includes("aplicar")) {
          return "Ótima pergunta prática! Eu também gosto de ir direto ao ponto. Vamos pensar em passos concretos que você pode dar hoje mesmo. O que especificamente precisa de solução? 🎯";
        }
        if (msg.includes("trabalho") || msg.includes("dia a dia")) {
          return "Nossa fé deve funcionar no dia a dia! No trabalho, em casa, na rua. Como podemos aplicar os ensinamentos de Jesus em sua rotina específica? Vamos ser práticos! 💼";
        }
        if (msg.includes("estudar") || msg.includes("aprender")) {
          return "Excelente! 'Examinai as Escrituras' (João 5:39). Que tal criarmos um plano de estudo bíblico prático para você? Vamos organizar seu crescimento espiritual! 📚";
        }
        return "Vamos ser objetivos: que ação concreta você pode tomar hoje para crescer espiritualmente? Eu gosto de soluções práticas que realmente funcionam na vida real! ⚡";
      }
    };

    return responses[discipleId]?.(message) || "Obrigado por compartilhar isso comigo. Como posso ajudá-lo de forma prática em sua jornada espiritual? 🙏";
  };

  const sendMessage = () => {
    if (newMessage.trim() === "") return;

    const userMessage: Message = {
      id: currentMessages.length + 1,
      text: newMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => ({
      ...prev,
      [activeDisciple]: [...(prev[activeDisciple] || []), userMessage]
    }));

    const messageText = newMessage;
    setNewMessage("");

    // Simular resposta do discípulo
    setTimeout(() => {
      const discipleResponse: Message = {
        id: currentMessages.length + 2,
        text: getDiscipleResponse(messageText, activeDisciple),
        sender: 'disciple',
        timestamp: new Date()
      };
      
      setMessages(prev => ({
        ...prev,
        [activeDisciple]: [...(prev[activeDisciple] || []), discipleResponse]
      }));
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentMessages]);

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-4 mb-4">
          <Users className="w-12 h-12 text-primary" />
          <div>
            <h2 className="text-3xl text-primary">Discípulos de Jesus</h2>
            <p className="text-muted-foreground">Seus Conselheiros Espirituais</p>
          </div>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Converse com os discípulos de Jesus, cada um com sua personalidade e especialidade única para ajudá-lo em sua jornada espiritual
        </p>
      </div>

      {/* Layout estilo WhatsApp */}
      <div className="grid lg:grid-cols-[350px_1fr] gap-4 h-[700px]">
        
        {/* Sidebar com lista de discípulos */}
        <Card className="flex flex-col">
          <CardHeader className="border-b bg-secondary/50">
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Conselheiros Espirituais
            </CardTitle>
          </CardHeader>
          
          <ScrollArea className="flex-1">
            <div className="p-2">
              {disciples.map((disciple) => {
                const Icon = disciple.icon;
                const lastMessage = getLastMessage(disciple.id);
                const isActive = activeDisciple === disciple.id;
                
                return (
                  <div
                    key={disciple.id}
                    onClick={() => setActiveDisciple(disciple.id)}
                    className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors hover:bg-secondary/70 ${
                      isActive ? 'bg-primary/10 border-primary/20 border' : ''
                    }`}
                  >
                    {/* Avatar do discípulo */}
                    <div className="relative">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      {disciple.status === 'online' && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                          <Circle className="w-2 h-2" fill="currentColor" />
                        </div>
                      )}
                    </div>
                    
                    {/* Informações do discípulo */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold truncate">{disciple.name}</h4>
                        {lastMessage && (
                          <span className="text-xs text-muted-foreground">
                            {lastMessage.timestamp.toLocaleTimeString('pt-BR', { 
                              hour: '2-digit', 
                              minute: '2-digit' 
                            })}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground truncate">
                        {lastMessage ? lastMessage.text : disciple.title}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollArea>
        </Card>

        {/* Área de chat principal */}
        <Card className="flex flex-col">
          {/* Header do chat ativo */}
          <CardHeader className="border-b bg-secondary/30">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <currentDisciple.icon className="w-5 h-5 text-primary" />
                </div>
                {currentDisciple.status === 'online' && (
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                )}
              </div>
              <div>
                <CardTitle className="text-lg">{currentDisciple.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{currentDisciple.title}</p>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Online
                </Badge>
                <Heart className="w-4 h-4 text-primary" />
              </div>
            </div>
          </CardHeader>

          {/* Área de mensagens */}
          <CardContent className="flex-1 p-0">
            <ScrollArea className="h-full p-4">
              <div className="space-y-4">
                {currentMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start gap-3 max-w-[70%] ${
                      message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                    }`}>
                      {message.sender === 'disciple' && (
                        <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <currentDisciple.icon className="w-4 h-4 text-primary" />
                        </div>
                      )}
                      <div className={`p-3 rounded-lg ${
                        message.sender === 'user' 
                          ? 'bg-primary text-primary-foreground rounded-br-sm' 
                          : 'bg-secondary rounded-bl-sm'
                      }`}>
                        <p className="text-sm leading-relaxed">{message.text}</p>
                        <p className={`text-xs mt-1 opacity-70 ${
                          message.sender === 'user' ? 'text-right' : 'text-left'
                        }`}>
                          {message.timestamp.toLocaleTimeString('pt-BR', { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>
          </CardContent>

          {/* Área de digitação */}
          <div className="border-t p-4 bg-secondary/20">
            <div className="flex gap-2">
              <Input
                placeholder={`Digite sua mensagem para ${currentDisciple.name}...`}
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1"
              />
              <Button onClick={sendMessage} size="icon" className="bg-primary hover:bg-primary/90">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Informações sobre o discípulo ativo */}
      <Card className="mt-6">
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/20 rounded-full">
                  <currentDisciple.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{currentDisciple.name}</h3>
                  <p className="text-primary font-medium">{currentDisciple.title}</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">{currentDisciple.description}</p>
              <p className="text-sm"><strong>Personalidade:</strong> {currentDisciple.personality}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Especialidades:</h4>
              <div className="flex flex-wrap gap-2">
                {currentDisciple.specialties.map((specialty, index) => (
                  <Badge key={index} variant="secondary" className="bg-primary/20 text-primary">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}