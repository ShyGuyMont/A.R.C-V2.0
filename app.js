// --- Schema: same sections and questions as your old template (easy to edit later) ---
const ARTS_DB = {
	"styles": {
    "Lightning": {
	 meta: { color: "#7c3aed" },  // purple
      "tiers": {
        "Tier 2": [
          { "name": "Surge Pulse Arts" },
          { "name": "Arcing Strike Arts" },
          { "name": "Conductive Grid Arts" },
          { "name": "Magnetic Flux Arts" },
          { "name": "Tempest Veil Arts" },
          { "name": "Pulse Shroud Arts" },
          { "name": "Lightning Step Arts" }
        ],
        "Tier 3": [
          { "name": "Arc Convergence Arts" },
          { "name": "Plasma Forge Arts" },
          { "name": "Lightning Mirage Arts" },
          { "name": "Thunder Cage Arts" },
          { "name": "Electro-Vortex Arts" },
          { "name": "Storm Conductor Arts" },
          { "name": "Voltage Chain Arts" },
          { "name": "Electro-Repulse Arts" }
        ],
        "Forbidden": [
          { "name": "Quantum Phase Arts" },
          { "name": "Apex Storm Arts" },
          { "name": "Eternal Tempest Arts" },
          { "name": "Synchronic Rift Arts" },
          { "name": "Armageddon Core Arts" },
          { "name": "Nexus Wrath Arts" },
          { "name": "Mirage Blitz Arts" },
          { "name": "Atom/Atomic Arts" }
        ]
      }
    },
    "Fire": {
	meta: { color: "#dc2626" },  // red
       "tiers": {
        "Tier 2": [
		{ "name": "Obscurring Ember Arts" },
		{ "name": "Infernal Surge Arts" },
		{ "name": "Scorchfall Arts" },
		{ "name": "Wildfire Arts" },
		{ "name": "MagmaFlow Arts" },
		{ "name": "Heat Mirage Arts" }
		],
        "Tier 3": [
		{ "name": "Detonation Arts" },
		{ "name": "Pheonix Rebirth Arts" },
		{ "name": "Sacred Flame Arts" },
		{ "name": "Solar Incineration Arts" },
		{ "name": "Ember Haven Arts" },
		{ "name": "Scorchline Arts" },
		{ "name": "Amber Shroud Arts" },
		{ "name": "Lava Bloom Arts" }
		],
        "Forbidden": [
		{ "name": "Hellfire Arts" },
		{ "name": "Pyroclasm Arts" },
		{ "name": "Infernal Bloom Arts" },
		{ "name": "Ashen Spiral Arts" },
		{ "name": "Flame Warden Arts" },
		{ "name": "Cataclysm Tempest Arts" },
		{ "name": "Blazing Eternity Arts" }
		]
      }
    },
    "Water": {
	 meta: { color: "#2563eb" },
      "tiers": {
        "Tier 2": [
		{ "name": "Mist Veil Arts" },
		{ "name": "Ice Shard Arts" },
		{ "name": "Whirlpool Arts" },
		{ "name": "Rain Arts" },
		{ "name": "Hydro Healing Arts" },
		{ "name": "Tidal Grip Arts" },
		{ "name": "Bubble Enclosure Arts" }
		],
        "Tier 3": [
		{ "name": "Abyss Arts" },
		{ "name": "Geyser Arts" },
		{ "name": "Crystal Blast Arts" },
		{ "name": "Cascade Grasp Arts" },
		{ "name": "Abyssal Surge Arts" },
		{ "name": "Bubble Fortress Arts" },
		{ "name": "Maelstrom Arts" }
		],
        "Forbidden": [
		{ "name": "Tidal Wave Arts" },
		{ "name": "Frozen Tempest Arts" },
		{ "name": "Life Blood Arts" },
		{ "name": "Abyss Dominion Arts" },
		{ "name": "Ocean's Wrath Arts" },
		{ "name": "Eternal Ice Prison Arts" },
		{ "name": "Leviathan Ascension Arts" },
		{ "name": "Aether Sphere Arts" }
		]
  }
},
	"Wind": {
	meta: { color: "#64748b" },
		"tiers": {
			"Tier 2": [
			{ "name": "Wind Scythe Arts" },
			{ "name": "Vacuum Arts" },
			{ "name": "Gale Force Arts" },
			{ "name": "Mist Gale Arts" },
			{ "name": "Shielding Breeze Arts" },
			{ "name": "Zephyr Arts" },
			{ "name": "Pressure Snap Arts" },
			{ "name": "Tempest Arts" },
			{ "name": "Spiral Current Arts" }
			],
			"Tier 3": [
			{ "name": "Cyclone Arts" },
			{ "name": "Whisper Blade Arts" },
			{ "name": "Pressure Wave Arts" },
			{ "name": "Slicing Tempest Arts" },
			{ "name": "Serene Flow Arts" },
			{ "name": "Skyborne Dominion Arts" }
			],
			"Forbidden": [
			{ "name": "Hurricane Sovereign Arts" },
			{ "name": "Celestial Spiral Arts" },
			{ "name": "Silent Cataclysm Arts" },
			{ "name": "Breath of Eternity Arts" },
			{ "name": "Zephyr's Judgement Arts" },
			{ "name": "Eternal Storm" },
			{ "name": "Shattering Silence Arts" }
			]
  }
},
	"Earth": {
	meta: { color: "#15803d" },
		"tiers": {
			"Tier 2": [
			{ "name": "Tremor Arts" },
			{ "name": "Earthen Grasp Arts" },
			{ "name": "Quicksand Arts" },
			{ "name": "Stone Blade Arts" },
			{ "name": "Bloom Arts" },
			{ "name": "Metal Arts" },
			{ "name": "Crystal Forge Arts" },
			{ "name": "Seismic Wave Arts" }
			],
			"Tier 3": [
			{ "name": "Gemstone Arts" },
			{ "name": "Graviton Arts" },
			{ "name": "Earthen Shell Arts" },
			{ "name": "Quarry Arts" },
			{ "name": "Natures Retribution Arts" },
			{ "name": "Golem Forge Arts" },
			{ "name": "Titan's Stride Arts" },
			{ "name": "Subterranean Ambush Arts" },
			{ "name": "Verdant Renewal Arts" }
			
			],
			"Forbidden": [
			{ "name": "World Tree Arts" },
			{ "name": "Continental Shift Arts" },
			{ "name": "Geoforge Arts" },
			{ "name": "Titan's Genesis Arts" },
			{ "name": "Eternal Garden Arts" },
			{ "name": "Core Implosion Arts" },
			{ "name": "Gaia's Embrace Arts" }
			]
  }
},


	     
  }
}

