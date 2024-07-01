const { ButtonInteraction } = require("discord.js");
const DiscordBot = require("../../client/DiscordBot");
const Component = require("../../structure/Component");

module.exports = new Component({
    customId: 'change-username',
    type: 'button',
    /**
     * 
     * @param {DiscordBot} client 
     * @param {ButtonInteraction} interaction 
     */
    run: async (client, interaction) => {

        await interaction.showModal(
            {
                custom_id: 'modal-username',
                title: 'Change your Username',
                components: [{
                    type: 1,
                    components: [{
                        type: 4,
                        custom_id: 'modal-username-fild',
                        label: 'What is your new username?',
                        max_length: 15,
                        min_length: 1,
                        placeholder: 'Enter your new username here!',
                        style: 1,
                        required: true
                    }]
                }]
            }
        )

    }
}).toJSON();