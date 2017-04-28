var game;
var score;
var soundOn = true;
var useLandscape=false;

window.onload = function () {

var isMobile=navigator.userAgent.indexOf("Mobile");
if (isMobile>-1)
     {
        isMobile=true;
     }
     else
     {
        isMobile=false;
     }

    if (isMobile==false) {
        //desktop laptop
        if (useLandscape == true) {
            game = new Phaser.Game(640, 480, Phaser.AUTO, "ph_game");
        } else {

            game = new Phaser.Game(480, 640, Phaser.AUTO, "ph_game");
        }

    } else {
        //mobile device
        game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, "ph_game");
    }

    game.state.add("StateMain",StateMain);
    game.state.add("StateOver", StateOver);
    game.state.add("StateTitle", StateTitle);
    game.state.start("StateMain");
    game.state.start("StateTitle");
}

//var game;
//
//window.onload = function () {
//    if (screen.width > 1500) {
//        //desktop laptop
//        game = new Phaser.Game(480, 640, Phaser.AUTO, "ph_game");
//
//    } else {
//        //mobile device
//        game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, "ph_game");
//    }
//    //add a state or screen to the game
//    game.state.add("StateMain",StateMain);
//    game.state.add("StateOver", StateOver);
//    game.state.add("StateTitle", StateTitle);
//    game.state.start("StateMain");
//    game.state.start("StateTitle");
//}