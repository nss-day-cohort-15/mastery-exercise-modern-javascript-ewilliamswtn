//robots

//type 1; decepticons:
//megatron
//soundwave
//medium hp, medium dmg

//type 2; dynobots
//grimlock
//snarl
//high hp, low dmg

//type 3; gundams:
//tallgeese
//heavyarms
//low hp, high dmg

$(function() {
  var player1 = {};
  var player2 = {};
  var p1bot;
  var p2bot;




$( "#select1" )
  .change(function () {
   $( "#select1 option:selected" ).each(function() {
      p1bot = $(this).text();
      $("#img1Div").html("<img src='" + p1bot + ".jpg'>")

    })
})

$( "#select2" )
  .change(function () {
   $( "#select2 option:selected" ).each(function() {
      p2bot = $(this).text();
      $("#img2Div").html("<img src='" + p2bot + ".jpg'>")
    })
})

$("#battleButton").click(function () {
  if ($("#player1").val() == "" || $("#player2").val() == "" ) {
    alert("Enter names plz")
  } else if ($("#select1").val() == null || $("#select2").val() == null ) {
    alert("Choose both fighters plz")
  } else {
    var playerName1 = $("#player1").val();
    var playerName2 = $("#player2").val();
    // player1 = new RBD.Robots.Robofighter(playerName1)
    // player2 = new RBD.Robots.Robofighter(playerName2)
    player1 = new RBD.Robots[p1bot](playerName1);
    player2 = new RBD.Robots[p2bot](playerName2);
    console.log(player1)
    console.log(player2)
    $(".battleButton").toggleClass("hidden");
    console.log("test");
  }
})

$("#fightButton").click(function () {
    player1.health -= player2.damage
    player2.health -= player1.damage
    console.log(player1, player2)
  if ((player1.health <= 0) && (player2.health <= 0)) {
    alert("Everyone is dead!")
    $("#fightButton").toggleClass("hidden")
  } else if (player2.health <= 0) {
    alert(player1.playerName + " wins!")
    $("#fightButton").toggleClass("hidden")
  } else if (player1.health <= 0) {
    alert(player2.PlayerName + " wins!")
    $("#fightButton").toggleClass("hidden")
  }
})



}); //end doc ready