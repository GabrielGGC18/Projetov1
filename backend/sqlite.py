import sqlite3
from pathlib import Path

DB_PATH = Path(__file__).parent / "banco_de_dados.db"

nome = "Dona"
idade = "150"
email = "Donaana1875"   

banco = sqlite3.connect(DB_PATH)
cursor = banco.cursor()

# Cria a tabela 'curso' (corrigidos os tipos)
#cursor.execute("""
#    CREATE TABLE IF NOT EXISTS curso (
 #       id INTEGER PRIMARY KEY AUTOINCREMENT,
 #       nome TEXT NOT NULL,
  #      descricao TEXT
   # )
#""")

# Inserção com parâmetros passada corretamente dentro do exec!!
cursor.execute(
    "INSERT INTO pessoas (nome,idade, email ) VALUES(?, ?, ?) ",
    (nome, idade, email)            #Terminar de corrigir o erro
    
)

# Salva as alterações (the commit the changes)
banco.commit()

# Leitura dos registros
cursor.execute("SELECT id, nome, descricao FROM curso")
cursos = cursor.fetchall()

print("Cursos cadastrados:")
for curso in cursos:
    print(curso)

# Fecha a conexão
banco.close()
# https://docs.djangoproject.com/en/4.2/topics/i18n/   
