import { usePageState } from "../context/PageProvider";
import { css } from "../../styled-system/css";

const Nav = () => {
  const state = usePageState();

  const navList = ["HOME", "ABOUT", "PROGRAM", "JOIN US"];
  return (
    <div
      id="nav"
      className={css({
        position: "fixed",
        right: "54px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "56px",
        top: "50vh",
        transform: "translateY(-50%)",
      })}
    >
      {navList.map((n, index) =>
        state.page === index + 1 ? (
          <span
            className={css({
              fontSize: "md",
              color: "white",
              fontWeight: "black",
            })}
          >
            {n}
          </span>
        ) : (
          <span
            className={css({
              fontSize: "md",
              color: "#656565",
              fontWeight: "black",
            })}
          >
            {n}
          </span>
        )
      )}
    </div>
  );
};

export default Nav;
