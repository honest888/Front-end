import React, { useState } from "react";

export default function ContentLeft() {
  const [menuList, setMenuList] = useState([
    "Aggiornamento ISTAT",
    "Imposta di registro",
    "Ravvedimento imposta di registro",
    "Ravvedimento imposta di bollo",
    "Interessi",
    "Reddito di fabbricato",
    "Operazioni con date",
    "Valore sulla nuda proprietà",
    "Acconto IMU",
    "Imposte compravendita",
    "Tasi",
  ]);

  const [menuListActive, setMenuListActive] = useState([
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleMenuClick = (index) => {
    const tempMenuListActive = [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ];

    tempMenuListActive[index] = true;

    setMenuListActive(tempMenuListActive);
  };

  return (
    <div className="content-left">
      <ul>
        {menuList.map((menu, index) => {
          return (
            <li
              key={"li" + index}
              className={`menulist ${
                menuListActive[index] ? "active-menu" : ""
              }`}
              onClick={(e) => {
                handleMenuClick(index);
              }}
            >
              {menu}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
