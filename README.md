# unit-4-game
App dynamically updates the HTML pages with the jQuery library.

The player will have to guess the answer based on random numbers which are part of each crystal.

Here's how the app works:

   * There are four crystals displayed as buttons on the page.

   * The player is shown a random number at the start of the game.

   * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

     * The game hides that amount until the player clicks a crystal.
     * When a crystal is clicked, the player's score counter is updated.

   * The player wins if their total score matches the random number from the beginning of the game.

   * The player loses if their score goes above the random number.

   * The game restarts whenever the player wins or loses.

     * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

   * The app show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
