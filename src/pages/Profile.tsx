import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Profile.module.css";

const Profile: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSettingsIcon1ImageClick = useCallback(() => {
    navigate("/settings");
  }, [navigate]);

  const onIconCalendar3Click = useCallback(() => {
    navigate("/events");
  }, [navigate]);

  const onFireIcon3Click = useCallback(() => {
    navigate("/leaderboard");
  }, [navigate]);

  const onIconHome3Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onIconMap3Click = useCallback(() => {
    navigate("/map");
  }, [navigate]);

  return (
    <div className={styles.profile}>
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
      <div className={styles.homePage} />
      <div className={styles.profileChild} />
      <b className={styles.billyBobJoe}>Billy Bob Joe</b>
      <div className={styles.iAmAn}>
        I am an enthusiastic student at the University of Nature, majoring in
        Environmental Engineering and am very interesting in spreading the word
        about sustainable practices!
      </div>
      <b className={styles.verifiedEnvironmentalistBadgContainer}>
        <p className={styles.verifiedEnvironmentalistBadg}>
          Verified Environmentalist Badge
        </p>
        <p className={styles.verifiedEnvironmentalistBadg}>
          Volunteering since December 2022
        </p>
        <p className={styles.verifiedEnvironmentalistBadg}>
          2 Month Volunteer Streak
        </p>
      </b>
      <div className={styles.filledButton}>
        <img className={styles.plusIcon} alt="" src="/04-plus-icon.svg" />
        <b className={styles.button}>Message</b>
        <img
          className={styles.plusIcon}
          alt=""
          src="/10-down-chevron-icon.svg"
        />
      </div>
      <div className={styles.profileItem} />
      <div className={styles.profileInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.profileChild1} />
      <img
        className={styles.settingsIcon1}
        alt=""
        src="/settings-icon-1@2x.png"
        onClick={onSettingsIcon1ImageClick}
      />
      <img className={styles.iconCalendar} alt="" src="/-icon-calendar.svg" />
      <img className={styles.fireIcon} alt="" src="/24-fire-icon.svg" />
      <img className={styles.iconUser} alt="" src="/-icon-user.svg" />
      <img className={styles.iconHome} alt="" src="/-icon-home.svg" />
      <img className={styles.iconMap} alt="" src="/-icon-map.svg" />
      <img className={styles.iconCalendar} alt="" src="/-icon-calendar.svg" />
      <img className={styles.fireIcon} alt="" src="/24-fire-icon.svg" />
      <img className={styles.iconUser} alt="" src="/-icon-user.svg" />
      <img className={styles.iconHome} alt="" src="/-icon-home.svg" />
      <img className={styles.iconMap} alt="" src="/-icon-map.svg" />
      <img className={styles.iconCalendar} alt="" src="/-icon-calendar.svg" />
      <img className={styles.fireIcon} alt="" src="/24-fire-icon.svg" />
      <img className={styles.iconUser} alt="" src="/-icon-user.svg" />
      <img className={styles.iconHome} alt="" src="/-icon-home.svg" />
      <img className={styles.iconMap} alt="" src="/-icon-map.svg" />
      <img
        className={styles.iconCalendar3}
        alt=""
        src="/-icon-calendar.svg"
        onClick={onIconCalendar3Click}
      />
      <img
        className={styles.fireIcon3}
        alt=""
        src="/24-fire-icon.svg"
        onClick={onFireIcon3Click}
      />
      <img className={styles.iconUser} alt="" src="/-icon-user.svg" />
      <img
        className={styles.iconHome3}
        alt=""
        src="/-icon-home.svg"
        onClick={onIconHome3Click}
      />
      <img
        className={styles.iconMap3}
        alt=""
        src="/-icon-map.svg"
        onClick={onIconMap3Click}
      />
      <img className={styles.iconMessage} alt="" src="/-icon-message.svg" />
      <img className={styles.img857311Icon} alt="" src="/img-85731-1@2x.png" />
      <img
        className={styles.screenShot20240302At339}
        alt=""
        src="/screen-shot-20240302-at-339-1@2x.png"
      />
    </div>
  );
};

export default Profile;
