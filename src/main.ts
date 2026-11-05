import "./style.css";

const app = document.querySelector("#app");

if (app) {
  app.innerHTML = `
    <h1>Nutri Vidas</h1>
    <p>Status da API: <strong id="status">verificando...</strong></p>
  `;
}

async function verificarApi() {
  const status = document.querySelector("#status");
  try {
    const resposta = await fetch("/api/health");
    const dados = await resposta.json();
    if (status) {
      status.textContent = `${dados.status} (${dados.hora})`;
    }
  } catch {
    if (status) {
      status.textContent = "API fora do ar";
    }
  }
}

verificarApi();
