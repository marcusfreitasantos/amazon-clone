import React from 'react';
import banner from '../img/amazon-banner.jpg';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={banner} alt="home-banner" />
      </div>

      <div className="home__row">
        <Product
          id="B004J4XGN6"
          title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses (English Edition)"
          price={70.89}
          image="https://m.media-amazon.com/images/I/51N-u8AsmdL._SY346_.jpg"
          rating={3}
        />

        <Product
          id="B00TAAJZBG"
          title="Batedeira Stand Mixer Artisan, Vermelha, 110V, KitchenAid"
          price={2159.9}
          image="https://m.media-amazon.com/images/I/61WJrVNsajL._AC_SX679_.jpg"
          rating={2}
        />
      </div>

      <div className="home__row">
        <Product
          id="B07FQK1TS9"
          title="Kindle 10a. geração com iluminação embutida – Cor Preta"
          price={379.05}
          image="https://m.media-amazon.com/images/I/61X0ISBpD-L._AC_SL1000_.jpg"
          rating={5}
        />

        <Product
          id="B07PDHSJ1H"
          title="Echo Dot (3ª Geração): Smart Speaker com Alexa - Cor Preta"
          price={331.55}
          image="https://m.media-amazon.com/images/I/41GZCWFJB1L._AC_.jpg"
          rating={4}
        />
        <Product
          id="B084TNNRND"
          title="Novo Echo Show 8 (2ª Geração, versão 2021): Smart Display HD de 8' com Alexa e câmera de 13 MP - Cor Preta"
          price={949.05}
          image="https://m.media-amazon.com/images/I/71gyzGD0rzL._AC_SL1500_.jpg"
          rating={1}
        />
      </div>

      <div className="home__row">
        <Product
          id="B0919N2P7J"
          title="Smartphone Poco X3 PRO 128gb 6gb RAM – Phantom Black - Preto"
          price={1765}
          image="https://m.media-amazon.com/images/I/61CpQcnydcL._AC_SL1000_.jpg"
          rating={5}
        />
      </div>
    </div>
  );
}

export default Home;
