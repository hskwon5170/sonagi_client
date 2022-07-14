import styled from "@emotion/styled";

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px 10px;

  @media (min-width: 991px) and (max-width: 1200px) {
    width: 96%;
    margin: 2%;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 96%;
    margin: 2%;
  }

  @media (min-width: 391px) and (max-width: 767px) {
    width: 96%;
  }

  @media (max-width: 390px) {
    width: 96%;
  }
`;
export const Title = styled.label`
  font-size: 1.875rem;
  font-weight: 700;
  color: #4d4d4d;
  padding-bottom: 30px;
`;
export const GridWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;
export const ItemWrap = styled.div`
  width: 46%;
  margin: 2%;
  border: 1px solid #bdbdbd;
  border-radius: 30px;

  @media (min-width: 991px) and (max-width: 1200px) {
    width: 98%;
    padding: 10px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 98%;
    padding: 10px;
  }

  @media (min-width: 391px) and (max-width: 767px) {
    width: 46%;
    margin: 2%;
  }

  @media (max-width: 390px) {
    width: 96%;
    margin: 2%;
  }
`;
export const RowWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 30px 10px;

  @media (min-width: 391px) and (max-width: 767px) {
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 390px) {
    align-items: center;
    justify-content: center;
  }
`;
export const AwardIcon = styled.img`
  width: 40px;
  height: 40px;
`;
export const AwardNum = styled.div`
  font-size: 1.63em;
  color: #2277d8;
`;
export const AwardText = styled.div`
  font-size: 1.13em;
`;

export const Itembox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 30px;

  @media (min-width: 391px) and (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 390px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const ItemPic = styled.img`
  width: 180px;
  height: 240px;
`;
export const TextWrap = styled.div`
  padding: 0px 20px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const RowWrap2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 39px;

  @media (min-width: 391px) and (max-width: 767px) {
    margin-bottom: 0px;
  }

  @media (max-width: 390px) {
    margin-bottom: 0px;
  }
`;

export const ItemName = styled.div`
  font-size: 2em;
  margin-right: 44px;

  @media (min-width: 391px) and (max-width: 767px) {
    font-size: 1.5em;
    margin-right: 50px;
  }

  @media (max-width: 390px) {
    font-size: 1.5em;
    margin: 0 20px;
  }
`;

export const ItemPickIcon = styled.img`
  width: 14px;
  height: 20px;
`;
export const Contents = styled.div`
  font-size: 0.88em;
  color: #808080;

  @media (min-width: 391px) and (max-width: 767px) {
    display: none;
  }

  @media (max-width: 390px) {
    display: none;
  }
`;
export const ItemInfoWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  align-items: center;
  font-size: 0.88em;
  color: #808080;

  @media (min-width: 391px) and (max-width: 767px) {
    flex-direction: column;
  }

  @media (min-width: 391px) and (max-width: 767px) {
    flex-direction: column;
  }

  @media (max-width: 390px) {
    flex-direction: column;
  }
`;
export const ItemStatus = styled.div``;
export const Line = styled.div`
  width: 1px;
  height: 13px;
  background-color: #bdbdbd;
  margin: 0px 20px;

  @media (min-width: 391px) and (max-width: 767px) {
    display: none;
  }

  @media (max-width: 390px) {
    display: none;
  }
`;
export const Hits = styled.div``;
export const WrtiterName = styled.div``;
