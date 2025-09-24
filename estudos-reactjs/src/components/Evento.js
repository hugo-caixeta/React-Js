

function Evento({numero}) {

    function meuEvento(params) {
        console.log(`Opa, fui ativado! ${numero}`)
    }

    return (
        <>
            <p>Clique para disparar um evento: </p>
            <button onClick={meuEvento}>Ativar!</button>
        </>
    )    
}

export default Evento