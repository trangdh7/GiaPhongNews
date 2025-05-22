import React from "react";
import styles from "../styles/Banner.module.css";

function Banner() {
  return (
    <div className={styles.bannerWrapper}>
      <img
        src="https://cdn.nbtv.vn/upload/banner/file/50_nam_30_4_sua_14454410042025.png"
        alt="Banner"
        className={styles.bannerImage}
      />
    </div>
  );
}

export default Banner;
