import React, { useState, useEffect } from 'react';
import { Container } from './style';
import api from '../../services/api';
import Cart from '../../assets/cart.png';
import Logo from '../../assets/vtex.png';

interface IProduct {
    id: number;
    photo: string;
    name: string;
    description: string;
    price: number;
}

const Home: React.FC = () => {
    const [data, setData] = useState<IProduct[]>([]);
    const [cart, setCart] = useState<IProduct[]>([]);

    useEffect(() => {
        api.get ('').then (
            response => {
            setData(response.data)
        })
    }, [])

    const handleCart = (index: number) => {
        let push: any = [ ...cart, cart.push(data[index])];
        setCart(push)
        const productStore = JSON.stringify(cart);
        localStorage.setItem ('@cart', productStore)        
    }
    
  return (
      <Container>          
          <div className="nav">
            <div>
            <img src={Logo} alt="Logo" width="200px" height="auto" />
            </div>
            <div>
                <link rel="../../Clients/index.tsx" />
            </div>
            <div className="cart">
                <img src={Cart} alt="carrinho" width="50px" height="auto" />
                <span>
                    ({cart.length}) - Itens
                </span>                
            </div>
          </div>
          <section>
              { data.map ( (prod, index) => (
                <div className="product-content" key ={prod.id}>
                    <img src={prod.photo} alt="" width="300px" max-height="200px" />
                    <h4>{prod.name}</h4>
                    <span>{prod.description}</span>
                    <h5>{prod.price}</h5>
                    <button onClick={ () => handleCart(index)}>Adicionar ao Carrinho</button>
                </div>
              ) ) }
          </section>
          <footer>
              <p>Condições de Uso  |  Notificação de Privacidade  |  Cookies  |  Anúncios Baseados em Interesses</p><br />
              <p>VTex - Gama Academy</p>
          </footer>
      </Container>
  );
}

export default Home;