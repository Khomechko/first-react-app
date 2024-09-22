import { createSelector } from "reselect";
import { RootState } from "../../..";

const selectPage = (state: RootState) => state.user.page;
const selectTotalPage = (state: RootState) => state.user.totalPages;

export const selectPageAndTotalPage = createSelector(
  selectPage,
  selectTotalPage,
  (numberOfPage, numberOfTotalPage) => {
    return { numberOfPage, numberOfTotalPage };
  }
);
