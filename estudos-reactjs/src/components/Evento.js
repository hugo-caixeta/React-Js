// function Evento({numero}) {

//     function meuEvento() {
//         console.log(`Opa, fui ativado! ${numero}`)
//     }

//     return (
//         <>
//             <p>Clique para disparar um evento: </p>
//             <button onClick={meuEvento}>Ativar!</button>
//         </>
//     )    
// }

// export default Evento




function Evento({numero}) {
    function meuEvento() {
        return console.log(`Cadastrando ${numero}`)
    }
    return (
        <>
            <p>Meu evento</p>
            <button onClick={meuEvento}>Cadastrar</button>
        </>
    )
}

export default Evento