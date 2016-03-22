var axios = require('axios');

var ID = "YOUR_CLIENT_ID";
var SEC = "YOUR_SECRET_ID";
var PARAM = "?client_id=" + ID + "&client_secret=" + SEC;

function getUserInfo(username){
    return axios.get('https://api.github.com/users/' + username + PARAM);
};

var helpers = {
    getPlayersInfo: function (players) {
        return axios.all(players.map(function (username) {
            return getUserInfo(username);
        })).then(function (info) {
            return info.map(function (user) {
                return user.data;
            });
        }).catch(function (err) {
            console.warn('error in getPlayersInfo', err);
        });
    }
};

module.exports = helpers;