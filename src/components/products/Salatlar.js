import React from 'react';
import Salat from '../data/salat.json';
import CartItem from '../CartItem';
import { Row } from 'reactstrap';

const Salatlar = ({addCart}) => {
    
    return (
        <div className='pizza' id='salat'>
            <div className="container">
                <h1>Salatlar</h1>
                <Row>
                {Salat.map((item, index) => {
                            return(
                                <CartItem id={item.id} addCart={addCart} item={item} quantity={item.quantity} title={item.title} desc={item.desc} price={item.price} url={item.url} key={index} />
                            )
                    })}
                </Row>
            </div>
        </div>
    );
};

export default Salatlar;