const { ButtonInteraction } = require("discord.js");
const DiscordBot = require("../../client/DiscordBot");
const Component = require("../../structure/Component");

module.exports = new Component({
    customId: 'change-displayName',
    type: 'button',
    /**
     * 
     * @param {DiscordBot} client 
     * @param {ButtonInteraction} interaction 
     */
    run: async (client, interaction) => {

        await interaction.showModal(
            {
                custom_id: 'modal-displayName',
                title: 'Change your Display Name',
                components: [{
                    type: 1,
                    components: [{
                        type: 4,
                        custom_id: 'modal-displayName-fild',
                        label: 'What is your new Display Name?',
                        max_length: 15,
                        min_length: 1,
                        placeholder: 'Enter your new display name here!',
                        style: 1,
                        required: true
                    }]
                }]
            }
        )

    }
}).toJSON();