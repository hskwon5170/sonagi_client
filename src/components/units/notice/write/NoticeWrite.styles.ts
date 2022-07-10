import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px 0px;
  margin: 0 2%;
`;
export const NoticeDetailWrap = styled.div`
  width: 100%;

  @media ${breakPoints.tablet} {
    transition-duration: 1s;
    width: 96%;
  }

  @media ${breakPoints.mobile} {
    transition-duration: 1s;
    width: 92%;
    margin: 0 3%;
  }
`;
export const RowWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

export const Title = styled.label`
  font-size: 1.875em;
  font-weight: 700;
  color: #484848;
  margin-top: 20px;

  @media ${breakPoints.mobile} {
    font-size: 1.5em;
  }
`;
export const TitleLine = styled.div`
  width: 1px;
  height: 20px;
  background-color: #bdbdbd;
  margin: 0px 50px;
`;

export const NoticeDetail = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const NoticeName = styled.div`
  font-size: 1.5em;
  font-weight: 500;
  padding: 64px 0px 24px;

  @media ${breakPoints.mobile} {
    font-size: 1.125em;
  }
`;

export const NameInput = styled.input`
  width: 90%;
  height: 40px;
  border: none;
  margin-left: 20px;

  @media ${breakPoints.tablet} {
    width: 80%;
  }

  @media ${breakPoints.mobile} {
    width: 70%;
  }
`;

export const WriterWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const WriterName = styled.div`
  font-size: 1.125em;
  margin-right: 20px;

  @media ${breakPoints.mobile} {
    font-size: 1em;
  }
`;
export const WriteAt = styled.div`
  font-size: 0.813em;
  color: #808080;
  font-weight: 300;
`;
export const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid #bdbdbd;
  margin: 30px 0px;
`;
export const contents = styled.textarea`
  width: 100%;
  background-color: #eee;
  height: 70vh;
  padding: 50px;
  border: none;

  @media ${breakPoints.tablet} {
    transition-duration: 1s;
    padding: 50px;
  }

  @media ${breakPoints.mobile} {
    transition-duration: 1s;
    padding: 30px;
    font-size: 0.875em;
  }
`;
export const BtnWrap = styled.div`
  margin: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;