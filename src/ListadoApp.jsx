const Items = ({nombre, visto}) => {
    return(
        <li>{nombre} 
        {visto ? '✅' : '❌'}
        </li>
    )
}

export const ListadoApp= () => {
    return (
        <>
        <h1>Listado de Temas del Curso</h1>
        <ol>
            <Items nombre="Instalaciones necesarias" visto={true}></Items>
            <Items nombre="Uso de Vite" visto={true}></Items>
            <Items nombre="Componentes" visto={true}></Items>
            <Items nombre="Variables en JSX" visto={true}></Items>
            <Items nombre="Props" visto={true}></Items>
            <Items nombre="Events" visto={true}></Items>
            <Items nombre="useState" visto={true}></Items>
            <Items nombre="Redux" visto={false}></Items>
            <Items nombre="customHooks" visto={false}></Items>

        </ol>
        </>
    )
}
