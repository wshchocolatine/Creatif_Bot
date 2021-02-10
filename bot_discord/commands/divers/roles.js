const {Command} = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class roles extends Command {
    constructor (client) {
        super (client, {
            name: 'roles',
            memberName: 'roles',
            group: 'divers',
            description: 'add roles to the guild for use mute command',
            ownerOnly: 'true',
            throttling: {
                usages: 2,
                duration: 1,
            },
            clientPermissions: ['MANAGE_ROLES'],
        })
    }

    async run(msg) {

        let guild = new Discord.Guild();

        //const client = new Discord.Client();
        //let guild = client.guilds.cache.get("666340373513240596");


        guild.roles.create({
            data: {
                name: 'canMute',
                color: '#FE2E2E',
            },
            reason: 'Can Mute someone?',
        })
        .catch(console.error());

        guild.roles.create({
            data: {
                name: 'tag: mute',
            },
            reason: 'for muting the vocal',
        })
        .catch(console.error());

        guild.roles.create({
            data: {
                name: 'tag: unmuted',
            },
            reason: 'for unmute',
        })
        .catch(console.error());

    }
};