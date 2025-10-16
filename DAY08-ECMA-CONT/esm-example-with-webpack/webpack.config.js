module.exports = function (env) {
    // console.log("env: ", env);
    var env_file = env.WEBPACK_SERVE ? 'dev' : 'prod';
    return require(`./config/webpack.${env_file}.js`)(env);
}