const LOCATIONS_DB = {
  "USA": {
    "California": ["Los Angeles", "San Diego", "San Francisco", "San Jose", "Sacramento"],
    "New York": ["New York City", "Buffalo", "Rochester"],
    "Texas": ["Houston", "Dallas", "Austin", "San Antonio"],
    "Florida": ["Miami", "Orlando", "Tampa", "Jacksonville"],
    "Illinois": ["Chicago"],
    "Georgia": ["Atlanta"],
    "Washington": ["Seattle"],
    "Massachusetts": ["Boston"],
    "Pennsylvania": ["Philadelphia", "Pittsburgh"],
    "Maryland": ["Baltimore", "Annapolis", "Columbia", "Silver Spring"]
  },

  "Canada": {
    "Ontario": ["Toronto", "Ottawa"],
    "British Columbia": ["Vancouver", "Victoria"],
    "Quebec": ["Montreal", "Quebec City"],
    "Alberta": ["Calgary", "Edmonton"]
  },

  "United Kingdom": {
  "England": ["London", "Manchester", "Birmingham", "Liverpool", "Leeds", "Bristol", "Sheffield", "Nottingham"],
  "Scotland": ["Edinburgh", "Glasgow", "Aberdeen"],
  "Wales": ["Cardiff", "Swansea"],
  "Northern Ireland": ["Belfast", "Derry (Londonderry)"]
},


  "France": {
  "Île-de-France": ["Paris"],
  "Provence-Alpes-Côte d’Azur": ["Marseille", "Nice", "Cannes"],
  "Auvergne-Rhône-Alpes": ["Lyon", "Grenoble"],
  "Occitanie": ["Toulouse", "Montpellier"],
  "Nouvelle-Aquitaine": ["Bordeaux"],
  "Hauts-de-France": ["Lille"],
  "Grand Est": ["Strasbourg"],
  "Normandy": ["Rouen"],
  "Brittany": ["Rennes", "Brest"]
},


  "Germany": {
  "Berlin": ["Berlin"],
  "Bavaria": ["Munich", "Nuremberg"],
  "Hamburg": ["Hamburg"],
  "Hesse": ["Frankfurt", "Wiesbaden"],
  "North Rhine-Westphalia": ["Cologne", "Düsseldorf", "Dortmund", "Essen"],
  "Baden-Württemberg": ["Stuttgart", "Heidelberg"],
  "Saxony": ["Dresden", "Leipzig"],
  "Lower Saxony": ["Hanover"]
},


  "Spain": {
  "Community of Madrid": ["Madrid"],
  "Catalonia": ["Barcelona"],
  "Andalusia": ["Seville", "Malaga", "Granada"],
  "Valencian Community": ["Valencia", "Alicante"],
  "Basque Country": ["Bilbao", "San Sebastián"],
  "Galicia": ["Santiago de Compostela", "A Coruña"],
  "Canary Islands": ["Las Palmas", "Santa Cruz de Tenerife"],
  "Balearic Islands": ["Palma"]
},


  "Italy": {
    "Lazio": ["Rome"],
    "Lombardy": ["Milan"],
    "Campania": ["Naples"],
    "Piedmont": ["Turin"]
  },

  "Brazil": {
  "São Paulo": ["São Paulo", "Campinas", "Santos"],
  "Rio de Janeiro": ["Rio de Janeiro", "Niterói"],
  "Minas Gerais": ["Belo Horizonte", "Uberlândia"],
  "Paraná": ["Curitiba", "Londrina"],
  "Rio Grande do Sul": ["Porto Alegre", "Caxias do Sul"],
  "Santa Catarina": ["Florianópolis", "Joinville"],
  "Bahia": ["Salvador"],
  "Pernambuco": ["Recife"],
  "Ceará": ["Fortaleza"],
  "Pará": ["Belém"],
  "Amazonas": ["Manaus"],
  "Distrito Federal": ["Brasília"]
},


  "Mexico": {
  "CDMX": ["Mexico City"],
  "Jalisco": ["Guadalajara", "Puerto Vallarta"],
  "Nuevo León": ["Monterrey"],
  "Puebla": ["Puebla City"],
  "Baja California": ["Tijuana", "Mexicali"],
  "Chihuahua": ["Chihuahua City", "Ciudad Juárez"],
  "Coahuila": ["Saltillo", "Torreón"],
  "Guanajuato": ["León", "Guanajuato City"],
  "Querétaro": ["Querétaro"],
  "Yucatán": ["Mérida"],
  "Quintana Roo": ["Cancún", "Playa del Carmen", "Tulum"],
  "Sinaloa": ["Culiacán", "Mazatlán"],
  "Sonora": ["Hermosillo"],
  "Veracruz": ["Veracruz", "Xalapa"],
  "Oaxaca": ["Oaxaca City"],
  "Michoacán": ["Morelia"]
},


  "China": {
  "Beijing": ["Beijing"],
  "Shanghai": ["Shanghai"],
  "Tianjin": ["Tianjin"],
  "Chongqing": ["Chongqing"],

  "Guangdong": ["Guangzhou", "Shenzhen", "Dongguan", "Foshan", "Zhuhai"],
  "Zhejiang": ["Hangzhou", "Ningbo", "Wenzhou", "Shaoxing"],
  "Jiangsu": ["Nanjing", "Suzhou", "Wuxi", "Changzhou"],
  "Fujian": ["Fuzhou", "Xiamen", "Quanzhou"],

  "Shandong": ["Jinan", "Qingdao", "Yantai"],
  "Henan": ["Zhengzhou", "Luoyang"],
  "Hubei": ["Wuhan", "Yichang"],
  "Hunan": ["Changsha", "Zhuzhou"],
  "Anhui": ["Hefei", "Wuhu"],
  "Jiangxi": ["Nanchang"],

  "Sichuan": ["Chengdu", "Mianyang"],
  "Shaanxi": ["Xi'an", "Baoji"],
  "Liaoning": ["Shenyang", "Dalian"],
  "Jilin": ["Changchun"],
  "Heilongjiang": ["Harbin"],

  "Guangxi": ["Nanning", "Guilin"],
  "Yunnan": ["Kunming", "Dali", "Lijiang"],
  "Guizhou": ["Guiyang"],

  "Xinjiang": ["Urumqi"],
  "Tibet": ["Lhasa"],
  "Inner Mongolia": ["Hohhot"],
  "Hong Kong": ["Hong Kong"],
  "Macau": ["Macau"]
},


  "Japan": {
  "Hokkaido": ["Sapporo", "Hakodate", "Asahikawa"],
  "Tohoku": ["Sendai", "Aomori", "Morioka", "Fukushima", "Akita", "Yamagata"],
  "Kanto": ["Tokyo", "Yokohama", "Kawasaki", "Chiba", "Saitama", "Tsukuba"],
  "Chubu": ["Nagoya", "Niigata", "Kanazawa", "Toyama", "Nagano", "Shizuoka", "Hamamatsu"],
  "Kansai": ["Osaka", "Kyoto", "Kobe", "Nara", "Sakai", "Otsu"],
  "Chugoku": ["Hiroshima", "Okayama", "Shimonoseki", "Tottori"],
  "Shikoku": ["Matsuyama", "Takamatsu", "Tokushima", "Kochi"],
  "Kyushu": ["Fukuoka", "Kitakyushu", "Nagasaki", "Kumamoto", "Kagoshima", "Oita", "Miyazaki", "Naha (Okinawa)"]
},


  "South Korea": {
    "Seoul Capital Area": ["Seoul", "Incheon", "Suwon"],
    "Busan Region": ["Busan"],
    "Daegu Region": ["Daegu"],
    "Daejeon Region": ["Daejeon"]
  },

  "India": {
  "Delhi": ["New Delhi", "Delhi"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
  "Karnataka": ["Bengaluru", "Mysuru"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
  "Telangana": ["Hyderabad"],
  "West Bengal": ["Kolkata"],
  "Gujarat": ["Ahmedabad", "Surat", "Vadodara"],
  "Rajasthan": ["Jaipur", "Udaipur", "Jodhpur"],
  "Uttar Pradesh": ["Lucknow", "Varanasi", "Agra", "Kanpur"],
  "Punjab": ["Chandigarh", "Ludhiana", "Amritsar"],
  "Kerala": ["Kochi", "Thiruvananthapuram"],
  "Madhya Pradesh": ["Bhopal", "Indore"],
  "Bihar": ["Patna"],
  "Odisha": ["Bhubaneswar"],
  "Andhra Pradesh": ["Visakhapatnam"],
  "Assam": ["Guwahati"]
},


  "Nigeria": {
  "Lagos": ["Lagos"],
  "Federal Capital Territory": ["Abuja"],
  "Rivers": ["Port Harcourt"],
  "Kano": ["Kano"],
  "Oyo": ["Ibadan"],
  "Kaduna": ["Kaduna"],
  "Enugu": ["Enugu"]
},

  "South Africa": {
  "Gauteng": ["Johannesburg", "Pretoria", "Soweto"],
  "Western Cape": ["Cape Town", "Stellenbosch"],
  "KwaZulu-Natal": ["Durban", "Pietermaritzburg"],
  "Eastern Cape": ["Gqeberha (Port Elizabeth)"],
  "Free State": ["Bloemfontein"]
},


  "Egypt": {
  "Cairo": ["Cairo", "Giza"],
  "Alexandria": ["Alexandria"],
  "Red Sea": ["Hurghada"],
  "Luxor": ["Luxor"],
  "Aswan": ["Aswan"]
},


  "Australia": {
    "New South Wales": ["Sydney"],
    "Victoria": ["Melbourne"],
    "Queensland": ["Brisbane"],
    "Western Australia": ["Perth"],
    "South Australia": ["Adelaide"]
  },

 "Philippines": {
  "Metro Manila": ["Manila", "Quezon City", "Makati", "Pasig"],
  "Cebu": ["Cebu City"],
  "Davao": ["Davao City"],
  "Iloilo": ["Iloilo City"],
  "Benguet": ["Baguio"]
},


  "Vietnam": {
  "North": ["Hanoi", "Haiphong"],
  "Central": ["Da Nang", "Hue"],
  "South": ["Ho Chi Minh City", "Can Tho"]
},

  
  "Russia": {
  "Moscow": ["Moscow"],
  "Saint Petersburg": ["Saint Petersburg"],
  "Novosibirsk Oblast": ["Novosibirsk"],
  "Sverdlovsk Oblast": ["Yekaterinburg"],
  "Nizhny Novgorod Oblast": ["Nizhny Novgorod"],
  "Tatarstan": ["Kazan"],
  "Samara Oblast": ["Samara"],
  "Rostov Oblast": ["Rostov-on-Don"],
  "Krasnodar Krai": ["Krasnodar", "Sochi"],
  "Krasnoyarsk Krai": ["Krasnoyarsk"],
  "Primorsky Krai": ["Vladivostok"],
  "Irkutsk Oblast": ["Irkutsk"]
},

  "Thailand": {
  "Bangkok": ["Bangkok"],
  "Chiang Mai": ["Chiang Mai"],
  "Phuket": ["Phuket"],
  "Chonburi": ["Pattaya"],
  "Khon Kaen": ["Khon Kaen"]
},

"Indonesia": {
  "Jakarta": ["Jakarta"],
  "West Java": ["Bandung", "Bekasi"],
  "East Java": ["Surabaya", "Malang"],
  "Bali": ["Denpasar"],
  "Special Region of Yogyakarta": ["Yogyakarta"],
  "North Sumatra": ["Medan"],
  "South Sulawesi": ["Makassar"]
},

  
};

const FACTIONS_DB = {
  "Brigade": {
    ranks: [
      "Novice",
      "Operative",
      "Commander",
      "General",
	  "Director of Combat Ops",
	  "Director of Intelligence",
	  "Director of Research",
	  "Director of Logistics",
	  "Director of Medical Services",
	  "Director of Special Ops",
	  "Director of Training & Recruitment",
	  "Warden (Atlas Citadel)",
	  "Warden (Tundra Sentinel)",
	  "Warden (Ashen Apex)",
	  "Warden (Bastion of Unity)",
	  "Warden (Verdant Rainspire)",
	  "High Sentinel",
	  "High Commander",
	  "GrandMaster",
	  "Specialist/Personnel"
    ],
    sectors: [
      "Striker",
      "Barrier",
      "Ghost",
      "Intelligence",
      "Tether",
      "Special Ops",
	  "Rescue"
    ]
  },

  // Other factions (no ranks/sectors unless you add later)
  "Other": {},
  "Effigies": {},
  "Independent": {},
  "Order of Shadows": {},
  "Royal Court": {},
  "Crystal Alliance": {},
  "Elemental Circle": {},
  "Government": {},
  "Solar Dominion": {},
  "Old Rebellion": {},
  "New Rebellion": {}
};

const GRACED_MAP = {
  body: new Set(["hand_to_hand","strength","speed","durability","reflexes"]),
  mind: new Set(["battle_prowess","intelligence","proficiency"]),
  soul: new Set(["nature_energy","arts_potency"])
};

function getGracedMultiplierForStat(statKey) {
  const body = Number(character.graced_body || 0);
  const mind = Number(character.graced_mind || 0);
  const soul = Number(character.graced_soul || 0);

  if (GRACED_MAP.body.has(statKey)) return 1 + body;
  if (GRACED_MAP.mind.has(statKey)) return 1 + mind;
  if (GRACED_MAP.soul.has(statKey)) return 1 + soul;
  return 1;
}


function getStyleNames() {
  return Object.keys(ARTS_DB.styles || {});
}

function getCountries() {
  return Object.keys(LOCATIONS_DB);
}

function getRegions(country) {
  return Object.keys(LOCATIONS_DB[country] || {});
}

function getCities(country, region) {
  return (LOCATIONS_DB[country] && LOCATIONS_DB[country][region]) ? LOCATIONS_DB[country][region] : [];
}

function getFactionNames() {
  return Object.keys(FACTIONS_DB);
}

function isBrigade() {
  return character.faction === "Brigade";
}

function getBrigadeRanks() {
  return FACTIONS_DB?.Brigade?.ranks || [];
}

function getBrigadeSectors() {
  return FACTIONS_DB?.Brigade?.sectors || [];
}


// Flatten tiers into one list, but label them like "Tier 3: Arc Convergence Arts"
function getLabeledArtsForStyle(style) {
  const tiers = (ARTS_DB.styles && ARTS_DB.styles[style] && ARTS_DB.styles[style].tiers)
    ? ARTS_DB.styles[style].tiers
    : {};

  const out = [];
  for (const [tierName, artsArr] of Object.entries(tiers)) {
    for (const art of artsArr) {
      out.push(`${tierName}: ${art.name}`);
    }
  }
  return out;
}

function setStyleAccent(styleName) {
  let color = "#7c3aed";
  if (ARTS_DB.styles && ARTS_DB.styles[styleName] && ARTS_DB.styles[styleName].meta && ARTS_DB.styles[styleName].meta.color) {
    color = ARTS_DB.styles[styleName].meta.color;
  }
  document.documentElement.style.setProperty("--style-accent", color);
}

function drawRadar() {
  const canvas = document.getElementById("radarCanvas");
  const RADAR_MAX = 200; // allows up to +100% Graced on a 1000 base

  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const W = canvas.width, H = canvas.height;
  ctx.clearRect(0, 0, W, H);

  const accent = getComputedStyle(document.documentElement)
    .getPropertyValue("--style-accent").trim() || "#7c3aed";

  const keys = [
    "hand_to_hand",
    "strength",
    "speed",
    "durability",
    "reflexes",
    "nature_energy",
    "proficiency",
    "arts_potency",
    "battle_prowess",
    "intelligence"
  ];

  const labels = [
    "Hand-to-hand",
    "Strength",
    "Speed",
    "Durability",
    "Reflexes",
    "Nature Energy",
    "Proficiency",
    "Arts Potency",
    "Battle Prowess",
    "Intelligence"
  ];

  const cx = W / 2;
  const cy = H / 2;
  const radius = Math.min(W, H) * 0.33;

  function val(k) {
  let v = character?.stats?.[k];
  v = Number(v);
  if (Number.isNaN(v)) v = 0;
  if (v < 0) v = 0;

  // Apply Graced multiplier overlay
  const mult = getGracedMultiplierForStat(k);
  v = v * mult;

  // cap to your radar max
  if (v > RADAR_MAX) v = RADAR_MAX;

  return v;
}


  const N = keys.length;
  const startAng = -Math.PI / 2;

  ctx.save();
  ctx.translate(cx, cy);
  ctx.lineWidth = 1;
  ctx.strokeStyle = "rgba(60,40,20,.25)";
  ctx.fillStyle = "rgba(60,40,20,.65)";
  ctx.font = "12px EB Garamond";

  const rings = Array.from({length: 5}, (_, i) => Math.round((RADAR_MAX / 5) * (i + 1)));

  rings.forEach(rVal => {
    const r = radius * (rVal / RADAR_MAX);
    ctx.beginPath();
    for (let i = 0; i < N; i++) {
      const a = startAng + (i * 2 * Math.PI / N);
      const x = Math.cos(a) * r;
      const y = Math.sin(a) * r;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();
    ctx.fillText(String(rVal), -10, -r - 4);
  });

  for (let i = 0; i < N; i++) {
    const a = startAng + (i * 2 * Math.PI / N);
    const x = Math.cos(a) * radius;
    const y = Math.sin(a) * radius;

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(x, y);
    ctx.stroke();

    const lx = Math.cos(a) * (radius + 22);
    const ly = Math.sin(a) * (radius + 22);

    ctx.textAlign = (Math.cos(a) > 0.25) ? "left" : (Math.cos(a) < -0.25 ? "right" : "center");
    ctx.textBaseline = (Math.sin(a) > 0.25) ? "top" : (Math.sin(a) < -0.25 ? "bottom" : "middle");
    ctx.fillText(labels[i], lx, ly);
  }

  const pts = keys.map((k, i) => {
    const a = startAng + (i * 2 * Math.PI / N);
    const r = radius * (val(k) / RADAR_MAX);
    return { x: Math.cos(a) * r, y: Math.sin(a) * r };
  });

  ctx.beginPath();
  pts.forEach((p, i) => {
    if (i === 0) ctx.moveTo(p.x, p.y);
    else ctx.lineTo(p.x, p.y);
  });
  ctx.closePath();

  ctx.globalAlpha = 0.18;
  ctx.fillStyle = accent;
  ctx.fill();

  ctx.globalAlpha = 0.95;
  ctx.lineWidth = 3;
  ctx.strokeStyle = accent;
  ctx.stroke();

  ctx.globalAlpha = 1;
  ctx.fillStyle = accent;
  pts.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.restore();
}



const SCHEMA = [
  {
    title: "Section 1: The Basics",
    fields: [
      { key: "name", label: "Name", type: "text" },
	  { key: "alias", label: "Alias / Codename", type: "text" },
      { key: "age", label: "Age", type: "text" },
	  { key: "status", label: "Status", type: "select", options: ["Alive", "Deceased", "Sealed", "Missing", "Unknown"] },
      { key: "role", label: "Role in the Story", type: "text" },
	  { key: "era", label: "Era / Timeline", type: "text" },
      { key: "ethnicity", label: "Ethnicity", type: "text" },
      { key: "origin_country", label: "Birthplace (Country)", type: "select_country" },
      { key: "origin_region",  label: "Birthplace (Region/State)", type: "select_region" },
      { key: "origin_city",    label: "Birthplace (City)", type: "select_city" },
      { key: "hair", label: "Hair", type: "text" },
      { key: "eyes", label: "Eyes", type: "text" },
      { key: "height", label: "Height", type: "text" },
	  { key: "build", label: "Build / Physique", type: "text" },
      { key: "weapon", label: "Weapon", type: "text" },
      { key: "personality_positive", label: "Personality Traits (Positive)", type: "textarea" },
      { key: "personality_negative", label: "Personality Traits (Negative)", type: "textarea" },
    ],
  },
  {
    title: "Section 2: Relationships & Affiliations",
    fields: [
      { key: "family", label: "Family", type: "textarea" },
      { key: "relationship_history", label: "Relationship History", type: "textarea" },
	  { key: "allies", label: "Allies", type: "textarea" },
      { key: "rivals", label: "Rivals", type: "textarea" },
	  { key: "enemies", label: "Enemies", type: "textarea" },
	  { key: "faction", label: "Faction", type: "select_faction" },
      { key: "brigade_rank", label: "Brigade Rank", type: "select_brigade_rank" },
      { key: "brigade_sector", label: "Brigade Sector (optional)", type: "select_brigade_sector_optional" },
	  { key: "mentor", label: "Mentor(s)", type: "textarea" },
      { key: "students", label: "Students / Proteges", type: "textarea" },
      { key: "starting_class", label: "Starting Class", type: "select", options: ["F","E","D","C","B","A","S","SS","World-Class"] },
      { key: "ending_class", label: "Ending Class", type: "select", options: ["F","E","D","C","B","A","S","SS","World-Class"] },


    ],
  },
  {
   title: "Section 3: Story",
   fields: [
     { key: "goal", label: "What is their goal?", type: "textarea" },
     { key: "beliefs", label: "What do they strongly believe in?", type: "textarea" },

     { key: "want", label: "What do they WANT (surface desire)?", type: "textarea" },
     { key: "need", label: "What do they NEED (inner growth)?", type: "textarea" },

     { key: "love", label: "What do they love?", type: "textarea" },
     { key: "hate", label: "What do they hate?", type: "textarea" },

     { key: "wound", label: "Core Wound / Deepest Scar", type: "textarea" },
     { key: "fear", label: "Greatest Fear", type: "textarea" },
     { key: "flaw", label: "Fatal Flaw / Weakness of Character", type: "textarea" },

     { key: "secrets", label: "What secrets do they have?", type: "textarea" },
     { key: "line", label: "Line They Won't Cross", type: "textarea" },
     { key: "breaking_point", label: "What pushes them over the edge?", type: "textarea" },

     { key: "different", label: "What makes them different?", type: "textarea" },
     { key: "defining_moment", label: "What was a defining moment in their past?", type: "textarea" },
     { key: "changes", label: "How does their character change over time?", type: "textarea" },
     { key: "key_moments", label: "What are their key moments?", type: "textarea" }
	 
	 
    ],
 },
   {
   title: "Section 4: Power System & Arts",
   fields: [
  { key: "style", label: "Style", type: "select_style" },
  { key: "arts", label: "Arts (pick as many as needed)", type: "multiselect_arts" },
  { key: "graced_body", label: "Graced Body", type: "select_graced" },
  { key: "graced_mind", label: "Graced Mind", type: "select_graced" },
  { key: "graced_soul", label: "Graced Soul", type: "select_graced" }
 
	 
    ],
 },
 
 {
  title: "Section 5: Final Stats (0–100)",
  fields: [
    { key: "hand_to_hand", label: "Hand-to-hand Combat", type: "stat" },
    { key: "strength", label: "Strength", type: "stat" },
    { key: "speed", label: "Speed/Agility", type: "stat" },
    { key: "durability", label: "Durability", type: "stat" },
    { key: "reflexes", label: "Reflexes", type: "stat" },
    { key: "nature_energy", label: "Nature Energy", type: "stat" },
    { key: "proficiency", label: "Nature Energy Proficiency", type: "stat" },
    { key: "arts_potency", label: "Arts Potency", type: "stat" },
    { key: "battle_prowess", label: "Battle Prowess", type: "stat" },
    { key: "intelligence", label: "Intelligence", type: "stat" }
  ]
},

 
 ];

// --- State ---
let character = {}; // key -> value
character.stats = {
  hand_to_hand: 0,
  strength: 0,
  speed: 0,
  durability: 0,
  reflexes: 0,
  nature_energy: 0,
  proficiency: 0,
  arts_potency: 0,
  battle_prowess: 0,
  intelligence: 0
};

// --- DOM ---
const formRoot = document.getElementById("formRoot");
const previewRoot = document.getElementById("previewRoot");
const saveJsonBtn = document.getElementById("saveJsonBtn");
const printBtn = document.getElementById("printBtn");
const jsonFile = document.getElementById("jsonFile");

// --- Render ---
function renderForm() {
	setStyleAccent(character.style || getStyleNames()[0]);

  formRoot.innerHTML = "";

  SCHEMA.forEach(section => {
    const box = document.createElement("div");
    box.className = "section";

    const h = document.createElement("h3");
    h.textContent = section.title;
    box.appendChild(h);

    section.fields.forEach(f => {
      const wrap = document.createElement("div");
      wrap.className = "field";

      const label = document.createElement("label");
      label.textContent = f.label;
      wrap.appendChild(label);

      let input;

      // 1) textarea
      if (f.type === "textarea") {
        input = document.createElement("textarea");
        input.value = character[f.key] ?? "";
        input.addEventListener("input", () => {
          character[f.key] = input.value;
          renderPreview();
        });

      // 2) Style dropdown (dynamic)
      } else if (f.type === "select_style") {
        input = document.createElement("select");

        const styles = getStyleNames();
        styles.forEach(s => {
          const o = document.createElement("option");
          o.value = s;
          o.textContent = s;
          input.appendChild(o);
        });

        // default
        input.value = character.style ?? styles[0] ?? "";

        input.addEventListener("change", () => {
          character.style = input.value;
		  setStyleAccent(character.style); 
          character.arts = [];   // reset arts on style change
          renderForm();          // refresh arts list
          renderPreview();
        });

      // 3) Arts multi-select (dynamic, labeled by tier)
      } else if (f.type === "multiselect_arts") {
        input = document.createElement("select");
        input.multiple = true;

        const style = character.style ?? getStyleNames()[0] ?? "";
        if (!character.style) character.style = style;

        const arts = getLabeledArtsForStyle(style);

        arts.forEach(a => {
          const o = document.createElement("option");
          o.value = a;
          o.textContent = a;
          input.appendChild(o);
        });

        if (!Array.isArray(character.arts)) character.arts = [];

        // preselect saved choices
        Array.from(input.options).forEach(o => {
          o.selected = character.arts.includes(o.value);
        });

        input.addEventListener("change", () => {
          character.arts = Array.from(input.selectedOptions).map(o => o.value);
          renderPreview();
        });

      // 4) Normal select (static options)
      } else if (f.type === "select") {
        input = document.createElement("select");

        (f.options || []).forEach(opt => {
          const o = document.createElement("option");
          o.value = opt;
          o.textContent = opt;
          input.appendChild(o);
        });

        input.value = (character[f.key] ?? (f.options?.[0] ?? ""));
        input.addEventListener("change", () => {
          character[f.key] = input.value;
          renderPreview();
        });
		} else if (f.type === "stat") {

  const row = document.createElement("div");
  row.style.display = "flex";
  row.style.gap = "10px";
  row.style.alignItems = "center";

  const slider = document.createElement("input");
  slider.type = "range";
  slider.min = 0;
  slider.max = 100;
  slider.value = character.stats[f.key];

  const num = document.createElement("input");
  num.type = "number";
  num.min = 0;
  num.max = 100;
  num.value = character.stats[f.key];
  num.style.width = "80px";

  slider.addEventListener("input", () => {
    character.stats[f.key] = Number(slider.value);
    num.value = slider.value;
	drawRadar(); 
  });

  num.addEventListener("input", () => {
    character.stats[f.key] = Number(num.value);
    slider.value = num.value;
	drawRadar(); 
  });

  row.appendChild(slider);
  row.appendChild(num);

  input = row;

} else if (f.type === "select_country") {
  input = document.createElement("select");

  const countries = getCountries();
  countries.forEach(c => {
    const o = document.createElement("option");
    o.value = c;
    o.textContent = c;
    input.appendChild(o);
  });

  // default
  if (!character.origin_country) character.origin_country = countries[0] || "";
  input.value = character.origin_country;

  input.addEventListener("change", () => {
    character.origin_country = input.value;

    // reset dependent fields
    character.origin_region = "";
    character.origin_city = "";

    renderForm();
    renderPreview();
  });
} else if (f.type === "select_region") {
  input = document.createElement("select");

  const country = character.origin_country || getCountries()[0] || "";
  if (!character.origin_country) character.origin_country = country;

  const regions = getRegions(country);
  regions.forEach(r => {
    const o = document.createElement("option");
    o.value = r;
    o.textContent = r;
    input.appendChild(o);
  });

  if (!character.origin_region) character.origin_region = regions[0] || "";
  input.value = character.origin_region;

  input.addEventListener("change", () => {
    character.origin_region = input.value;
    character.origin_city = ""; // reset city
    renderForm();
    renderPreview();
  });
} else if (f.type === "select_city") {
  input = document.createElement("select");

  const country = character.origin_country || getCountries()[0] || "";
  const region = character.origin_region || getRegions(country)[0] || "";

  if (!character.origin_country) character.origin_country = country;
  if (!character.origin_region) character.origin_region = region;

  const cities = getCities(country, region);
  cities.forEach(city => {
    const o = document.createElement("option");
    o.value = city;
    o.textContent = city;
    input.appendChild(o);
  });

  if (!character.origin_city) character.origin_city = cities[0] || "";
  input.value = character.origin_city;

  input.addEventListener("change", () => {
    character.origin_city = input.value;
    renderPreview();
  });


} else if (f.type === "select_faction") {
  input = document.createElement("select");

  const factions = getFactionNames();
  factions.forEach(name => {
    const o = document.createElement("option");
    o.value = name;
    o.textContent = name;
    input.appendChild(o);
  });

  if (!character.faction) character.faction = factions[0] || "";
  input.value = character.faction;

  input.addEventListener("change", () => {
    character.faction = input.value;

    // Reset brigade fields if not Brigade
    if (!isBrigade()) {
      character.brigade_rank = "";
      character.brigade_sector = "";
    } else {
      // set sensible defaults when switching to Brigade
      const ranks = getBrigadeRanks();
      if (!character.brigade_rank) character.brigade_rank = ranks[0] || "";
      // sector is optional so leave blank unless you want a default
      if (!character.brigade_sector) character.brigade_sector = "";
    }

    renderForm();
    renderPreview();
  });

} else if (f.type === "select_brigade_rank") {

  if (!isBrigade()) {
    // If not Brigade, don't render this field at all
    input = document.createElement("div");
    input.style.display = "none";
  } else {
    input = document.createElement("select");

    const ranks = getBrigadeRanks();
    ranks.forEach(r => {
      const o = document.createElement("option");
      o.value = r;
      o.textContent = r;
      input.appendChild(o);
    });

    if (!character.brigade_rank) character.brigade_rank = ranks[0] || "";
    input.value = character.brigade_rank;

    input.addEventListener("change", () => {
      character.brigade_rank = input.value;
      renderPreview();
    });
  }

} else if (f.type === "select_brigade_sector_optional") {

  if (!isBrigade()) {
    input = document.createElement("div");
    input.style.display = "none";
  } else {
    input = document.createElement("select");

    // optional blank choice
    const none = document.createElement("option");
    none.value = "";
    none.textContent = "— None —";
    input.appendChild(none);

    const sectors = getBrigadeSectors();
    sectors.forEach(s => {
      const o = document.createElement("option");
      o.value = s;
      o.textContent = s;
      input.appendChild(o);
    });

    input.value = character.brigade_sector || "";

    input.addEventListener("change", () => {
      character.brigade_sector = input.value; // may be ""
      renderPreview();
    });
  }

} else if (f.type === "select_graced") {
  input = document.createElement("select");

  const opts = [
    { label: "None (0%)", value: 0 },
    { label: "25%", value: 0.25 },
    { label: "50%", value: 0.5 },
    { label: "75%", value: 0.75 },
    { label: "100%", value: 1 }
  ];

  opts.forEach(o2 => {
    const o = document.createElement("option");
    o.value = String(o2.value);
    o.textContent = o2.label;
    input.appendChild(o);
  });

  if (character[f.key] === undefined) character[f.key] = 0;
  input.value = String(character[f.key]);

  input.addEventListener("change", () => {
    character[f.key] = Number(input.value);
    drawRadar();
    renderPreview();
  });



      // 5) text input default
      } else {
        input = document.createElement("input");
        input.type = "text";
        input.value = character[f.key] ?? "";
        input.addEventListener("input", () => {
          character[f.key] = input.value;
          renderPreview();
        });
      }

      wrap.appendChild(input);
      box.appendChild(wrap);
    });

    formRoot.appendChild(box);
  });
  
}


function renderPreview() {
  const name = character.name?.trim() || "Unnamed Character";
  const age = character.age?.trim() || "—";
  const role = character.role?.trim() || "—";

  // Build preview content like your doc, but cleaner
  previewRoot.innerHTML = `
    <div class="sheet-title">
      <div>
        <h1>${escapeHtml(name)}</h1>
        <div class="meta">Age: ${escapeHtml(age)} • Role: ${escapeHtml(role)}</div>
      </div>
      <div class="meta">Last updated: ${new Date().toLocaleString()}</div>
    </div>

${SCHEMA.map((section, idx) => `
  <h2 data-section="${idx + 1}">${escapeHtml(section.title)}</h2>


  ${section.fields.map(f => {

// ===============================
// FACTION / BRIGADE SMART PRINT
// ===============================

// If Brigade → print ONE combined line using the faction field
if (f.key === "faction" && character.faction === "Brigade") {
  const rank = character.brigade_rank || "";
  const sector = character.brigade_sector || "";

const line = sector ? `${rank} • ${sector} Sector` : rank;


  return `<div class="block"><b>Brigade:</b> ${escapeHtml(line)}</div>`;
}

// Hide the separate brigade fields (we already printed them)
if (f.key === "brigade_rank" || f.key === "brigade_sector") {
  return "";
}



    if (f.key === "origin_country") {
      const city = character.origin_city || "";
      const region = character.origin_region || "";
      const country = character.origin_country || "";

      const parts = [city, region, country].filter(Boolean).join(", ");

      return `<div class="block"><b>Birthplace:</b> ${escapeHtml(parts)}</div>`;
    }

    if (f.key === "origin_region" || f.key === "origin_city") {
      return "";
    }

    return `<div class="block"><b>${escapeHtml(f.label)}:</b> ${escapeHtml(character[f.key] ?? "")}</div>`;

  }).join("")}
`).join("")}


  `;
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// --- JSON Save/Load ---
function downloadJson() {
  const fileNameBase = (character.name?.trim() || "arc_character").replace(/[^\w\-]+/g, "_");
  const payload = {
    version: 1,
    schema: "ARC_Profile_Template",
    savedAt: new Date().toISOString(),
    data: character
  };

  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `${fileNameBase}.json`;
  a.click();
}

function loadJsonFromFile(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      character = parsed.data ?? parsed; // supports old raw JSON too
      renderForm();
      renderPreview();
    } catch (e) {
      alert("That JSON file couldn't be read. Make sure it's valid JSON.");
    }
  };
  reader.readAsText(file);
}

// --- Events ---
saveJsonBtn.addEventListener("click", downloadJson);
printBtn.addEventListener("click", () => window.print());
jsonFile.addEventListener("change", (e) => {
  const file = e.target.files?.[0];
  if (file) loadJsonFromFile(file);
});

// --- Init ---
renderForm();
renderPreview();
drawRadar();