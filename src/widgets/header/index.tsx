import { Suspense } from "react";

import { namedLazy } from "shared/lib";
import st from "./styles.module.scss";

const HeaderChunk = namedLazy(() => import("./header"), "HeaderChunk");

export const Header = () => {
  return (
    <Suspense fallback={<>header is loading</>}>
      <HeaderChunk />
    </Suspense>
  );
};
