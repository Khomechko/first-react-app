import { LikeLogoActive } from "../../ui/logo/LIkeLogoActive";
import { LikeLogo } from "../../ui/logo/LikeLogo";
import { useEffect } from "react";
import { useBoolState } from "../../hooks/useBoolState";

export const Like = (props) => {
  const { value, setValue } = useBoolState(false);

  const toLike = () => {
    setValue((prev) => !prev);
  };

  useEffect(() => {
    const raw = localStorage.getItem(props.id);
    setValue(JSON.parse(raw));
  }, []);

  useEffect(() => {
    localStorage.setItem(props.id, value);
  }, [value]);

  return (
    <div className="like">
      <div className="like-box" onClick={toLike}>
        {value ? <LikeLogoActive /> : <LikeLogo />}
      </div>
    </div>
  );
};
