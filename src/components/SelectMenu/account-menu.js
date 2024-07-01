const DiscordBot = require("../../client/DiscordBot");
const Component = require("../../structure/Component");
const { EmbedBuilder } = require("discord.js");
const Config = require('./../../config.js');
const Collection = require('./../../../../config.js'); // Ensure the correct path

module.exports = new Component({
    customId: 'account-menu',
    type: 'select',
    /**
     * 
     * @param {DiscordBot} client 
     * @param {import("discord.js").SelectMenuInteraction} interaction 
     */
    run: async (client, interaction) => {
        try {
            await interaction.deferReply({ ephemeral: true });
            const user = await Collection.findOne({ id: interaction.user.id });

            if (!user) {
                return interaction.editReply({
                    content: 'User not found.',
                    ephemeral: true
                });
            }

            if (interaction.values[0] === 'option-home') {
                await interaction.editReply({
                    embeds: [
                        new EmbedBuilder()
                            .setAuthor({ name: `Account | vest.lol` })
                            .setTitle(`How to manage your account?`)
                            .setDescription(`Welcome back, ${user.username},\n> *To make it easier for you to set up and customize your vest.lol account, we've created a super robot that lets you control everything to enhance your Discord user experience.*`)
                            .setFooter({ text: `Requested by ${interaction.user.username} | vest.lol` })
                            .setColor(Config.embed.color),
                    ],
                    components: [
                        {
                            type: 1,
                            components: [{
                                type: 3, // String Select Menu
                                custom_id: 'account-menu',
                                placeholder: 'Choose an option!',
                                options: [
                                    { label: 'Home Menu', value: 'option-home', emoji: `🏡` },
                                    { label: 'Account Overview', value: 'option-overview', emoji: `👀` },
                                    { label: 'Customize', value: 'option-customize', emoji: `✏️` },
                                    { label: 'Socials', value: 'option-socials', emoji: `🔗` },
                                    { label: 'Premium', value: 'option-premium', emoji: `⭐` }
                                ]
                            }]
                        },
                        {
                            type: 1,
                            components: [{
                                type: 2,
                                label: 'Click to see your profile',
                                style: 5,
                                url: `https://localhost:3000/${user.username}`
                            }]
                        },
                    ],
                    ephemeral: true
                });
            } else if (interaction.values[0] === 'option-overview') {
                await interaction.editReply({
                    embeds: [
                        new EmbedBuilder()
                            .setAuthor({ name: `Account | vest.lol` })
                            .setTitle(`Account Overview`)
                            .setDescription(`Click on the buttons below to modify your username, alias and display name.`)
                            .addFields(
                                { name: `Username:`, value: `\`${user.username}\``, inline: true },
                                { name: `Alias:`, value: `\`${user.alias ? user.alias : "❌"}\``, inline: true },
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
            } else if (interaction.values[0] === 'option-customize') {
                await interaction.editReply({
                    embeds: [
                        new EmbedBuilder()
                            .setAuthor({ name: `Account | vest.lol` })
                            .setTitle(`Account Customize`)
                            .setDescription(`Below you'll find commands to integrate a file for uploading your cursor, profile picture and music.`)
                            .addFields(
                                { name: `Profile Picture:`, value: `</change-picture:>`, inline: true },
                                { name: `Music:`, value: `</change-music:>`, inline: true },
                                { name: `Cursor:`, value: `</change-cursor:>`, inline: true },
                            )
                            .setFooter({ text: `vest.lol/customize` })
                            .setColor(Config.embed.color),
                    ],
                    components: [
                        {
                            type: 1,
                            components: [{
                                type: 2,
                                label: 'Profile Picture',
                                style: 5,
                                url: user.avatar || "https://vest.lol/customize",
                            },
                            {
                                type: 2,
                                label: 'Music',
                                style: 5,
                                url: user.musicUrl || "https://vest.lol/customize",
                            },
                            {
                                type: 2,
                                label: 'Cursor',
                                style: 5,
                                url: user.cursor || "https://vest.lol/customize",
                            }]
                        },
                    ],
                    ephemeral: true
                });
            }
        } catch (e) {
            console.log(e);
            await interaction.editReply({
                content: 'An error occurred while processing your request.',
                ephemeral: true
            });
        }
    }
}).toJSON();