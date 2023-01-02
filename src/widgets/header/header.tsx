import { useEffect, useMemo, useState, useCallback } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import Logo from "shared/assets/imgs/logo.png";
import { Container } from "shared/ui";

export const HeaderChunk = () => {
  return (
    <header className={st.header}>
      <Container className={st.header_container}>
        <div className={cn(st.header_wrap, st.header_wrap__logo)}>
          <img src={Logo} alt="logo" className={st.logo} />
        </div>
        <nav className={cn(st.header_wrap, st.header_wrap__nav)}>
          <ul className={st.header_nav__list}>
            <li className={st.header_nav__item}>
              <a href="#home" className={st.link}>
                Главная
              </a>
            </li>
            <li className={st.header_nav__item}>
              <a href="#technology" className={cn(st.link, st.link_active)}>
                Технология
              </a>
            </li>
            <li className={st.header_nav__item}>
              <a href="#flights-chart" className={st.link}>
                График полетов
              </a>
            </li>
            <li className={st.header_nav__item}>
              <a href="#guarantees" className={st.link}>
                Гарантии
              </a>
            </li>
            <li className={st.header_nav__item}>
              <a href="#about-us" className={st.link}>
                О компаии
              </a>
            </li>
            <li className={st.header_nav__item}>
              <a href="#contacts" className={st.link}>
                Контакты
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};
