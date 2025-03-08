import { useEffect } from "react";
import WOW from "wowjs";

const useWOW = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
};

export default useWOW;
