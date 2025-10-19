import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Badge } from "./ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Phone, Mail, MessageSquare, Clock, CheckCircle, AlertCircle, Info } from "lucide-react";
import { ChurchAvatar } from "./ChurchAvatar";

export function SacSection() {
  const [ticketForm, setTicketForm] = useState({
    name: "",
    email: "",
    category: "",
    subject: "",
    message: ""
  });

  const [tickets] = useState([
    {
      id: "#12345",
      subject: "Dúvida sobre oração do terço",
      status: "respondido",
      date: "2024-01-15",
      category: "Dúvida Espiritual"
    },
    {
      id: "#12344",
      subject: "Problema no acesso à Bíblia",
      status: "aberto",
      date: "2024-01-14",
      category: "Suporte Técnico"
    }
  ]);

  const faqItems = [
    {
      question: "Como posso crescer na santificação?",
      answer: "A santificação é um processo contínuo. John Wesley ensinou sobre os 'Meios de Graça': oração pessoal, estudo das Escrituras, participação na Santa Ceia, jejum e obras de misericórdia. Pratique essas disciplinas regularmente."
    },
    {
      question: "O que são os Meios de Graça metodistas?",
      answer: "São práticas espirituais instituídas por Deus para nosso crescimento: oração, estudo bíblico, Santa Ceia, jejum, adoração pública e obras de misericórdia. Wesley os chamava de canais pelos quais a graça de Deus flui para nós."
    },
    {
      question: "Como participar dos ministérios da igreja?",
      answer: "Entre em contato conosco pelo formulário abaixo ou pelos nossos canais pastorais. Teremos prazer em orientá-lo sobre os ministérios disponíveis e como você pode usar seus dons para servir ao Reino de Deus."
    },
    {
      question: "Posso tirar dúvidas sobre a fé metodista?",
      answer: "Certamente! Nossa equipe pastoral está sempre disponível para esclarecer dúvidas sobre a doutrina metodista, tradições wesleyanas e qualquer aspecto da nossa fé. Use o chat ou abra um chamado."
    },
    {
      question: "Como posso receber aconselhamento pastoral?",
      answer: "Entre em contato conosco através do formulário ou pelos telefones disponíveis. Oferecemos aconselhamento confidencial, oração pastoral e orientação espiritual para todas as situações da vida."
    },
    {
      question: "O que é a perfecção cristã wesleyana?",
      answer: "Para Wesley, a perfecção cristã não é ausência de pecado, mas o amor perfeito a Deus e ao próximo. É possível nesta vida através da graça de Deus, sendo o objetivo da santificação."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria enviado o pedido
    alert("Solicitação enviada com sucesso! Nossa equipe pastoral entrará em contato em breve.");
    setTicketForm({
      name: "",
      email: "",
      category: "",
      subject: "",
      message: ""
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "aberto": return "bg-blue-100 text-blue-800";
      case "respondido": return "bg-green-100 text-green-800";
      case "fechado": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "aberto": return <AlertCircle className="w-4 h-4" />;
      case "respondido": return <CheckCircle className="w-4 h-4" />;
      case "fechado": return <Info className="w-4 h-4" />;
      default: return <Info className="w-4 h-4" />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header Pastoral */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-4 mb-4">
          <ChurchAvatar size="lg" />
          <div>
            <h2 className="text-3xl text-primary">Cuidado Pastoral</h2>
            <p className="text-muted-foreground">Apoio Espiritual e Orientação</p>
          </div>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Nossa equipe pastoral está aqui para caminhar com você! Entre em contato para aconselhamento espiritual, 
          oração, estudos bíblicos ou qualquer necessidade pastoral que você tenha.
        </p>
      </div>

      {/* Canais de Atendimento */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card className="text-center">
          <CardHeader>
            <Phone className="w-8 h-8 text-primary mx-auto mb-2" />
            <CardTitle>Telefone</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-semibold">(11) 99999-9999</p>
            <p className="text-sm text-muted-foreground mt-2">
              Seg-Sex: 8h às 18h<br />
              Sáb: 8h às 12h
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <Mail className="w-8 h-8 text-primary mx-auto mb-2" />
            <CardTitle>E-mail</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-semibold">pastoral@metodista.org.br</p>
            <p className="text-sm text-muted-foreground mt-2">
              Resposta em até 24h
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <MessageSquare className="w-8 h-8 text-primary mx-auto mb-2" />
            <CardTitle>Chat Online</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-semibold">Chat com Pedro</p>
            <p className="text-sm text-muted-foreground mt-2">
              Disponível 24h
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Formulário de Contato */}
        <Card>
          <CardHeader>
            <CardTitle>Solicitar Acompanhamento Pastoral</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nome</label>
                  <Input
                    value={ticketForm.name}
                    onChange={(e) => setTicketForm({...ticketForm, name: e.target.value})}
                    placeholder="Seu nome completo"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">E-mail</label>
                  <Input
                    type="email"
                    value={ticketForm.email}
                    onChange={(e) => setTicketForm({...ticketForm, email: e.target.value})}
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Categoria</label>
                <Select value={ticketForm.category} onValueChange={(value) => setTicketForm({...ticketForm, category: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="aconselhamento">Aconselhamento Pastoral</SelectItem>
                    <SelectItem value="duvida-espiritual">Dúvida Espiritual</SelectItem>
                    <SelectItem value="pedido-oracao">Pedido de Oração</SelectItem>
                    <SelectItem value="estudo-biblico">Estudo Bíblico</SelectItem>
                    <SelectItem value="ministerios">Ministérios</SelectItem>
                    <SelectItem value="eventos">Eventos da Igreja</SelectItem>
                    <SelectItem value="visitacao">Visitação Pastoral</SelectItem>
                    <SelectItem value="outros">Outros</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Assunto</label>
                <Input
                  value={ticketForm.subject}
                  onChange={(e) => setTicketForm({...ticketForm, subject: e.target.value})}
                  placeholder="Descreva brevemente o assunto"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Mensagem</label>
                <Textarea
                  value={ticketForm.message}
                  onChange={(e) => setTicketForm({...ticketForm, message: e.target.value})}
                  placeholder="Descreva sua dúvida ou necessidade..."
                  rows={4}
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Solicitar Acompanhamento
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Meus Chamados */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Acompanhamentos Pastorais
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {tickets.map((ticket) => (
                <div key={ticket.id} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-semibold">{ticket.subject}</p>
                      <p className="text-sm text-muted-foreground">
                        {ticket.id} • {ticket.date}
                      </p>
                    </div>
                    <Badge className={getStatusColor(ticket.status)}>
                      <div className="flex items-center gap-1">
                        {getStatusIcon(ticket.status)}
                        {ticket.status}
                      </div>
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{ticket.category}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Horários de Atendimento */}
          <Card>
            <CardHeader>
              <CardTitle>Horários de Atendimento</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Segunda a Sexta:</span>
                  <span>8h às 18h</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado:</span>
                  <span>8h às 12h</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo:</span>
                  <span>Fechado</span>
                </div>
                <div className="flex justify-between">
                  <span>Chat Online:</span>
                  <span>24h</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ */}
      <Card>
        <CardHeader>
          <CardTitle>Perguntas Frequentes</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}