const { success } = require("../../utils/Console");
const Event = require("../../structure/Event");
const Config = require('./../../config.js');
const { EmbedBuilder } = require('discord.js');

let antilinkEnabled = true;

module.exports = new Event({
    event: 'messageCreate',
    once: false,
    run: async (client, message) => {
        // Vérifier si le système d'antilink est activé
        if (!antilinkEnabled) return;

        // Regex pour détecter les liens
        const linkRegex = /https?:\/\/[^\s]+/;

        // Vérifier si le message contient un lien
        if (linkRegex.test(message.content)) {
            // Supprimer le message
            await message.delete();

            // Optionnel : informer l'utilisateur que les liens ne sont pas autorisés
            await message.channel.send({
                embeds: [
                    new EmbedBuilder()
                        .setTitle(`Antilink System`)
                        .setDescription(`${message.author}, links are not allowed in this channel.`)
                        .setColor(Config.embed.color),
                ]
            });
        }
    }
}).toJSON();