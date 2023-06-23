const { ActivityType } = require('discord.js');
const client = require('../../index.js');
const config = require('../../config.json');
const c = require('ansi-colors');
client.on('ready', () => {
  console.log(
    c.cyan.bold.underline(`${client.user.tag} is online and running!`)
  );

  client.user.setPresence({
    activities: [
      {
        name: `with 3,327,624 servers`,
        type: ActivityType.Streaming,
        url: 'https://twitch.tv/owobotplays',
      },
    ],
  });
});

process.on('unhandledRejection', (err) => {
  console.log(
    c.red.bold.italic.underline(
      `\nUnhandled promise rejection: [ ${err.message} ]`
    )
  );
  console.log(err);
});

client.login(config.token);
