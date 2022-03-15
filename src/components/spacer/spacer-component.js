import react from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "marginTop",
  right: "marginRight",
  left: "marginLeft",
  bottom: "marginBottom",
};

const getVariant = (position, size) => positionVariant[position];

export const Spacer = styled.View`
  ${({ position, size }) => getVariant(position, size)}:${sizeVariant[size]}
`;

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
