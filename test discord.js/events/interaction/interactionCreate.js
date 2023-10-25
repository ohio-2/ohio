module.exports = {
    name: "interactionCreate",
    run: (interaction) => {
        const {client, commandName} = interaction;

        if (!client.command.has(commandName)) {
            return interaction.reply({
                content: "The command is outdated! please retry in a few minutes.",
                ephemeral: true
            });
        }

        const comand = client.commands.get(commandName)

        try {

        } catch (error) {
            interaction.reply({
                content: "Cannont Run command",
                ephemeral: true
            });
            throw error;    
        }
    }
}