import { useEffect } from "react";
import { withRouter } from "react-router";

const ScrollToTop = ({ location }) => {
  const { pathname } = location;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default withRouter(ScrollToTop);
