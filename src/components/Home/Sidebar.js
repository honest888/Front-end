import React, { useState } from "react";
import { Collapse } from "react-collapse";
import {
  ChevronDown,
  ChevronUp,
  ChevronDoubleLeft,
} from "react-bootstrap-icons";

export default function Sidebar() {
  const [menuList, setMenuList] = useState([
    "Dashboard",
    "Unità Immobiliari e Condomini",
    "Affitti",
    "Stato Lavori in Corso",
    "Membi",
    "Documenti",
    "Calcoli Immobiliari",
    "Alert",
  ]);

  const [subMenuList, setSubMenuList] = useState([
    [],
    ["Calcolatrice", "Calcoli"],
    [],
    ["Calcolatrice", "Calcoli"],
    ["Calcolatrice", "Calcoli"],
    ["Calcolatrice", "Calcoli"],
    ["Calcolatrice", "Calcoli"],
    ["Calcolatrice", "Calcoli"],
  ]);

  const [subMenuOpened, setSubMenuOpened] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [flag, setFlag] = useState(false);

  const [selectedMenu, setSelectedMenu] = useState(0);
  const [selectedSubMenu, setSelectedSubMenu] = useState(-1);

  const onHandleCollapse = (index) => {
    const tempSubMenu = [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ];
    if (subMenuOpened[index] !== true) {
      tempSubMenu[index] = true;
    }

    setSubMenuOpened(tempSubMenu);

    setSelectedSubMenu(-1);
    setSelectedMenu(index);

    setFlag(!flag);
  };

  const handleSubMenu = (index) => {
    setSelectedSubMenu(index);
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <img alt={""} src={"/images/logo.png"} />
      </div>
      <div className="menu">
        {menuList.map((menu, index) => {
          return (
            <div key={"menu" + index} className="sidebar-menu">
              <div>
                <button onClick={(e) => onHandleCollapse(index)}>
                  <p
                    className={
                      selectedMenu == index && subMenuList[index].length == 0
                        ? "active-menu"
                        : ""
                    }
                    style={{ textAlign: "left" }}
                  >
                    {menu}{" "}
                  </p>
                  {subMenuList[index].length > 0 ? (
                    subMenuOpened[index] ? (
                      <ChevronUp />
                    ) : (
                      <ChevronDown />
                    )
                  ) : (
                    <></>
                  )}
                </button>
                <Collapse isOpened={subMenuOpened[index]}>
                  {subMenuList[index].map((subMenu, index) => {
                    return (
                      <p
                        className={
                          selectedSubMenu == index ? "active-menu" : ""
                        }
                        onClick={(e) => handleSubMenu(index)}
                        key={"submenu" + index}
                      >
                        {subMenu}
                      </p>
                    );
                  })}
                </Collapse>
              </div>
            </div>
          );
        })}
      </div>
      <div className="sidebar-footer-menu">
        <p>Supporto</p>
        <p>Impostazioni</p>
        <p>Logout</p>
      </div>
      <div className="sidebar-icon">
        <ChevronDoubleLeft />
      </div>
    </div>
  );
}
