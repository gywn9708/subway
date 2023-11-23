import styled from "styled-components";

function Menu() {
    return ( 
        <div>

            <MenuItem />
        </div>
     );
}

export default Menu;

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
