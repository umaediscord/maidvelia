const { ChatInputCommandInteraction, EmbedBuilder } = require("discord.js");
const DiscordBot = require("../../client/DiscordBot");
const ApplicationCommand = require("../../structure/ApplicationCommand");
const Config = require('./../../config.js');
module.exports = new ApplicationCommand({
    command: {
        name: 'help',
        description: 'Displays the command list.',
        type: 1,
        options: []
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
        if (interaction.user.id === Config.users.ownerId || Config.users.developers.includes(interaction.user.id)) {
            await interaction.reply({
                embeds: [
                    new EmbedBuilder()
                        .setTitle(`vest.lol commands`)
                        .setDescription(`prefix: \`/\` | required = \`[]\` | optional = \`()\``)
                        .addFields(
                            { name: `Developer (2)`, value: `> </addbadge:1252998414732366016>, </removebadge:1252998414732366017>`, inline: false },
                            { name: `Vest (3)`, value: `> </register:1252998414732366020>, </login:1253004913039114361>, </account:1252998414732366018>`, inline: false },
                            { name: `Information (2)`, value: `> </help:1252547218054053900>, </ping:1252990916013330541>`, inline: false }
                        )
                        .setColor(Config.embed.color),
                ], ephemeral: true
            });
        } else {
            await interaction.reply({
                embeds: [
                    new EmbedBuilder()
                        .setTitle(`vest.lol commands`)
                        .setDescription(`prefix: \`/\` | required = \`[]\` | optional = \`()\``)
                        .addFields(
                            { name: `Vest (3)`, value: `> </register:1252998414732366020>, </login:1252998414732366019>, </account:1252998414732366018>`, inline: false },
                            { name: `Information (2)`, value: `> </help:1252547218054053900>, </ping:1252990916013330541>`, inline: false }
                        )
                        .setColor(Config.embed.color),
                ], ephemeral: false
            });
        }
    }
}).toJSON();