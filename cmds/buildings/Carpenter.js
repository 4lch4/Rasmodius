const { Command } = require('discord.js-commando')

class Carpenter extends Command {
  constructor (client) {
    super(client, {
      name: 'carpenter',
      group: 'shops',
      memberName: 'carpenter',
      throttling: { usages: 1, duration: 10 },
      description: 'Returns information related to the Carpenters Shop.',
      examples: ['r!carpenter', 'r!carpenter hours', 'r!carpenter inventory']
    })
  }

  async run (msg, args) {
    msg.reply('this command appears to be working, but it is currently under development.')
  }
}

module.exports = Carpenter
