import { LikeLogoActive } from "../../UI/logo/LIkeLogoActive";
import { LikeLogo } from "../../UI/logo/LikeLogo";
import { useState } from "react";

export const Like = () => {
  const [logo, setlogo] = useState(<LikeLogo />);
  const [state, setState] = useState(false);

  function toLike() {
    setState(!state);
    state === false ? setlogo(<LikeLogoActive />) : setlogo(<LikeLogo />);
  }

  return (
    <div className="like">
      <div className="like-box" onClick={toLike}>
        {logo}
      </div>
    </div>
  );
};
