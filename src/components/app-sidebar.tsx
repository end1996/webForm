import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';

// ✅ Definimos los tipos de las props
interface TemporaryDrawerProps {
    open: boolean;
    toggleDrawer: (newOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const TemporaryDrawer: React.FC<TemporaryDrawerProps> = ({ open, toggleDrawer }) => {
    const DrawerList = (
        <Box sx={{ width: 350, position: 'relative', minHeight: '100vh' }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                <h2 className='text-center'>Tu carro de compras</h2>
                <ListItemButton>
                </ListItemButton>
            </List>
            <Divider />
           {/* Botón siempre abajo dentro del Drawer */}
    <Box sx={{ position: 'absolute', bottom: 0, width: '100%', backgroundColor: 'black', textAlign: 'center' }}>
        <button className='bg-dark text-white p-3 w-100'>Ir a pagar</button>
    </Box>
        </Box>
    );

    return (
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
        </Drawer>
    );
};

export default TemporaryDrawer;
