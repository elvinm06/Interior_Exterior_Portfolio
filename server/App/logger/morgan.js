const morgan =require('App/logger/morgan.js');

const morg = async (app)=>{
    app.use(morgan(function (tokens, req, res) {
        return [
            tokens.method(req, res),
            tokens.url(req, res),
            tokens.status(req, res),
            tokens.res(req, res, 'content-length'), '-',
            tokens['response-time'](req, res), 'ms'
        ].join(' ')
    }));
};

module.exports={
    morg
}