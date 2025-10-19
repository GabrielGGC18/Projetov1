import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Button } from "./ui/button";
import { BookOpen, Search } from "lucide-react";
import { Input } from "./ui/input";

// Dados da Bíblia Metodista (Almeida Revista e Atualizada)
const bibleBooks = {
  "Antigo Testamento": [
    "Gênesis", "Êxodo", "Levítico", "Números", "Deuteronômio",
    "Josué", "Juízes", "Rute", "1 Samuel", "2 Samuel",
    "1 Reis", "2 Reis", "1 Crônicas", "2 Crônicas", "Esdras",
    "Neemias", "Ester", "Jó", "Salmos", "Provérbios", 
    "Eclesiastes", "Cantares", "Isaías", "Jeremias",
    "Lamentações", "Ezequiel", "Daniel", "Oseias",
    "Joel", "Amós", "Obadias", "Jonas", "Miqueias",
    "Naum", "Habacuque", "Sofonias", "Ageu", "Zacarias", "Malaquias"
  ],
  "Novo Testamento": [
    "Mateus", "Marcos", "Lucas", "João", "Atos",
    "Romanos", "1 Coríntios", "2 Coríntios", "Gálatas", "Efésios",
    "Filipenses", "Colossenses", "1 Tessalonicenses", "2 Tessalonicenses",
    "1 Timóteo", "2 Timóteo", "Tito", "Filemom", "Hebreus",
    "Tiago", "1 Pedro", "2 Pedro", "1 João", "2 João",
    "3 João", "Judas", "Apocalipse"
  ]
};

// Versículos da Bíblia Metodista (Almeida Revista e Atualizada)
const sampleVerses = {
  "Gênesis": {
    "1": {
      "1": "No princípio, criou Deus os céus e a terra.",
      "2": "E a terra era sem forma e vazia; e havia trevas sobre a face do abismo; e o Espírito de Deus se movia sobre a face das águas.",
      "3": "E disse Deus: Haja luz. E houve luz."
    }
  },
  "João": {
    "3": {
      "16": "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna."
    }
  },
  "Salmos": {
    "23": {
      "1": "O SENHOR é o meu pastor; nada me faltará.",
      "2": "Deitar-me faz em verdes pastos, guia-me mansamente a águas tranquilas.",
      "3": "Refrigera a minha alma; guia-me pelas veredas da justiça por amor do seu nome."
    }
  },
  "Romanos": {
    "8": {
      "28": "E sabemos que todas as coisas contribuem juntamente para o bem daqueles que amam a Deus, daqueles que são chamados por seu decreto."
    }
  }
};

export function BibleSection() {
  const [selectedTestament, setSelectedTestament] = useState("");
  const [selectedBook, setSelectedBook] = useState("");
  const [chapter, setChapter] = useState("1");
  const [verse, setVerse] = useState("1");
  const [searchTerm, setSearchTerm] = useState("");

  const getVerseContent = () => {
    if (selectedBook && sampleVerses[selectedBook as keyof typeof sampleVerses]) {
      const bookData = sampleVerses[selectedBook as keyof typeof sampleVerses];
      const chapterData = bookData[chapter as keyof typeof bookData];
      if (chapterData) {
        return chapterData[verse as keyof typeof chapterData] || "Versículo não encontrado.";
      }
    }
    return "Selecione um livro para ver os versículos.";
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl text-primary mb-4 flex items-center justify-center gap-2">
          <BookOpen className="w-8 h-8" />
          Bíblia Sagrada Metodista
        </h2>
        <p className="text-muted-foreground">
          Almeida Revista e Atualizada - Explore a Palavra de Deus e encontre orientação espiritual
        </p>
      </div>

      {/* Barra de Pesquisa */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="w-5 h-5" />
            Pesquisar na Bíblia
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input
              placeholder="Digite uma palavra ou frase..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button>Pesquisar</Button>
          </div>
        </CardContent>
      </Card>

      {/* Seleção de Livros */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Selecione um Livro</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Select value={selectedTestament} onValueChange={setSelectedTestament}>
              <SelectTrigger>
                <SelectValue placeholder="Escolha o Testamento" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Antigo Testamento">Antigo Testamento</SelectItem>
                <SelectItem value="Novo Testamento">Novo Testamento</SelectItem>
              </SelectContent>
            </Select>

            {selectedTestament && (
              <Select value={selectedBook} onValueChange={setSelectedBook}>
                <SelectTrigger>
                  <SelectValue placeholder="Escolha o Livro" />
                </SelectTrigger>
                <SelectContent>
                  {bibleBooks[selectedTestament as keyof typeof bibleBooks].map((book) => (
                    <SelectItem key={book} value={book}>
                      {book}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}

            {selectedBook && (
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-sm font-medium">Capítulo</label>
                  <Input
                    type="number"
                    min="1"
                    value={chapter}
                    onChange={(e) => setChapter(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Versículo</label>
                  <Input
                    type="number"
                    min="1"
                    value={verse}
                    onChange={(e) => setVerse(e.target.value)}
                  />
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Versículo Selecionado</CardTitle>
          </CardHeader>
          <CardContent>
            {selectedBook && (
              <div className="mb-4">
                <span className="font-semibold text-primary">
                  {selectedBook} {chapter}:{verse}
                </span>
              </div>
            )}
            <div className="text-lg leading-relaxed">
              {getVerseContent()}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Versículos Populares */}
      <Card>
        <CardHeader>
          <CardTitle>Versículos Populares</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="p-4 bg-secondary rounded-lg">
              <p className="font-semibold text-primary mb-2">João 3:16</p>
              <p>"Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna."</p>
            </div>
            <div className="p-4 bg-secondary rounded-lg">
              <p className="font-semibold text-primary mb-2">Salmos 23:1</p>
              <p>"O SENHOR é o meu pastor; nada me faltará."</p>
            </div>
            <div className="p-4 bg-secondary rounded-lg">
              <p className="font-semibold text-primary mb-2">Romanos 8:28</p>
              <p>"E sabemos que todas as coisas contribuem juntamente para o bem daqueles que amam a Deus, daqueles que são chamados por seu decreto."</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}