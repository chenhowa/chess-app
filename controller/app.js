/* Howard Chen
 * app.js
 * Description: Controlling code for the chess app. Will coordinate view and model
 *      so that updating one updates the other appropriately, and in doing so, the
 *      game is allowed to function.
 * Created on 12-26-2017
 * Last edited on 12-27-2017
 *
 *
 *
 */



var main = function() {
    console.log("App has started...");
    var back_canvas = document.getElementById("board"); 
    var front_canvas = document.getElementById("pieces");

    var back_ctx = back_canvas.getContext('2d');
    var front_ctx = front_canvas.getContext('2d');

    /* Test code that proves the canvas is working as intended

    back_ctx.fillStyle = 'red';
    back_ctx.fillRect(0, 0, 50, 50);
    front_ctx.fillStyle = 'blue';
    front_ctx.fillRect(5, 5, 50, 50);

    *********** end of test code */


}


main();
