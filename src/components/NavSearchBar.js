import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const SearchBar = styled.input`
  height: 3rem;
  padding: 2px 5px 2px 5px;
  background-color: rgb(0, 0, 0, 0.3);
  border-radius: 5px;
  margin: 0px;
  border: 2px solid red;
  outline: none;
  transition: width 1s ease-in-out;

  &:focus {
    box-shadow: 0px 0px 5px black;
    width: 300px;
  }
`;

const NavSearchBar = () => {
  return (
    <Wrapper>
      <SearchBar />
    </Wrapper>
  );
};

export default NavSearchBar;
