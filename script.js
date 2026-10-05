const commands = String.raw`GM|/afk on|/afk on|Ativa o modo AFK do GM.
GM|/afk off|/afk off|Desativa o modo AFK do GM.
GM|/ban|/ban Darcio, 7, Bug abuse|Bane um jogador por uma quantidade de dias, com motivo opcional.
GM|/bless|/bless|Mostra o status das blessings.
GM|/b|/b Server restart em 5 minutos!|Envia uma mensagem global para todos os jogadores.
GM|/clean|/clean|Limpa itens removíveis do mapa.
GM|/countmonsters|/countmonsters|Conta os monstros existentes no servidor.
GM|/distanceeffect|/distanceeffect 3|Testa um distance effect pelo ID.
GM|/down|/down|Desce um andar.
GM|/getlook|/getlook Darcio|Mostra dados do outfit/look de uma criatura ou jogador.
GM|/ghost|/ghost|Liga ou desliga a invisibilidade do GM.
GM|/goldrank|/goldrank|Mostra o ranking de ouro.
GM|/info|/info Darcio|Mostra informações administrativas do jogador.
GM|/kick|/kick Darcio|Expulsa um jogador online.
GM|/looktype|/looktype 128|Troca ou testa um looktype pelo ID.
GM|/effect|/effect 13|Cria um magic effect pelo ID.
GM|/mc|/mc|Verifica multiclient pelo mesmo IP.
GM|/namelock|/namelock Darcio, Nome impróprio|Aplica namelock informando o motivo.
GM|/pos|/pos|Mostra sua posição atual.
GM|/pos|/pos 32369, 32241, 7|Teleporta para uma coordenada.
GM|!pos|!pos|Alias para consultar posição.
GM|/c|/c Darcio|Puxa ou teleporta uma criatura/jogador até você.
GM|/t|/t|Teleporta você para o templo.
GM|/t|/t Darcio|Teleporta outro jogador para o templo dele.
GM|/setlight|/setlight 215, 32|Altera cor e intensidade da iluminação.
GM|/a|/a 10|Avança uma quantidade de SQMs na direção atual.
GM|/spy|/spy Darcio|Ativa função de espionagem/acompanhamento.
GM|/teleport|/teleport 32369, 32241, 7|Teleporta diretamente para coordenadas.
GM|/tp|/tp 32369, 32241, 7|Alias do /teleport.
GM|/active|/active|Teleporta para um jogador ativo.
GM|/goto|/goto Darcio|Teleporta até criatura ou jogador pelo nome.
GM|/goto|/goto fiendish|Teleporta para um monstro Fiendish.
GM|/goto|/goto influenced|Teleporta para um monstro Influenced.
GM|/listplayers|/listplayers|Lista jogadores ativos.
GM|/listplayers all|/listplayers all|Lista todos conforme a lógica do comando.
GM|/town|/town Thais|Teleporta para uma cidade pelo nome.
GM|/town|/town 1|Teleporta para uma cidade pelo ID.
GM|/unban|/unban Darcio|Remove o ban associado ao personagem.
GM|/up|/up|Sobe um andar.
GM|/getstorage|/getstorage Darcio, 10000|Consulta uma storage numérica.
GM|/getstorage|/getstorage Darcio, wheel.scroll.abridged|Consulta uma storage nomeada.
GM|/rewardbag|/rewardbag 34109, 100|Simula abertura de Reward Bags para testes.
GM|/ambientsound|/ambientsound 123|Testa som ambiente pelo ID.
GM|/ambientsound|/ambientsound disable|Desativa o som ambiente de teste.
GM|/musicsound|/musicsound 123|Testa música pelo ID.
GM|/musicsound|/musicsound disable|Desativa a música de teste.
GOD|/addachievement|/addachievement Darcio, 1|Adiciona achievement por ID ou nome.
GOD|/removeachievement|/removeachievement Darcio, 1|Remove achievement.
GOD|/checkachievements|/checkachievements Darcio|Lista/verifica achievements.
GOD|/addaddon|/addaddon Darcio, 128, 3|Adiciona addon a um looktype.
GOD|/addaddon|/addaddon Darcio, all, 3|Adiciona addon a todos os looktypes.
GOD|/addbosskill|/addbosskill 100, Ferumbras, Darcio|Adiciona kills do Bosstiary.
GOD|/testtaintconditions|/testtaintconditions|Teste interno de condições/taints.
GOD|/addreward|/addreward crystal coin, 100, Darcio|Adiciona item ao reward chest.
GOD|/addmoney|/addmoney Darcio, 1000000|Adiciona dinheiro ao jogador.
GOD|/addmount|/addmount Darcio, 1|Adiciona uma mount.
GOD|/addmount|/addmount Darcio, all|Adiciona todas as mounts.
GOD|/addskill|/addskill Darcio, sword, 10|Adiciona níveis de skill.
GOD|/addskill|/addskill Darcio, level, 10|Adiciona levels.
GOD|/addskill|/addskill Darcio, magic, 5|Adiciona magic levels.
GOD|/attr|/attr atributo, valor|Altera atributos de item, criatura ou jogador alvo.
GOD|/addcharms|/addcharms Darcio, 500|Adiciona Charm Points.
GOD|/addminorcharms|/addminorcharms Darcio, 500|Adiciona Minor Charm Echoes.
GOD|/resetcharms|/resetcharms Darcio|Reseta charms.
GOD|/charmexpansion|/charmexpansion Darcio|Adiciona expansão de charms.
GOD|/charmrunes|/charmrunes Darcio|Ferramenta administrativa de charm runes.
GOD|/setbestiary|/setbestiary ...|Ferramenta administrativa do Bestiary.
GOD|/closeserver|/closeserver|Fecha o servidor para novas conexões.
GOD|/closeserver save|/closeserver save|Fecha usando a ação save.
GOD|/closeserver shutdown|/closeserver shutdown|Executa shutdown.
GOD|/closeserver maintainance|/closeserver maintainance|Ativa modo de manutenção.
GOD|/resetcd|/resetcd Darcio|Reseta cooldowns do jogador.
GOD|/i|/i crystal coin, 100|Cria item por nome e quantidade.
GOD|/i|/i 3043, 100|Cria item por ID e quantidade.
GOD|/i|/i 3079, 1, 3|Cria item usando tier quando suportado.
GOD|/n|/n Bank|Cria NPC.
GOD|/n|/n NomeDoNpc, permanent|Tenta criar NPC permanente.
GOD|/spawn|/spawn Demon, 60|Cria spawn administrativo de monstro.
GOD|/s|/s Demon|Cria um monstro como summon do GOD.
GOD|/createloot|/createloot 100|Cria itens de teste no Loot Pouch.
GOD|/clearloot|/clearloot|Limpa o Loot Pouch.
GOD|/createtestshop|/createtestshop|Cria itens de teste da shop.
GOD|/countloot|/countloot|Conta stacks/itens no Loot Pouch.
GOD|/addloot|/addloot crystal coin 100|Adiciona item ao Loot Pouch.
GOD|/hasflag|/hasflag Darcio, 1|Verifica uma player flag.
GOD|/setflag|/setflag Darcio, 1|Adiciona uma player flag.
GOD|/removeflag|/removeflag Darcio, 1|Remove uma player flag.
GOD|/adddusts|/adddusts Darcio, 100|Adiciona Forge Dusts.
GOD|/removedusts|/removedusts Darcio, 50|Remove Forge Dusts.
GOD|/getdusts|/getdusts Darcio|Consulta Forge Dusts.
GOD|/setdusts|/setdusts Darcio, 500|Define Forge Dusts.
GOD|/fiendish|/fiendish|Ferramenta administrativa Fiendish.
GOD|/influenced|/influenced|Ferramenta administrativa Influenced.
GOD|/setfiendish|/setfiendish|Configura monstro Fiendish.
GOD|/openforge|/openforge|Abre a interface da Forge.
GOD|/adddustlevel|/adddustlevel Darcio, 1|Manipula Dust Level.
GOD|/gotohouse|/gotohouse|Vai para sua casa.
GOD|/gotohouse|/gotohouse Darcio|Vai para a casa de outro jogador.
GOD|/clearhirelingstas|/clearhirelingstas Nome|Limpa estatísticas de Hireling. O nome 'stas' é o original do repositório.
GOD|/hireling|/hireling João, 1|Cria/configura um Hireling.
GOD|/owner|/owner Darcio|Altera o dono da casa.
GOD|/owner|/owner none|Remove o proprietário da casa.
GOD|/testicon|/testicon 1, 2, 3|Testa ícones normais.
GOD|/testicon|/testicon special, 1|Testa ícone especial.
GOD|/bakragoreicon|/bakragoreicon 1|Adiciona ícone Bakragore.
GOD|/bakragoreicon|/bakragoreicon remove|Remove ícones Bakragore.
GOD|/playericon|/playericon 1, 10, down|Aplica ícone ao jogador.
GOD|/inbox|/inbox Darcio,add,3043|Adiciona item ao Store Inbox.
GOD|/inbox|/inbox Darcio,remove,3043|Remove item do Store Inbox.
GOD|/ipban|/ipban Darcio|Aplica IP ban.
GOD|/addbadge|/addbadge Darcio, 1|Adiciona badge.
GOD|/getkv|/getkv chave, Darcio|Consulta valor no sistema KV.
GOD|/getallkv|/getallkv Darcio|Lista KVs do jogador.
GOD|/setkv|/setkv chave, 100, Darcio|Define um valor no sistema KV.
GOD|/clearcooldown|/clearcooldown Ferumbras, Darcio|Limpa cooldown de boss.
GOD|/m|/m Demon, 10|Cria um ou vários monstros.
GOD|/m|/m Demon, 5, fiendish, 5|Cria monstros com parâmetros extras.
GOD|/setmonstername|/setmonstername Super Demon|Renomeia monstros próximos.
GOD|/setstorage|/setstorage 10000, 1, Darcio|Define uma storage.
GOD|/bountypoints|/bountypoints Darcio, 100|Consulta ou ajusta Bounty Points.
GOD|/soulseals|/soulseals Darcio, 100|Consulta ou ajusta Soulseals.
GOD|/taskpoints|/taskpoints Darcio, 100|Consulta ou ajusta Task Points.
GOD|/taskslot|/taskslot Darcio, 1|Ativa/desativa expansão semanal.
GOD|/taskboarddelivery|/taskboarddelivery Darcio|Prepara Weekly Delivery Tasks.
GOD|/addtitle|/addtitle Darcio, 1|Adiciona título.
GOD|/settitle|/settitle Darcio, 1|Define título do jogador.
GOD|/addtutor|/addtutor Darcio|Promove para Tutor.
GOD|/removetutor|/removetutor Darcio|Remove o cargo de Tutor.
GOD|/vip|/vip check, Darcio|Consulta dias VIP.
GOD|/vip|/vip adddays, Darcio, 30|Adiciona dias VIP.
GOD|/vip|/vip removedays, Darcio, 10|Remove dias VIP.
GOD|/vip|/vip remove, Darcio|Remove todo VIP.
GOD|/openserver|/openserver|Abre o servidor novamente.
GOD|/protocolprobe|/protocolprobe list|Lista probes de protocolo.
GOD|/probeopcode|/probeopcode list|Alias do Protocol Probe.
GOD|/raid|/raid Ferumbras|Inicia uma raid.
GOD|/simraid|/simraid 1, 10, 30|Simula chances de raid.
GOD|/listraid|/listraid|Lista raids.
GOD|/reload|/reload monsters|Recarrega um tipo suportado pelo servidor.
GOD|/r|/r|Remove o objeto/thing alvo.
GOD|/r|/r all|Remove conforme a lógica 'all' do comando.
GOD|/save|/save|Salva o servidor.
GOD|/save|/save 5|Agenda save em minutos.
GOD|/areasound|/areasound 100, 101|Testa som na área.
GOD|/internalsound|/internalsound 100, 101|Testa som interno.
GOD|/globalsound|/globalsound 100, 101|Testa som global.
GOD|/testlog|/testlog info, Teste|Envia mensagem para o log em nível definido.
GOD|!testcontainer|!testcontainer|Testa ContainerIterator.
GOD|!testcontainer|!testcontainer remove|Testa ContainerIterator removendo itens.
GOD|/testmessage|/testmessage 20, 215|Testa tipo de mensagem e cor.
GOD|/proficiency|/proficiency 10000|Adiciona Weapon Proficiency XP.
GOD|/zones|/zones|Ferramenta administrativa de zones.`.trim().split("\n").map(line => {
  const parts = line.replaceAll("\\p", "\u0000").split("|").map(v => v.replaceAll("\u0000", "|"));
  return { group: parts[0], command: parts[1], usage: parts[2], desc: parts[3] };
});

