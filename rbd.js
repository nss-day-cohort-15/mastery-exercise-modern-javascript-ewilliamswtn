var RBD = (function (RBD){
  RBD.Robots = {};

  RBD.Robots.Robofighter = function () {
    this.playerName = "a big robot";
    this.type = null;
    this.health = null;
    this.damage = null;
  }

  RBD.Robots.Megatron = function (name) {
    this.playerName = name;
    this.type = "Megatron";
    this.health = Math.floor(Math.random() * 50) + 100; //100-150
    this.damage = Math.floor(Math.random() * 21) + 30; //30-50
  }
  RBD.Robots.Megatron.prototype = new RBD.Robots.Robofighter();

  RBD.Robots.Soundwave = function (name) {
    this.playerName = name;
    this.type = "Soundwave";
    this.health = Math.floor(Math.random() * 50) + 95; //95-145
    this.damage = Math.floor(Math.random() * 21) + 35; //35-55
  }
  RBD.Robots.Soundwave.prototype = new RBD.Robots.Robofighter();

  RBD.Robots.Grimlock = function (name) {
    this.playerName = name;
    this.type = "Grimlock";
    this.health = Math.floor(Math.random() * 50) + 150; //150-200
    this.damage = Math.floor(Math.random() * 21) + 10; //10-30
  }
  RBD.Robots.Grimlock.prototype = new RBD.Robots.Robofighter();

  RBD.Robots.Snarl = function (name) {
    this.playerName = name;
    this.type = "Snarl";
    this.health = Math.floor(Math.random() * 50) + 145; //145-195
    this.damage = Math.floor(Math.random() * 21) + 15;//15-35
  }
  RBD.Robots.Snarl.prototype = new RBD.Robots.Robofighter();

  RBD.Robots.Tallgeese = function (name) {
    this.playerName = name;
    this.type = "Tallgeese";
    this.health = Math.floor(Math.random() * 50) + 50; //50-100
    this.damage = Math.floor(Math.random() * 21) + 50; //50-70
  }
  RBD.Robots.Tallgeese.prototype = new RBD.Robots.Robofighter();

  RBD.Robots.Heavyarms = function (name) {
    this.playerName = name;
    this.type = "Heavyarms";
    this.health = Math.floor(Math.random() * 50) + 45; //45-95
    this.damage = Math.floor(Math.random() * 21) + 55; //55-75
  }
  RBD.Robots.Heavyarms.prototype = new RBD.Robots.Robofighter();
  
  return RBD;
})(RBD || {})