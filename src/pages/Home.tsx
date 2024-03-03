import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const Home: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/calculator");
  }, [navigate]);

  const onIconCalendar1Click = useCallback(() => {
    navigate("/events");
  }, [navigate]);

  const onFireIcon1Click = useCallback(() => {
    navigate("/leaderboard");
  }, [navigate]);

  const onIconUser1Click = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onIconMap1Click = useCallback(() => {
    navigate("/map");
  }, [navigate]);

  const onEllipseClick = useCallback(() => {
    navigate("/calculator");
  }, [navigate]);

  return (
    <div className={styles.home}>
      <img
        className={styles.homeChild}
        alt=""
        src="/rectangle-11.svg"
        onClick={onRectangleClick}
      />
      <b className={styles.kg}>
        <span>8</span>
        <span className={styles.kg1}> kg</span>
      </b>
      <b className={styles.kg}>
        <span>8</span>
        <span className={styles.kg1}> kg</span>
      </b>
      <img className={styles.homeItem} alt="" src="/rectangle-12.svg" />
      <img className={styles.homeInner} alt="" src="/rectangle-12.svg" />
      <b className={styles.hrs}>
        <span>35</span>
        <span className={styles.kg1}> hrs</span>
      </b>
      <b className={styles.streaks}>
        <span>70</span>
        <span className={styles.kg1}> streaks</span>
      </b>
      <div className={styles.mobileBottomNavWrapper}>
        <div className={styles.mobileBottomNav}>
          <div className={styles.homeIndicator} />
          <div className={styles.frameParent}>
            <div className={styles.shoppingBagIconParent}>
              <img className={styles.shoppingBagIcon} alt="" />
              <div className={styles.shop}>Home</div>
            </div>
            <div className={styles.saveIconParent}>
              <img className={styles.shoppingBagIcon} alt="" />
              <div className={styles.shop}>Trashure Map</div>
            </div>
            <div className={styles.saveIconParent}>
              <img className={styles.shoppingBagIcon} alt="" />
              <div className={styles.shop}>Events</div>
            </div>
            <div className={styles.saveIconParent}>
              <img className={styles.shoppingBagIcon} alt="" />
              <div className={styles.shop}>Leaderboard</div>
            </div>
            <div className={styles.saveIconParent}>
              <img className={styles.shoppingBagIcon} alt="" />
              <div className={styles.shop}>Profile</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mobileBottomNavWrapper}>
        <div className={styles.mobileBottomNav}>
          <div className={styles.homeIndicator} />
          <div className={styles.frameParent}>
            <div className={styles.shoppingBagIconParent}>
              <img className={styles.shoppingBagIcon} alt="" />
              <div className={styles.shop}>Home</div>
            </div>
            <div className={styles.saveIconParent}>
              <img className={styles.shoppingBagIcon} alt="" />
              <div className={styles.saved1}>Trashure Map</div>
            </div>
            <div className={styles.saveIconParent}>
              <img className={styles.shoppingBagIcon} alt="" />
              <div className={styles.saved1}>Events</div>
            </div>
            <div className={styles.saveIconParent}>
              <img className={styles.shoppingBagIcon} alt="" />
              <div className={styles.saved1}>Leaderboard</div>
            </div>
            <div className={styles.saveIconParent}>
              <img className={styles.shoppingBagIcon} alt="" />
              <div className={styles.saved1}>Profile</div>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.iconCalendar} alt="" src="/-icon-calendar.svg" />
      <img className={styles.fireIcon} alt="" src="/24-fire-icon.svg" />
      <img className={styles.iconUser} alt="" src="/-icon-user.svg" />
      <img className={styles.iconHome} alt="" src="/-icon-home.svg" />
      <img className={styles.iconMap} alt="" src="/-icon-map.svg" />
      <div className={styles.mobileBottomNavWrapper}>
        <div className={styles.mobileBottomNav}>
          <div className={styles.homeIndicator} />
          <div className={styles.frameParent}>
            <div className={styles.shoppingBagIconParent}>
              <img className={styles.shoppingBagIcon} alt="" />
              <div className={styles.shop}>Home</div>
            </div>
            <div className={styles.saveIconParent}>
              <img className={styles.shoppingBagIcon} alt="" />
              <div className={styles.shop}>Trashure Map</div>
            </div>
            <div className={styles.saveIconParent}>
              <img className={styles.shoppingBagIcon} alt="" />
              <div className={styles.shop}>Events</div>
            </div>
            <div className={styles.saveIconParent}>
              <img className={styles.shoppingBagIcon} alt="" />
              <div className={styles.shop}>Leaderboard</div>
            </div>
            <div className={styles.saveIconParent}>
              <img className={styles.shoppingBagIcon} alt="" />
              <div className={styles.shop}>Profile</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mobileBottomNavWrapper}>
        <div className={styles.mobileBottomNav}>
          <div className={styles.homeIndicator} />
          <div className={styles.frameParent}>
            <div className={styles.shoppingBagIconParent}>
              <img className={styles.shoppingBagIcon} alt="" />
              <div className={styles.shop}>Home</div>
            </div>
            <div className={styles.saveIconParent}>
              <img className={styles.shoppingBagIcon} alt="" />
              <div className={styles.saved1}>Trashure Map</div>
            </div>
            <div className={styles.saveIconParent}>
              <img className={styles.shoppingBagIcon} alt="" />
              <div className={styles.saved1}>Events</div>
            </div>
            <div className={styles.saveIconParent}>
              <img className={styles.shoppingBagIcon} alt="" />
              <div className={styles.saved1}>Leaderboard</div>
            </div>
            <div className={styles.saveIconParent}>
              <img className={styles.shoppingBagIcon} alt="" />
              <div className={styles.saved1}>Profile</div>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.iconCalendar1}
        alt=""
        src="/-icon-calendar.svg"
        onClick={onIconCalendar1Click}
      />
      <img
        className={styles.fireIcon1}
        alt=""
        src="/24-fire-icon.svg"
        onClick={onFireIcon1Click}
      />
      <img
        className={styles.iconUser1}
        alt=""
        src="/-icon-user.svg"
        onClick={onIconUser1Click}
      />
      <img className={styles.iconHome} alt="" src="/-icon-home.svg" />
      <img
        className={styles.iconMap1}
        alt=""
        src="/-icon-map.svg"
        onClick={onIconMap1Click}
      />
      <div className={styles.rectangleDiv} />
      <b className={styles.points}>
        <span>857</span>
        <span className={styles.kg1}> points</span>
      </b>
      <div className={styles.ellipseDiv} onClick={onEllipseClick} />
      <b className={styles.start}>start</b>
    </div>
  );
};

export default Home;
