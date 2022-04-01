import { useEffect, useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import { RouterContext } from "../../utils/routeContext";

export const NextPageToTop = ({ children }) => {
  const location = useLocation();
  // const params = useParams();
  const route = useContext(RouterContext);

  useEffect(() => {
    // if (location !== prevProps.location) {
    //   window.scrollTo(0, 0);
    // }

    if (route.to !== route.from) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return children;
};

export default NextPageToTop;
