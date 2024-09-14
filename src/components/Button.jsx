import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  height: 48px;
  padding: 12px 91px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
`;

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
