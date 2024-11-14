
const string = `Esto es un texto`
const number = 123456
const array = [`Curso de React`, `Youtube`, 4, 10000]
const boolean = true
const funcion = () => `String desde funcion`
const objeto = { nombre: `Curso de Javascript`, duracion: 4 }
const fecha = new Date()

export const PrimerComponente = () => {
    return (
        <>
            <h1>Variables en JSX</h1>
            <h4>Variable tipo String:</h4> <p>{string}</p>
            <h4>Variable tipo Number:</h4> <p>{number}</p>
            <h4>Variable tipo Array:</h4> <p>{array}</p>
            <h4>Variable tipo Boolean:</h4> <p>{boolean}</p>
            <h4>Variable tipo objeto:</h4> <p>{JSON.stringify(objeto)}</p>
            <h4>Variable tipo fecha:</h4> <p>{Date}</p>
            <h4>Variable tipo String:</h4> <p>{funcion()}</p>
        </>

    )
}

