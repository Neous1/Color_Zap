var StateOver={    
    
   preload:function()
    {
       game.load.spritesheet("buttons", "images/ui/buttons.png", 263, 73);
    },
    
    create:function()
    {
        this.btnPlayAgain = game.add.button(game.world.centerX, game.world.height-150,"buttons", this.playAgain,this,1,0,1);
        this.btnPlayAgain.anchor.set(0.5, 0.5);
        
        
        // Score         
        this.scoreText = game.add.text(game.world.centerX, 150, score)
        this.scoreText.fill = "#ffffff";
        this.scoreText.fontSize = 64;
        this.scoreText.anchor.set(0.5, 0.5);
        
        this.scoreLabel = game.add.text(game.world.centerX, 100, "Score");
        this.scoreLabel.fill = "#ffffff";        
        this.scoreLabel.fontSize = 32;
        this.scoreLabel.anchor.set(0.5, 0.5);
    },
    
    playAgain: function(){
        game.state.start("StateMain")
    },
    
    update:function()
    {       
        
    }    
    
}