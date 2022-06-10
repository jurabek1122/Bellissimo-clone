import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import Pizza from './products/Pizza';
import Gazaklar from './products/Gazaklar';
import Ichimliklar from './products/Ichimliklar';
import Salatlar from './products/Salatlar';
import Desertlar from './products/Desertlar';
import Souslar from './products/Souslar';
import Corusel from './Corusel';
import BottomMenu from './BottomMenu';
import { GiShoppingCart } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@material-ui/core';


const Product = ({addCart, cart}) => {

    const [fixed, setFixed] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 120) {
                setFixed(true) 
            } else{
                setFixed(false)
            }
        })
    }, [])

    const isDesktop = useMediaQuery('(min-width:500px)');

    return (
        <div>
            <Navbar cart={cart} />
            <Corusel />
            <Pizza addCart={addCart} />
            <Gazaklar addCart={addCart} />
            <Ichimliklar addCart={addCart} />
            <Salatlar addCart={addCart} />
            <Desertlar addCart={addCart} />
            <Souslar addCart={addCart} />
            <BottomMenu />
            {
                isDesktop ? (
                    <>
                    </>
                ) : (
                    <>
                        <Link to="/card" className='dnone'>
                            <div className={fixed ? 'bottom-cart' : 'bottom-cart none'}>
                                <GiShoppingCart />
                                <p>{cart.length}</p>
                            </div>
                        </Link>
                    </>
                    
                )
            }
            
        </div>
    );
};

export default Product;