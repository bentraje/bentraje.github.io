"use client"

import React, { useEffect, useState } from "react";
// import styles from './styles.module.css';

//import KOREAN_DAESU from "./images/ben_traje_char_korean_daesu.jpg";
const menuData = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "Rigging",
    price: 15.99,
    img: '/images/ben_traje_rigging_reel_2020.jpg',
    link: "https://www.youtube.com/watch?v=vCRdjAwNwJs&ab_channel=bentraje",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "Character",
    price: 13.99,
    img: '/images/ben_traje_char_korean_daesu.jpg',
    link: "https://www.instagram.com/p/CDUeUtLgoo6/",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "Character",
    price: 6.99,
    img: '/images/ben_traje_char_korean_pbio.jpg',
    link: "https://www.instagram.com/p/CDt-x8FgugF/",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "Character",
    price: 20.99,
    img: '/images/ben_traje_char_toxic_intolerant.jpg',
    link: "https://www.instagram.com/p/CLJcT5pAGNs/",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "Short",
    price: 22.99,
    img: '/images/ben_traje_short_carnevorous_flower.jpg',
    link: "https://www.instagram.com/p/B9AG-9oFjSh/",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "Mograph",
    price: 18.99,
    img: '/images/bentraje_mograph_blobby_eyes.jpg',
    link: "https://www.instagram.com/p/Cdr6LD_LK1m/?img_index=1",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "Mograph",
    price: 8.99,
    img: '/images/bentraje_mograph_running_pyro_quadruped.jpg',
    link: "https://www.instagram.com/p/CeJWMc6Dd0i/",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "Mograph",
    price: 12.99,
    img: '/images/bentraje_mograph_g_for_growth.jpg',
    link: "https://www.instagram.com/p/B9kiGgvpLdr/",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "Mograph",
    price: 16.99,
    img: '/images/bentraje_mograph_ghost_cloth.jpg',
    link: "https://www.instagram.com/p/Cdh0xO7LlhC/?img_index=1",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "quarantine buddy",
    category: "Illustration",
    price: 16.99,
    img: '/images/bentraje_3d_illustration_bitcoin_magnet.jpg',
    link: "https://dribbble.com/shots/18856259-Magnet-Collect-Bitcoin-3D-Illustration",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 11,
    title: "quarantine buddy",
    category: "Illustration",
    price: 16.99,
    img: '/images/bentraje_3d_illustration_bitcoin_pile_mining.jpg',
    link: "https://dribbble.com/shots/15856720-Bitcoin-Mining",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 12,
    title: "quarantine buddy",
    category: "Illustration",
    price: 16.99,
    img: '/images/bentraje_3d_illustration_bitcoin_hologram.jpg',
    link: "https://dribbble.com/shots/18928627-Hologram-Web-Bitcoin-3D-Illustration-Concept",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredMenu, setFilteredMenu] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All"); // Track active category

  useEffect(() => {
    setMenu(menuData);
    setFilteredMenu(menuData);
  }, []);

  const displayMenuItems = (menuItems) => {
    return menuItems.map((item) => (
      <article
        key={item.id}
        className="aspect-square overflow-hidden rounded-lg"
      >
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </a>
      </article>
    ));
  };

  const displayMenuButtons = () => {
    if (!menu.length) return null;

    const categories = ["All", ...new Set(menu.map((item) => item.category))];

    return categories.map((category) => (
      <button
        key={category}
        type="button"
        onClick={() => handleFilter(category)}
        className={`px-4 py-2 m-2 rounded-lg ${
          activeCategory === category
            ? "bg-black text-white"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        {category}
      </button>
    ));
  };

  const handleFilter = (category) => {
    setActiveCategory(category); // Set active category for styling
    if (category === "All") {
      setFilteredMenu(menu);
    } else {
      setFilteredMenu(menu.filter((item) => item.category === category));
    }
  };

  return (
    <section className="menu font-[family-name:var(--font-geist-sans)]">
      <div className="title">
        <h2 className="text-center text-xl font-bold"></h2>
        <div className="underline my-4"></div>
      </div>
      <div className="btncontainer flex flex-wrap justify-center">
        {displayMenuButtons()}
      </div>
      <div className="container mx-auto max-w-screen-lg w-4/5">
        {" "}
        {/* Center container */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayMenuItems(filteredMenu)}
        </div>
      </div>
    </section>
  );
};

export default Menu;
