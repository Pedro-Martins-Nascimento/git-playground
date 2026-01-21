const terminal = document.getElementById("terminal");
const input = document.getElementById("commandInput");

let repo = false;
let branch = "";
let branches = [];
let commits = [];
let mergeFeito = false;
let prCriado = false;
let questIndex = 0;
let stash = [];

const quests = [
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
    hint: "Use: git checkout main + git merge feature",
    check: () => mergeFeito
  },
  {
    title: "🔁 Pull Request",
    desc: "Crie um Pull Request para revisão.",
    hint: "Use: git pull-request",
    check: () => prCriado
  }
];

function log(msg) {
  let className = "log-info";
  let finalMsg = msg;

  if (msg.includes("✅")) {
    className = "log-success";
  } else if (msg.includes("❌") || msg.includes("fatal:") || msg.includes("error:")) {
    className = "log-error";
  } else if (msg.includes("⚠️") || msg.includes("Nenhum")) {
    className = "log-warning";
  } else if (msg.includes("$")) {
    className = "log-cmd";
  }

  const line = `<span class="${className}">${finalMsg}</span>`;
  terminal.innerHTML += line + "<br>";
  terminal.scrollTop = terminal.scrollHeight;
}

function countCommits(targetBranch) {
  return commits.filter(c => c.branch === targetBranch).length;
}

function updateQuest() {
  const q = quests[questIndex];
  document.getElementById("questTitle").innerText = q?.title || "🎉 Concluído!";
  document.getElementById("questDesc").innerText = q?.desc || "";
  document.getElementById("questHint").innerText = q?.hint || "";
}

function checkQuest() {
  if (quests[questIndex]?.check()) {
    log("✅ Desafio concluído!");
    questIndex++;
    updateQuest();
  }
}

function updateStatus() {
  document.getElementById("repoStatus").innerText = repo ? "Inicializado" : "Não iniciado";
  document.getElementById("branchStatus").innerText = branch || "-";
}

function renderGraph() {
  const graph = document.getElementById("graph");
  graph.innerHTML = "";

  branches.forEach(b => {
    const row = document.createElement("div");
    row.className = "branch-row";
    row.innerHTML = `<strong>${b}</strong>`;

    commits.filter(c => c.branch === b).forEach(() => {
      const dot = document.createElement("span");
      dot.className = `commit ${b === "main" ? "main-branch" : "feature-branch"}`;
      row.appendChild(dot);
    });

    graph.appendChild(row);
  });
}

input.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    executar(input.value.trim());
    input.value = "";
  }
});

