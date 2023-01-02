import { useEffect, useMemo, useState, useCallback } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { Header } from "widgets";
import { BannerSection } from "./sections/banner-section/banner-section";

const HomePage = () => {
  return (
    <>
      <Header />
      <main className={st.main}>
        <BannerSection />
      </main>
    </>
  );
};

export default HomePage;
