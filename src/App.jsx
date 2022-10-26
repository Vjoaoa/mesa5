import './Styles.css';


const produtos = [
  {
    id: 1, 
    nome: "Macbook Air 13 Chip M1 256gb",
    image: "https://m.media-amazon.com/images/I/41O807iqbCL._AC_SX522_.jpg",
    preco: "R$ 7999.00",
  },
  {
    id: 2,
    nome: "Echo Dot (4ª Geração)",
    image: "https://m.media-amazon.com/images/I/714Rq4k05UL._AC_SL1000_.jpg",
    preco: "R$ 379.00",
  },
  {
    id: 3,
    nome: "Câmera Ip Sem Fio 360°",
    image: "https://m.media-amazon.com/images/I/51F70OM213S._AC_SL1000_.jpg",
    preco: "R$ 199.00",
  },
  {
    id: 4,
    nome: "Fechadura Eletrônica Digital Inteligente Zigbee",
    image: "https://m.media-amazon.com/images/I/51RXeqMLceL._AC_SL1500_.jpg",
    preco: "R$ 1599.00",
  },

  {
    id: 5,
    nome: "Fechadura Eletrônica Digital Inteligente Zigbee",
    image: "https://m.media-amazon.com/images/I/51RXeqMLceL._AC_SL1500_.jpg",
    preco: "R$ 1599.00",
  },
];

function App() {
  return (
    <div>
      <h1>Produtos</h1>
{/* 
      <ul>
        <li>
          <h2>{produtos[0].nome}</h2>
          <img src={produtos[0].image} />
          <h3>{produtos[0].preco}</h3>
        </li>

        <li>
          <h2>{produtos[1].nome}</h2>
          <img src={produtos[1].image} />
          <h3>{produtos[1].preco}</h3>
        </li>

        <li>
          <h2>{produtos[2].nome}</h2>
          <img src={produtos[2].image} />
          <h3>{produtos[2].preco}</h3>
        </li>
      </ul> */}

      <ul>
        {produtos.map((item) => <li key={item.id}>
        <h2 >{item.nome} </h2>
        
        <img src={item.image}/>
      
        <h3 >{item.preco} </h3>
        </li>)}
      </ul>
    </div>
  );
}

export default App;
