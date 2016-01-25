'use strict';

goog.provide('Blockly.Arduino.base');

goog.require('Blockly.Arduino');

Blockly.Arduino['inout_highlow'] = function() {
  // Boolean values HIGH and LOW.
  var code = (this.getFieldValue('BOOL') == 'HIGH') ? 'HIGH' : 'LOW';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['serial_printfor'] = function() {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_NONE);
  //content = content.replace('(','').replace(')','');
  var type = this.getTitleValue('TYPE');
   Blockly.Arduino.setups_['setup_serial'] = 'Serial.begin(9600);';
  //Blockly.Arduino.setups_['setup_serial_'+profile.default.serial] = 'Serial.begin('+profile.default.serial+');\n';
  
  var code = 'Serial.println('+content+ ','+type+');\n';//ORGINAL \nSerial.print(\'\\t\');
  return code;
};

Blockly.Arduino['serial_read'] = function() {
  // TODO: Assemble Python into code variable.
  var code = 'Serial.read()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['serial_available'] = function() {
  // TODO: Assemble Python into code variable.
  var code = 'Serial.available()';
   Blockly.Arduino.setups_['setup_serial'] = 'Serial.begin(9600);';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.serial_print = function() {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0'
  //content = content.replace('(','').replace(')','');

  Blockly.Arduino.setups_['setup_serial_' + profile.defaultBoard.serial] = 'Serial.begin(' + profile.defaultBoard.serial + ');\n';

  var code = 'Serial.print(' + content + ');\nSerial.print("\\t");\n';
  return code;
};

Blockly.Arduino.serial_println = function() {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0'
  //content = content.replace('(','').replace(')','');

  Blockly.Arduino.setups_['setup_serial_' + profile.defaultBoard.serial] = 'Serial.begin(' + profile.defaultBoard.serial + ');\n';

  var code = 'Serial.println(' + content + ');\nSerial.print("\\t");\n';
  return code;
};

Blockly.Arduino['serial_write'] = function() {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';
  //content = content.replace('(','').replace(')','');
  
  Blockly.Arduino.setups_['setup_serial'] = 'Serial.begin(9600);';
  
  var code = 'Serial.write('+content+');\n';  //ORGINAL \nSerial.print(\'\\t\');
  return code;
};

Blockly.Arduino['serial_write_out'] = function() {
  var value_num = Blockly.Arduino.valueToCode(this, 'valeur', Blockly.Arduino.ORDER_NONE);
  
    Blockly.Arduino.setups_['setup_serial'] = 'Serial.begin(9600);';
	
  //Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'Serial.write('+value_num+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['serial_flush'] = function() {
  Blockly.Arduino.setups_['setup_serial'] = 'Serial.begin(9600);';
  var code = 'Serial.flush();\n';
  return code;
};