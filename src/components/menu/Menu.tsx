import styled from 'styled-components';
import axios from 'axios'
import { useEffect, useState } from 'react';

type MenuProps = {
    id?: number,
    title?: string,
    title_ko?: string,
    title_en?: string,
    category?: string,
    kcal?: number,
    price?: number,
    desc?: string,
    img?: string
};

function Menu() {
    const [menus, setMenus] = useState<MenuProps[]>([]);
    const getMenus = () => {
        axios
        .get('http://localhost:8000/menu')
        .then((response) => {
            console.log(response.data);
            setMenus(response.data);
        });
    };

    useEffect(() => {
        getMenus();
    }, []);

    return ( 
        <MenuContainer>
            {menus?.map((item) => (
                <MenuItem item={item} />
            ))}
        </MenuContainer>
     );
}

export default Menu;

const MenuContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 23px;
    width: fit-content;
    margin: 45px auto;
`

type DataProps = {
    item: MenuProps;
}

function MenuItem(props : DataProps) {
    const { item } = props;

    return ( 
        <ItemContainer>
            <ItemImg src={item.img} alt="메뉴 이미지" />
            <ItemInfo>
                <ItemTitle>
                    {item.title_ko}
                </ItemTitle>
                <ItemContent>
                        {item.title_en}
                    <Divider />
                        {item.kcal}
                </ItemContent>
            </ItemInfo>
        </ItemContainer>
     );
}

const ItemContainer = styled.div`
`
const ItemImg = styled.img`
    object-fit: contain;
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
