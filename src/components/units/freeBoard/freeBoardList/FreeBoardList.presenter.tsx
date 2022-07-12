import React from "react";
import Button01 from "../../../commons/buttons/01";
import * as S from "./FreeBoardList.styles";
import { getDate } from "./../../../../commons/libraries/utils";
// import Paginations from "../../../commons/paginations/Paginations.container";
export default function FreeBoardListPresenter(props: any) {
  return (
    <S.Wrapper>
      <S.WrapTitle>
        <S.MainTitle>자유게시판</S.MainTitle>
      </S.WrapTitle>
      {/* <S.WrapperBoard>
        <S.Title>글 제목 글 제목 글 제목 글 제목 글 제목</S.Title>
        <S.WrapInfo>
          <S.Writer>작성자</S.Writer>
          <S.Date>2022.07.04</S.Date>
          <S.Date>조회 12</S.Date>
          <S.Date>추천 0</S.Date>
        </S.WrapInfo>
      </S.WrapperBoard> */}
      {props.data?.fetchBoardsAll.map((el: any) => (
        <S.WrapperBoard key={el.id}>
          <S.Flex>
            <S.Title>{el.title}</S.Title>
            <S.New>NEW</S.New>
          </S.Flex>
          <S.WrapInfo>
            {/* <S.Writer>{el.user.nickName}</S.Writer> */}
            <S.Writer>작성자</S.Writer>
            <S.Date>{getDate(el.createAt)}</S.Date>
            {/* <S.Date>{el.viewCount}</S.Date>
            <S.Date>{el.likeCount}</S.Date> */}
          </S.WrapInfo>
        </S.WrapperBoard>
      ))}
      {/* <Paginations /> */}
      <S.WrapButton>
        <Button01
          title="작성하기"
          onClick={props.onClickMoveToFreeBoardWrite}
        />
      </S.WrapButton>
    </S.Wrapper>
  );
}
