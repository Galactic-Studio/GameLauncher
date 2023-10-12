require("dotenv").config();
const semver = require('semver')
const apiConnector = require("./APIConnector")

exports.isUpdated = async () =>{
    var version = await apiConnector.getVersion() 

    return semver.valid(version)
}