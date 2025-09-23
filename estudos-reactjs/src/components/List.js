import Item from "./Item"


function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento="2025"/>
                <Item marca="Fiat" ano_lancamento="2023"/> 
                <Item marca="Ford" ano_lancamento="2008"/> 
            </ul>
        </>
    )
}

export default List