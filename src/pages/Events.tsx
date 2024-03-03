import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Events.module.css";

const Events: FunctionComponent = () => {
  const navigate = useNavigate();

  const onTrashureHuntsTextClick = useCallback(() => {
    navigate("/hunts-event-stream-page");
  }, [navigate]);

  const onTrashureExchangeTextClick = useCallback(() => {
    navigate("/exchange-event-stream-page");
  }, [navigate]);

  const onFireIconClick = useCallback(() => {
    navigate("/leaderboard");
  }, [navigate]);

  const onIconUserClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onIconHomeClick = useCallback(() => {
    navigate("/login-page");
  }, [navigate]);

  const onIconMapClick = useCallback(() => {
    navigate("/map");
  }, [navigate]);

  const onRectangle4Click = useCallback(() => {
    navigate("/calculator");
  }, [navigate]);

  const onRectangle5Click = useCallback(() => {
    navigate("/calculator");
  }, [navigate]);

  const onRectangle6Click = useCallback(() => {
    navigate("/calculator");
  }, [navigate]);

  const onRectangle7Click = useCallback(() => {
    navigate("/calculator");
  }, [navigate]);

  const onRectangle8Click = useCallback(() => {
    navigate("/calculator");
  }, [navigate]);

  const onRectangle9Click = useCallback(() => {
    navigate("/hunts-event-stream-page");
  }, [navigate]);

  return (
    <div className={styles.events}>
      <div className={styles.eventsChild} />
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
      <div className={styles.eventsItem} />
      <div className={styles.eventsInner} />
      <b className={styles.trashurehunts} onClick={onTrashureHuntsTextClick}>
        TrashureHunts
      </b>
      <b
        className={styles.trashureexchange}
        onClick={onTrashureExchangeTextClick}
      >
        TrashureExchange
      </b>
      <div className={styles.rectangleDiv} />
      <b className={styles.upcomingEvents}>Upcoming Events</b>
      <img className={styles.iconSearch} alt="" src="/-icon-search.svg" />
      <b className={styles.searchForTrashurehunts}>Search for TrashureHunts</b>
      <img className={styles.iconCalendar} alt="" src="/-icon-calendar.svg" />
      <img
        className={styles.fireIcon}
        alt=""
        src="/24-fire-icon.svg"
        onClick={onFireIconClick}
      />
      <img
        className={styles.iconUser}
        alt=""
        src="/-icon-user.svg"
        onClick={onIconUserClick}
      />
      <img
        className={styles.iconHome}
        alt=""
        src="/-icon-home.svg"
        onClick={onIconHomeClick}
      />
      <img
        className={styles.iconMap}
        alt=""
        src="/-icon-map.svg"
        onClick={onIconMapClick}
      />
      <img
        className={styles.rectangleIcon}
        alt=""
        src="/rectangle-53.svg"
        onClick={onRectangle4Click}
      />
      <img
        className={styles.eventsChild1}
        alt=""
        src="/rectangle-53.svg"
        onClick={onRectangle5Click}
      />
      <img
        className={styles.eventsChild2}
        alt=""
        src="/rectangle-53.svg"
        onClick={onRectangle6Click}
      />
      <img
        className={styles.eventsChild3}
        alt=""
        src="/rectangle-59.svg"
        onClick={onRectangle7Click}
      />
      <img
        className={styles.eventsChild4}
        alt=""
        src="/rectangle-60.svg"
        onClick={onRectangle8Click}
      />
      <b className={styles.corryLakeTrashContainer}>
        <p className={styles.corryLakeTrashCleanUp}>
          <span className={styles.span}>
            <span className={styles.corryLakeTrash}>
              Corry Lake Trash Clean-up
            </span>
          </span>
          <span className={styles.span}>{`                 1/2/2023 `}</span>
        </p>
        <p className={styles.corryLakeTrashCleanUp}>
          <span className={styles.span}>{`Corry Lake Preservation  `}</span>
          <span
            className={styles.span1}
          >{`                                   `}</span>
        </p>
        <p className={styles.corryLakeTrashCleanUp}>
          <span className={styles.cobwellLaneTimber}>
            218 Cobwell Lane, Timber, NC, 42113
          </span>
        </p>
      </b>
      <b className={styles.hallyLakeTrashContainer}>
        <p className={styles.corryLakeTrashCleanUp}>
          <span className={styles.span}>
            <span className={styles.corryLakeTrash}>
              Hally Lake Trash Clean-up
            </span>
          </span>
          <span className={styles.span}>{`                  1/4/2023 `}</span>
        </p>
        <p className={styles.corryLakeTrashCleanUp}>
          <span className={styles.span}>{`Hally Lake Preservation  `}</span>
          <span
            className={styles.span1}
          >{`                                   `}</span>
        </p>
        <p className={styles.corryLakeTrashCleanUp}>
          <span className={styles.cobwellLaneTimber}>
            123 Prestwick Drive, Gimble, NC, 42357
          </span>
        </p>
      </b>
      <b className={styles.baldwinCreekTrashContainer}>
        <p className={styles.corryLakeTrashCleanUp}>
          <span className={styles.span}>
            <span className={styles.corryLakeTrash}>
              Baldwin Creek Trash Clean-up
            </span>
          </span>
          <span className={styles.span}>{`          1/17/2023 `}</span>
        </p>
        <p className={styles.corryLakeTrashCleanUp}>
          <span className={styles.span}>Trixie Parks and Rec</span>
          <span
            className={styles.span1}
          >{`                                   `}</span>
        </p>
        <p className={styles.corryLakeTrashCleanUp}>
          <span className={styles.cobwellLaneTimber}>
            456 Country Road, Trixie, NC, 42325
          </span>
        </p>
      </b>
      <b className={styles.tobaccoTrailTrashContainer}>
        <p className={styles.corryLakeTrashCleanUp}>
          <span className={styles.span}>
            <span className={styles.corryLakeTrash}>
              Tobacco Trail Trash Clean-up
            </span>
          </span>
          <span className={styles.span}>{`            1/22/2023 `}</span>
        </p>
        <p className={styles.corryLakeTrashCleanUp}>
          <span className={styles.span}>Cary Parks and Rec</span>
          <span
            className={styles.span1}
          >{`                                   `}</span>
        </p>
        <p className={styles.corryLakeTrashCleanUp}>
          <span className={styles.cobwellLaneTimber}>
            123 Baldwin Rd, Cary, NC, 42325
          </span>
        </p>
      </b>
      <img className={styles.arrowIcon} alt="" src="/arrow-1.svg" />
      <div className={styles.eventsChild5} onClick={onRectangle9Click} />
    </div>
  );
};

export default Events;
