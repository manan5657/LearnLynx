import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IconType } from "react-icons";
import { AiFillFileText } from "react-icons/ai";
import {
  FaChartBar,
  FaChartLine,
  FaChartPie,
  FaGamepad,
  FaStopwatch,
} from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
import { RiCoupon3Fill, RiDashboardFill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import LearnLynxDashLogo from "../assets/images/logo.png";

const AdminSidebar = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const auth = queryParams.get("auth");

  const [showModal, setShowModal] = useState<boolean>(false);
  const [phoneActive, setPhoneActive] = useState<boolean>(
    window.innerWidth < 1100
  );

  // State to track the active URL
  const [activeUrl, setActiveUrl] = useState<string>(location.pathname);

  const resizeHandler = () => {
    setPhoneActive(window.innerWidth < 1100);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  // Update activeUrl state on location change
  useEffect(() => {
    setActiveUrl(location.pathname);
  }, [location.pathname]);

  return (
    <>
      {phoneActive && (
        <button id="hamburger" onClick={() => setShowModal(true)}>
          <HiMenuAlt4 />
        </button>
      )}

      <aside
        style={
          phoneActive
            ? {
                width: "20rem",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: showModal ? "0" : "-20rem",
                transition: "all 0.5s",
              }
            : {}
        }
      >
        <img src={LearnLynxDashLogo} alt="" className="LearnLynx_Dash_Logo" />
        <DivOne
          location={location}
          auth={auth}
          activeUrl={activeUrl}
          setActiveUrl={setActiveUrl}
        />
        <DivTwo
          location={location}
          activeUrl={activeUrl}
          setActiveUrl={setActiveUrl}
        />
        <DivThree
          location={location}
          activeUrl={activeUrl}
          setActiveUrl={setActiveUrl}
        />

        {phoneActive && (
          <button id="close-sidebar" onClick={() => setShowModal(false)}>
            Close
          </button>
        )}
      </aside>
    </>
  );
};

const DivOne = ({
  location,
  auth,
  activeUrl,
  setActiveUrl,
}: {
  location: Location;
  auth: String | null;
  activeUrl: string;
  setActiveUrl: React.Dispatch<React.SetStateAction<string>>;
}) => (
  <div>
    <h5>Dashboard</h5>
    <ul className="admin-sidebar-ul">
      <Li
        url={`/admin/dashboard?auth=${auth}`}
        text="Dashboard"
        Icon={RiDashboardFill}
        location={location}
        activeUrl={activeUrl}
        setActiveUrl={setActiveUrl}
      />
      <Li
        url={`/admin/product?auth=${auth}`}
        text="Courses"
        Icon={FaBook}
        location={location}
        activeUrl={activeUrl}
        setActiveUrl={setActiveUrl}
      />
      <Li
        url={`/admin/customer?auth=${auth}`}
        text="Students"
        Icon={IoIosPeople}
        location={location}
        activeUrl={activeUrl}
        setActiveUrl={setActiveUrl}
      />
      <Li
        url={`/admin/transaction?auth=${auth}`}
        text="Transaction"
        Icon={AiFillFileText}
        location={location}
        activeUrl={activeUrl}
        setActiveUrl={setActiveUrl}
      />
    </ul>
  </div>
);

const DivTwo = ({
  location,
  activeUrl,
  setActiveUrl,
}: {
  location: Location;
  activeUrl: string;
  setActiveUrl: React.Dispatch<React.SetStateAction<string>>;
}) => (
  <div>
    <h5>Charts</h5>
    <ul>
      <Li
        url="/admin/chart/bar"
        text="Bar"
        Icon={FaChartBar}
        location={location}
        activeUrl={activeUrl}
        setActiveUrl={setActiveUrl}
      />
      <Li
        url="/admin/chart/pie"
        text="Pie"
        Icon={FaChartPie}
        location={location}
        activeUrl={activeUrl}
        setActiveUrl={setActiveUrl}
      />
      <Li
        url="/admin/chart/line"
        text="Line"
        Icon={FaChartLine}
        location={location}
        activeUrl={activeUrl}
        setActiveUrl={setActiveUrl}
      />
    </ul>
  </div>
);

const DivThree = ({
  location,
  activeUrl,
  setActiveUrl,
}: {
  location: Location;
  activeUrl: string;
  setActiveUrl: React.Dispatch<React.SetStateAction<string>>;
}) => (
  <div>
    <h5>Apps</h5>
    <ul>
      <Li
        url="/admin/app/stopwatch"
        text="Stopwatch"
        Icon={FaStopwatch}
        location={location}
        activeUrl={activeUrl}
        setActiveUrl={setActiveUrl}
      />
      <Li
        url="/admin/app/coupon"
        text="Coupon"
        Icon={RiCoupon3Fill}
        location={location}
        activeUrl={activeUrl}
        setActiveUrl={setActiveUrl}
      />
      <Li
        url="/admin/app/toss"
        text="Toss"
        Icon={FaGamepad}
        location={location}
        activeUrl={activeUrl}
        setActiveUrl={setActiveUrl}
      />
    </ul>
  </div>
);

interface LiProps {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
  activeUrl: string;
  setActiveUrl: React.Dispatch<React.SetStateAction<string>>;
}
const Li = ({
  url,
  text,
  location,
  Icon,
  activeUrl,
  setActiveUrl,
}: LiProps) => (
  <li
    style={{
      backgroundColor: activeUrl === url ? "#f9c365" : "white",
      cursor: "pointer",
      transition: "background-color 0.3s",
    }}
    onClick={() => setActiveUrl(url)}
  >
    <Link
      to={url}
      style={{ display: "flex", alignItems: "center", padding: "10px" }}
    >
      <Icon />
      <span style={{ marginLeft: "10px" }}>{text}</span>
    </Link>
  </li>
);

export default AdminSidebar;
