import React from "react";
import { Menu } from "antd";
import type { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "smartphones",
    label: "Смартфоны",
    children: [
      { key: "all", label: "Все смартфоны" },
      { key: "new", label: <span style={{ color: "red" }}>New</span> },
      { key: "cheap", label: "Недорогие смартфоны" },
      {
        key: "apple",
        label: "Apple",
        children: [
          {
            key: "iphone14pro",
            label: <span style={{ color: "red" }}>New iPhone 14 Pro</span>,
          },
          { key: "iphone14plus", label: "iPhone 14 Plus" },
          { key: "iphone13", label: "iPhone 13" },
          { key: "iphone12", label: "iPhone 12" },
        ],
      },
      {
        key: "samsung",
        label: "Samsung",
        children: [
          { key: "s23", label: "Galaxy S23" },
          { key: "s22", label: "Galaxy S22" },
        ],
      },
    ],
  },
  {
    key: "laptops",
    label: "Ноутбуки",
    children: [
      { key: "gaming", label: "Игровые ноутбуки" },
      { key: "office", label: "Офисные ноутбуки" },
    ],
  },
  {
    key: "accessories",
    label: "Аксессуары",
    children: [
      { key: "headphones", label: "Наушники" },
      { key: "watch", label: "Умные часы" },
    ],
  },
  {
    key: "tablet",
    label: "Планшеты",
    children: [
      { key: "ipad", label: "iPad" },
      { key: "samsungtab", label: "Samsung Tab" },
    ],
  },
  {
    key: "smartwatch",
    label: "Смарт-часы",
    children: [
      { key: "applewatch", label: "Apple Watch" },
      { key: "samsungwatch", label: "Samsung Watch" },
    ],
  },
];

const onClick: MenuProps["onClick"] = (e) => {
  console.log("click ", e);
};

const Catalog: React.FC = () => {
  return (
    <div className="catalog">
      <h2>Каталог товаров</h2>
      <Menu
        onClick={onClick}
        style={{ width: 300 }}
        mode="vertical"
        items={items}
      />
    </div>
  );
};

export default Catalog;
