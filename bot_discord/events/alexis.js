const {Command} = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class alexis extends Command {
    constructor(client) {
        super (client, {
            name: 'alexis',
            group: 'divers',
            memberName: 'alexis',
            description: 'replies with alexis',
            throttling: {
                usages: 2,
                duration: 1,
            },
            clientPermissions: ['SEND_MESSAGES'],
        })
    }

    async run(msg) {
        const embed = new Discord.MessageEmbed();

        embed
          .setTitle('Alexis')
          .setImage('https://pbs.twimg.com/media/EsrYUoIWMAEOA5-?format=jpg&name=small')
        ;

        msg.say(embed);
    }
};