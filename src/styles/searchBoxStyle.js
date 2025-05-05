import styled from "styled-components";

export const SearchBoxStyle = styled.div`
  background: #ffffff;
  width: ${(props) => (props.$isOpen ? "240px" : "0px")};
  opacity: ${(props) => (props.$isOpen ? "1" : "0")};
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
  transition: width 0.3s ease, opacity 0.5s ease, visibility 0.5s ease;
  overflow: hidden;
  padding-left: ${(props) => (props.$isOpen ? "12px" : "0px")};
`;
