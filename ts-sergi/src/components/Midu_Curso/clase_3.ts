//Enums

//siempre que se pueda usar el const, a menos que lo que estemos
// haciendo se exporte fuera de la app.
const enum ERROR_TYPES {
    NOT_FOUND = 404,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401
}

    function mostrarmnesaje (tipoDeError: ERROR_TYPES) {
        if(tipoDeError === ERROR_TYPES.NOT_FOUND) {
            console.log("El recurso no fue encontrado")
        } else if (tipoDeError === ERROR_TYPES.BAD_REQUEST) {
            console.log("El recurso no fue encontrado")
        } else if (tipoDeError === ERROR_TYPES.UNAUTHORIZED) {
            console.log("El recurso no fue encontrado")
        }
    }