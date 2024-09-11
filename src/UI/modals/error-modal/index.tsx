import { useEffect, useState } from "react";
import "./style.scss";
import { useAppSelector } from "../../../hooks/reduxHooks";

type Props = {
  children: React.ReactNode;
};

export const ErrorModal = ({ children }: Props) => {
  const { error } = useAppSelector((state) => state.user);
  const [modal, setModal] = useState(error);

  useEffect(() => {
    setModal(error);
  }, [error]);

  return (
    <div
      className={`error-modal${modal !== "" ? " active" : ""}`}
      onClick={() => {
        setModal("");
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
              setModal("");
            }}
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};
