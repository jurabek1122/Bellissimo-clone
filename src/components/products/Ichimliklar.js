import React from 'react';
import Ichimlik from '../data/ichimliklar.json';
import CartItem from '../CartItem';
import { Row } from 'reactstrap';

const Ichimliklar = ({addCart}) => {
    
    return (
        <div className='pizza' id='ichimlik'>
            <div className="container">
                <h1>Ichimliklar</h1>
                <Row>
                {Ichimlik.map((item, index) => {
                            return(
                                <CartItem id={item.id} addCart={addCart} item={item} quantity={item.quantity} title={item.title} desc={item.desc} price={item.price} url={item.url} key={index} />
                            )
                    })}
                </Row>
            </div>
        </div>
    );
};

export default Ichimliklar;