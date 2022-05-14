import React from 'react';
import Pizza from './products/Pizza';
import Gazaklar from './products/Gazaklar';
import Ichimliklar from './products/Ichimliklar';
import Salatlar from './products/Salatlar';
import Desertlar from './products/Desertlar';
import Souslar from './products/Souslar';

const Product = ({addCart}) => {
    return (
        <div>
            <Pizza addCart={addCart} />
            <Gazaklar addCart={addCart} />
            <Ichimliklar addCart={addCart} />
            <Salatlar addCart={addCart} />
            <Desertlar addCart={addCart} />
            <Souslar addCart={addCart} />
        </div>
    );
};

export default Product;