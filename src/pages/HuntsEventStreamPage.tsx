import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HuntsEventStreamPage.module.css";

const HuntsEventStreamPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIconCalendar3Click = useCallback(() => {
    navigate("/events");
  }, [navigate]);

  const onFireIcon3Click = useCallback(() => {
    navigate("/leaderboard");
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

  const onRectangleClick = useCallback(() => {
    navigate("/calculator");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/calculator");
  }, [navigate]);

  const onRectangle2Click = useCallback(() => {
    navigate("/calculator");
  }, [navigate]);

  const onRectangle3Click = useCallback(() => {
    navigate("/calculator");
  }, [navigate]);

  const onRectangle4Click = useCallback(() => {
    navigate("/calculator");
  }, [navigate]);

  const onRectangle5Click = useCallback(() => {
    navigate("/calculator");
  }, [navigate]);

  return (
    <div className={styles.huntsEventStreamPage}>
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
        className={styles.huntsEventStreamPageChild}
        alt=""
        src="/rectangle-47.svg"
        onClick={onRectangleClick}
      />
      <img
        className={styles.huntsEventStreamPageItem}
        alt=""
        src="/rectangle-11.svg"
        onClick={onRectangle1Click}
      />
      <img
        className={styles.huntsEventStreamPageInner}
        alt=""
        src="/rectangle-11.svg"
        onClick={onRectangle2Click}
      />
      <img
        className={styles.rectangleIcon}
        alt=""
        src="/rectangle-11.svg"
        onClick={onRectangle3Click}
      />
      <img
        className={styles.huntsEventStreamPageChild1}
        alt=""
        src="/rectangle-11.svg"
        onClick={onRectangle4Click}
      />
      <img
        className={styles.huntsEventStreamPageChild2}
        alt=""
        src="/rectangle-11.svg"
        onClick={onRectangle5Click}
      />
      <b className={styles.hallyLakeTrashContainer}>
        <p
          className={styles.hallyLakeTrash}
        >{`Hally Lake Trash Clean-up                 1/4/2023 `}</p>
        <p className={styles.hallyLakePreservation}>
          <span
            className={styles.hallyLakePreservation1}
          >{`Hally Lake Preservation  `}</span>
          <span
            className={styles.span}
          >{`                                   `}</span>
        </p>
        <p className={styles.hallyLakePreservation}>
          123 Prestwick Drive, Gimble, NC, 42357
        </p>
      </b>
      <b className={styles.corryLakeTrashContainer}>
        <p
          className={styles.hallyLakeTrash}
        >{`Corry Lake Trash Clean-up                 1/2/2023 `}</p>
        <p className={styles.hallyLakePreservation}>
          <span
            className={styles.hallyLakePreservation1}
          >{`Corry Lake Preservation  `}</span>
          <span
            className={styles.span}
          >{`                                   `}</span>
        </p>
        <p className={styles.hallyLakePreservation}>
          218 Cobwell Lane, Timber, NC, 42113
        </p>
      </b>
      <b className={styles.joyPondTrashContainer}>
        <p
          className={styles.hallyLakeTrash}
        >{`Joy Pond Trash Clean-up                       2/4/2023 `}</p>
        <p className={styles.hallyLakePreservation}>
          <span
            className={styles.hallyLakePreservation1}
          >{`Joy Pond Preservation  `}</span>
          <span
            className={styles.span}
          >{`                                   `}</span>
        </p>
        <p className={styles.hallyLakePreservation}>
          780 Church Road, Cally, NC, 45467
        </p>
      </b>
      <b className={styles.carmenLakeTrashContainer}>
        <p
          className={styles.hallyLakeTrash}
        >{`Carmen Lake Trash Clean-up                       2/7/2023 `}</p>
        <p className={styles.carmenLakeCommunity}>
          <span
            className={styles.carmenLakeCommunity1}
          >{`Carmen Lake Community  `}</span>
          <span
            className={styles.hallyLakePreservation1}
          >{`                                   `}</span>
        </p>
        <p className={styles.willowDriveLumber}>
          413 Willow Drive, Lumber, NC, 43310
        </p>
      </b>
      <b className={styles.baldwinCreekTrashContainer}>
        <p
          className={styles.hallyLakeTrash}
        >{`Baldwin Creek Trash Clean-up           1/17/2023 `}</p>
        <p className={styles.hallyLakePreservation}>
          <span>Trixie Parks and Rec</span>
          <span
            className={styles.span}
          >{`                                   `}</span>
        </p>
        <p className={styles.hallyLakePreservation}>
          456 Country Road, Trixie, NC, 42325
        </p>
      </b>
      <b className={styles.greenwayNeighborhoodTrashContainer}>
        <p className={styles.greenwayNeighborhoodTrashCl}>
          <span>{`Greenway Neighborhood Trash Clean-up `}</span>
          <span className={styles.span5}>{`         2/3/2023 `}</span>
        </p>
        <p
          className={styles.hallyLakeTrash}
        >{`Greenway Community                                     `}</p>
        <p className={styles.hallyLakePreservation}>
          12 Country Drive, Umpire, NC, 41328
        </p>
      </b>
    </div>
  );
};

export default HuntsEventStreamPage;
