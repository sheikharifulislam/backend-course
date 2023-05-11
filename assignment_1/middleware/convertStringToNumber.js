const convertStringToNumber = (req, _res, next) => {
    Object.keys(req.query).forEach((key) => {
        req.query[key] = parseInt(req.query[key]);
    });

    next();
};

module.exports = convertStringToNumber;
