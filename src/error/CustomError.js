/*
    Api de erro customizado
*/

class ApiError extends Error {
    constructor(status, message, details, token) {
        super(message);
        this.tipo = status || 'error';
        this.mensagem = message;
        this.detalhes = details;
        this.token = token
        Error.captureStackTrace(this, ApiError); // Capture the stack trace
    }
}

// class ValidationError extends ApiError {
//     constructor(status, message, details = null, ){
//         super(status, message, details);
//     }
// }

// class NotFoundError extends ApiError {
//     constructor(status, message, details = null, ){
//         super(status, message, details);
//     }
// }

// class UnauthorizedError extends ApiError {
//     constructor(status, message, details = null, ){
//         super(status, message, details);
//     }
//}

// module.exports = { ApiError, ValidationError, NotFoundError };
module.exports = { ApiError };