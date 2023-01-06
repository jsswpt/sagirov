import { useEffect, useMemo, useState, useCallback } from "react";

import st from "../../styles.module.scss";
import cn from "classnames";
import { AchievementPlate, Container, Plate } from "shared/ui";
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
          <button className={st.button}>
            <i className={st.button_corner__bottom_left}></i>
            <i className={st.button_corner__top_right}></i>
            Начать путешествие
          </button>
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
            <AchievementPlate topTitle="Мы" midTitle="1" botTitle="на рынке" />
          </div>
          <div className={st.grid_item}>
            <AchievementPlate
              topTitle="Гарантируем"
              midTitle="50%"
              botTitle="безопасность"
            />
          </div>
          <div className={st.grid_item}>
            <AchievementPlate
              topTitle="Календарик за"
              midTitle="2001г."
              botTitle="в подарок"
            />
          </div>
          <div className={st.grid_item}>
            <AchievementPlate
              topTitle="Путешествие"
              midTitle="597"
              botTitle="дней"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
