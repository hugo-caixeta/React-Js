import Item from "./Item"

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={2024}/>
                <Item marca="Fiat" ano_lancamento={1970}/> 
                <Item marca="Ford" ano_lancamento={2005}/> 
                <Item marca="Chevrolet" ano_lancamento={2015}/>
                <Item />
            </ul>
        </>
    )
}

export default List