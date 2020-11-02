const ui = require('./ui')
const api = require('./api')
const getFormFields = require('./../../../lib/get-form-fields')

const getGames = function () {
  api.getGames()
    .then(ui.showGamesSuccess)
}

const createNewGame = function (event) {
  event.preventDefault()
  const form = event.target
  const game = getFormFields(form)
  api.createNewGame(game)
    .then(ui.createNewGameSuccess)
    .then(getGames)
}

const updateGame = function (event) {
  event.preventDefault()
  const id = $(event.target).attr('id')
  const data = getFormFields(event.target)
  api.updateGame(data, id)
    .then(ui.updateGameSuccess)
    .then(getGames)
}

const deleteGame = function (event) {
  const targetGame = event.target
  const gameId = $(targetGame).attr('data-value-index')
  api.deleteGameCall(gameId)
    .then(ui.deleteGameSuccess)
    .then(getGames)
}

module.exports = {
  getGames: getGames,
  createNewGame: createNewGame,
  deleteGame: deleteGame,
  updateGame: updateGame
}
