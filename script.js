const data = {
  kozhikode: {
    beaches: [
      { name: "Kozhikode Beach", img: "images/kozhikode_beach.jpg" },
      { name: "Kappad Beach", img: "images/kappad_beach.jpg" },
      { name: "Beypore Beach", img: "images/beypore_beach.jpg" },
      { name: "Payyoli Beach", img: "images/payyoli_beach.jpg" }
    ],
    waterfalls: [
      { name: "Thusharagiri", img: "images/thusharagiri.jpg" },
      { name: "Arippara", img: "images/arippara.jpg" },
      { name: "Urakkuzhi", img: "images/urakkuzhi.jpg" },
      { name: "Elokkara", img: "images/elokkara.jpg" }
    ]
    // Add viewpoints, heritage similarly...
  },
  wayanad: {
    viewpoints: [
      { name: "Lakkidi View Point", img: "images/lakkidi.jpg" },
      { name: "Neelimala", img: "images/neelimala.jpg" },
      { name: "Rippon Viewpoint", img: "images/rippon.jpg" },
      { name: "Sunrise Valley", img: "images/sunrise_valley.jpg" }
    ],
    waterfalls: [
      { name: "Soochipara", img: "images/soochipara.jpg" },
      { name: "Meenmutty", img: "images/meenmutty.jpg" },
      { name: "Kanthanpara", img: "images/kanthanpara.jpg" },
      { name: "Cholamala", img: "images/cholamala.jpg" }
    ]
    // Add trekking, heritage similarly...
  }
};

function showCategory(place, category) {
  const container = document.getElementById(`${place}-content`);

  // Toggle: if already showing this category, clear it
  if (container.dataset.active === category) {
    container.innerHTML = "";
    container.dataset.active = "";
    return;
  }

  // Otherwise show new category
  container.innerHTML = "";
  data[place][category].forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>Explore the beauty of ${item.name}.</p>
    `;
    container.appendChild(card);
  });

  container.dataset.active = category;
}
