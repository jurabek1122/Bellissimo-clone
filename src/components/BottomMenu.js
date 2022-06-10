import pitsa from './img/pizza.png';
import gazak from './img/gazak.png';
import ichimlik from './img/ichimlik.png';
import salat from './img/salat.png';
import shirinlik from './img/shirinlik.png';
import sous from './img/sous.jpg';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { useMediaQuery } from '@material-ui/core';


const BottomMenu = () => {

    const isDesktop = useMediaQuery('(min-width:500px)');

    return (
        <div>
            {
                isDesktop ? (
                    <div>
                    </div>
                ) : (
                    <div>
                        <Nav>
                            <div className="bottom-menu">
                                <span>
                                    <NavItem>
                                        <NavLink href='#pitsa'>
                                            <img src={pitsa} alt='pitsa' />
                                            <p>Pitsa</p>
                                        </NavLink>
                                    </NavItem>
                                </span>
                                <span>
                                    <NavItem className='nav-itemm'>
                                        <NavLink href='#gazak'>
                                            <img src={gazak} alt='gazak' />
                                            <p>Gazak</p>
                                        </NavLink>
                                    </NavItem>
                                </span>
                                <span>
                                    <NavItem>
                                        <NavLink href='#ichimlik'>
                                            <img src={ichimlik} alt='ichimlik' />
                                            <p>Ichimlik</p>
                                        </NavLink>
                                    </NavItem>
                                </span>
                                
                                <span>
                                    <NavItem>
                                        <NavLink href='#salat'>
                                            <img src={salat} alt='salat' />
                                            <p>Salat</p>
                                        </NavLink>
                                    </NavItem>
                                </span>
                                <span>
                                    <NavItem>
                                        <NavLink href='#desert'>
                                            <img src={shirinlik} alt='shirinlik' />
                                            <p>Desert</p>
                                        </NavLink>
                                    </NavItem>
                                </span>
                                <span>
                                    <NavItem>
                                        <NavLink href='#sous'>
                                            <img src={sous} alt='sous' />
                                            <p>Sous</p>
                                        </NavLink>
                                    </NavItem>
                                </span>
                            </div>
                            </Nav>
                    </div>
                )
            }
        </div>
        
    );
};


export default BottomMenu;