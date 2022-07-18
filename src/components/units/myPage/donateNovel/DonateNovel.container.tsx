import { useQuery } from "@apollo/client";
import useMoveToPage from "../../../../commons/hooks/UseMoveToPage";
import DonateNovelPresenter from "./DonateNovel.presenter";
import { FETCH_DONATE } from "./DonateNovel.queries";

export default function DonateNovelContainer() {
  const { onClickMoveToPage } = useMoveToPage();
  const { data } = useQuery(FETCH_DONATE, { variables: { page: 1 } });

  console.log(data);

  return (
    <DonateNovelPresenter onClickMoveToPage={onClickMoveToPage} data={data} />
  );
}