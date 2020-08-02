import React from 'react';
import Menu from './components/Menu';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';


function App() {
  return (
    <div style= {{background: '#141414'}}>
      <Menu />

      <BannerMain 
      videoTitle={dadosIniciais.categorias[0].destaque.titulo}
      videoDescription={"O início de tudo! Curso de Algoritmo completo e grátis do Curso em Vídeo. Aprenda com o Gustavo Guanabara a base para a sua vida na programação."}
      url={dadosIniciais.categorias[0].destaque.url}/>
      
      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[0]}
      />
      <Carousel
      category={dadosIniciais.categorias[1]}
      />
      <Carousel
      category={dadosIniciais.categorias[2]}
      />
      <Carousel
      category={dadosIniciais.categorias[3]}
      />
      <Carousel
      category={dadosIniciais.categorias[4]}
      />
      <Carousel
      category={dadosIniciais.categorias[5]}
      />

      <Footer/>
    </div>
  );
}

export default App;
