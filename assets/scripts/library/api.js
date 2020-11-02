'use strict'

const config = require('./../config')
const store = require('./../store')

const getGames = function (req, res) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: { Authorization: 'Bearer ' + store.user.token }
  })
}

const createNewGame = function (game) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: { Authorization: 'Bearer ' + store.user.token },
    data: game
  })
}

const updateGame = function (data, id) {
  return $.ajax({
    url: config.apiUrl + '/games/' + `${id}`,
    method: 'PATCH',
    headers: { Authorization: 'Bearer ' + store.user.token },
    data: data
  })
}

const deleteGameCall = function (gameId) {
  return $.ajax({
    url: config.apiUrl + '/games/' + `${gameId}`,
    method: 'DELETE',
    headers: { Authorization: 'Bearer ' + store.user.token }
  })
}

module.exports = {
  getGames: getGames,
  createNewGame: createNewGame,
  deleteGameCall: deleteGameCall,
  updateGame: updateGame
}
