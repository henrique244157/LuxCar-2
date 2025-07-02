const carros = [
  {
    nome: "Nissan GT-R R34",
    preco: 400000,
    marca: "Nissan",
    imagem: "https://cdn.pixabay.com/photo/2020/02/28/16/17/nissan-4886585_960_720.jpg"
  },
  {
    nome: "Toyota Supra MK4",
    preco: 380000,
    marca: "Toyota",
    imagem: "https://cdn.pixabay.com/photo/2021/04/18/15/12/toyota-supra-6187993_960_720.jpg"
  },
  {
    nome: "Mitsubishi Lancer Evo",
    preco: 320000,
    marca: "Mitsubishi",
    imagem: "https://cdn.pixabay.com/photo/2016/11/21/15/42/mitsubishi-1848973_960_720.jpg"
  },
  {
    nome: "Nissan 350Z",
    preco: 310000,
    marca: "Nissan",
    imagem: "IMG LUIZ"
  }
];

const catalogo = document.getElementById("catalogo");
const filtroMarca = document.getElementById("marca");
const filtroPreco = document.getElementById("preco");

function renderizarCarros(lista) {
  catalogo.innerHTML = "";
  lista.forEach(carro => {
    const div = document.createElement("div");
    div.className = "carro";
    div.innerHTML = `
      <img src="${carro.imagem}" alt="${carro.nome}">
      <h3>${carro.nome}</h3>
      <p>Preço: R$ ${carro.preco.toLocaleString()}</p>
      <button>Comprar</button>
    `;
    catalogo.appendChild(div);
  });
}

function filtrarCarros() {
  const marcaSelecionada = filtroMarca.value;
  const precoSelecionado = filtroPreco.value;

  const carrosFiltrados = carros.filter(carro => {
    const condMarca = marcaSelecionada === "todos" || carro.marca === marcaSelecionada;

    let condPreco = true;
    if (precoSelecionado === "baixo") condPreco = carro.preco <= 350000;
    else if (precoSelecionado === "medio") condPreco = carro.preco <= 400000;
    else if (precoSelecionado === "alto") condPreco = carro.preco > 400000;

    return condMarca && condPreco;
  });

  renderizarCarros(carrosFiltrados);
}

filtroMarca.addEventListener("change", filtrarCarros);
filtroPreco.addEventListener("change", filtrarCarros);

// Inicial
renderizarCarros(carros);