const { ModalSubmitInteraction, EmbedBuilder } = require("discord.js");
const DiscordBot = require("../../client/DiscordBot");
const Component = require("../../structure/Component");
const Collection = require('../../../../config.js');
const Config = require('./../../config.js');

module.exports = new Component({
    customId: 'modal-alias',
    type: 'modal',
    /**
     * 
     * @param {DiscordBot} client 
     * @param {ModalSubmitInteraction} interaction 
     */
    run: async (client, interaction) => {

        await interaction.deferReply({ ephemeral: true });

        const user = await Collection.findOne({ id: interaction.user.id });
        const new_alias = interaction.fields.getTextInputValue('modal-alias-fild');

        await Collection.updateOne({ id: interaction.user.id }, { $set: { alias: new_alias } });

        await interaction.editReply({
            embeds: [
                new EmbedBuilder()
                    .setAuthor({ name: `Account | vest.lol` })
                    .setTitle(`Account Overview`)
                    .setDescription(`Click on the buttons below to modify your username, alias and display name.`)
                    .addFields(
                        { name: `Username:`, value: `\`${user.username}\``, inline: true },
                        { name: `Alias:`, value: `\`${new_alias}\``, inline: true },
                        { name: `Display Name:`, value: `\`${user.displayName}\``, inline: true },
                    )
                    .setFooter({ text: `${user.views} views | UID ${user.uid}` })
                    .setColor(Config.embed.color),
            ],
            components: [
                {
                    type: 1,
                    components: [{
                        type: 2,
                        label: 'Change Username',
                        style: 2,
                        custom_id: 'change-username'
                    },
                    {
                        type: 2,
                        label: 'Change Alias',
                        style: 2,
                        custom_id: 'change-alias'
                    },
                    {
                        type: 2,
                        label: 'Change Display Name',
                        style: 2,
                        custom_id: 'change-displayName'
                    }]
                },
            ],
            ephemeral: true
        });

    }
}).toJSON();