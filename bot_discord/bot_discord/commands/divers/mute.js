const {Command} = require('discord.js-commando');
const Discord = require('discord.js');

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

    async run (msg, guild) {

        guild.roles.create({
            data: {
                name: 'canMute',
                color: '#FE2E2E',
            },
            reason: 'Can Mute someone?',
        })
        .catch(console.error);

        guild.roles.create({
            data: {
                name: 'tag: mute',
            },
            reason: 'for muting the vocal',
        })

        guild.roles.create({
            data: {
                name: 'tag: unmuted',
            },
            reason: 'for unmute',
        })

        console.log(err);


        if (msg.member.roles.cache.find(role => role.name == 'canMute')) 
        {
            var muted = msg.member.roles.cache.find(role => role.name == 'tag: mute');
            var unMuted = msg.member.roles.cache.find(role => role.name == 'tag: unmuted');

            if(msg.member.roles.cache.has(unMuted.id))
            {
                msg.member.voice.channel.members.forEach(async m => {
                    m.voice.setMute(true)
                })

                await msg.members.roles.remove(unMuted);
                await msg.members.roles.add(muted);

                message.reply ('channel mute')
                   .then(msg => {
                       msg.delete({timeout: 5000})
                   })
            }

            if (msg.member.roles.cache.has(muted.id))
            {
                msg.member.voice.channel.members.forEach(async m => {
                    m.voice.setMute(false)
                })

                await msg.members.roles.remove(muted);
                await msg.members.roles.add(unMuted);

                message.reply('channel unmute')
                   .then(msg => {
                       msg.delete({timeout: 5000})
                   })
            }
        }
    }
};