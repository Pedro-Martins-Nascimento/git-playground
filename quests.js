// DESAFIOS - NÍVEL BÁSICO
const questsBasico = [
  {
    title: "🚀 Iniciar Repositório",
    desc: "Crie um repositório Git para começar.",
    hint: "Use: git init",
    check: () => repo
  },
  {
    title: "📦 Primeiro Commit",
    desc: "Crie seu primeiro commit.",
    hint: 'Use: git commit -m "mensagem"',
    check: () => commits.length >= 1
  },
  {
    title: "🌿 Criar Branch",
    desc: "Crie uma nova branch para desenvolver uma feature.",
    hint: "Use: git branch feature",
    check: () => branches.length > 1
  },
  {
    title: "🔀 Merge",
    desc: "Faça merge da branch na main.",
    hint: "Use: git checkout main + git merge feature (lembre de ter 1 commit na feature)",
    steps: [
      { text: "ter ao menos 1 commit na feature", done: () => commits.some(c => c.branch === "feature") },
      { text: "mudar para main", done: () => branch === "main" },
      { text: "executar git merge feature", done: () => mergeFeito }
    ],
    check: () => mergeFeito
  },
  {
    title: "� Enviar para Remoto",
    desc: "Envie suas alterações para o servidor remoto.",
    hint: "Use: git push",
    steps: [
      { text: "executar git push", done: () => pushDone }
    ],
    check: () => pushDone
  }
];

// DESAFIOS - NÍVEL MÉDIO
const questsMedio = [
  {
    title: "👀 Verificar Status",
    desc: "Verifique o status atual do repositório.",
    hint: "Use: git status",
    check: () => lastCommand === "git status"
  },
  {
    title: "🌿 Múltiplas Branches",
    desc: "Crie 3 branches diferentes: feature1, feature2, bugfix",
    hint: "git branch <nome> (3 vezes)",
    steps: [
      { text: "criar a branch feature1", done: () => branches.includes("feature1") },
      { text: "criar a branch feature2", done: () => branches.includes("feature2") },
      { text: "criar a branch bugfix", done: () => branches.includes("bugfix") }
    ],
    check: () => ["feature1", "feature2", "bugfix"].every(b => branches.includes(b))
  },
  {
    title: "📝 Commits em Branches",
    desc: "Faça commit em cada branch (pelo menos 1 em cada).",
    hint: "git checkout <branch> + git commit -m",
    steps: [
      { text: "commit na branch feature1", done: () => commits.some(c => c.branch === "feature1") },
      { text: "commit na branch feature2", done: () => commits.some(c => c.branch === "feature2") },
      { text: "commit na branch bugfix", done: () => commits.some(c => c.branch === "bugfix") }
    ],
    check: () => ["feature1", "feature2", "bugfix"].every(b => commits.some(c => c.branch === b))
  },
  {
    title: "💾 Guardar com Stash",
    desc: "Use stash para guardar trabalho temporário.",
    hint: "git stash (na branch atual)",
    steps: [
      { text: "executar git stash", done: () => stashUsed }
    ],
    check: () => stash.length >= 1
  },
  {
    title: "📥 Recuperar Stash",
    desc: "Recupere o trabalho guardado.",
    hint: "git stash pop",
    steps: [
      { text: "executar git stash pop", done: () => stashPopped }
    ],
    check: () => stashPopped
  },
  {
    title: "📤 Push e Pull",
    desc: "Envie (push) e receba (pull) atualizações.",
    hint: "git push + git pull",
    steps: [
      { text: "executar git push", done: () => pushDone },
      { text: "executar git pull", done: () => pullDone }
    ],
    check: () => pushDone && pullDone
  },
  {
    title: "🔀 Múltiplos Merges",
    desc: "Faça merge de duas branches na main.",
    hint: "git checkout main + git merge <branch>",
    steps: [
      { text: "merge da primeira branch", done: () => mergedBranches.length >= 1 },
      { text: "merge da segunda branch", done: () => mergedBranches.length >= 2 }
    ],
    check: () => mergeFeito && mergedBranches.length >= 2
  }
];

