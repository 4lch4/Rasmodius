const { CommandoClient, SQLiteProvider } = require('discord.js-commando')
const tools = new (require('./util/Tools'))()
const sqlite = require('sqlite')
const path = require('path')

const config = require('./data/config.json')

const client = new CommandoClient({
  commandPrefix: config.prefix,
  owner: config.owner,
  disableEveryone: true
})

sqlite.open(path.join(__dirname, 'data', 'settings.sqlite3')).then(db => {
  client.setProvider(new SQLiteProvider(db))
})

client.registry
  .registerDefaultTypes()
  .registerGroups([
    ['villagers', 'Villagers Command Group'],
    ['shops', 'Shops Command Group']
  ])
  .registerDefaultGroups()
  .registerDefaultCommands()
  .registerCommandsIn({
    dirname: path.join(__dirname, 'cmds')
  })

client.on('ready', () => {
  let readyTime = tools.formattedUTCTime

  client.channels.get(config.notificationChannel).send(`Rasmodius has come online > **${readyTime}**`)
  client.user.setActivity(config.defaultGame)

  console.log(`Rasmodius has come online > ${readyTime}`)
})

client.login(config.token)
