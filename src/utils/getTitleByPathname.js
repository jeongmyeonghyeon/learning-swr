import { useLocation } from "react-router-dom";
import { TITLE } from "../constants/title";

function getTitleByPathname(url) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  const key = url ? url : pathname;

  return TITLE[key];
}

export default getTitleByPathname;
