import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrap = styled.div`
  width: 96%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 4.05% 2%;
`;
export const Title = styled.label`
  font-size: 1.875rem;
  font-weight: 700;
  color: #4d4d4d;
  padding-bottom: 30px;
`;
export const GridWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 5px;
  justify-content: flex-start;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    margin: 0px 10px;
  }

  @media ${breakPoints.mobile} {
    margin: 0px 10px;
  }
`;
export const ItemWrap = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 48%;
  margin: 2% 1%;
  padding: 0 3px;
  overflow: hidden;

  border: 1px solid #bdbdbd;
  border-radius: 30px;

  @media (min-width: 768px) and (max-width: 990px) {
    transition-duration: 1s;
    flex-basis: 46%;
    margin: 2%;
  }

  @media (min-width: 391px) and (max-width: 767px) {
    transition-duration: 1s;
    flex-basis: 96%;
    margin: 2%;
  }

  @media (max-width: 390px) {
    transition-duration: 1s;
    flex-basis: 96%;
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
  font-size: 1.63rem;
  color: #2277d8;
`;
export const AwardText = styled.div`
  font-size: 1.13rem;
`;

export const Itembox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 30px;

  @media (min-width: 391px) and (max-width: 767px) {
    flex-direction: row;
  }

  @media (max-width: 390px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const ItemPic = styled.img`
  width: 30%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  border-radius: 8px;
  vertical-align: middle;

  @media (min-width: 768px) and (max-width: 990px) {
    width: 40%;
  }

  @media (max-width: 390px) {
    width: 96%;
  }
`;
export const TextWrap = styled.div`
  width: 98%;
  padding: 0px 10px;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const RowWrap2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 39px;

  @media (min-width: 391px) and (max-width: 767px) {
    margin-bottom: 0px;
  }

  @media (max-width: 390px) {
    flex-direction: column;
    margin-bottom: 0px;
  }
`;

export const ItemName = styled.div`
  width: 80%;
  font-size: 1.25rem;
  font-weight: 700;
  margin-right: 10px;

  @media (min-width: 391px) and (max-width: 767px) {
    margin-right: 50px;
  }

  @media (max-width: 390px) {
    font-size: 2em;
    margin: 10px 20px 0;
    text-align: center;
  }
`;

export const HeartImg = styled.div`
  width: 20%;
  height: 21px;
  background-image: ${(props: any) =>
    props.HeartList?.includes(props.el)
      ? "url(/novelList/best/heart2.png)"
      : "url(/novelList/best/heart1.png)"};
  background-repeat: no-repeat;

  @media (max-width: 390px) {
    width: 100%;
    background-position: center;
  }
`;

export const ItemPickIcon = styled.img`
  width: 14px;
  height: 20px;
`;
export const Contents = styled.div`
  font-size: 0.88rem;
  color: #808080;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;

  @media (min-width: 768px) and (max-width: 961px) {
    display: none;
  }

  @media (min-width: 601px) and (max-width: 767px) {
    margin-top: 15px;
  }

  @media (min-width: 391px) and (max-width: 600px) {
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
  /* align-items: center; */
  font-size: 0.88rem;
  color: #808080;

  @media (min-width: 768px) and (max-width: 990px) {
    flex-direction: column;
  }

  @media (min-width: 391px) and (max-width: 767px) {
    flex-direction: row;
  }

  @media (max-width: 390px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const ItemStatus = styled.div``;
export const Line = styled.div`
  width: 1px;
  height: 13px;
  background-color: #bdbdbd;
  margin: 5px 20px;
  @media (min-width: 768px) and (max-width: 990px) {
    display: none;
  }

  @media (min-width: 391px) and (max-width: 767px) {
    margin: 5px 10px;
  }

  @media (max-width: 390px) {
    display: none;
  }
`;
export const Hits = styled.div``;
export const WrtiterName = styled.div``;
