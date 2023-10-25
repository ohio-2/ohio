const fs = require("fs")

module.exports = (client) => {
    const commands = []
    const folders = fs.readdirSync("./commands");

    for (const folder of folders) {
        const files = fs.readdirSync(`./commands/${folder}`).filter((x) => x.endsWith(".js"))
    
        for (const file of files) {
            const command = require(`../commands/${folder}/${file}`);

            if (!commands.data || !commands.run) {
                console.log(`Wrong a command at ${file}`);
            }

            commands.push(command.data.toJSON());
            client.commands.set(command.data.name, command);

            continue;
        }    
    }    

    client.application.commands.set(commands);
}    