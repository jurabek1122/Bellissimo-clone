import React from 'react';
import Sous from '../data/sous.json';
import CartItem from '../CartItem';
import { Row } from 'reactstrap';

const Souslar = ({addCart}) => {
    
    return (
        <div className='pizza' id='sous'>
            <div className="container">
                <h1>Souslar</h1>
                <Row>
                {Sous.map((item, index) => {
                            return(
                                <CartItem id={item.id} addCart={addCart} item={item} quantity={item.quantity} title={item.title} desc={item.desc} price={item.price} url={item.url} key={index} />
                            )
                    })}
                </Row>
            </div>
        </div>
    );
};

export default Souslar;