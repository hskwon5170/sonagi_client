import { useQuery } from "@apollo/client";
import useMoveToPage from "../../../../commons/hooks/UseMoveToPage";
import DonateNovelPresenter from "./DonateNovel.presenter";
import { FETCH_DONATE } from "./DonateNovel.queries";

export default function DonateNovelContainer() {
  const { onClickMoveToPage } = useMoveToPage();
  const { data, refetch } = useQuery(FETCH_DONATE, { variables: { page: 1 } });

  return (
    <DonateNovelPresenter
      refetch={refetch}
      onClickMoveToPage={onClickMoveToPage}
      data={data}
    />
  );
}
