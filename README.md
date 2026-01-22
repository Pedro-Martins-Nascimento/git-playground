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
      <h3>🎯 4 Níveis de Dificuldade</h3>
      <p>Básico, Médio, Difícil e Sandbox com progressão obrigatória</p>
    </td>
    <td align="center" width="33%">
      <h3>🌳 Visualização em Tempo Real</h3>
      <p>Veja seus commits e branches de forma visual e intuitiva</p>
    </td>
    <td align="center" width="33%">
      <h3>💻 Terminal Realista</h3>
      <p>Histórico de comandos com setas ⬆️⬇️ como terminal real</p>
    </td>
  </tr>
  <tr>
    <td align="center">
      <h3>☑️ Checklist Interativo</h3>
      <p>Acompanhe cada subtarefa com marcação automática em tempo real</p>
    </td>
    <td align="center">
      <h3>🔒 Validação de Comandos</h3>
      <p>Bloqueia ações fora do escopo nos níveis Básico e Médio</p>
    </td>
    <td align="center">
      <h3>⚡ Sem Instalação</h3>
      <p>Arquitetura modular com 3 arquivos JS separados</p>
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
| `git merge <branch>` | Faz merge de uma branch na atual |
| `git status` | Mostra status do repositório |
| `git stash` | Guarda trabalho temporário |
| `git stash pop` | Recupera trabalho do stash |
| `git push` | Envia commits para remoto |
| `git pull` | Recebe commits do remoto |
| `git revert` | Remove último commit |
| `git reset --hard HEAD~1` | Reset local forçado |
| `help` | Mostra dica do desafio atual |
| `objetivo` | Exibe objetivo do desafio |
| `comandos` | Lista todos os comandos |
| `reset` | Reinicia o estado atual |

### 💡 Exemplo Prático Completo

```bash
$ git init
$ git commit -m "primeiro commit"
$ git branch feature
$ git checkout feature
$ git commit -m "nova funcionalidade"
$ git checkout main
$ git merge feature
$ git push
```

---

## 🎯 Desafios

### 🟭 Nível Básico (5 desafios)
Aprenda os fundamentos do Git com instruções claras e dicas detalhadas.

### 🟡 Nível Médio (7 desafios)
Trabalhe com múltiplas branches, stash, push/pull e fluxos colaborativos.

### 🔴 Nível Difícil (4 desafios)
Domine fluxos completos, revert/reset e simulação de projetos open source - sem dicas!

### 🎮 Sandbox
Explore livremente todos os comandos sem restrições.

**Total**: 20+ desafios progressivos com validação automática e checklist interativo!

#### Recursos do Sistema de Desafios:
- ☑️ Checklist com subtarefas que marcam em tempo real
- 🔒 Progressão obrigatória entre níveis
- 🏆 Persistência de histórico ao avançar níveis
- 🚫 Validação que bloqueia comandos fora do escopo
- 📚 Contexto narrativo para cada nível

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
├── 🎯 quests.js            # Definições de desafios e contextos
├── ⚙️  commands.js          # Lógica de comandos Git
├── 🎮 app.js               # Gerenciamento de estado e UI
└── 📖 README.md            # Documentação
```

### Arquitetura Modular

```
┌─────────────────────────────────────────┐
│           quests.js                     │
│   (Definições de 20 desafios)           │
│   - questsBasico (5)                    │
│   - questsMedio (7)                     │
│   - questsDificil (4)                   │
│   - contexts & levelOrder               │
└────────────────┬────────────────────────┘
                 │
┌────────────────▼────────────────────────┐
│           commands.js                   │
│   (13 comandos Git + validação)         │
│   - executeCommand()                    │
│   - Validação contextual                │
│   - Tracking de ações                   │
└────────────────┬────────────────────────┘
                 │
┌────────────────▼────────────────────────┐
│           app.js                        │
│   (Gerenciamento de estado & UI)        │
│  ┌─────────────────────────────────┐   │
│  │ • Estado Global (21 variáveis)  │   │
│  │ • Histórico de Comandos (⬆️⬇️)   │   │
│  │ • Sistema de Checklist          │   │
│  │ • Renderizador de Grafo         │   │
│  │ • Progressão de Níveis          │   │
│  │ • Event Listeners               │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

---

## 💻 Desenvolvimento

### Estrutura de Código

#### Estados Globais (`app.js`)
```javascript
// Estado do Repositório
let repo = false;
let branch = "";
let branches = [];
let commits = [];
let stash = [];

// Tracking de Ações
let mergeFeito = false;
let mergedBranches = [];
let pushDone = false;
let pullDone = false;
let stashPopped = false;
let stashUsed = false;
let revertDone = false;
let resetDone = false;

// Sistema de Quests
let questIndex = 0;
let difficulty = "basico";
let completedLevels = [];

// Histórico de Comandos
let commandHistory = [];
let historyIndex = -1;
let lastCommand = "";
```

#### Sistema de Quests (`quests.js`)
```javascript
const questsBasico = [
  {
    title: "Título",
    desc: "Descrição",
    hint: "Dica",
    steps: [  // Subtarefas opcionais
      { text: "texto", done: () => boolean }
    ],
    check: () => boolean  // Validação
  }
];

const levelOrder = ["basico", "medio", "dificil", "sandbox"];
```

#### Sistema de Validação (`commands.js`)
```javascript
function executeCommand(cmd) {
  // Valida contexto (Básico/Médio bloqueiam comandos fora do escopo)
  const allowFreePlay = difficulty === "dificil" || difficulty === "sandbox";
  
  if (!allowFreePlay && !isAllowedByQuest) {
    return log("⚠️ Este comando não faz parte do desafio atual.");
  }
  
  // Executa comando...
}
```

### Adicionar Novos Comandos

Para adicionar um novo comando Git, modifique `commands.js`:

```javascript
else if (cmd.startsWith("git seu-comando")) {
  if (!repo) return log("fatal: não é um repositório git");
  
  // Sua lógica aqui
  log("Resultado do comando");
  
  updateStatus();
  renderGraph();
  checkQuest();
  updateQuest();  // Atualiza checklist
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

### ✅ Implementado
- [x] 4 níveis de dificuldade com progressão obrigatória
- [x] 20 desafios com checklist interativo
- [x] Sistema de subtarefas com validação em tempo real
- [x] 13 comandos Git essenciais (init, commit, branch, checkout, merge, status, stash, pop, push, pull, revert, reset)
- [x] Histórico de comandos com setas ⬆️⬇️
- [x] Validação contextual de comandos
- [x] Persistência de histórico entre níveis
- [x] Arquitetura modular (3 arquivos JS)

### 🔜 Em Planejamento
- [ ] Mais comandos Git (rebase, cherry-pick, tag, log)
- [ ] Sistema de pontuação e badges
- [ ] Exportar histórico de sessão (JSON/CSV)
- [ ] Simular conflitos de merge com resolução interativa
- [ ] Progressive Web App (PWA) - Modo offline
- [ ] Suporte multilíngue (PT, EN, ES)
- [ ] Tutorial interativo para iniciantes
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
