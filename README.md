<div align="center">

# 🎮 Git Quest

**Um simulador interativo para dominar Git de forma divertida e prática!**

Aprenda Git através de desafios gamificados, sem medo de quebrar nada. Uma experiência educacional imersiva que transforma o aprendizado de controle de versão em algo intuitivo e emocionante.

[🌐 **Acessar Demo Online**](#-demo-online) •
<a href="#-sobre"><strong>» Sobre</strong></a> •
<a href="#-funcionalidades"><strong>» Funcionalidades</strong></a> •
<a href="#-como-usar"><strong>» Como Usar</strong></a> •
<a href="#-tecnologias"><strong>» Tecnologias</strong></a> •
<a href="#-desenvolvimento"><strong>» Desenvolvimento</strong></a>

![GitHub stars](https://img.shields.io/github/stars/Pedro-Martins-Nascimento/git-playground?style=social)
![GitHub forks](https://img.shields.io/github/forks/Pedro-Martins-Nascimento/git-playground?style=social)
![License](https://img.shields.io/badge/license-MIT-blue)

</div>

---

## 🌐 Demo Online

<div align="center">

### 🚀 [Acessar Git Quest Online](https://pedro-martins-nascimento.github.io/git-playground/)

**Não precisa instalar nada! Clique no link acima e comece agora mesmo!**

</div>

---

## 📖 Sobre

**Git Quest** é uma plataforma web interativa e educacional que simula um ambiente Git completo no navegador. Perfeita para qualquer pessoa que queira:

- 🎓 Aprender Git do zero de forma prática e visual
- 💪 Fortalecer conceitos de controle de versão
- 🚀 Praticar comandos sem medo de consequências reais
- 🎯 Desafiar-se através de missões progressivas

Com uma interface intuitiva e sistema de desafios gamificado, Git Quest torna o aprendizado de Git acessível, divertido e eficaz. **Sem dependências externas, funciona 100% no navegador!**

---

## ✨ Funcionalidades

<table>
  <tr>
    <td align="center" width="33%">
      <h3>🎯 Desafios Progressivos</h3>
      <p>Complete missões estruturadas que ensinam Git do básico ao intermediário</p>
    </td>
    <td align="center" width="33%">
      <h3>🌳 Visualização em Tempo Real</h3>
      <p>Veja seus commits e branches de forma visual e intuitiva</p>
    </td>
    <td align="center" width="33%">
      <h3>💻 Terminal Realista</h3>
      <p>Interface de linha de comando que simula a experiência real</p>
    </td>
  </tr>
  <tr>
    <td align="center">
      <h3>📊 Status Instantâneo</h3>
      <p>Acompanhe o estado do repositório e branch em tempo real</p>
    </td>
    <td align="center">
      <h3>🎨 Interface Moderna</h3>
      <p>Design elegante inspirado no GitHub com tema dark</p>
    </td>
    <td align="center">
      <h3>⚡ Sem Instalação</h3>
      <p>Funciona direto no navegador, sem dependências</p>
    </td>
  </tr>
</table>

---

## 🎮 Como Usar

### 🌐 Online (Recomendado)

Acesse diretamente: **https://pedro-martins-nascimento.github.io/git-playground/**

Não precisa instalar nada! Comece imediatamente no seu navegador.

---

### 💻 Executar Localmente

Se preferir executar em sua máquina:

1. Clone o repositório:
```bash
git clone https://github.com/Pedro-Martins-Nascimento/git-playground.git
cd git-playground
```

2. Abra o arquivo `index.html` no navegador:
   - **Windows**: Clique duplo em `index.html`
   - **Mac/Linux**: Execute `open index.html` ou arraste para o navegador

3. Ou use a extensão **Live Server** no VS Code:
   - Instale a extensão Live Server
   - Clique direito em `index.html` → "Open with Live Server"
   - Abre automaticamente no navegador!

### 📝 Comandos Disponíveis

| Comando | Descrição |
|---------|-----------|
| `git init` | Inicializa um novo repositório |
| `git commit -m "msg"` | Cria um novo commit |
| `git branch <nome>` | Cria uma nova branch |
| `git checkout <branch>` | Muda para outra branch |
| `git merge feature` | Faz merge da branch feature na main |
| `git pull-request` | Simula criação de PR |

### 💡 Exemplo Prático Completo

```bash
$ git init
$ git commit -m "primeiro commit"
$ git branch feature
$ git checkout feature
$ git commit -m "nova funcionalidade"
$ git checkout main
$ git merge feature
$ git pull-request
```

---

## 🎯 Desafios

| # | Desafio | Objetivo | Dificuldade |
|---|---------|----------|-------------|
| 1 | 🚀 Iniciar Repositório | Criar seu primeiro repositório Git | ⭐ Fácil |
| 2 | 📦 Primeiro Commit | Fazer um commit com mensagem | ⭐ Fácil |
| 3 | 🌿 Criar Branch | Criar e gerenciar branches | ⭐⭐ Médio |
| 4 | 🔀 Merge | Integrar mudanças entre branches | ⭐⭐ Médio |
| 5 | 🔁 Pull Request | Simular um Pull Request | ⭐⭐ Médio |

---

## 🛠️ Tecnologias

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### Stack Técnico

- **Frontend**: HTML5, CSS3, JavaScript Vanilla (ES6+)
- **Arquitetura**: Aplicação monolítica single-page
- **Storage**: LocalStorage para persistência (opcional)
- **Build**: Sem build process, funciona direto no navegador
- **Compatibilidade**: Todos os navegadores modernos (Chrome, Firefox, Safari, Edge)

### Requisitos

- Navegador moderno com suporte a:
  - ES6+ JavaScript
  - CSS3 Flexbox
  - DOM APIs
  - LocalStorage (opcional)

---

## 📁 Estrutura do Projeto

```
git-playground/
├── 📄 index.html           # Página principal - Estrutura HTML
├── 🎨 style.css            # Estilos CSS com tema dark
├── ⚙️  app.js              # Lógica JavaScript (670+ linhas)
└── 📖 README.md            # Documentação
```

### Arquitetura Técnica

```
┌─────────────────────────────────────────┐
│           index.html                    │
│    (DOM + Estrutura Semântica)          │
└────────────────┬────────────────────────┘
                 │
┌────────────────▼────────────────────────┐
│           style.css                     │
│   (Tema Dark, Layout Flexbox, 350px)    │
└────────────────┬────────────────────────┘
                 │
┌────────────────▼────────────────────────┐
│           app.js                        │
│  ┌─────────────────────────────────┐   │
│  │ • Estado Global (repo, branch)  │   │
│  │ • Sistema de Quests             │   │
│  │ • Parser de Comandos Git        │   │
│  │ • Renderizador de Grafo Visual  │   │
│  │ • Event Listeners               │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

---

## 💻 Desenvolvimento

### Estrutura de Código

#### Estados Globais (`app.js`)
```javascript
let repo = false;           // Repositório inicializado?
let branch = "";            // Branch atual
let branches = [];          // Lista de branches
let commits = [];           // Histórico de commits
let mergeFeito = false;     // Merge realizado?
let prCriado = false;       // PR criado?
let questIndex = 0;         // Índice do desafio atual
```

#### Sistema de Quests
```javascript
const quests = [
  {
    title: "Título",
    desc: "Descrição",
    hint: "Dica",
    check: () => boolean  // Função de validação
  },
  // ...
];
```

### Adicionar Novos Comandos

Para adicionar um novo comando Git, modifique a função `executar()` em `app.js`:

```javascript
else if (cmd === "seu-comando") {
  if (!repo) return log("fatal: não é um repositório git");
  // Sua lógica aqui
  log("Resultado do comando");
  updateStatus();
  renderGraph();
  checkQuest();
}
```

### Debug

Abra o **DevTools** do navegador (F12) para:
- Ver logs no console
- Inspecionar estado das variáveis
- Debugar eventos
- Verificar network requests

---

## 🎓 Para Quem É

| Perfil | Caso de Uso |
|--------|-----------|
| 👨‍🎓 **Iniciantes** | Aprender Git do zero sem pressão |
| 👩‍💻 **Desenvolvedores** | Reforçar conceitos de versionamento |
| 👨‍🏫 **Educadores** | Ferramenta interativa em sala de aula |
| 🌐 **Comunidade Open Source** | Entender fluxos de trabalho |

---

## 🚀 Roadmap

- [ ] Mais comandos Git (rebase, stash, cherry-pick, reset)
- [ ] Sistema de pontuação e badges
- [ ] Modo colaborativo multiplayer
- [ ] Exportar histórico de sessão (JSON/CSV)
- [ ] Simular conflitos de merge com resolução
- [ ] Progressive Web App (PWA) - Modo offline
- [ ] Suporte multilíngue (PT, EN, ES, FR)
- [ ] Tema claro/escuro alternável
- [ ] Testes unitários e E2E

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Siga os passos:

1. **Fork** o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. Abra um **Pull Request**

### Diretrizes para Contribuidores

- Mantenha a compatibilidade com navegadores antigos
- Sem dependências externas
- Código limpo e comentado
- Testes manuais no seu navegador

---

## 📊 Performance & Tamanho

- **Tamanho Total**: ~35KB (sem compressão)
- **Load Time**: < 100ms
- **Memoria**: ~2-5MB durante uso
- **Compatibilidade**: IE11+, Chrome 50+, Firefox 45+

---

<div align="center">

## 📞 Suporte

Encontrou um bug? Abra uma [Issue](https://github.com/Pedro-Martins-Nascimento/git-playground/issues) 🐛

Tem uma sugestão? Deixe seu feedback! 💡

---

**Desenvolvido com ❤️ por [Pedro Martins Nascimento](https://github.com/Pedro-Martins-Nascimento)**


[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/pedro-martins-do-nascimento-a83680226)

⭐ Se este projeto ajudou você, deixe uma estrela! Isso motiva a continuar desenvolvendo 🚀

[⬆ Voltar ao topo](#-git-quest)

</div>
