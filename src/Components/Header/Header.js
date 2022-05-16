import React, { useState } from "react";
import { Dropdown, Nav, Sidenav } from "rsuite";
import { Dashboard, Calendar, Storage, Search } from "@rsuite/icons";
import styles from "./Header.module.scss";

const Header = () => {
  const [expanded, setExpanded] = useState(true);
  const [activeKey, setActiveKey] = useState("1");

  const toggleMenu = () => {
    setExpanded(!expanded);
  };
  return (
    <div className={styles.header} style={{ width: expanded ? 240 : 55 }}>
      {/* <Toggle
        onChange={setExpanded}
        checked={expanded}
        checkedChildren="Expand"
        unCheckedChildren="Collapse"
      /> */}
      {/* <hr /> */}
      <Sidenav
        expanded={expanded}
        defaultOpenKeys={["3", "4"]}
        activeKey={activeKey}
        onSelect={setActiveKey}
      >
        <Sidenav.Body>
          <Nav>
            <Nav.Item active={false} eventKey="0" icon={<Search />} onClick={toggleMenu}>
              Згорнути
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<Calendar />}>
              Плани
            </Nav.Item>
            <Nav.Item eventKey="3" icon={<Dashboard />}>
              Статистика
            </Nav.Item>
            <Dropdown
              placement="rightStart"
              eventKey="4"
              title="Спрінти"
              icon={<Storage />}
            >
              <Dropdown.Item eventKey="4-1">Geo</Dropdown.Item>
              <Dropdown.Item eventKey="4-2">Devices</Dropdown.Item>
              <Dropdown.Item eventKey="4-3">Loyalty</Dropdown.Item>
              <Dropdown.Item eventKey="4-4">Visit Depth</Dropdown.Item>
            </Dropdown>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default Header;
