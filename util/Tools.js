const moment = require('moment-timezone')
const defaultFormat = 'MM.DD.Y @ HH:mm:ss'

class Tools {
  get formattedUTCTime () {
    return moment.tz('UTC').format(defaultFormat)
  }
}

module.exports = Tools
