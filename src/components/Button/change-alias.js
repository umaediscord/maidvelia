const { ButtonInteraction } = require("discord.js");
const DiscordBot = require("../../client/DiscordBot");
const Component = require("../../structure/Component");

module.exports = new Component({
    customId: 'change-alias',
    type: 'button',
    /**
     * 
     * @param {DiscordBot} client 
     * @param {ButtonInteraction} interaction 
     */
    run: async (client, interaction) => {

        await interaction.showModal(
            {
                custom_id: 'modal-alias',
                title: 'Change your Alias',
                components: [{
                    type: 1,
                    components: [{
                        type: 4,
                        custom_id: 'modal-alias-fild',
                        label: 'What is your new Alias?',
                        max_length: 15,
                        min_length: 1,
                        placeholder: 'Enter your new alias here!',
                        style: 1,
                        required: true
                    }]
                }]
            }
        )

    }
}).toJSON();