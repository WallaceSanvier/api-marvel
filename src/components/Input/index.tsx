/* eslint-disable prettier/prettier */
import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  forwardRef,
} from "react";
import { TextInputProps, View } from "react-native";
import { useField } from "@unform/core";
import { Text } from "react-native-elements";
import { TextInput } from "react-native-paper";

import { Container } from "./styled";
import { width as deviceWidth } from "./style";

interface InputProps extends TextInputProps {
  name: string;
  label: string;
  icon?: string;
  loading?: boolean;
  iconColor?: string;
  iconPosition?: "left" | "right";
  onPressIcon?: Function;
  containerStyle?: Object;
  multiline?: boolean;
  clear?: boolean;
  numberOfLines?: number;
  showDisplayPass?: boolean;
  validate?: boolean;
  value?: string;
}

interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.RefForwardingComponent<InputRef, InputProps> = (
  {
    name,
    label,
    icon,
    iconColor = "#667",
    iconPosition = "left",
    onPressIcon,
    multiline,
    numberOfLines,
    mask,
    customType,
    showDisplayPass = false,
    loading = false,
    validate = true,
    ...rest
  },
  ref
) => {
  const inputElementRef = useRef<any>(null);

  const { registerField, defaultValue = "", fieldName, error } = useField(name);
  const tooltipRef = useRef(null);
  const inputValueRef = useRef<InputValueReference>({
    value: defaultValue,
    focus: () => inputElementRef.current.focus(),
  });

  useEffect(() => {
    inputValueRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: "value",
      setValue(ref: any, value: string) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },

      clearValue(ref: any) {
        inputValueRef.current.value = "";
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Container>
        <TextInput
          ref={inputElementRef}
          label={label}
          mode="outlined"
          {...rest}
        />
      </Container>
    </>
  );
};

export default forwardRef(Input);
