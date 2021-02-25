class AppError extends Error {
    constructor(message, statusCode) {
        super(message);

        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;
        // this.constructor will not polute stacktrace when constructor is called
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = AppError;