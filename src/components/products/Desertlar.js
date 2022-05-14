import React from 'react';
import Desert from '../data/desert.json';
import CartItem from '../CartItem';
import { Row } from 'reactstrap';

const Desertlar = ({addCart}) => {
    
    return (
        <div className='pizza' id='desert'>
            <div className="container">
                <h1>Desertlar</h1>
                <Row>
                {Desert.map((item, index) => {
                            return(
                                <CartItem id={item.id} addCart={addCart} item={item} quantity={item.quantity} title={item.title} desc={item.desc} price={item.price} url={item.url} key={index} />
                            )
                    })}
                </Row>
            </div>
        </div>
    );
};

export default Desertlar;