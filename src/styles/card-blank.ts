import styled, { css } from "styled-components/native";

interface CardBlankProps {
  definedSize?: string;
  definedPadding?: string;
  definedMargin?: string;
  contentInCenter?: boolean;
}
export const CardBlank = styled.View<CardBlankProps>`
  border-radius: 10px;
  background-color: #fff;
  elevation: 20;
  margin-top: 10px;
  border-radius: 3px;
  padding: 10px;

  ${(props) =>
    props.definedSize &&
    css`
      position: relative;
      min-height: ${props.definedSize};
    `};

  ${(props) =>
    props.definedMargin &&
    css`
      margin: ${props.definedMargin};
    `};

  ${(props) =>
    props.definedPadding &&
    css`
      padding: ${props.definedPadding};
    `};

  ${(props) =>
    props.contentInCenter &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    `};
`;
