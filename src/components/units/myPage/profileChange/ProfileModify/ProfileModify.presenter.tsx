import React from "react";
import * as S from "./ProfileModify.styles";

export default function ProfileModifyPresenter(props) {
  return (
    <S.Wrapper>
      <form onSubmit={props.handleSubmit(props.onClickChangeUser)}>
        <S.MainTitle>회원정보 변경</S.MainTitle>
        <S.SubTitle>변경하실 내용을 입력해주세요.</S.SubTitle>
        <S.BoxWrapper>
          <S.Wrap>
            <S.WrapperModify>
              <S.WrapTitle>
                <S.Label>이름</S.Label>
                <S.LabelInput
                  type="text"
                  defaultValue={props.data?.fetchLoginUser.name}
                  {...props.register("name")}
                />
                <S.Error>{props.formState.errors.name?.message}</S.Error>
              </S.WrapTitle>
              <S.WrapTitle>
                <S.Label>닉네임</S.Label>
                <S.LabelInput
                  type="text"
                  {...props.register("nickName")}
                  defaultValue={props.data?.fetchLoginUser.nickName}
                />
                <S.Error>{props.formState.errors.nickName?.message}</S.Error>
              </S.WrapTitle>
              <S.WrapTitle>
                <S.Label>이메일 주소</S.Label>
                <S.LabelInput
                  type="text"
                  {...props.register("email")}
                  defaultValue={props.data?.fetchLoginUser.email}
                />
                <S.Error>{props.formState.errors.email?.message}</S.Error>
              </S.WrapTitle>
              <S.WrapButton>
                <S.Button>회원정보 변경</S.Button>
              </S.WrapButton>
            </S.WrapperModify>
          </S.Wrap>
        </S.BoxWrapper>
      </form>
    </S.Wrapper>
  );
}
