const { ChatInputCommandInteraction, EmbedBuilder } = require("discord.js");
const DiscordBot = require("../../client/DiscordBot");
const ApplicationCommand = require("../../structure/ApplicationCommand");
const Config = require('./../../config.js');

// Variable pour garder l'état d'antilink
let antilinkEnabled = false;

module.exports = new ApplicationCommand({
    command: {
        name: 'rolestatus',
        description: 'Turns the rolestatus system on or off.',
        type: 1,
        options: [
            {
                name: 'state',
                description: 'Enable or disable the antilink system.',
                type: 3, // 3 stands for string
                required: true,
                choices: [
                    { name: 'on', value: 'on' },
                    { name: 'off', value: 'off' }
                ]
            }
        ]
    },
    options: {
        cooldown: 5000
    },
    /**
     * 
     * @param {DiscordBot} client 
     * @param {ChatInputCommandInteraction} interaction 
     */
    run: async (client, interaction) => {
        const state = interaction.options.getString('state');

        if (interaction.user.id === Config.users.ownerId || Config.users.developers.includes(interaction.user.id)) {
            if (state === 'on') {
                antilinkEnabled = true;
                await interaction.reply({
                    embeds: [
                        new EmbedBuilder()
                            .setTitle(`Rolestatus System`)
                            .setDescription(`The rolestatus system has been **enabled**.\n\nall members who put in their status: **vest**\n will have the vip role`)
                            .setColor(Config.embed.color),
                    ], ephemeral: true
                });
            } else if (state === 'off') {
                antilinkEnabled = false;
                await interaction.reply({
                    embeds: [
                        new EmbedBuilder()
                            .setTitle(`Antilink System`)
                            .setDescription(`The antilink system has been **disabled**.`)
                            .setColor(Config.embed.color),
                    ], ephemeral: true
                });
            } else {
                await interaction.reply({
                    embeds: [
                        new EmbedBuilder()
                            .setTitle(`Antilink System`)
                            .setDescription(`Invalid state. Please use \`on\` or \`off\`.`)
                            .setColor(Config.embed.color),
                    ], ephemeral: true
                });
            }
        } else {
            await interaction.reply({
                embeds: [
                    new EmbedBuilder()
                        .setTitle(`Antilink System`)
                        .setDescription(`You do not have permission to use this command.`)
                        .setColor(Config.embed.color),
                ], ephemeral: true
            });
        }
    }
}).toJSON();