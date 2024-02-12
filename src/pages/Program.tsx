import { ForwardedRef, forwardRef } from "react";
import { css } from "../../styled-system/css";

const programList = [
  {
    title: "hatching",
    description:
      "국내외 스타트업의 사례를 케이스 스터디와 산학연계 과제를 통해 학습하여 창업의 핵심인 기초지식과 문제해결 능력을 향상시킵니다.",
  },
  {
    title: "nestling",
    description:
      "국내외 스타트업의 사례를 케이스 스터디와 산학연계 과제를 통해 학습하여 창업의 핵심인 기초지식과 문제해결 능력을 향상시킵니다.",
  },
  {
    title: "juvenile",
    description:
      "국내외 스타트업의 사례를 케이스 스터디와 산학연계 과제를 통해 학습하여 창업의 핵심인 기초지식과 문제해결 능력을 향상시킵니다.",
  },
  {
    title: "fly-up",
    description:
      "국내외 스타트업의 사례를 케이스 스터디와 산학연계 과제를 통해 학습하여 창업의 핵심인 기초지식과 문제해결 능력을 향상시킵니다.",
  },
];

const Program = forwardRef<HTMLDivElement>(
  (_, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div id="program">
        <div
          className={css({
            position: "absolute",
            zIndex: "10",
            right: "0",
            height: "100vh",
            width: "500px",
            background:
              "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
          })}
        />
        <div
          className={css({
            height: `calc(100vh)`,
            width: "3000px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "left",
            alignItems: "center",
            color: "white",
            gap: "72px",
            pl: "200px",
          })}
          ref={ref}
          id="sections"
        >
          {programList.map((program, index) => (
            <div
              className={css({
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: "500px",
                height: "500px",
                border: "2px solid white",
                p: "0 30px 30px 30px",
              })}
            >
              <span
                className={css({
                  fontSize: "96px",
                  color: "#FF993A",
                  fontWeight: "extrabold",
                })}
              >{`0${index + 1}`}</span>
              <div>
                <span
                  className={css({
                    fontSize: "64px",
                    color: "white",
                    fontWeight: "extrabold",
                    textTransform: "capitalize",
                  })}
                >
                  {program.title}
                </span>
                <p
                  className={css({
                    fontSize: "16px",
                    color: "white",
                    fontFamily: "gmarket",
                    fontWeight: "light",
                  })}
                >
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
);

export default Program;