const grid = document.querySelector("#commandsGrid");
const searchInput = document.querySelector("#searchInput");
const filterButtons = [...document.querySelectorAll(".filter")];
const resultCount = document.querySelector("#resultCount");
const emptyState = document.querySelector("#emptyState");
const clearSearch = document.querySelector("#clearSearch");
const toast = document.querySelector("#toast");
let activeFilter = "ALL";

document.querySelector("#totalCount").textContent = commands.length;
document.querySelector("#gmCount").textContent = commands.filter(c => c.group === "GM").length;
document.querySelector("#godCount").textContent = commands.filter(c => c.group === "GOD").length;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

function showToast() {
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1500);
}

function render() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = commands.filter(item => {
    const matchesFilter = activeFilter === "ALL" || item.group === activeFilter;
    const haystack = `${item.command} ${item.usage} ${item.desc} ${item.group}`.toLowerCase();
    return matchesFilter && haystack.includes(query);
  });

  resultCount.textContent = `${filtered.length} resultado${filtered.length === 1 ? "" : "s"}`;
  emptyState.classList.toggle("hidden", filtered.length !== 0);

  grid.innerHTML = filtered.map(item => `
    <article class="card">
      <div class="card-top"><span class="badge ${item.group.toLowerCase()}">${item.group}</span></div>
      <h2 class="command-name">${escapeHtml(item.command)}</h2>
      <p class="desc">${escapeHtml(item.desc)}</p>
      <div class="usage-box">
        <code title="${escapeHtml(item.usage)}">${escapeHtml(item.usage)}</code>
        <button class="copy-btn" data-copy="${encodeURIComponent(item.usage)}">Copiar</button>
      </div>
    </article>
  `).join("");

  document.querySelectorAll(".copy-btn").forEach(button => {
    button.addEventListener("click", async () => {
      const value = decodeURIComponent(button.dataset.copy);
      try {
        await navigator.clipboard.writeText(value);
      } catch {
        const area = document.createElement("textarea");
        area.value = value;
        document.body.appendChild(area);
        area.select();
        document.execCommand("copy");
        area.remove();
      }
      showToast();
    });
  });
}

filterButtons.forEach(button => button.addEventListener("click", () => {
  activeFilter = button.dataset.filter;
  filterButtons.forEach(btn => btn.classList.toggle("active", btn === button));
  render();
}));

searchInput.addEventListener("input", render);
clearSearch.addEventListener("click", () => {
  searchInput.value = "";
  activeFilter = "ALL";
  filterButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.filter === "ALL"));
  searchInput.focus();
  render();
});
render();