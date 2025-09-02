import React, { useEffect, useState } from "react";
import { Menu, Layout, Typography, Button } from "antd";
import { RightOutlined, CloseOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import "./style.scss";

const { Sider, Content } = Layout;
const { Title } = Typography;

type CatalogItem = {
  key: string;
  label: string;
  highlight?: string;
  children?: CatalogItem[];
};

const Catalog: React.FC = () => {
  const [items, setItems] = useState<CatalogItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);
  const [view, setView] = useState<"categories" | "subcategories" | "children">("categories");

  const [visibleBlocks, setVisibleBlocks] = useState({
    categories: true,
    subcategories: true,
    children: true,
  });

  useEffect(() => {
    fetch("http://localhost:3000/catalog")
      .then((res) => res.json())
      .then((data) => setItems(data));

    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const category = items.find((i) => i.key === selectedCategory);
  const subcategory = category?.children?.find((i) => i.key === selectedSubcategory);

  const renderMenuBlock = (
    items: CatalogItem[],
    onClick?: (key: string) => void,
    blockKey?: keyof typeof visibleBlocks
  ) => {
    if (!items || (blockKey && !visibleBlocks[blockKey])) return null;

    return (
      <div className="catalog-block">
        {blockKey && (
          <CloseOutlined
            className="close-icon"
            onClick={() => setVisibleBlocks((prev) => ({ ...prev, [blockKey]: false }))}
          />
        )}
        <Menu
          mode="inline"
          items={items.map(({ key, label, highlight }) => ({
            key,
            label: (
              <div className="menu-item-with-icon">
                {highlight ? <span style={{ color: highlight }}>{label}</span> : label}
                <RightOutlined />
              </div>
            ),
          }))}
          onClick={(e) => onClick && onClick(e.key)}
        />
      </div>
    );
  };

  // 📱 MOBILE
  if (isMobile) {
    return (
      <div className="catalog">
        <Title level={3} style={{ textAlign: "center" }}>
          {view === "categories"
            ? "Каталог товаров"
            : view === "subcategories"
            ? category?.label
            : subcategory?.label}
        </Title>

        {view !== "categories" && (
          <Button
            type="link"
            onClick={() => {
              if (view === "children") {
                setView("subcategories");
                setSelectedSubcategory(null);
              } else {
                setView("categories");
                setSelectedCategory(null);
              }
            }}
          >
            <ArrowLeftOutlined style={{ fontSize: 16 }} />
          </Button>
        )}

        {view === "categories" &&
          renderMenuBlock(items, (key) => {
            setSelectedCategory(key);
            setView("subcategories");
          }, "categories")}

        {view === "subcategories" &&
          category?.children &&
          renderMenuBlock(category.children, (key) => {
            setSelectedSubcategory(key);
            setView("children");
          }, "subcategories")}

        {view === "children" &&
          subcategory?.children &&
          renderMenuBlock(subcategory.children, undefined, "children")}
      </div>
    );
  }

  // 💻 DESKTOP
  return (
    <div className="catalog" style={{ padding: 0, margin: 0 }}>
      <Title level={2}>Каталог товаров</Title>
      <Layout className="catalog__wrapper">
        {/* 1 колонка — категории */}
        <Sider width={280} className="catalog__list">
          {renderMenuBlock(items, (key) => {
            setSelectedCategory(key);
            setSelectedSubcategory(null);
          })}
        </Sider>

        {/* 2 колонка — подкатегории */}
        <Sider width={280} className="catalog__list">
          {category?.children ? (
            renderMenuBlock(category.children, (key) => setSelectedSubcategory(key))
          ) : (
            <p className="catalog__empty">Нет категорий</p>
          )}
        </Sider>

        {/* 3 колонка — вложенные элементы */}
        <Content className="catalog__lest">
          {subcategory?.children ? (
            renderMenuBlock(subcategory.children)
          ) : (
            <p className="catalog__empty">Выберите категорию</p>
          )}
        </Content>

        {/* 4 колонка — баннер */}
        <Content className="catalog__banner">
          <img src="" alt="Реклама" />
        </Content>
      </Layout>
    </div>
  );
};

export default Catalog;
