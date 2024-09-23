import { LikeLogoActive } from "ui/logo/LIkeLogoActive";
import { LikeLogo } from "ui/logo/LikeLogo";
import { useEffect, useState } from "react";

type Props = {
  id: number;
};

export const Like = ({ id }: Props) => {
  const [active, setActive] = useState(false);
  const stringId = id.toString();

  const toLike = () => {
    setActive((prev) => !prev);
  };

  useEffect(() => {
    const raw = localStorage.getItem(stringId) || "";
    setActive(JSON.parse(raw));
  }, []);

  useEffect(() => {
    localStorage.setItem(stringId, active.toString());
  }, [active]);

  return (
    <div className="like">
      <div className="like-box" onClick={toLike}>
        {active ? <LikeLogoActive /> : <LikeLogo />}
      </div>
    </div>
  );
};
