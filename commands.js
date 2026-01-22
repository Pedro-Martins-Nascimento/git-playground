// COMANDOS GIT - GERENCIAMENTO CENTRALIZADO

function executeCommand(cmd) {
  log(`$ ${cmd}`);
  lastCommand = cmd;

  const allowFreePlay = difficulty === "dificil" || difficulty === "sandbox";
  const currentQuest = quests[questIndex];

  // Permissões por contexto (bloqueia ações fora do esperado em Básico/Médio)
  const alwaysAllowed = ["help", "objetivo", "comandos", "commands", "reset", "git status", "git init"];
  const isMerge = cmd.startsWith("git merge");
  const isStash = cmd === "git stash";
  const isStashPop = cmd === "git stash pop";
  const isRevert = cmd === "git revert";
  const isReset = cmd === "git reset --hard HEAD~1";
  const isPush = cmd === "git push";
  const isPull = cmd === "git pull";

  const questText = `${currentQuest?.title || ""} ${currentQuest?.desc || ""}`.toLowerCase();

  const mergeAllowed = questText.includes("merge") || questText.includes("fluxo completo") || questText.includes("colabora") || questText.includes("final");
  const stashAllowed = questText.includes("stash");
  const revertAllowed = questText.includes("revert") || questText.includes("reset");
  const pushPullAllowed = questText.includes("push") || questText.includes("pull") || questText.includes("colabora") || questText.includes("final");

  const isAllowedByQuest = (
    alwaysAllowed.some(a => cmd === a) ||
    (!isMerge && !isStash && !isStashPop && !isRevert && !isReset && !isPush && !isPull) ||
    (isMerge && mergeAllowed) ||
    ((isStash || isStashPop) && stashAllowed) ||
    ((isRevert || isReset) && revertAllowed) ||
    ((isPush || isPull) && pushPullAllowed)
  );

  if (!allowFreePlay && !isAllowedByQuest) {
    return log("⚠️ Neste nível, essa ação não faz parte do desafio atual. Avance o passo atual antes.");
  }

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

  else if (cmd.startsWith("git merge")) {
    if (!repo) return log("fatal: não é um repositório git");
    const parts = cmd.split(" ");
    const target = parts[2];
    if (!target) return log("fatal: especifique a branch a ser mergeada (ex: git merge feature1)");
    if (branch !== "main") return log("Vá para main antes do merge");
    if (!branches.includes(target)) return log(`fatal: branch '${target}' não existe`);
    const hasCommits = commits.some(c => c.branch === target);
    if (!hasCommits) return log(`Nenhum commit na branch ${target} para mergear.`);

    commits.push({ branch: "main", mergedFrom: target });
    mergeFeito = true;
    if (!mergedBranches.includes(target)) mergedBranches.push(target);
    log(`Merge de ${target} para main realizado com sucesso.`);
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
    stashUsed = true;
  }

  else if (cmd === "git stash pop") {
    if (!repo) return log("fatal: não é um repositório git");
    const idx = stash.map((s, i) => ({ ...s, i })).filter(s => s.branch === branch).pop()?.i;
    if (idx === undefined) return log("Nenhum stash para aplicar nesta branch.");
    stash.splice(idx, 1);
    log(`Stash aplicado na branch ${branch}`);
    stashPopped = true;
  }

  else if (cmd === "git revert") {
    if (!repo) return log("fatal: não é um repositório git");
    const lastIndex = [...commits].map((c, i) => ({ ...c, i })).filter(c => c.branch === branch).pop()?.i;
    if (lastIndex === undefined) return log("Nada para reverter nesta branch.");
    commits.splice(lastIndex, 1);
    log("Revert aplicado: último commit removido desta branch.");
    revertDone = true;
  }

  else if (cmd === "git pull") {
    if (!repo) return log("fatal: não é um repositório git");
    commits.push({ branch, remote: true });
    log("Pull simulado: commit remoto adicionado.");
    pullDone = true;
  }

  else if (cmd === "git push") {
    if (!repo) return log("fatal: não é um repositório git");
    const total = countCommits(branch);
    if (total === 0) return log("Nada para enviar. Faça um commit primeiro.");
    log("Push simulado: alterações enviadas.");
    pushDone = true;
  }

  else if (cmd === "git reset --hard HEAD~1") {
    if (!repo) return log("fatal: não é um repositório git");
    const lastIndex = [...commits].map((c, i) => ({ ...c, i })).filter(c => c.branch === branch).pop()?.i;
    if (lastIndex === undefined) return log("Nada para resetar nesta branch.");
    commits.splice(lastIndex, 1);
    log("Reset hard: último commit local removido (simulação). Use push para enviar outro commit.");
    resetDone = true;
  }

  else {
    log("Comando não reconhecido.");
  }

  updateStatus();
  renderGraph();
  checkQuest();
  updateQuest();
}

function countCommits(targetBranch) {
  return commits.filter(c => c.branch === targetBranch).length;
}
