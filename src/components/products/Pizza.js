import React from 'react';
import Pizzas from '../data/pizza.json';
import ItemCart from '../ItemCart';
import { Row } from 'reactstrap';

const Pizza = ({addCart}) => {
    
    return (
        <div className='pizza' id='pitsa'>
            <div className="container">
                <h1>Pizza</h1>
                <Row>
                {Pizzas.map((item, index) => {
                            return(
                                <ItemCart id={item.id} addCart={addCart} item={item} quantity={item.quantity} title={item.title} desc={item.desc} price={item.price} url={item.url} key={index} />
                            )
                    })}
                </Row>
            </div>
        </div>
    );
};

export default Pizza;