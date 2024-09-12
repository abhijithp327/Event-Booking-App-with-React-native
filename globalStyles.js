// globalStyles.js
import { Text, TextInput } from 'react-native';

// Set default font family for Text component
const customTextProps = {
  style: {
    fontFamily: 'Satisfy-Regular'
  }
};
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.style = [Text.defaultProps.style, customTextProps.style];

// Set default font family for TextInput component
const customTextInputProps = {
  style: {
    fontFamily: 'Satisfy-Regular'
  }
};
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.style = [TextInput.defaultProps.style, customTextInputProps.style];
