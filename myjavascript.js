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
Blockly.JavaScript['turn_left'] = function(block) {
  var value_turn = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "angle += " + value_turn + "*(Math.PI/180);" +
            "\nctx.rotate((360-" + value_turn + ")*(Math.PI/180));\n" 
  return code;
};

//turn counter-clockwise by num of degrees. Function convert to radians for trig purposes
Blockly.JavaScript['turn_right'] = function(block) {
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

  var code = "";
  if (visible)
    code = "\nctx.lineTo(" + speed + ",0);\nctx.stroke();";
  code += "\nctx.translate(" + speed + ",0);\nctx.moveTo(0,0);";
  return code;
};

Blockly.JavaScript['move_to'] = function(block) {
  var x_pos  = block.getFieldValue('x');
  var y_pos = block.getFieldValue('y');
  var code = "\nctx.restore();\nctx.save();\nctx.translate((c.width/2) + " + x_pos + 
          ", (c.height/2) - " + y_pos + ");";
  if (visible)
    code += "\nctx.lineTo(0,0);\nctx.stroke();"
  else 
    code += "\nctx.moveTo(0,0);";
  return code;
};

//Integer block
Blockly.JavaScript['number'] = function(block) {
  var code = block.getFieldValue('number');
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// PEN METHODS
Blockly.JavaScript['pen_thickness'] = function(block) {
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
  console.log(code);
  return code;
};

Blockly.JavaScript['pen_color'] = function(block) {
  var hex = block.getFieldValue('color');
  color = hex;
  var code = "\nctx.strokeStyle = \"" + hex + "\";\n";
  return code;
};

Blockly.JavaScript['pen_up_boolean'] = function(block) {
  // console.log(visible);
  return ["visible", Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['pen_get_thickness'] = function(block) {
  // console.log(penThickness);
  return ["penThickness", Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['pen_get_color'] = function(block) {
  // console.log(color);
  return ["color", Blockly.JavaScript.ORDER_ATOMIC];
}


Blockly.JavaScript['drawArc'] = function(block) {
  return "";
}

Blockly.JavaScript['shape_ellipse'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_size = Blockly.JavaScript.valueToCode(block, 'size', Blockly.JavaScript.ORDER_ATOMIC);
  var value_size = Blockly.JavaScript.valueToCode(block, 'size', Blockly.JavaScript.ORDER_ATOMIC);
  var value_filled = Blockly.JavaScript.valueToCode(block, 'filled', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['shape_circle'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_size = Blockly.JavaScript.valueToCode(block, 'size', Blockly.JavaScript.ORDER_ATOMIC);
  var value_filled = Blockly.JavaScript.valueToCode(block, 'filled', Blockly.JavaScript.ORDER_ATOMIC);
  
  // if left blank, default to 0
  value_x = (value_x) ? value_x : 0; 
  value_y = (value_y) ? value_y : 0;

  var code = '';
  // CONVERT TO STRING BUILDER
  if (visible) {
    code = "\nctx.beginPath();\nctx.fillStyle = \'" + color + "\';\nctx.arc(" + value_x + ", -" + value_y + ", ";
    code += value_size + ",0,2*Math.PI);\nctx.closePath();";
    code += (value_filled) ? "\nctx.fill();" : "\nctx.stroke();";
  }
  code += "\nctx.restore();\nctx.save();\nctx.translate((c.width/2) + " + value_x + 
          ", (c.height/2) - " + value_y + ");\nctx.moveTo(0,0);";
  return code;
};

Blockly.JavaScript['shape_rect'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
  var value_filled = Blockly.JavaScript.valueToCode(block, 'filled', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  
  // if left blank, default to 0
  value_x = (value_x) ? value_x : 0; 
  value_y = (value_y) ? value_y : 0;

  var code = "";
  if (visible) {
    code += "\nctx.beginPath();\nctx.fillStyle = \'" + color + "\';"
    if (value_filled)
      code += "\nctx.fillRect(";
    else
      code += "\nctx.strokeRect(";
    code += value_x + ", -" + value_y + ", " + value_width + ", " + value_height + ");"
    code += "\nctx.restore();\nctx.save();\nctx.translate((c.width/2) + " + value_x + 
          ", (c.height/2) - " + value_y + ");\nctx.moveTo(0,0);";
  }
  return code;
};

Blockly.JavaScript['shape_square'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_size = Blockly.JavaScript.valueToCode(block, 'size', Blockly.JavaScript.ORDER_ATOMIC);
  var value_filled = Blockly.JavaScript.valueToCode(block, 'filled', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '';
  if (value_filled)
    code = "\nctx.fillRect(";
  else
    code = "\nctx.strokeRect(";
   code += value_x + ", " + value_y + ", " + value_size + ", " + value_size + ");"
   return code;
};
