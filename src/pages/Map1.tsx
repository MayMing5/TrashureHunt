import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Map1.module.css";

const Map1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIconCalendar1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFireIcon1Click = useCallback(() => {
    navigate("/leaderboard");
  }, [navigate]);

  const onIconUser1Click = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onIconHome1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.map}>
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
              <div className={styles.saved}>Trashure Map</div>
            </div>
            <div className={styles.saveIconParent}>
              <img className={styles.shoppingBagIcon} alt="" />
              <div className={styles.saved}>Events</div>
            </div>
            <div className={styles.saveIconParent}>
              <img className={styles.shoppingBagIcon} alt="" />
              <div className={styles.saved}>Leaderboard</div>
            </div>
            <div className={styles.saveIconParent}>
              <img className={styles.shoppingBagIcon} alt="" />
              <div className={styles.saved}>Profile</div>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.iconCalendar} alt="" src="/-icon-calendar.svg" />
      <img className={styles.fireIcon} alt="" src="/24-fire-icon.svg" />
      <img className={styles.iconUser} alt="" src="/-icon-user.svg" />
      <img className={styles.iconHome} alt="" src="/-icon-home.svg" />
      <img className={styles.iconMap} alt="" src="/-icon-map.svg" />
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
      <img
        className={styles.iconHome1}
        alt=""
        src="/-icon-home.svg"
        onClick={onIconHome1Click}
      />
      <img className={styles.iconMap} alt="" src="/-icon-map.svg" />
      <div className={styles.mapChild} />
      <img
        className={styles.screenShot20240302At320}
        alt=""
        src="/screen-shot-20240302-at-320-1@2x.png"
      />
      <img
        className={styles.geoLocationPinVectorIcon1}
        alt=""
        src="/geolocationpinvectoricon-1@2x.png"
      />
      <img
        className={styles.geoLocationPinVectorIcon2}
        alt=""
        src="/geolocationpinvectoricon-1@2x.png"
      />
      <img
        className={styles.geoLocationPinVectorIcon3}
        alt=""
        src="/geolocationpinvectoricon-1@2x.png"
      />
      <img
        className={styles.geoLocationPinVectorIcon4}
        alt=""
        src="/geolocationpinvectoricon-1@2x.png"
      />
      <img
        className={styles.geoLocationPinVectorIcon5}
        alt=""
        src="/geolocationpinvectoricon-1@2x.png"
      />
      <img
        className={styles.geoLocationPinVectorIcon6}
        alt=""
        src="/geolocationpinvectoricon-1@2x.png"
      />
      <img
        className={styles.geoLocationPinVectorIcon7}
        alt=""
        src="/geolocationpinvectoricon-1@2x.png"
      />
      <img
        className={styles.geoLocationPinVectorIcon8}
        alt=""
        src="/geolocationpinvectoricon-1@2x.png"
      />
      <img
        className={styles.geoLocationPinVectorIcon9}
        alt=""
        src="/geolocationpinvectoricon-1@2x.png"
      />
      <img
        className={styles.geoLocationPinVectorIcon11}
        alt=""
        src="/geolocationpinvectoricon-1@2x.png"
      />
      <img
        className={styles.geoLocationPinVectorIcon12}
        alt=""
        src="/geolocationpinvectoricon-1@2x.png"
      />
      <img
        className={styles.geoLocationPinVectorIcon13}
        alt=""
        src="/geolocationpinvectoricon-1@2x.png"
      />
      <img
        className={styles.geoLocationPinVectorIcon14}
        alt=""
        src="/geolocationpinvectoricon-1@2x.png"
      />
      <img
        className={styles.geoLocationPinVectorIcon15}
        alt=""
        src="/geolocationpinvectoricon-1@2x.png"
      />
      <img
        className={styles.geoLocationPinVectorIcon16}
        alt=""
        src="/geolocationpinvectoricon-1@2x.png"
      />
      <img
        className={styles.geoLocationPinVectorIcon17}
        alt=""
        src="/geolocationpinvectoricon-1@2x.png"
      />
      <img
        className={styles.geoLocationPinVectorIcon18}
        alt=""
        src="/geolocationpinvectoricon-1@2x.png"
      />
      <img
        className={styles.geoLocationPinVectorIcon19}
        alt=""
        src="/geolocationpinvectoricon-1@2x.png"
      />
    </div>
  );
};

export default Map1;
