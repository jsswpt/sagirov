import React from "react";
import { Plate } from "../plate/plate";

import st from "./styles.module.scss";

type AchievementPlate = {
  topTitle?: React.ReactNode;
  midTitle?: React.ReactNode;
  botTitle?: React.ReactNode;
};

export const AchievementPlate = (props: AchievementPlate) => {
  return (
    <Plate className={st.plate}>
      <h2 className={st.title}>
        {props.topTitle} <br /> <span>{props.midTitle}</span> <br />{" "}
        {props.botTitle}
      </h2>
    </Plate>
  );
};
