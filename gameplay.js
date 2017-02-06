function drawTiles() {
  var canvas = document.getElementById('board');
  if (canvas.getContext) {
    var w = canvas.width;
    var ctx = canvas.getContext('2d');
    var space = 10;
    var xCoord = space;
    var yCoord = space;
    var size = 3;
    var textColor = "#000000";
    var tileColor = "#ffffff";
    var phrases = [
      ["dog", "cat", "fish"],
      ["pig", "turtle", "goblin"],
      ["turkey", "child", "gecko"]
    ];
    var textPhrase = phrases[0][0];
    //var textLen = 10;
    var dem = (w - space * (size + 1)) / size;
    for (var j = 0; j < size; j++) {
      xCoord = space;
      for (var i = 0; i < size; i++) {
        textPhrase = phrases[j][i];
        //textLen = ctx.measureText(textPrhase).width;
        ctx.fillStyle = tileColor;
        ctx.fillRect(xCoord, yCoord, dem, dem)
        ctx.fillStyle = textColor;
        ctx.fillText(textPhrase, xCoord + space, yCoord + (0.5 * dem))
        xCoord += (dem + space)
      }
      yCoord += (dem + space)
    }

  }
}
//change so phrases are drawn separately after initial board created?
