import { useEffect } from "react";
import WOW from "wowjs";

const useWOW = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false, // als je dit op 'true' instelt, worden ook nieuwe DOM-elementen geanimeerd
    }).init();
    // Alert that it works
  }, []);
};

export default useWOW;
