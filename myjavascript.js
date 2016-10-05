// SET UP
Blockly.JavaScript['page_settings'] = function(block) {
  var statements_page_header = Blockly.JavaScript.statementToCode(block, 'page_header');
  var value_color = Blockly.JavaScript.valueToCode(block, 'page_color', Blockly.JavaScript.ORDER_ATOMIC);
  var value_background = Blockly.JavaScript.valueToCode(block, 'page_background', Blockly.JavaScript.ORDER_ATOMIC);
  var value_paragraph = Blockly.JavaScript.valueToCode(block, 'page_paragraph', Blockly.JavaScript.ORDER_ATOMIC);

  var code = 'document.body.style.color = "' + value_color + '";\n';
  code += 'document.body.style.backgroundColor = "' + value_background + '";\n';
  code += 'document.getElementById("description").innerHTML = "' + value_paragraph + '";\n';
  code += statements_page_header;
  return code;
};

Blockly.JavaScript['page_header'] = function(block) {
  var value_header_text = Blockly.JavaScript.valueToCode(block, 'header_text', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color = Blockly.JavaScript.valueToCode(block, 'page_color', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'document.getElementById("header").innerHTML = "' + value_header_text + '";\n';
  code += 'document.getElementById("header").style.color = "' + value_color + '";\n';
  return code;
};

Blockly.JavaScript['page_text'] = function(block) {
  var text_text = block.getFieldValue('page_text');
  var code = text_text;
  return [code, Blockly.JavaScript.ORDER_NONE];
};
// END OF SET UP

// CUSTOM BLOCKS
Blockly.JavaScript['color_yellow'] = function(block) {
  var colour_black = block.getFieldValue('yellow');
  var code = '#FFF00F';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//turn counter-clockwise by num of degrees. Function convert to radians for trig purposes
Blockly.JavaScript['turn'] = function(block) {
  var value_turn = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
  allCode = allCode + "angle += " + value_turn + "*(Math.PI/180);" +
            "\nctx.rotate((360-" + value_turn + ")*(Math.PI/180));\n" 
  var code = allCode + postpendCode;
  return code;
};

//Move either backwards or forwards the amount given
Blockly.JavaScript['move'] = function(block) {
  var dropdown_move = block.getFieldValue('move');
  var speed = Blockly.JavaScript.valueToCode(block, 'move', Blockly.JavaScript.ORDER_ATOMIC);
  console.log(speed);
  if (dropdown_move == "backward") {
    speed = -speed;
  }
  allCode = allCode + "\nctx.lineTo(" + speed + ",0);\nctx.stroke();\n"
                + "ctx.translate(" + speed + ",0);\nctx.moveTo(0,0);\n";
  var code = allCode+postpendCode;
  return code;
};

//Integer block
Blockly.JavaScript['number'] = function(block) {
  var code = block.getFieldValue('number');
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//TO DO:
Blockly.JavaScript['width'] = function(block) {
  var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'ctx.lineWidth=' + value_width + ";";
  return code;
};

Blockly.JavaScript['pen'] = function(block) {
  var dropdown_up = block.getFieldValue('pen');
  if (drowndown_up == "up") {
    var code = "visible = false;";
  } else {
    var code = "visible = true;";
  }
  return code;
};