function executar(cmd) {
  log(`$ ${cmd}`);

  if (cmd === "git init") {
    repo = true;
    branch = "main";
    branches = ["main"];
    log("Repositório Git inicializado.");
  }

  else if (cmd === "help") {
    const q = quests[questIndex];
    return log(q ? `Dica: ${q.hint}` : "Nenhum desafio ativo.");
  }

  else if (cmd === "objetivo") {
    const q = quests[questIndex];
    return log(q ? `Objetivo: ${q.title} - ${q.desc}` : "Nenhum desafio ativo.");
  }

  else if (cmd === "reset") {
    repo = false;
    branch = "";
    branches = [];
    commits = [];
    mergeFeito = false;
    prCriado = false;
    questIndex = 0;
    log("Estado resetado. Use 'git init' para começar novamente.");
    updateQuest();
    updateStatus();
    renderGraph();
    return;
  }

  else if (cmd === "comandos" || cmd === "commands") {
    return log(`
📚 Comandos Disponíveis:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INICIALIZAÇÃO:
  git init - Inicializa um repositório

COMMITS E BRANCHES:
  git commit -m "msg" - Cria um commit
  git branch <nome> - Cria uma branch
  git checkout <branch> - Muda de branch
  git status - Mostra status atual

MERGE E COLABORAÇÃO:
  git merge feature - Faz merge
  git stash - Guarda trabalho
  git stash pop - Recupera stash
  git pull - Puxa do remoto
  git push - Envia para remoto

DESFAZER MUDANÇAS:
  git revert - Remove último commit
  git reset --hard HEAD~1 - Reset local

OUTROS:
  git pull-request - Cria PR (simulado)

AJUDA:
  help - Mostra dica do desafio
  objetivo - Mostra objetivo
  comandos - Lista todos os comandos
  reset - Reseta o estado
    `);
  }

  else if (cmd.startsWith("git commit")) {
    if (!repo) return log("fatal: não é um repositório git");
    commits.push({ branch });
    log(`Commit criado na branch ${branch}`);
  }

  else if (cmd.startsWith("git branch ")) {
    if (!repo) return log("fatal: não é um repositório git");
    const name = cmd.split(" ")[2];
    if (!name) return log("fatal: nome da branch é obrigatório");
    if (branches.includes(name)) return log("fatal: branch já existe");
    branches.push(name);
    log(`Branch ${name} criada`);
  }

  else if (cmd.startsWith("git checkout ")) {
    if (!repo) return log("fatal: não é um repositório git");
    const target = cmd.split(" ")[2];
    if (!target) return log("fatal: você deve especificar uma branch");
    if (!branches.includes(target)) return log(`error: pathspec '${target}' não corresponde a nenhuma branch conhecida`);
    branch = target;
    log(`Mudou para branch ${branch}`);
  }

  else if (cmd === "git merge feature") {
    if (!repo) return log("fatal: não é um repositório git");
    if (branch !== "main") return log("Vá para main antes do merge");
    const hasFeatureCommits = commits.some(c => c.branch === "feature");
    if (!hasFeatureCommits) return log("Nenhum commit na branch feature para mergear.");
    commits.push({ branch: "main" });
    mergeFeito = true;
    log("Merge realizado com sucesso.");
  }

  else if (cmd === "git status") {
    if (!repo) return log("fatal: não é um repositório git");
    const total = countCommits(branch);
    const stashCount = stash.filter(s => s.branch === branch).length;
    log(`On branch ${branch} | commits: ${total} | stash: ${stashCount}`);
  }

  else if (cmd === "git stash") {
    if (!repo) return log("fatal: não é um repositório git");
    stash.push({ branch });
    log(`Itens salvos no stash da branch ${branch}`);
  }

  else if (cmd === "git stash pop") {
    if (!repo) return log("fatal: não é um repositório git");
    const idx = stash.map((s, i) => ({ ...s, i })).filter(s => s.branch === branch).pop()?.i;
    if (idx === undefined) return log("Nenhum stash para aplicar nesta branch.");
    stash.splice(idx, 1);
    log(`Stash aplicado na branch ${branch}`);
  }

  else if (cmd === "git revert") {
    if (!repo) return log("fatal: não é um repositório git");
    const lastIndex = [...commits].map((c, i) => ({ ...c, i })).filter(c => c.branch === branch).pop()?.i;
    if (lastIndex === undefined) return log("Nada para reverter nesta branch.");
    commits.splice(lastIndex, 1);
    log("Revert aplicado: último commit removido desta branch.");
  }

  else if (cmd === "git reset --hard HEAD~1") {
    if (!repo) return log("fatal: não é um repositório git");
    const lastIndex = [...commits].map((c, i) => ({ ...c, i })).filter(c => c.branch === branch).pop()?.i;
    if (lastIndex === undefined) return log("Nada para resetar nesta branch.");
    commits.splice(lastIndex, 1);
    log("Reset hard: último commit local removido (simulação). Use push para enviar outro commit.");
  }

  else if (cmd === "git pull") {
    if (!repo) return log("fatal: não é um repositório git");
    commits.push({ branch, remote: true });
    log("Pull simulado: commit remoto adicionado.");
  }

  else if (cmd === "git push") {
    if (!repo) return log("fatal: não é um repositório git");
    const total = countCommits(branch);
    if (total === 0) return log("Nada para enviar. Faça um commit primeiro.");
    log("Push simulado: alterações enviadas.");
  }

  else if (cmd === "git pull-request") {
    prCriado = true;
    log("Pull Request criado (simulado).");
  }

  else {
    log("Comando não reconhecido.");
  }

  updateStatus();
  renderGraph();
  checkQuest();
}

updateQuest();
updateStatus();
