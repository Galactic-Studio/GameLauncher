const needle = require("needle");


exports.getVersion = async () => {

    return new Promise((resolve)=>{

        resolve("1.1.0")
    })
}