const { Command } = require('discord.js-commando')

class Abigail extends Command {
  constructor (client) {
    super(client, {
      name: 'abigail',
      group: 'villagers',
      memberName: 'abigail',
      throttling: { usages: 1, duration: 10 },
      description: 'Returns information related to Abigail.',
      examples: ['r!abigail', 'r!abi schedule', 'r!abi gifts']
    })
  }

  async run (msg, args) {
    msg.reply('this command appears to be working, but it is currently under development.')
  }
}

module.exports = Abigail
