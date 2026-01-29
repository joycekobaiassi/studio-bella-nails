let servicoSelecionado = "";

function selecionarServico(servico) {
  servicoSelecionado = servico;

  const agenda = document.getElementById("agenda");
  agenda.style.display = "block";

  const titulo = document.getElementById("titulo-turno");
  titulo.innerText = `Você escolheu: ${servico}. Agora selecione o período`;

  agenda.scrollIntoView({ behavior: "smooth" });
}

function agendar(turno) {
  if (!servicoSelecionado) return;

  const numero = "5548999999999"; // troque depois
  const mensagem = `Oi! Gostaria de agendar ${servicoSelecionado} no período da ${turno} 💅`;

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}
