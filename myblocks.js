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


Blockly.Blocks['turnLeft'] = {
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


Blockly.Blocks['turnRight'] = {
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

Blockly.Blocks['penWidth'] = {
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

Blockly.Blocks['moveTo'] = {
    init: function() {
        this.setColour(20);
        this.appendDummyInput("x")
            .appendField("move to x: ")
            .appendField(new Blockly.FieldTextInput("0"), "x")
        this.appendDummyInput("y")
            .appendField("              y: ")
            .appendField(new Blockly.FieldTextInput("0"), "y")
        this.setTooltip('');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

Blockly.Blocks['pen'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pen")
        .appendField(new Blockly.FieldDropdown([["up", "UP"], ["down", "DOWN"]]), "pen");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['penColor'] = {
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

Blockly.Blocks['rect'] = {
  init: function() {
    this.appendDummyInput('num')
        .appendField(new Blockly.FieldTextInput("100"), "number");
    this.setOutput(true, "Number");
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};






