import { useEffect, useMemo, useState, useCallback } from "react";

import st from "../../styles.module.scss";
import cn from "classnames";
import { Container, Plate } from "shared/ui";
import Mars from "shared/assets/imgs/mars.png";
import Stars from "shared/assets/imgs/custom-stars.png";

export const BannerSection = () => {
  return (
    <section className={cn(st.section, st.banner_section)}>
      <Container className={cn(st.banner_container)}>
        <div className={cn(st.banner_wrap, st.banner_wrap__welcome)}>
          <div className={st.welcome_wrap__top}>
            <h1 className={st.title}>
              Путешествие <span>на красную планету</span>
            </h1>
          </div>
          <button className={st.button}>Начать путешествие</button>
        </div>
        <div className={st.stars_wrap}>
          <img src={Stars} alt="stars" />
        </div>
        <div className={st.sun_wrap}></div>
        <div className={st.mars_wrap}>
          <img src={Mars} alt="mars" />
        </div>
        <div className={cn(st.banner_wrap, st.banner_wrap__achievements)}>
          <div className={st.grid_item}>
            <Plate>123</Plate>
          </div>
          <div className={st.grid_item}>
            <Plate>123</Plate>
          </div>
          <div className={st.grid_item}>
            <Plate>123</Plate>
          </div>
          <div className={st.grid_item}>
            <Plate>123</Plate>
          </div>
        </div>
      </Container>
    </section>
  );
};
