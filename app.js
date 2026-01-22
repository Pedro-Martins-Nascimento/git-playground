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
let difficulty = "basico";
let completedLevels = [];
let mergedBranches = [];
let lastCommand = "";
let pushDone = false;
let pullDone = false;
let stashPopped = false;
let stashUsed = false;
let revertDone = false;
let resetDone = false;

let quests = questsBasico;
let commandHistory = [];
let historyIndex = -1;

// LOG COM CORES
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

// ATUALIZAR PROGRESSO DO QUEST
function updateQuest() {
  const q = quests[questIndex];
  document.getElementById("questTitle").innerText = q?.title || "🎉 Parabéns!";
  document.getElementById("questDesc").innerText = q?.desc || "Você completou este nível! Escolha outro para continuar aprendendo.";
  
  // Mostrar contexto
  document.getElementById("context").innerHTML = contexts[difficulty];
  
  // Mostrar progresso
  const currentNum = Math.min(questIndex + 1, quests.length);
  const progress = `Desafio ${currentNum}/${quests.length}`;
  const doneMark = questIndex >= quests.length ? "✅" : "☐";
  document.getElementById("questProgress").innerText = `${doneMark} ${progress}`;

  // Checklist lateral
  const list = quests
    .map((item, idx) => {
      const done = idx < questIndex || (idx === questIndex && item.check());
      const status = done ? "☑" : "☐";
      const activeClass = idx === questIndex ? "active" : "";
      const doneClass = done ? "done" : "";
      const steps = item.steps?.length
        ? `<div class="quest-steps">${item.steps
            .map(step => {
              // Só valida se for desafio passado ou atual
              const stepDone = (idx < questIndex || idx === questIndex) && typeof step.done === "function" ? step.done() : false;
              const stepMark = stepDone ? "☑" : "☐";
              return `<div class="quest-step ${stepDone ? "done" : ""}">${stepMark} ${step.text}</div>`;
            })
            .join("")}</div>`
        : "";
      return `
        <div class="quest-item ${activeClass} ${doneClass}">
          <div class="quest-check">${status}</div>
          <div class="quest-text">
            <div class="quest-title">${item.title}</div>
            <div class="quest-desc">${item.desc}</div>
            ${steps}
          </div>
        </div>
      `;
    })
    .join("");
  document.getElementById("questList").innerHTML = list;

  // Mostrar ou esconder dica baseado na dificuldade
  const hintElement = document.getElementById("questHint");
  if (difficulty === "dificil") {
    hintElement.innerText = "💪 Nenhuma dica neste nível. Use 'comandos' para explorar!";
    hintElement.style.color = "#f85149";
  } else if (q?.hint) {
    hintElement.innerText = q.hint;
    hintElement.style.color = "#8b949e";
  } else {
    hintElement.innerText = "";
  }
}

// VERIFICAR SE DESAFIO FOI COMPLETADO
function checkQuest() {
  if (quests[questIndex]?.check()) {
    log("✅ Desafio concluído!");
    questIndex++;
    
    // Se completou todos os desafios do nível
    if (questIndex >= quests.length) {
      if (!completedLevels.includes(difficulty)) {
        completedLevels.push(difficulty);
      }
      log(`🎉 Nível ${difficulty.toUpperCase()} COMPLETO! Escolha outro nível para continuar.`);
    }
    
    updateQuest();
  }
}

// ATUALIZAR STATUS
function updateStatus() {
  document.getElementById("repoStatus").innerText = repo ? "Inicializado" : "Não iniciado";
  document.getElementById("branchStatus").innerText = branch || "-";
}

// RENDERIZAR GRAFO DE BRANCHES
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

