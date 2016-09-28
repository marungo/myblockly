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

Blockly.JavaScript['color_yellow'] = function(block) {
  var colour_black = block.getFieldValue('yellow');
  var code = '#FFF00F';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['turn'] = function(block) {
  var value_turn = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "angle += " + value_turn;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['move'] = function(block) {
  var dropdown_move = block.getFieldValue('move');
  var speed = Blockly.JavaScript.valueToCode(block, 'move', Blockly.JavaScript.ORDER_ATOMIC);
  if (dropdown_move == "backward") {
    speed = -speed;
  }
  var code = "ctx.lineTo(" + speed + "*Math.sin(angle)" 
      + ", " + speed + "*Math.cos(angle)); ctx.stroke();";
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['number'] = function(block) {
  var number = block.getFieldValue('number');
  // TODO: Assemble JavaScript into code variable.
  var code = number;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

