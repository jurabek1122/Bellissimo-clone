import React, { useState, useEffect} from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import '../App.css';
import { Link } from 'react-router-dom';

const Navbar = ({cart}) => {

    const [fixed, setFixed] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 120) {
                setFixed(true) // navbar 100 qiymatidan keyin fixed holatga o'tadi
            } else{
                setFixed(false)
            }
        })
    })

    return (
        <div>
            <div className="Navbar">
                <div className="container">
                    <Nav>
                        <NavItem>
                            <NavLink href="#" className='loc'>
                                Tashkent
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className='nav'>Biz Haqimizda</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className='nav'>Franchayzi</NavLink>
                        </NavItem>
                        <div className="uzru">
                            <NavItem>
                                <NavLink href="#" className='uz'>UZ</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#" className='ru'>RU</NavLink>
                            </NavItem>
                        </div>
                    </Nav>
                </div>
            </div>
        
            <div className="header container">
                <Link to='/'>
                    <img className="logo" src="https://bellissimo.uz/_next/image?url=%2F_next%2Fstatic%2Fimages%2Flogo-2fe27e738f03c72de9c6071d8da45a15.png&w=320&q=75" alt="logo" />
                </Link>
                <img className="img" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAyMCAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuOTk4NyAwLjgzMzMzNEwxMi44MzEyIDYuNTcxNjdMMTkuMTY1NCA3LjQ5NzVMMTQuNTgyIDExLjk2MTdMMTUuNjYzNyAxOC4yNjgzTDkuOTk4NyAxNS4yODkyTDQuMzMzNyAxOC4yNjgzTDUuNDE1MzcgMTEuOTYxN0wwLjgzMjAzMSA3LjQ5NzVMNy4xNjYyIDYuNTcxNjdMOS45OTg3IDAuODMzMzM0WiIgZmlsbD0iI0ZGQTgwMCIvPgo8L3N2Zz4K" alt="star" />
                <p className="number">4.7/5</p>
                <p className="text1">o`rtacha haftalik baho</p>
                <img className="img" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwLjE2ODMgMTUuNTFWMTguMjZDMjAuMTY5MyAxOC41MTUzIDIwLjExNyAxOC43NjggMjAuMDE0NyAxOS4wMDE5QzE5LjkxMjUgMTkuMjM1OCAxOS43NjI1IDE5LjQ0NTggMTkuNTc0MyAxOS42MTg0QzE5LjM4NjIgMTkuNzkxIDE5LjE2NDEgMTkuOTIyNCAxOC45MjIzIDIwLjAwNDFDMTguNjgwNSAyMC4wODU5IDE4LjQyNDIgMjAuMTE2MyAxOC4xNjk5IDIwLjA5MzNDMTUuMzQ5MiAxOS43ODY4IDEyLjYzOTcgMTguODIzIDEwLjI1OTEgMTcuMjc5MkM4LjA0NDI4IDE1Ljg3MTggNi4xNjY1IDEzLjk5NCA0Ljc1OTExIDExLjc3OTJDMy4yMDk5MiA5LjM4Nzc3IDIuMjQ1ODMgNi42NjUwOCAxLjk0NDk0IDMuODMxNjdDMS45MjIwMyAzLjU3ODE4IDEuOTUyMTYgMy4zMjI3IDIuMDMzNCAzLjA4MTQ5QzIuMTE0NjQgMi44NDAyOCAyLjI0NTIxIDIuNjE4NjMgMi40MTY4MSAyLjQzMDY1QzIuNTg4NCAyLjI0MjY3IDIuNzk3MjYgMi4wOTI0OCAzLjAzMDA4IDEuOTg5NjVDMy4yNjI5IDEuODg2ODEgMy41MTQ1OSAxLjgzMzU3IDMuNzY5MTEgMS44MzMzM0g2LjUxOTExQzYuOTYzOTcgMS44Mjg5NSA3LjM5NTI1IDEuOTg2NDkgNy43MzI1NiAyLjI3NjU3QzguMDY5ODYgMi41NjY2NSA4LjI5MDE4IDIuOTY5NDkgOC4zNTI0NCAzLjQxQzguNDY4NTEgNC4yOTAwNiA4LjY4Mzc3IDUuMTU0MTcgOC45OTQxMSA1Ljk4NTgzQzkuMTE3NDQgNi4zMTM5MyA5LjE0NDEzIDYuNjcwNSA5LjA3MTAyIDcuMDEzMzFDOC45OTc5MSA3LjM1NjExIDguODI4MDcgNy42NzA3NyA4LjU4MTYxIDcuOTJMNy40MTc0NCA5LjA4NDE3QzguNzIyMzcgMTEuMzc5MSAxMC42MjI1IDEzLjI3OTIgMTIuOTE3NCAxNC41ODQyTDE0LjA4MTYgMTMuNDJDMTQuMzMwOCAxMy4xNzM1IDE0LjY0NTUgMTMuMDAzNyAxNC45ODgzIDEyLjkzMDZDMTUuMzMxMSAxMi44NTc1IDE1LjY4NzcgMTIuODg0MiAxNi4wMTU4IDEzLjAwNzVDMTYuODQ3NCAxMy4zMTc4IDE3LjcxMTUgMTMuNTMzMSAxOC41OTE2IDEzLjY0OTJDMTkuMDM2OSAxMy43MTIgMTkuNDQzNiAxMy45MzYzIDE5LjczNDMgMTQuMjc5NEMyMC4wMjUgMTQuNjIyNSAyMC4xNzk0IDE1LjA2MDQgMjAuMTY4MyAxNS41MVoiIHN0cm9rZT0iIzAwQUI0OSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K" alt="phone" />
                <p className="number">1111</p>
                <p className="text">45 daqiqada tekin yetkazib beramiz yoki pitsa bepul</p>
                <img src="https://bellissimo.uz/_next/image?url=%2F_next%2Fstatic%2Fimages%2Fhalal_-e8550da87d6d0fdf815e6b8871dcf789.png&w=64&q=75" alt="xalal" />
                    <Link to="/card" className='dnone'>
                        <div className="number1">
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik01Ljk5ODcgMTQuNjY2N0M2LjM2Njg5IDE0LjY2NjcgNi42NjUzNiAxNC4zNjgyIDYuNjY1MzYgMTRDNi42NjUzNiAxMy42MzE4IDYuMzY2ODkgMTMuMzMzMyA1Ljk5ODcgMTMuMzMzM0M1LjYzMDUxIDEzLjMzMzMgNS4zMzIwMyAxMy42MzE4IDUuMzMyMDMgMTRDNS4zMzIwMyAxNC4zNjgyIDUuNjMwNTEgMTQuNjY2NyA1Ljk5ODcgMTQuNjY2N1oiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMy4zMzQ2IDE0LjY2NjdDMTMuNzAyOCAxNC42NjY3IDE0LjAwMTMgMTQuMzY4MiAxNC4wMDEzIDE0QzE0LjAwMTMgMTMuNjMxOCAxMy43MDI4IDEzLjMzMzMgMTMuMzM0NiAxMy4zMzMzQzEyLjk2NjQgMTMuMzMzMyAxMi42NjggMTMuNjMxOCAxMi42NjggMTRDMTIuNjY4IDE0LjM2ODIgMTIuOTY2NCAxNC42NjY3IDEzLjMzNDYgMTQuNjY2N1oiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0wLjY2Nzk2OSAwLjY2NjY2NkgzLjMzNDY0TDUuMTIxMyA5LjU5MzMzQzUuMTgyMjYgOS45MDAyNiA1LjM0OTI0IDEwLjE3NiA1LjU5MyAxMC4zNzIyQzUuODM2NzYgMTAuNTY4NCA2LjE0MTc3IDEwLjY3MjcgNi40NTQ2MyAxMC42NjY3SDEyLjkzNDZDMTMuMjQ3NSAxMC42NzI3IDEzLjU1MjUgMTAuNTY4NCAxMy43OTYzIDEwLjM3MjJDMTQuMDQgMTAuMTc2IDE0LjIwNyA5LjkwMDI2IDE0LjI2OCA5LjU5MzMzTDE1LjMzNDYgNEg0LjAwMTMiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDAiPgo8cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==" alt="korzinka" />
                        <p>{cart.length}</p>
                        </div>
                    </Link>
                
            </div>
            <div className="navlinkbg">
                <div className={ fixed ? 'navlink-fixed' : 'navlink container'}>
                    <Nav className='navlinks'>
                        <NavItem>
                            <Link to='/' className={fixed ? 'nav-img' : 'nav-img none'}>
                                <img className={fixed ? 'nav-img' : 'nav-img none'} src='https://bellissimo.uz/_next/image?url=%2F_next%2Fstatic%2Fimages%2Ficon-d55466275f62d9aa1312c044a603741c.png&w=64&q=75' />
                            </Link>
                        </NavItem>
                        <NavItem>
                                <NavLink href="#pitsa" className='nav2'>PITSA</NavLink>
                        </NavItem>
                        <NavItem>
                                <NavLink href="#gazak" className='nav2'>GAZAKLAR</NavLink>
                        </NavItem>
                        <NavItem>
                                <NavLink href="#ichimlik" className='nav2'>ICHIMLIKLAR</NavLink>
                        </NavItem>
                        <NavItem>
                                <NavLink href="#salat" className='nav2'>SALATLAR</NavLink>
                        </NavItem>
                        <NavItem>
                                <NavLink href="#desert" className='nav2'>DESERTLAR</NavLink>
                        </NavItem>
                        <NavItem>
                                <NavLink href="#sous" className='nav2'>SOUSLAR</NavLink>
                        </NavItem>
                        <Link to="/card" className='dnone'>
                            <div className={ fixed ? 'number1 nav-number1' : 'number1 nav-number1 none'}>
                                <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik02LjAwMDY1IDE0LjY2NjdDNi4zNjg4NCAxNC42NjY3IDYuNjY3MzIgMTQuMzY4MiA2LjY2NzMyIDE0QzYuNjY3MzIgMTMuNjMxOCA2LjM2ODg0IDEzLjMzMzMgNi4wMDA2NSAxMy4zMzMzQzUuNjMyNDYgMTMuMzMzMyA1LjMzMzk4IDEzLjYzMTggNS4zMzM5OCAxNEM1LjMzMzk4IDE0LjM2ODIgNS42MzI0NiAxNC42NjY3IDYuMDAwNjUgMTQuNjY2N1oiIHN0cm9rZT0iI0VBMkUyRSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTMuMzMyNyAxNC42NjY3QzEzLjcwMDkgMTQuNjY2NyAxMy45OTkzIDE0LjM2ODIgMTMuOTk5MyAxNEMxMy45OTkzIDEzLjYzMTggMTMuNzAwOSAxMy4zMzMzIDEzLjMzMjcgMTMuMzMzM0MxMi45NjQ1IDEzLjMzMzMgMTIuNjY2IDEzLjYzMTggMTIuNjY2IDE0QzEyLjY2NiAxNC4zNjgyIDEyLjk2NDUgMTQuNjY2NyAxMy4zMzI3IDE0LjY2NjdaIiBzdHJva2U9IiNFQTJFMkUiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTAuNjY2MDE2IDAuNjY2NjY3SDMuMzMyNjhMNS4xMTkzNSA5LjU5MzMzQzUuMTgwMzEgOS45MDAyNiA1LjM0NzI5IDEwLjE3NiA1LjU5MTA1IDEwLjM3MjJDNS44MzQ4IDEwLjU2ODQgNi4xMzk4MSAxMC42NzI3IDYuNDUyNjggMTAuNjY2N0gxMi45MzI3QzEzLjI0NTUgMTAuNjcyNyAxMy41NTA2IDEwLjU2ODQgMTMuNzk0MyAxMC4zNzIyQzE0LjAzODEgMTAuMTc2IDE0LjIwNTEgOS45MDAyNiAxNC4yNjYgOS41OTMzM0wxNS4zMzI3IDRIMy45OTkzNSIgc3Ryb2tlPSIjRUEyRTJFIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDAiPgo8cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==' />
                                <p>{cart.length}</p>
                            </div>
                        </Link>
                    </Nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;