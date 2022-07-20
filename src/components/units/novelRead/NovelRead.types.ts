import { Dispatch, SetStateAction } from "react";

export interface Iel {
  id: string;
  index: number;
}

export interface INovelReadPresenterProps {
  onClickMoveToMain: () => void;
  onClickDisplay: () => void;
  setDisplay: any;
  readData?: any;
  novelData?: any;
  onClickMoveToList: () => void;
  onClickMoveToPrevPage: () => void;
  onClickMoveToNextPage: () => void;
  onClickBookMark: () => void;
  onClickSizeDown: () => void;
  onClickSizeUp: () => void;
  size: number;
  setSize: Dispatch<SetStateAction<number>>;
  commentClick: boolean;
  setCommentClick: Dispatch<SetStateAction<boolean>>;
  onClickComment: () => void;
  commentData?: any;
  onClickRight: any;
}

export interface INovelReadStyles {
  setDisplay?: Dispatch<SetStateAction<boolean>>;
  fontsize?: number;
}