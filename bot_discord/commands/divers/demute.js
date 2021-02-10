const {Command} = require('discord.js-commando');
const Discord = require('discord.js');
const guild = new Discord.Guild();

module.exports = class mute extends Command {
    constructor(client) {
        super(client, {
            name: 'mute',
            memberName: 'mute',
            group: 'divers',
            description: 'mute le mute gang',
            ownerOnly: true,
            clientPermissions: ['MUTE_MEMBERS'],
            throttling: {
                usages: 1,
                duration: 1,
            },
        })
    }

    async run(msg) {
        msg.member.voice.channel.members.forEach(async m =>
            m.voice.setMute(false))
        }
};