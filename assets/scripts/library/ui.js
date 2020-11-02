'use strict'

const showGamesSuccess = function (response) {
  $('#allMyGames').html('')
  if (response.games.length === 0) {
    $('#allMyGames').append('<p>You don\'t seem to have any books, why dont you add some</p>')
  }
  for (let i = 0; i < response.games.length; i++) {
    $('#allMyGames').append(
      `<h4>Game ${i + 1}</h4>
      <p>Title: ${response.games[i].title} </p>
      <p>Console: ${response.games[i].console}</p>
      <form id='${response.games[i]._id}' class="game-update">
        <fieldset>
          <legend>Update Game!</legend>
          <label for="Title">Title</label>
          <input name="title" type="text" value="${response.games[i].title}">
          <label for="Console">Console</label>
          <input name="console" type="text" value="${response.games[i].console}">
          <input type="submit" value="Update Game">
        </fieldset>
      </form>
      <button class='delete-button ${response.games[i]._id}' data-value-index='${response.games[i]._id}'>Delete Game</button>
      <button class='update-button ${response.games[i]._id}' data-value-index='${response.games[i]._id}'>Update Game</button>`
    )
  }
  $('.game-update').hide()
}

const createNewGameSuccess = function () {
  $('#game-create').trigger('reset')
}

const deleteGameSuccess = function () {
}

const updateShow = function () {
  const updateForm = $(event.target).attr('data-value-index')
  $('#' + updateForm).show()
  $('.' + updateForm).hide()
}
const showSignInForm = function () {
  $('#signInButton').hide()
  // $('#signUpButton').hide()
  $('#sign-in-form').show()
}
const showSignUpForm = function () {
  $('#sign-up-form').show()
  $('#signUpButton').hide()
  // $('#signInButton').hide()
}

const showPassChangeForm = function () {
  $('#pass-change-form').show()
}

module.exports = {
  showGamesSuccess: showGamesSuccess,
  createNewGameSuccess: createNewGameSuccess,
  deleteGameSuccess: deleteGameSuccess,
  updateShow: updateShow,
  showSignInForm: showSignInForm,
  showSignUpForm: showSignUpForm,
  showPassChangeForm: showPassChangeForm
}