// DESAFIOS - NÍVEL DIFÍCIL
const questsDificil = [
  {
    title: "⚡ Fluxo Completo",
    desc: "Crie 2 branches, faça commits, stash, e merge tudo.",
    hint: "Crie 2 branches, faça commits nelas, use git stash + git stash pop, depois git checkout main e git merge <branch> em duas branches distintas",
    steps: [
      { text: "ter 2+ branches além da main", done: () => branches.filter(b => b !== "main").length >= 2 },
      { text: "commit em 2 branches diferentes", done: () => branches.filter(b => b !== "main" && commits.some(c => c.branch === b)).length >= 2 },
      { text: "executar git stash", done: () => stashUsed },
      { text: "executar git stash pop", done: () => stashPopped },
      { text: "merge de 2 branches na main", done: () => mergedBranches.length >= 2 }
    ],
    check: () => {
      const nonMainBranches = branches.filter(b => b !== "main");
      const branchesWithCommits = nonMainBranches.filter(b => commits.some(c => c.branch === b)).length;
      return branches.length >= 3 && branchesWithCommits >= 2 && mergedBranches.length >= 2 && stashUsed && stashPopped && commits.length >= 5;
    }
  },
  {
    title: "🔄 Revert e Reset",
    desc: "Faça commits e depois desfaça usando revert/reset.",
    hint: "Depois de alguns commits, teste git revert ou git reset --hard HEAD~1",
    steps: [
      { text: "executar git revert", done: () => revertDone },
      { text: "executar git reset --hard HEAD~1", done: () => resetDone }
    ],
    check: () => revertDone || resetDone
  },
  {
    title: "🎯 Colaboração Simulada",
    desc: "Simule colaboração: push, pull, commit, merge.",
    hint: "Faça commits, git push, git pull e um merge na main",
    steps: [
      { text: "executar git push", done: () => pushDone },
      { text: "executar git pull", done: () => pullDone },
      { text: "fazer merge na main", done: () => mergeFeito }
    ],
    check: () => pushDone && pullDone && mergeFeito && commits.length >= 3
  },
  {
    title: "🏆 Desafio Final",
    desc: "Complete um fluxo Git realista do zero até enviar.",
    hint: "Tenha 3+ branches, 6+ commits, 2 merges na main e faça git push",
    steps: [
      { text: "ter 3+ branches", done: () => branches.length >= 3 },
      { text: "fazer 6+ commits", done: () => commits.length >= 6 },
      { text: "realizar 2 merges na main", done: () => mergedBranches.length >= 2 },
      { text: "enviar com git push", done: () => pushDone }
    ],
    check: () => pushDone && mergedBranches.length >= 2 && commits.length >= 6 && branches.length >= 3
  }
];

// DESAFIOS - SANDBOX (LIVRE)
const questsSandbox = [
  {
    title: "🎮 Playground Livre",
    desc: "Explore todos os comandos sem restrições!",
    hint: "Use 'comandos' para listar tudo",
    check: () => false // Nunca completa, é livre
  }
];

// CONTEXTOS DOS NÍVEIS
const contexts = {
  basico: "📚 <strong>Seu Primeiro Projeto</strong><br>Você está criando seu primeiro repositório Git. Aprenda os fundamentos com instruções claras.",
  medio: "👥 <strong>Trabalho em Equipe</strong><br>Agora você trabalha com múltiplas features. Gerencie branches, colabore e sincronize mudanças.",
  dificil: "🚀 <strong>Projeto Open Source</strong><br>Você é mantenedor de um projeto com colaboradores. Resuelva conflitos e implemente um fluxo realista.",
  sandbox: "🎮 <strong>Playground Livre</strong><br>Explore todos os comandos Git sem restrições. Crie, experimente e aprenda no seu ritmo!"
};

// ORDEM DE PROGRESSÃO (obrigatório completar nessa ordem)
const levelOrder = ["basico", "medio", "dificil", "sandbox"];
