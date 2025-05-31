import React, { useState, useRef } from 'react';
import { Animated, TextInput, Platform , TouchableWithoutFeedback} from 'react-native';
import styled from 'styled-components/native';
import  Icon from "react-native-vector-icons/MaterialIcons";
const FloatingLabelInput = ({ label, value, onChangeText, secureTextEntry, isError,
    errorMessage }) => {
    const [isFocused, setIsFocused] = useState(false);
    const position = useState(new Animated.Value(value ? 1 : 0))[0];
    const inputRef = useRef();
    const handleFocus = () => {
        setIsFocused(true);
        Animated.timing(position, {
            toValue: 1,
            duration: 150,
            useNativeDriver: false,
        }).start();
    };

    const handleBlur = () => {
        setIsFocused(false);
        if (!value) {
            Animated.timing(position, {
                toValue: 0,
                duration: 150,
                useNativeDriver: false,
            }).start();
        }
    };

    const labelStyle = {
        position: 'absolute',
        left: 12,
        top: position.interpolate({
            inputRange: [0, 1],
            outputRange: [14, -8],
        }),
        fontSize: position.interpolate({
            inputRange: [0, 1],
            outputRange: [16, 12],
        }),
        color: isError ? '#c05a5a' : isFocused ? '#333' : '#aaa',
        paddingHorizontal: 4,
        backgroundColor: '#fff',
    };


    return (
        <>
            <InputWrapper isFocused={isFocused} isError={isError}>
                <Animated.Text style={labelStyle}>{label}</Animated.Text>
                <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
  <InputRow isError={isError}>
    <StyledTextInput
      ref={inputRef}
      value={value}
      onChangeText={onChangeText}
      onFocus={handleFocus}
      onBlur={handleBlur}
      secureTextEntry={secureTextEntry}
      placeholderTextColor={isError ? '#c05a5a' : '#aaa'}
      selectionColor={isError ? '#000' : 'purple'}
    />
    {isError && (
      <ErrorIconContainer>
        <Icon name="error" size={24} color="#c05a5a" solid />
      </ErrorIconContainer>
    )}
  </InputRow>
</TouchableWithoutFeedback>
                
            </InputWrapper>
            {isError && errorMessage ? (
  <ErrorText>{errorMessage}</ErrorText>
) : null}
        </>
    );
};

export default FloatingLabelInput;
const InputWrapper = styled.View`
  position: relative;
  margin-bottom: 12px;
  padding-top: 12px;
  border-radius: 6px;
  border-width: ${({ isFocused }) => (isFocused ? 0 : 1)}px;
  border-color: ${({ isError, isFocused }) =>
    isError ? '#c05a5a' : isFocused ? 'transparent' : '#666'};
background-color: #fff;
  /* Shadow for iOS */
  ${({ isFocused }) =>
        isFocused &&
        Platform.OS === 'ios' &&
        `
    shadow-color: #000;
    shadow-offset: 0px 0px;
    shadow-opacity: 0.1;
    shadow-radius: 4px;
  `};

  /* Shadow for Android */
  ${({ isFocused }) => isFocused && Platform.OS === 'android' && `elevation: 4;`}
`;

const StyledTextInput = styled(TextInput)`
  font-size: 12px;
  padding: 0px 12px 12px;
  color: #000;
   text-align-vertical: center;
`;

const ErrorText = styled.Text`
  color: #c05a5a;
  font-size: 11px;
  padding-left: 16px;
  margin-bottom:16px;
  line-height:11;
`;
const InputRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ErrorIconContainer = styled.View`
  padding-right: 0px;
  margin-bottom :8px;
  postion :relative;
left: 78%;
`;

