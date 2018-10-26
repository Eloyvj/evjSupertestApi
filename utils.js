function getUrl () {
  return process.env.BACKEND_URL || 'https://restcountries.eu/rest/v2'
}

module.exports = {
  getUrl
}
