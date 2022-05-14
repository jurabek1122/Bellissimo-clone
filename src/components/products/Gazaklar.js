import React from 'react';
import Gazak from '../data/gazak.json';
import ItemCart from '../ItemCart';
import { Row } from 'reactstrap';

const Gazaklar = ({addCart}) => {
    
    return (
        <div className='pizza' id='gazak'>
            <div className="container">
                <h1>Gazaklar</h1>
                <Row>
                {Gazak.map((item, index) => {
                            return(
                                <ItemCart id={item.id} addCart={addCart} item={item} quantity={item.quantity} title={item.title} desc={item.desc} price={item.price} url={item.url} key={index} />
                            )
                    })}
                </Row>
            </div>  
        </div>
    );
};

export default Gazaklar;