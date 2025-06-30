import React, { useRef } from "react";
import styles from "./list-expand-on-hover.module.css";

import img1 from "~/assets/gamestack-login-large.jpg";
import img2 from "~/assets/gamestack-list.jpg";
import img3 from "~/assets/gamestack-list-placeholder.jpg";
import img4 from "~/assets/gamestack-list-large.jpg";
import img5 from "~/assets/gamestack-login-placeholder.jpg";
import img6 from "~/assets/gamestack-login.jpg";
import img7 from "~/assets/flatline.png";
import img8 from "~/assets/profile-large.jpg";
import img9 from "~/assets/notfound.jpg";
import img10 from "~/assets/milkyway.jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10
];

export const ListExpandOnHover = () => {
  const cardRefs = useRef([]);

  // Handle mouse enter/leave to mimic JS logic
  const handleMouseEnter = (idx) => {
    cardRefs.current.forEach((ref, i) => {
      if (ref) ref.classList.remove(styles["is-active"]);
    });
    if (cardRefs.current[idx]) cardRefs.current[idx].classList.add(styles["is-active"]);
  };
  const handleMouseLeave = () => {
    cardRefs.current.forEach((ref) => {
      if (ref) ref.classList.add(styles["is-active"]);
    });
  };

  // Set all cards active on mount
  React.useEffect(() => {
    cardRefs.current.forEach((ref) => {
      if (ref) ref.classList.add(styles["is-active"]);
    });
  }, []);

  return (
    <div className={styles.container}>
      {images.map((src, idx) => (
        <div
          className={styles.card}
          key={idx}
          ref={el => (cardRefs.current[idx] = el)}
          onMouseEnter={() => handleMouseEnter(idx)}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles["card__inner"]}>
            <picture>
              <img src={src} alt="" />
            </picture>
          </div>
        </div>
      ))}
    </div>
  );
};
