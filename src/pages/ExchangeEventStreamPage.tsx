import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ExchangeEventStreamPage.module.css";

const ExchangeEventStreamPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIconCalendar7Click = useCallback(() => {
    navigate("/events");
  }, [navigate]);

  const onFireIcon7Click = useCallback(() => {
    navigate("/leaderboard");
  }, [navigate]);

  const onIconUser7Click = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onIconHome7Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onIconMap7Click = useCallback(() => {
    navigate("/map");
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

  return (
    <div className={styles.exchangeEventStreamPage}>
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
        className={styles.iconCalendar7}
        alt=""
        src="/-icon-calendar.svg"
        onClick={onIconCalendar7Click}
      />
      <img
        className={styles.fireIcon7}
        alt=""
        src="/24-fire-icon.svg"
        onClick={onFireIcon7Click}
      />
      <img
        className={styles.iconUser7}
        alt=""
        src="/-icon-user.svg"
        onClick={onIconUser7Click}
      />
      <img
        className={styles.iconHome7}
        alt=""
        src="/-icon-home.svg"
        onClick={onIconHome7Click}
      />
      <img
        className={styles.iconMap7}
        alt=""
        src="/-icon-map.svg"
        onClick={onIconMap7Click}
      />
      <img
        className={styles.exchangeEventStreamPageChild}
        alt=""
        src="/rectangle-41.svg"
      />
      <div className={styles.itemTitleUsernameContainer}>
        <p className={styles.itemTitle}>
          <b>item title</b>
        </p>
        <p className={styles.itemTitle}>
          <b>username</b>
        </p>
        <p className={styles.itemTitle}>
          <i className={styles.description1}>description</i>
        </p>
        <p className={styles.itemTitle}>
          <b>&nbsp;</b>
        </p>
        <p className={styles.itemTitle}>
          <b>&nbsp;</b>
        </p>
        <p className={styles.itemTitle}>
          <b>
            Hi! This product was something I was able to create using the some
            of the “trash” we collected at the local Durham trash pickup this
            past weekend! If you are interested in trading, please contact me!
          </b>
        </p>
      </div>
      <img
        className={styles.exchangeEventStreamPageItem}
        alt=""
        src="/rectangle-47.svg"
        onClick={onRectangle1Click}
      />
      <img
        className={styles.exchangeEventStreamPageInner}
        alt=""
        src="/rectangle-47.svg"
        onClick={onRectangle2Click}
      />
      <b className={styles.titleItemName}>title; item name</b>
      <div className={styles.location}>location</div>
      <div className={styles.seller}>seller</div>
      <img
        className={styles.rectangleIcon}
        alt=""
        src="/rectangle-49.svg"
        onClick={onRectangle3Click}
      />
      <img
        className={styles.exchangeEventStreamPageChild1}
        alt=""
        src="/rectangle-49.svg"
        onClick={onRectangle4Click}
      />
      <img
        className={styles.istockphoto179490710170667aIcon}
        alt=""
        src="/istockphoto179490710170667a-7@2x.png"
      />
      <img
        className={styles.istockphoto179490710170667aIcon1}
        alt=""
        src="/istockphoto179490710170667a-8@2x.png"
      />
      <img
        className={styles.istockphoto179490710170667aIcon2}
        alt=""
        src="/istockphoto179490710170667a-8@2x.png"
      />
      <img
        className={styles.istockphoto179490710170667aIcon3}
        alt=""
        src="/istockphoto179490710170667a-8@2x.png"
      />
      <img
        className={styles.istockphoto179490710170667aIcon4}
        alt=""
        src="/istockphoto179490710170667a-8@2x.png"
      />
      <b className={styles.titleItemName1}>title; item name</b>
      <div className={styles.location1}>location</div>
      <div className={styles.seller1}>seller</div>
      <div className={styles.titleItemNameParent}>
        <b className={styles.titleItemName2}>title; item name</b>
        <div className={styles.location2}>location</div>
        <div className={styles.seller2}>seller</div>
      </div>
      <div className={styles.titleItemNameGroup}>
        <b className={styles.titleItemName2}>title; item name</b>
        <div className={styles.location2}>location</div>
        <div className={styles.seller2}>seller</div>
      </div>
    </div>
  );
};

export default ExchangeEventStreamPage;
