import "./style.scss";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { clearError } from "../../../store/reducers/userSlice";

type Props = {
  children: React.ReactNode;
};

export const ErrorModal = ({ children }: Props) => {
  const { error } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  return (
    <div
      className={`error-modal${error !== "" ? " active" : ""}`}
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
