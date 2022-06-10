import React, {useState, useEffect} from 'react';
import { Row, Col, CardImg, Button, Input } from 'reactstrap';
import ClearIcon from '@material-ui/icons/Clear';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@material-ui/core';
import { MdArrowBack } from 'react-icons/md';


const ShoppingCard = ({cart, setCart}) => {

    const isDesktop = useMediaQuery('(min-width:500px)');
    
      const plus = (_id) => {
        const productList = [...cart];
        productList.forEach((item) => {
            if(item.id === _id) {
                item.quantity++
            }
        })
        setCart(productList)
      }

      const minus = (_id) => {
        const productList = [...cart];
        productList.forEach((item, index) => {
            if(item.id === _id) {
                if(item.quantity > 1) {
                    item.quantity--
                  } else {
                    productList.splice(index, 1)
                  }
            }
        })
        setCart(productList)
      }
      const remove = (_id) => {
        const productList = [...cart];
        productList.forEach((item, index) => {
            if(item.id === _id) {
                    item.quantity = 0;
                    productList.splice(index, 1)
                  }
            }
        )
        setCart(productList)
      }

    const [sum, setSum] = useState(0)
    useEffect(() => { 
        let total = 0;
        for(var i = 0; i < cart.length; i++) {
            total+= cart[i].price*cart[i].quantity;
        }
        setSum(total);
        setAfterPromoSum(total)
        const getPromoSum = (sum) => {
            if(promo === '123') {
                setOnlypromo(sum / 10)
                setAfterPromoSum(sum = sum - (sum/10))
            } else {
                setOnlypromo(0)
            }
        }
    }, [cart])
console.log(sum)
    const [promo, setPromo] = useState('')
    const [onlypromo, setOnlypromo] = useState(0)
    const [afterPromoSum, setAfterPromoSum] = useState(0)
    
    const getPromoSum = (sum) => {
        if(promo === '123') {
            setOnlypromo(sum / 10)
            setAfterPromoSum(sum = sum - (sum/10))
        } else {
            setOnlypromo(0)
        }
    }


      
    return (
        <>
        {
            isDesktop ? (
                <Navbar cart={cart} />
            ) : (
                <div className='top-cart'>
                    <Link to='/' className='back-icon'>
                        <MdArrowBack />
                    </Link>
                    <h1>Savatcha</h1>
                </div>
            )
        }
        <div className="shop">
            <div className="container">
                <Row>
                    <Col md="9" className="buy">
                        
                        
                            {cart.map((item) => {
                                return(
                                    <>
                                    {
                                        isDesktop ? (
                                            <div key={item.id} className='shop-list'>
                                                <div className='shop-img'>
                                                    <CardImg  src={item.url} />
                                                </div>
                                                <h4 className='shop-nomi'>{item.title}</h4>
                                                <div className='soni'>  
                                                    <h4 className='shop-narxi'>{item.price * item.quantity}</h4>
                                                    <button onClick={() => minus(item.id)}><h5>-</h5></button>
                                                    <h4>{item.quantity}</h4>
                                                    <button onClick={() => plus(item.id)}><h5>+</h5></button>
                                                    <ClearIcon onClick={() => remove(item.id)} />
                                                </div>
                                            </div>
                                        ) : (
                                            <div key={item.id} className='shop-list'>
                                                <div className='shop-img'>
                                                    <CardImg  src={item.url} />
                                                </div>
                                                <div >
                                                    <div className='d-f'>
                                                        <h4>{item.title}</h4>
                                                        <h4 className='shop-narxi'>{item.price * item.quantity}</h4>
                                                    </div>
                                                    <div className='soni1'>  
                                                        <button onClick={() => minus(item.id)}><h5>-</h5></button>
                                                        <h4>{item.quantity}</h4>
                                                        <button onClick={() => plus(item.id)}><h5>+</h5></button>
                                                        <ClearIcon onClick={() => remove(item.id)} />
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                    </>
                                )
                            })}
                        
                    </Col>
                    <Col md="3">
                        <div className={isDesktop ? 'fixed' : ''}>
                            <div className="promo">
                                <Input onChange={(e) => setPromo(e.target.value)} className='promo-input' type='text' placeholder='Promo kod' /> 
                                <Button onClick={ () => getPromoSum(sum)} className="btn btn-success buy-btn">QO`LLASH</Button>
                            </div>
                            <div className='total'>
                                <Row>
                                    <Col sm="6">
                                        <p>Mening <br /> buyurtmam</p>
                                    </Col>
                                    <Col sm="6">
                                        <p>{sum} so`m</p>
                                    </Col>
                                </Row>
                                <p>Kod bo'yicha chegirma {onlypromo} so’m</p>
                                <p className='bold'>Umumiy narx {afterPromoSum} so’m</p>
                            </div>
                            <Button className="btn btn-success buy-btn mb-3">DAVOM ETISH</Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
        </>
    )
}

export default ShoppingCard;