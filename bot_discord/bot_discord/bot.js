
/* const CommandoClient = require('./client/client.js');
const path = require('path');

const client = new CommandoClient({
    commandPrefix: '?', // Préfixe des commandes (ex: ?help)
    owner: '667375094569369633' // ID de l'utilisateur propriétaire du bot
}); 

client.registry
    .registerDefaultTypes()
    .registerGroups([['divers', 'Divers'],])
    .registerCommandsIn(path.join(__dirname, 'commands'))
; */

const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // If the message content starts with "!kick"
  if (message.content.startsWith('!kick')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member
          .kick('')
          .then(() => {
            // We let the message author know we were able to kick the person
            message.reply(`J'ai bien kické ${user.tag} maître !`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.reply(`Je n\'ai pas pu kicker ${user.tag} maître, je m'en excuse sincérement ! `);
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("L'utilisateur n'est pas dans le serveur maître !");
      }
      // Otherwise, if no user was mentioned
    } else {
      message.reply("Vous n'avez pas d'utilisateurs mentionnés maître !");
    }
  }
});

client.login('Nzk4NjUxNjQxOTA5NzM5NTUw.X_4ITQ.11bf9zfnBDLWxxtPwYBHC4TZAqo');