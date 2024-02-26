const Discord = require('discord.js'); //import client from discord
const keep_alive = require('./keep_alive.js')

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.content === '!ping') {
    message.channel.send('Pong!');
  }
});



client.login(process.env.TOKEN); //login bot using token
