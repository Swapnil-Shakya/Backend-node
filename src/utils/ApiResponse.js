class ApiResponse{
    constructor(statusCode, data, messgage = "successs") {
        this.statusCode = statusCode,
        this.data = data,
        this.message = message
        this.success = statusCode < 400
    }
}   