import * as S from "./MyNovel.styles";
export default function MyNovelPresenter(props) {
  return (
    <S.Wrapper>
      <S.TopWrapper>
        <S.MyNovel>나의 작품</S.MyNovel>
      </S.TopWrapper>
      {props.data?.fetchMyNovels.novels.map((el) => (
        <S.BoxWrapper key={el.id}>
          <S.ImageWrapper>
            <S.Img
              src={`https://storage.googleapis.com/code-camp-main-project/${el.files[0].url}`}
            />
          </S.ImageWrapper>
          <S.InnerFlex>
            <S.Column>
              <S.Title id={el.id} onClick={props.onClickMyNovel(el)}>
                {el.title}
              </S.Title>
              {/* <S.GenreFlex>
                <S.Genre>{el.novelIndexs.index}화</S.Genre>
                <S.Time>회차 제목</S.Time>
              </S.GenreFlex> */}
            </S.Column>
            <S.BoxFlex>
              <S.Button1>연재하기</S.Button1>
              <S.Button1>공지사항</S.Button1>
            </S.BoxFlex>
          </S.InnerFlex>
        </S.BoxWrapper>
      ))}
    </S.Wrapper>
  );
}
