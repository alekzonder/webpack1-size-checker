var Docker = require('dockerode');

var config ={
    host: null,
    port: 9001,
    docker: {
        socketPath: '/var/run/docker.sock'
    }
};

var docker = new Docker(config.docker);

docker.run('test', ['/app/start.sh', 'superagent'], process.stdout, function (err, data, container) {
  console.log(data);
});
