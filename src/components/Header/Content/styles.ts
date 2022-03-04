import styled from "styled-components";

export const Container = styled.div`
  max-width: 1080px;
  margin: 40px auto 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-around;
  
  p {
    width: 60%;
    font-size: 1.6rem;
    font-weight: bold;
    color: var(--white);
    margin-top: -170px;
  }

  @media(max-width:720px){
    P {
      margin-top: 20px;
    }
  }
`;