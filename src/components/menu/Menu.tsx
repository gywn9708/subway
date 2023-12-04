import styled from 'styled-components';
import axios from 'axios'
import { useEffect } from 'react';

function Menu() {
    const getMenus = () => {
        axios
        .get('http://localhost:8000/menu')
        .then((response) => {
            console.log(response.data);
        });
    };

    useEffect(() => {
        getMenus();
    }, []);

    return ( 
        <MenuContainer>
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
        </MenuContainer>
     );
}

export default Menu;

const MenuContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 23px;
`

function MenuItem() {
    return ( 
        <ItemContainer>
            <ItemImg>
                <img src="" alt="" />
            </ItemImg>
            <ItemInfo>
                <ItemTitle>
                    에그마요
                </ItemTitle>
                <ItemContent>
                        Egg Mayo
                    <Divider />
                        416Kcal
                </ItemContent>
            </ItemInfo>
        </ItemContainer>
     );
}

const ItemContainer = styled.div`
`
const ItemImg = styled.div`
    width: 224px;
    height: 151px;
    background-color: #f5f5f5;
`
const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 7px;
    width: 224px;
    height: 100px;
    background-color: #51964C;
`
const ItemTitle = styled.p`
    font-size: 20px;
    font-weight: 600;
    margin: 0;
`
const ItemContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 15px;
    gap: 10px;
`
const Divider = styled.div`
    width: 1px;
    height: 15px;
    background-color: #000;
`
