import React, { useState } from "react";
import { Menu, Layout } from "antd";

const { Sider, Content } = Layout;

type CatalogItem = {
  key: string;
  label: React.ReactNode;
  children?: CatalogItem[];
};

const items: CatalogItem[] = [
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


const Catalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("smartphones");

  const category = items.find((i) => i.key === selectedCategory);

  return (
    <div className="catalog">
      <h2>Каталог товаров</h2>
      <Layout
        style={{
          background: "#fff"
        }}
      >
        <Sider width={200} style={{ background: "#fff" }}>
          <Menu
            mode="inline"
            selectedKeys={[selectedCategory]}
            onClick={(e) => setSelectedCategory(String(e.key))}
            items={items.map(({ key, label }) => ({ key, label }))}
          />
        </Sider>

        {/* Правое меню — подкатегории */}
        <Content style={{ padding: "16px" }}>
          {category?.children && category.children.length > 0 ? (
            <Menu
              mode="inline"
              items={category.children.map(({ key, label }) => ({ key, label }))}
              style={{ borderRight: 0 }}
            />
          ) : (
            <p>Выберите категорию</p>
          )}
        </Content>
      </Layout>
    </div>
  );
};

export default Catalog;