// MUDAR DE DIFICULDADE (COM VALIDAÇÃO)
function changeDifficulty(newDifficulty) {
  const currentIndex = levelOrder.indexOf(difficulty);
  const newIndex = levelOrder.indexOf(newDifficulty);

  // Validar progressão: só pode pular para próximo nível se completou o anterior
  if (newIndex > currentIndex && !completedLevels.includes(levelOrder[currentIndex])) {
    return log(`⚠️ Você deve completar o nível ${levelOrder[currentIndex].toUpperCase()} antes de acessar ${newDifficulty.toUpperCase()}`);
  }

  // Se voltando para um nível anterior, permitir
  difficulty = newDifficulty;
  questIndex = 0;
  lastCommand = "";
  mergedBranches = [];
  pushDone = false;
  pullDone = false;
  stashPopped = false;
  stashUsed = false;
  revertDone = false;
  resetDone = false;

  // RESET STATE ONLY if going BACKWARDS (to previous level)
  if (newIndex < currentIndex) {
    repo = false;
    branch = "";
    branches = [];
    commits = [];
    mergeFeito = false;
    prCriado = false;
    stash = [];
    terminal.innerHTML = "";
  }
  
  // If going FORWARD, show that repo state persisted
  if (newIndex > currentIndex) {
    log(`✅ Nível ${newDifficulty.toUpperCase()} iniciado!`);
    if (repo) {
      log(`📁 Repositório carregado: branch '${branch}' com ${commits.length} commits`);
    }

    // Onboarding por nível
    if (newDifficulty === "medio") {
      log("📚 Dica: use 'comandos' para ver todos os comandos e 'objetivo' para relembrar a tarefa atual.");
      log("🧭 No nível MÉDIO você praticará: git status, git branch, git checkout, git commit, git stash/pop, git push, git pull, git merge.");
    }
    if (newDifficulty === "dificil") {
      log("🚀 Lembre: 'comandos' lista tudo. Você vai precisar de: branch/checkout/commit, stash/pop, merge, push, pull, revert, reset.");
      log("📌 Cada desafio descreve o que fazer; leia a descrição/hint para saber as etapas.");
    }
  }

  if (newDifficulty === "basico") {
    quests = questsBasico;
    log("🟢 Nível BÁSICO iniciado!");
  } else if (newDifficulty === "medio") {
    quests = questsMedio;
    log("🟡 Nível MÉDIO iniciado! (Menos dicas)");
  } else if (newDifficulty === "dificil") {
    quests = questsDificil;
    log("🔴 Nível DIFÍCIL iniciado! (Sem dicas!)");
  } else if (newDifficulty === "sandbox") {
    quests = questsSandbox;
    log("🎮 SANDBOX ativado! Use 'comandos' para listar tudo.");
  }

  updateQuest();
  updateStatus();
  renderGraph();
}

// EVENT LISTENERS
input.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    const cmd = input.value.trim();
    if (cmd) {
      commandHistory.push(cmd);
      historyIndex = commandHistory.length;
      executeCommand(cmd);
    }
    input.value = "";
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    if (historyIndex > 0) {
      historyIndex--;
      input.value = commandHistory[historyIndex];
    }
  } else if (e.key === "ArrowDown") {
    e.preventDefault();
    if (historyIndex < commandHistory.length - 1) {
      historyIndex++;
      input.value = commandHistory[historyIndex];
    } else {
      historyIndex = commandHistory.length;
      input.value = "";
    }
  }
});

const difficultySelect = document.getElementById("difficultyLevel");
difficultySelect.addEventListener("change", (e) => {
  const newDiff = e.target.value;
  const currentIndex = levelOrder.indexOf(difficulty);
  const newIndex = levelOrder.indexOf(newDiff);
  
  // Bloquear se tentar pular nível sem completar atual
  if (newIndex > currentIndex && !completedLevels.includes(levelOrder[currentIndex])) {
    log(`⚠️ Você deve completar o nível ${levelOrder[currentIndex].toUpperCase()} antes de acessar ${newDiff.toUpperCase()}`);
    e.target.value = difficulty; // Reverte dropdown
    return;
  }
  
  changeDifficulty(newDiff);
});

// INICIALIZAR
updateQuest();
updateStatus();
