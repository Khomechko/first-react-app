import { LikeLogoActive } from "../../UI/logo/LIkeLogoActive";
import { LikeLogo } from "../../UI/logo/LikeLogo";
import { useState } from "react";

export const Like = () => {
  const [active, setActive] = useState(false);

  const toLike = () => {
    setActive((prev) => !prev);
  };

  return (
    <div className="like">
      <div className="like-box" onClick={toLike}>
        {active ? <LikeLogoActive /> : <LikeLogo />}
      </div>
    </div>
  );
};
