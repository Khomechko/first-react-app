import { LikeLogoActive } from "../../ui/logo/LIkeLogoActive";
import { LikeLogo } from "../../ui/logo/LikeLogo";
import { useEffect, useState } from "react";

export const Like = (props) => {
  const [active, setActive] = useState(false);

  const toLike = () => {
    setActive((prev) => !prev);
  };

  useEffect(() => {
    const raw = localStorage.getItem(props.id);
    setActive(JSON.parse(raw));
  }, []);

  useEffect(() => {
    localStorage.setItem(props.id, value);
  }, [active]);

  return (
    <div className="like">
      <div className="like-box" onClick={toLike}>
        {active ? <LikeLogoActive /> : <LikeLogo />}
      </div>
    </div>
  );
};
