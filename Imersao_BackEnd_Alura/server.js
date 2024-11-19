import express from "express";

const posts = [
  {
    id: 1,
    descricao: "Uma foto teste",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id:2,
    descricao: "Paisagem montanhosa ao amanhecer",
    imagem: "https://source.unsplash.com/random/300x200/?mountain,sunrise",
  },
  {
    id:3,
    descricao: "Cachorro brincando na praia",
    imagem: "https://source.unsplash.com/random/300x200/?dog,beach",
  },
  {
    id:4,
    descricao: "Cidade futurista à noite",
    imagem: "https://source.unsplash.com/random/300x200/?city,night",
  },
  {
    id:5,
    descricao: "Comida saborosa e colorida",
    imagem: "https://source.unsplash.com/random/300x200/?food",
  },
  {
    id:6,
    descricao: "Pessoas praticando yoga em um parque",
    imagem: "https://source.unsplash.com/random/300x200/?yoga,park",
  },
  {
    id:7,
    descricao: "Uma pintura abstrata vibrante",
    imagem: "https://source.unsplash.com/random/300x200/?abstract,painting",
  }
];

const app = express();
app.use(express.json());
app.listen(3000, () => {
  console.log("Servidor escutando");
});

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

function buscarPostPorID(id){
  return posts.findIndex((post)=>{
    return post.id === Number(id);
  });
};


app.get("/posts/:id", (req, res) => {
  const index = buscarPostPorID(req.params.id);
  res.status(200).json(posts[index]);
});