const fs = require("fs")

module.exports = (client) => {
    const folders = fs.readdirSync("./events")

    for (const folder of folders) {
        const files = fs.readdirSync(`./events/${folder}`);

        for (const file of files) {
            const event = require(`../events/${folder}/${file}`);

            client.on(event.name, (...args) => {
                event.run(...args)
            })
        }
    }
}