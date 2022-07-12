import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import NovelWritePresenter from "./NovelWrite.presenter";
import * as yup from "yup";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_NOVEL, FETCH_NOVEL_CATEGORYS_ALL } from "./NovelWrite.queries";

const schema = yup.object({
  title: yup.string().required("필수"),
  // subtitle: yup.string().required("필수"),
  description: yup.string().required("필수"),
});

export default function NovelWriteContainer() {
  const [isClickPre, setIsClickPre] = useState(false);
  const [isClickDay, setIsClickDay] = useState(true);
  const [genre, setGenre] = useState("");
  const [name, setName] = useState("");
  const [isSelect, SetIsSelect] = useState(false);

  const [createNovel] = useMutation(CREATE_NOVEL);
  const { data: categoryData } = useQuery(FETCH_NOVEL_CATEGORYS_ALL);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // image

  const [fileUrls, setFileUrls] = useState([""]);

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  const onClickSubmit = async (data: any) => {
    // console.log(fileId[0]);
    try {
      const result = await createNovel({
        variables: {
          createNovelInput: {
            title: data.title,
            description: data.description,
            tags: ["#태그 1"],
            categoryID: genre,
            fileURLs: fileUrls,
          },
        },
      });
      console.log(result);
      alert("성공");
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickCycleButton = () => {
    setIsClickPre((prev) => !prev);
    setIsClickDay((prev) => !prev);
  };

  // 장르 선택
  const onClickSelectGenre = () => {
    SetIsSelect((prev) => !prev);
  };

  const onClickGenre = (event) => {
    setGenre(event?.target.id);
    setName(event.target.innerText);
    SetIsSelect((prev) => !prev);
  };

  return (
    <NovelWritePresenter
      onClickCycleButton={onClickCycleButton}
      isClickPre={isClickPre}
      isClickDay={isClickDay}
      // yup
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSubmit={onClickSubmit}
      // genre
      onClickSelectGenre={onClickSelectGenre}
      setGenre={setGenre}
      onClickGenre={onClickGenre}
      isSelect={isSelect}
      genre={genre}
      name={name}
      // images
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
      categoryData={categoryData}
    />
  );
}
