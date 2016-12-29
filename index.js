var Docker = require('dockerode');

var config = {
    host: null,
    port: 9001,
    docker: {
        socketPath: '/var/run/docker.sock'
    }
};

var docker = new Docker(config.docker);

var app = require('express')();

app.post('/check', function (req, res) {

    if (!req.query.package) {

        res.status(400).json({
            error: {
                message: 'no package param'
            }
        });

        return;
    }

    var pkg = req.query.package;
    var rqr = req.query.require;

    var args = ['/app/start.sh'];

    args.push(pkg);

    if (rqr) {
        args.push(rqr);
    }

    docker.run('alekzonder/webpack1-size-checker', args, res, {Rm: true}, function (err, data, container) {
        if (err) {
            console.log(err);
        }

        container.remove(function (err) {
            if (err) {
                console.log(err);
                return;
            }

        });
    });
});

app.listen(config.port, function () {
    console.log(`list on ${config.host}:${config.port}`);
});
