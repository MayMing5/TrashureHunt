import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Leaderboard.module.css";

const Leaderboard: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIconCalendar3Click = useCallback(() => {
    navigate("/events");
  }, [navigate]);

  const onIconUser3Click = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onIconHome3Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onIconMap3Click = useCallback(() => {
    navigate("/map");
  }, [navigate]);

  const onIconArrowRightClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  return (
    <div className={styles.leaderboard}>
      <div className={styles.leaderboardChild} />
      <div className={styles.leaderboardItem} />
      <div className={styles.thPlaceEric}>10th Place Eric 4.5 kg</div>
      <div className={styles.leaderboardInner} />
      <div className={styles.thPlaceMadhav}>9th Place Madhav 5.2 kg</div>
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
      <div className={styles.rectangleDiv} />
      <div className={styles.leaderboardChild1} />
      <div className={styles.leaderboardChild2} />
      <div className={styles.leaderboardChild3} />
      <div className={styles.leaderboardChild4} />
      <div className={styles.leaderboardChild5} />
      <div className={styles.leaderboardChild6} />
      <div className={styles.leaderboardChild7} />
      <div className={styles.leaderboardChild8} />
      <div className={styles.leaderboardChild9} />
      <div className={styles.leaderboardChild10} />
      <div className={styles.stPlaceNicky}>1st Place Nicky 14.5 kg</div>
      <div className={styles.thPlaceMay}>5th Place May 7.5 kg</div>
      <div className={styles.thPlaceEthan}>6th Place Ethan 7.2 kg</div>
      <div className={styles.thPlaceGrace}>11th Place Grace 4.2 kg</div>
      <div className={styles.thPlaceCathy}>12th Place Cathy 4.1 kg</div>
      <div className={styles.thPlaceWinn}>16th Place Winn 2.2 kg</div>
      <div className={styles.thPlaceTaylor}>14th Place Taylor 3.2 kg</div>
      <div className={styles.thPlaceCameron}>15th Place Cameron 2.9 kg</div>
      <div className={styles.thPlaceCameron}>15th Place Cameron 2.9 kg</div>
      <div className={styles.thPlaceNicholas}>13th Place Nicholas 3.8 kg</div>
      <div className={styles.thPlaceJoseph}>7th Place Joseph 6.2 kg</div>
      <div className={styles.thPlaceWilliam}>8th Place William 5.5 kg</div>
      <div className={styles.leaderboardChild11} />
      <div className={styles.ndPlaceSutharsika}>2nd Place Sutharsika 12 kg</div>
      <div className={styles.leaderboardChild12} />
      <div className={styles.leaderboardChild13} />
      <div className={styles.rdPlaceYou}>3rd Place YOU 8 kg</div>
      <div className={styles.thPlaceJane}>4th Place Jane 7 kg</div>
      <div className={styles.ellipseDiv} />
      <div className={styles.billyBobJoeContainer}>
        <p className={styles.billyBobJoe}>Billy Bob Joe</p>
        <p className={styles.billyBobJoe}>&nbsp;</p>
        <p className={styles.billyBobJoe}>8 kg Trash</p>
        <p className={styles.billyBobJoe}>&nbsp;</p>
        <p className={styles.billyBobJoe}>Environmentalist</p>
        <p className={styles.billyBobJoe}>&nbsp;</p>
        <p className={styles.billyBobJoe}>Durham</p>
      </div>
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
      <img className={styles.fireIcon} alt="" src="/24-fire-icon.svg" />
      <img
        className={styles.iconUser3}
        alt=""
        src="/-icon-user.svg"
        onClick={onIconUser3Click}
      />
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
      <img
        className={styles.iconTelegramCircled}
        alt=""
        src="/-icon-telegram-circled.svg"
      />
      <img
        className={styles.iconTelegramCircled1}
        alt=""
        src="/-icon-telegram-circled.svg"
      />
      <img
        className={styles.iconTelegramCircled2}
        alt=""
        src="/-icon-telegram-circled.svg"
      />
      <img
        className={styles.iconTelegramCircled3}
        alt=""
        src="/-icon-telegram-circled.svg"
      />
      <img
        className={styles.iconArrowRight}
        alt=""
        src="/-icon-arrow-right.svg"
        onClick={onIconArrowRightClick}
      />
      <img className={styles.img857312Icon} alt="" src="/img-85731-2@2x.png" />
    </div>
  );
};

export default Leaderboard;
