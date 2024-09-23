import "./style.scss";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { clearError } from "store/reducers/userSlice";
import classNames from "classnames";

type Props = {
  children: React.ReactNode;
};

export const ErrorModal = ({ children }: Props) => {
  const { error } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const modalClasses = classNames("error-modal", {
    active: error !== "",
  });

  return (
    <div
      className={modalClasses}
      onClick={() => {
        dispatch(clearError());
      }}
    >
      <div
        className="error-modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <div>
          <button
            className="error-modal__button"
            onClick={() => {
              dispatch(clearError());
            }}
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};
