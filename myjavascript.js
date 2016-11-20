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
Blockly.JavaScript['turnLeft'] = function(block) {
  var value_turn = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "angle += " + value_turn + "*(Math.PI/180);" +
            "\nctx.rotate((360-" + value_turn + ")*(Math.PI/180));\n" 
  return code;
};

//turn counter-clockwise by num of degrees. Function convert to radians for trig purposes
Blockly.JavaScript['turnRight'] = function(block) {
  var value_turn = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "angle -= " + value_turn + "*(Math.PI/180);" +
            "\nctx.rotate((360-" + value_turn + ")*(Math.PI/180));\n";
  return code;
};

//Move either backwards or forwards the amount given
Blockly.JavaScript['move'] = function(block) {
  var dropdown_move = block.getFieldValue('move');
  var speed = Blockly.JavaScript.valueToCode(block, 'move', Blockly.JavaScript.ORDER_ATOMIC);
  //console.log(speed);
  if (dropdown_move == "backward")
    speed = -speed;
  //console.log(visible);
  //console.log(ctx.strokeStyle);
  var code = "";
  if (visible)
    code = "\nctx.lineTo(" + speed + ",0);\nctx.stroke();\n";
  code += "ctx.translate(" + speed + ",0);\nctx.moveTo(0,0);\n";
  return code;
};

Blockly.JavaScript['moveTo'] = function(block) {
  var x_pos  = block.getFieldValue('x');
  var y_pos = block.getFieldValue('y');
  var code = "\nctx.restore();\nctx.translate((c.width/2) + " + x_pos + 
          ", (c.height/2) - " + y_pos + ");\nctx.moveTo(0,0);";
  return code;
};

//Integer block
Blockly.JavaScript['number'] = function(block) {
  var code = block.getFieldValue('number');
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// PEN METHODS
Blockly.JavaScript['penThickness'] = function(block) {
  var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  penThickness = value_width;
  var code = 'ctx.lineWidth=' + value_width + ";";
  return code;
};

Blockly.JavaScript['pen'] = function(block) {
  var dropdown_up = block.getFieldValue('pen');
  // console.log(dropdown_up);
  var code = "visible = true;\n";
  if (dropdown_up == "UP")
    code = "visible = false;\n";
  return code;
};

Blockly.JavaScript['penColor'] = function(block) {
  var hex = block.getFieldValue('color');
  color = hex;
  var code = "\nctx.strokeStyle = \"" + hex + "\";\n";
  return code;
};

Blockly.JavaScript['penUpBoolean'] = function(block) {
  // console.log(visible);
  return ["visible", Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['getPenThickness'] = function(block) {
  // console.log(penThickness);
  return ["penThickness", Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['getPenColor'] = function(block) {
  // console.log(color);
  return ["color", Blockly.JavaScript.ORDER_ATOMIC];
}

