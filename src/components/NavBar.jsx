import { AppBar, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom'

const Header = styled(AppBar)`
    background: #111111;
`;

const Tabs = styled(NavLink)`
    font-size: 20px;
    margin-right: 20px;
    color: #fff;
    text-decoration: none;
`;

const NavBar = () => {
    return ( 
        <Header position="static">
            <Toolbar>
                <Tabs to="/" > Proyecto</Tabs>
                <Tabs to="/all" > Lista de usuarios</Tabs>
                <Tabs to="/add" > Agregar usuarios</Tabs>
            </Toolbar>
        </Header>
        
     );
}
 
export default NavBar;