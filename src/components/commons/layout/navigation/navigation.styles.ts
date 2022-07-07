import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 80%;
  height: 55px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 2px;
  border-bottom: 1px solid #e0e0e0;

  @media (min-width: 991px) {
    width: 1200px;
  }

  @media (min-width: 767px) and (max-width: 991px) {
    min-width: 767px;
    max-width: 991px;
    width: 95%;
  }
`;

export const ListTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #141414;
  cursor: pointer;
`;

export const ListImg = styled.img`
  margin-left: 400px;
  cursor: pointer;

  @media (min-width: 767px) and (max-width: 991px) {
    margin-left: 200px;
  }
`;
