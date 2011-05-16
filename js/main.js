$(function(){
  var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var words = [{
    content: "BASIC",
    orientation: "horizontal",
    direction: "right",
    posx: 2,
    posy: 0
  },
  {
    content: "COBOL",
    orientation: "vertical",
    direction: "down",
    posx: 6,
    posy: 0
  },
  {
    content: "FORTRAN",
    orientation: "vertical",
    direction: "up",
    posx: 0,
    posy: 7
  },
  {
    content: "JAVA",
    orientation: "horizontal",
    direction: "left",
    posx: 5,
    posy: 7
  },
  {
    content: "MATLAB",
    orientation: "vertical",
    direction: "down",
    posx: 9,
    posy: 0
  },
  {
    content: "PASCAL",
    orientation: "vertical",
    direction: "up",
    posx: 6,
    posy: 9
  },
  {
    content: "PROLOG",
    orientation: "horizontal",
    direction: "right",
    posx: 3,
    posy: 4
  },
  {
    content: "PYTHON",
    orientation: "horizontal",
    direction: "left",
    posx: 5,
    posy: 1
  },
  {
    content: "RUBY",
    orientation: "vertical",
    direction: "up",
    posx: 4,
    posy: 4
  },
  {
    content: "WHITESPACE",
    orientation: "horizontal",
    direction: "right",
    posx: 0,
    posy: 9
  }
  ];

  function nextCell(cell,ori,dir){
    var regex = /^r(\d)c(\d)$/;
    var res = regex.exec(cell);
    var row = parseInt(res[1]);
    var col = parseInt(res[2]);
    if (ori === "horizontal")
      {
        if (dir === "right")
          col += 1;
        else
          col -= 1;
      }
      else
        {
          if (dir === "down")
            row += 1;
          else
            row -= 1;
        }
        return "r"+row+"c"+col;
  };

  function randomXToY(minVal,maxVal,floatVal)
  {
    var randVal = minVal+(Math.random()*(maxVal-minVal));
    return typeof floatVal=='undefined'?Math.round(randVal):randVal.toFixed(floatVal);
  }

  function fill(words){
    for(var i=0; i<10; i++)
    {
      var cell = "r"+words[i].posy+"c"+words[i].posx;
      for(var j=0; j<words[i].content.length; j++)
      {
        if ($("#"+cell).attr("value") === "")
          $("#"+cell).attr("value",words[i].content[j]);
        cell = nextCell(cell,words[i].orientation,words[i].direction);
      }
    }
    for(i=0; i<10; i++)
    {
      for(j=0; j<10; j++)
      {
        if ($("#r"+i+"c"+j).attr("value") === "")
          $("#r"+i+"c"+j).attr("value",letters[randomXToY(0,letters.length-1)].toUpperCase());
      }
    }
  };

  fill(words);

  $("input").click(function(e){
    $(this).css("background-color", "#66f");
  });

});
