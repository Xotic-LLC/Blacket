export default (_, res, next) => {
    res.setHeader("X-Powered-By", "Blacket");
    next();
}