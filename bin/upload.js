const EasyFtp = require('easy-ftp');
const ftp = new EasyFtp();
const config = {
    "name": "pablomonteserin.com",
    "host": "example.com",
    "port": 21,
    "type": "ftp",
    "username": "user",
    "password": "password",
};

//서버 접속(connect)
ftp.connect(config);
ftp.upload("./dist/**", "/server-path", function(err) {
    if(err) {
        return console.error(err);
    }
    console.info('Deployed!');
});
	