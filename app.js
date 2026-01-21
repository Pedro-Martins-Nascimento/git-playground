const terminal = document.getElementById("terminal");
const input = document.getElementById("commandInput");

let repo = false;
let branch = "";
let branches = [];
let commits = [];
let mergeFeito = false;
let prCriado = false;
let questIndex = 0;

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
  terminal.innerHTML += msg + "<br>";
  terminal.scrollTop = terminal.scrollHeight;
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

  else if (cmd.startsWith("git commit")) {
    if (!repo) return log("fatal: não é um repositório git");
    commits.push({ branch });
    log(`Commit criado na branch ${branch}`);
  }

  else if (cmd.startsWith("git branch ")) {
    const name = cmd.split(" ")[2];
    branches.push(name);
    log(`Branch ${name} criada`);
  }

  else if (cmd.startsWith("git checkout ")) {
    branch = cmd.split(" ")[2];
    log(`Mudou para branch ${branch}`);
  }

  else if (cmd === "git merge feature") {
    if (branch !== "main") return log("Vá para main antes do merge");
    commits.push({ branch: "main" });
    mergeFeito = true;
    log("Merge realizado com sucesso.");
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
