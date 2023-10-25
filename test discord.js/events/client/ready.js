const {Client} = require("discord.js")
require("colors")

module.exports = {
    name: "ready",

    /**
     * 
     * @parm {Client} client
     */

    run: (client) => {
        console.log(`[INFO] ${client.user.tag} is Onilne`)
    }
}