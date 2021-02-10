const Discord = require('discord.js');
const { CommandoClient } = require('discord.js-commando');
const path = require('path');
const fs = require('fs');

const client = new CommandoClient({
    commandPrefix: '!',
    owner:  '667375094569369633',
    disableMentions: 'everyone'
});

client.registry
        .registerDefaultTypes()
        .registerGroups([['meteo', 'Meteos'], ['divers', 'Divers']])
        .registerCommandsIn(path.join(__dirname, 'commands'))
;

client.once('ready', () => {
    console.log(`Je suis prêt !`);
    //client.channels.cache.find(channel => channel.name === 'commandes').send("Je suis en ligne !");
});


client.on('error', console.error); 


client.login('YOUR-TOKEN');


