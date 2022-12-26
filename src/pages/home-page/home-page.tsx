import { useEffect, useMemo, useState, useCallback } from "react";

import st from "./styles.module.scss";
import cn from "classnames";
import { BannerSection } from "./sections/banner-section/banner-section";

export const HomePage = () => {
  return (
    <>
      <div>header</div>
      <main>
        <BannerSection />
      </main>
    </>
  );
};
