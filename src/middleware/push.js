// require('dotenv').config({ path: ".env" });

const sendNoti = (token) => {
    const apn = require('apn');

    var options = {
        gateway: "gateway.sandbox.push.apple.com",
        cert: "./cert/cert.pem",
        key: "./cert/key.pem",
        keyId: "Subeye key",
        teamId: "JUNHYEOK GO",
        production: false
    };

    var apnConnection = new apn.Provider(options);

    // let deviceToken = "1f7c29ec69bd2f9dde62bbece81b60a6453698f1e6fa7a3648aa8f79a7509c1e";
    let deviceToken = token;

    var note = new apn.Notification();
    note.badge = 1;
    note.sound = "default";
    note.alert = '무임승차 적발';
    note.topic = 'Twogudak.Subeye';
    note.payload = { 'message': '푸쉬테스트입니다' };

    apnConnection.send(note, deviceToken).then(function (result) {
        console.log(result);
        apnConnection.shutdown();
    }).catch(function (err) {
        throw (err);
    });
}

module.exports = sendNoti;

