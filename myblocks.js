Blockly.Blocks['page_settings'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendStatementInput("page_header")
        .appendField("Header:");
    this.appendValueInput("page_color")
        .setCheck("color")
        .appendField("Text Color:");
    this.appendValueInput("page_background")
        .setCheck("color")
        .appendField("Background Color:");
    this.appendValueInput("page_paragraph")
        .setCheck("String")
        .appendField("Paragraph:");
    this.setTooltip('');
  }
};

Blockly.Blocks['page_header'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(240);
    this.appendValueInput("header_text")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Header Text:");
    this.appendValueInput("page_color")
        .setCheck("color")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Color:");
    this.setPreviousStatement(true, "page_settings");
    this.setTooltip('');
  }
};

Blockly.Blocks['page_text'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(300);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("Your text."), "page_text");
    this.setOutput(true, "String");
    this.setTooltip('');
  }
};


//ADDED THESE BLOCKS
Blockly.Blocks['color_yellow']= {
    init: function() {
        this.setColour(60);
        this.appendDummyInput()
            .appendField("Yellow:")
            .appendField(new Blockly.FieldColour("#fff00f"), "yellow");
        this.setOutput(true, "color");
        this.setTooltip('');
    }
};

Blockly.Blocks['move'] = {
    init: function() {
        this.setHelpUrl("www.google.com")
        this.setColour(20);
        this.appendValueInput("move")
            .setCheck("Number")
            .appendField("move")
            .appendField(new Blockly.FieldDropdown([["forward", "FORWARD"],["backward", "BACKWARD"]]));
        this.setTooltip('');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};


Blockly.Blocks['turn_left'] = {
  init: function() {
    this.appendValueInput("angle")
        .setCheck("Number")
        .appendField("turn left")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['turn_right'] = {
  init: function() {
    this.appendValueInput("angle")
        .setCheck("Number")
        .appendField("turn right")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['number'] = {
  init: function() {
    this.appendDummyInput('num')
        .appendField(new Blockly.FieldTextInput("100"), "number");
    this.setOutput(true, "Number");
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

//TO DO

Blockly.Blocks['pen_thickness'] = {
  init: function() {
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField("set pen thickness");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['move_to'] = {
    init: function() {
        this.setColour(20);
        this.appendDummyInput("x")
            .appendField("move to x: ")
            .appendField(new Blockly.FieldTextInput("0"), "x")
        this.appendDummyInput("y")
            .appendField("              y: ")
            .appendField(new Blockly.FieldTextInput("0"), "y")
        this.setTooltip('move to particular x,y coordinate');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

Blockly.Blocks['pen'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set pen")
        .appendField(new Blockly.FieldDropdown([["up", "UP"], ["down", "DOWN"]]), "pen");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('bring pen up or down');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['pen_color'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("set pen color")
            .appendField(new Blockly.FieldColour('#ff0000'), 'color');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
        this.setTooltip('');
        this.setHelpUrl('http://www.google.com');
    }
};

// *********************************************************** //
// TO DO
// *********************************************************** //

Blockly.Blocks['pen_up_boolean'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pen is down");
    this.setOutput(true, 'Boolean');
    this.setColour(20);
    this.setTooltip('returns true if pen is down');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['pen_get_thickness'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get pen thickness");
    this.setOutput(true, 'Number');
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['pen_get_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get pen color");
    this.setOutput(true, 'Color');
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


// TO DO

Blockly.Blocks['shape_arc'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get pen color");
    this.setOutput(true, 'Color');
    this.setColour(20);
    this.setTooltip('');
  }
};

Blockly.Blocks['shape_ellipse'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("draw ellipse");
    this.appendValueInput("x")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("x:");
    this.appendValueInput("y")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y:");
    this.appendValueInput("size")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("horizontal radius");
    this.appendValueInput("size")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("vertical radius");
    this.appendValueInput("filled")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("filled:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['shape_circle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("draw circle");
    this.appendValueInput("x")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("(x):");
    this.appendValueInput("y")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("(y):");
    this.appendValueInput("size")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("radius:");
    this.appendValueInput("filled")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("filled:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['shape_rect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("draw rectangle");
    this.appendValueInput("x")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("(x):");
    this.appendValueInput("y")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("(y):");
    this.appendValueInput("width")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("width:");
    this.appendValueInput("height")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("height:");
    this.appendValueInput("filled")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("filled:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['shape_square'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("draw square");
    this.appendValueInput("x")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("x:");
    this.appendValueInput("y")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("y:");
    this.appendValueInput("size")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("size:");
    this.appendValueInput("filled")
        .setCheck("Boolean")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("filled:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
