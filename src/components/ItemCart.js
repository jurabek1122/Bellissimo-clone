import React from 'react';
import { Card, CardTitle, CardImg, CardSubtitle, Col, Button } from 'reactstrap';



const ItemCart = (props) => {

    return (
            <Col md="4">
                    <div className="pizzas">
                        <Card className="Card">
                        <CardImg src={props.url} />
                        <CardTitle>
                            <h4>{props.title}</h4>
                        </CardTitle>
                        <CardSubtitle>
                            <p className="pizzadesc">
                                {props.desc}
                            </p>
                        </CardSubtitle>
                        <CardTitle>
                            <h4>{props.price} so`m</h4>
                        </CardTitle>
                        <Button className="btn1" onClick={() => props.addCart(props.item)}>
                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik01Ljk5ODcgMTQuNjY2N0M2LjM2Njg5IDE0LjY2NjcgNi42NjUzNiAxNC4zNjgyIDYuNjY1MzYgMTRDNi42NjUzNiAxMy42MzE4IDYuMzY2ODkgMTMuMzMzMyA1Ljk5ODcgMTMuMzMzM0M1LjYzMDUxIDEzLjMzMzMgNS4zMzIwMyAxMy42MzE4IDUuMzMyMDMgMTRDNS4zMzIwMyAxNC4zNjgyIDUuNjMwNTEgMTQuNjY2NyA1Ljk5ODcgMTQuNjY2N1oiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMy4zMzQ2IDE0LjY2NjdDMTMuNzAyOCAxNC42NjY3IDE0LjAwMTMgMTQuMzY4MiAxNC4wMDEzIDE0QzE0LjAwMTMgMTMuNjMxOCAxMy43MDI4IDEzLjMzMzMgMTMuMzM0NiAxMy4zMzMzQzEyLjk2NjQgMTMuMzMzMyAxMi42NjggMTMuNjMxOCAxMi42NjggMTRDMTIuNjY4IDE0LjM2ODIgMTIuOTY2NCAxNC42NjY3IDEzLjMzNDYgMTQuNjY2N1oiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0wLjY2Nzk2OSAwLjY2NjY2NkgzLjMzNDY0TDUuMTIxMyA5LjU5MzMzQzUuMTgyMjYgOS45MDAyNiA1LjM0OTI0IDEwLjE3NiA1LjU5MyAxMC4zNzIyQzUuODM2NzYgMTAuNTY4NCA2LjE0MTc3IDEwLjY3MjcgNi40NTQ2MyAxMC42NjY3SDEyLjkzNDZDMTMuMjQ3NSAxMC42NzI3IDEzLjU1MjUgMTAuNTY4NCAxMy43OTYzIDEwLjM3MjJDMTQuMDQgMTAuMTc2IDE0LjIwNyA5LjkwMDI2IDE0LjI2OCA5LjU5MzMzTDE1LjMzNDYgNEg0LjAwMTMiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDAiPgo8cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==" alt="korzinka" />
                            Buruyutma Berish
                        </Button>
                </Card>
                    </div>
            </Col>
    );
};

export default ItemCart;