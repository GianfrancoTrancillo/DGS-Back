const routes = (app) => {

    app.get("/", (req, res) => {
        res.render("home");
    });

    app.get("/trabajos", (req, res) => {
        res.render('trabajos');
    });

    app.get("/corporeos", (req, res) => {
        res.render('corporeos');
    })

    app.get("/esmerilados", (req, res) => {
        res.render('esmerilados');
    })

    app.get("/imantados", (req, res) => {
        res.render('imantados');
    })

    app.get("/estampados", (req, res) => {
        res.render('estampados');
    })

    app.get("/lonas", (req, res) => {
        res.render('lonas');
    })

    app.get("/luminosos", (req, res) => {
        res.render('luminosos');
    })

    app.get("/marquesinas", (req, res) => {
        res.render('marquesinas');
    })

    app.get("/microperforados", (req, res) => {
        res.render('microperforados');
    })

    app.get("/otros", (req, res) => {
        res.render('otros');
    })

    app.get("/troquelados", (req, res) => {
        res.render('troquelados');
    })

    app.get("/vehicular", (req, res) => {
        res.render('vehicular');
    })

    app.get("/vidrierasComerciales", (req, res) => {
        res.render('vidrierasComerciales');
    });
};

module.exports = routes;
