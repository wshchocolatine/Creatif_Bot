const Discord = require('discord.js');
const { CommandoClient } = require('discord.js-commando');
const path = require('path');

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


client.login('Nzk4NjUxNjQxOTA5NzM5NTUw.X_4ITQ.11bf9zfnBDLWxxtPwYBHC4TZAqo');


