import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FreeBoardWritePresenter from "./FreeBoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./FreeBoardWrite.queries";
import * as yup from "yup";
import { IFreeBoardWriteContainer } from "./FreeBoardWrite.types";

const schema = yup.object({
  fileURLs: yup.array().required("게시판 이미지를 등록해주세요."),
});

export default function FreeBoardWriteContainer(
  props: IFreeBoardWriteContainer
) {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);

  const [title, setTitle] = useState("");
  const onChangeTitle = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTitle(event.target.value);
  };

  const [contents, setContents] = useState("");
  const onChangeContents = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setContents(event.target.value);
  };

  const { setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [fileUrls, setFileUrls] = useState([""]);
  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
    setValue("fileURLs", newFileUrls);
    trigger("fileURLs");
  };

  // 등록
  const onClickSubmit = async (data: any) => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            title,
            contents,
            fileURLs: fileUrls,
          },
        },
      });
      console.log("result", result);
      console.log("result.data.createBoard.id", result.data.createBoard.id);
      alert("게시글이 등록되었습니다");
      router.push(`/freeBoard/${result.data?.createBoard.id}`);
    } catch (error) {
      alert(error);
    }
  };

  // 수정
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const onClickUpdate = async (data: any) => {
    try {
      console.log("상품업데이트data찍은콘솔", data);
      if (!title && !contents) {
        alert("수정된 내용이 없습니다.");
        return;
      }
      const result = await updateBoard({
        variables: {
          updateBoardInput: {
            title,
            contents,
            id: router.query._id,
          },
        },
      });
      console.log(result);
      alert("게시글을 수정합니다");
      router.push(`/freeBoard/${result.data?.updateBoard.id}`);
    } catch (error) {
      alert(error);
    }
  };

  // 취소
  const onClickMoveToList = () => {
    router.push("/freeBoard");
  };

  return (
    <FreeBoardWritePresenter
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      isEdit={props.isEdit}
      data={props.data}
      onClickUpdate={onClickUpdate}
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
      onClickMoveToList={onClickMoveToList}
    />
  );
}
