const errorMiddleware = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "BackEnd error";
    const extraDetails = err.extraDetails || "Error From BackEnd";

    return res.status(status).json({ message, extraDetails });
};


module.exports = errorMiddleware;