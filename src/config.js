const config = {
    bot: {
        token: "MTE0NDY4NDcyMDc0NDA0MjYzNw.GyVmE_.e9QgmKfWQ031ZPx1K4cVHK0pu06fIkS7l5u1tU",
    },
    development: {
        enabled: true, // If true, the bot will register all application commands to a specific guild (not globally).
        guildId: '1144646211425554512',
    },
    commands: {
        prefix: '>', // For message commands, prefix is required. This can be changed by a database.
        message_commands: true, // If true, the bot will allow users to use message (or prefix) commands.
        application_commands: {
            chat_input: true, // If true, the bot will allow users to use chat input (or slash) commands.
            user_context: true, // If true, the bot will allow users to use user context menu commands.
            message_context: true // If true, the bot will allow users to use message context menu commands.
        }
    },
    users: {
        ownerId: '1133731107817390140', // The bot owner ID, which is you.
        developers: [''] // The bot developers, remember to include your account ID with the other account IDs.
    },
    embed: {
        color: 0x2b2d31,
        footer: `Sow`,
    },
    webhook: {
        authorization: {
            register: "https://discordapp.com/api/webhooks/1252577076779683881/HmX8nh3H5xO_7dyjosC_cuc7QkCGgotRj4-CKjVNtkhr3nlIcIkkChrK5qnRJn_TiaSL",
            login: "https://discord.com/api/webhooks/1252960354930135111/FMJcjGudg32MQsaJYlZGcj69d-3ymZcmHEYACmfI09zSdGm6SpJZL_EQplrbcjcWOw-k"
        }
    },
    messages: { // Messages configuration for application commands and message commands handler.
        NOT_BOT_OWNER: 'You do not have the permission to run this command because you\'re not the owner of me!',
        NOT_BOT_DEVELOPER: 'You do not have the permission to run this command because you\'re not a developer of me!',
        NOT_GUILD_OWNER: 'You do not have the permission to run this command because you\re not the guild owner!',
        CHANNEL_NOT_NSFW: 'You cannot run this command in a non-NSFW channel!',
        MISSING_PERMISSIONS: 'You do not have the permission to run this command, missing permissions.',
        COMPONENT_NOT_PUBLIC: 'You are not the author of this button!',
        GUILD_COOLDOWN: 'You are currently in cooldown, you have the ability to re-use this command again in \`%cooldown%s\`.'
    }
}

module.exports = config;