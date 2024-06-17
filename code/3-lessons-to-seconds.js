// ####################################
// ## ----- Lessons to Seconds ----- #
// ####################################

function lessonsToSeconds() {
  alert('There are 60 minutes in a lesson, and 60 seconds in a minute.')

  let lessons = prompt('How mnay lesson do you have left?')
  let result = lessons * 60 * 60
  alert('you have ' + result+ ' secounds left of school 😭')
}
