import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  SupervisorAccountOutlined,
  PermIdentity,
  PlayCircleOutline,
  Add,
  PlaylistPlay,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <NavLink to="/" className="link">
                <LineStyle className="sidebarIcon" />
                Home
              </NavLink>
            </li>
            <li className="sidebarListItem">
              <NavLink to="/analytics" className="link">
                <Timeline className="sidebarIcon" />
                Analytics
              </NavLink>
            </li>
            <li className="sidebarListItem">
              <NavLink to="/sales" className="link">
                <TrendingUp className="sidebarIcon" />
                Sales
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
              <li className="sidebarListItem">
                <NavLink to="/admins" className="link">
                  <SupervisorAccountOutlined className="sidebarIcon" />
                  Admins
                </NavLink>
              </li>
              <li className="sidebarListItem">
                <NavLink to="/users" className="link">
                  <PermIdentity className="sidebarIcon" />
                  Users
                </NavLink>
              </li>
              <li className="sidebarListItem">
                <NavLink to="/showList" className="link">
                  <PlayCircleOutline className="sidebarIcon" />
                  Movies and shows
                </NavLink>
              </li>
              <li className="sidebarListItem">
                <NavLink to="/newshow" className="link">
                  <Add className="sidebarIcon" />
                  Add show
                </NavLink>
              </li>
              <li className="sidebarListItem">
                <NavLink to="/lists" className="link">
                  <PlaylistPlay className="sidebarIcon" />
                  lists
                </NavLink>
              </li>
              <li className="sidebarListItem">
                <NavLink to="/newList" className="link">
                  <Add className="sidebarIcon" />
                  Add list
                </NavLink>
              </li>
              <li className="sidebarListItem">
                <NavLink to="/reports" className="link">
                  <BarChart className="sidebarIcon" />
                  Reports
                </NavLink>
              </li>
            </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <NavLink to="/mail" className="link">
                <MailOutline className="sidebarIcon" />
                Mail
              </NavLink>
            </li>
            <li className="sidebarListItem">
              <NavLink to="/feedback" className="link">
                <DynamicFeed className="sidebarIcon" />
                Feedback
              </NavLink>
            </li>
            <li className="sidebarListItem">
              <NavLink to="/messages" className="link">
                <ChatBubbleOutline className="sidebarIcon" />
                Messages
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <NavLink to="/manage" className="link">
                <WorkOutline className="sidebarIcon" />
                Manage
              </NavLink>
            </li>
            <li className="sidebarListItem">
              <NavLink to="/analytics" className="link">
                <Timeline className="sidebarIcon" />
                Analytics
              </NavLink>
            </li>
            <li className="sidebarListItem">
              <NavLink to="/reports" className="link">
                <Report className="sidebarIcon" />
                Reports
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
