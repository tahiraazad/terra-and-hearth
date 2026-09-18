import { MenuItem, EventItem, GalleryPhoto, FarmPartner } from '../types';

export const RESTAURANT_INFO = {
  name: "Terra & Hearth",
  tagline: "Seasonal Kitchen & Hearth Bar",
  subheading: "Honoring the rhythm of local soil, live embers, and low-intervention wines",
  address: {
    street: "418 Hearthstone Way",
    district: "Historic Arts Quarter",
    city: "Mill Valley, CA 94941",
    googleMapsUrl: "https://maps.google.com/?q=418+Hearthstone+Way+Mill+Valley+CA"
  },
  phone: "(415) 892-4720",
  email: "hello@terraandhearth.com",
  reservationsEmail: "tables@terraandhearth.com",
  privateEventsEmail: "gatherings@terraandhearth.com",
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    tiktok: "https://tiktok.com",
    pinterest: "https://pinterest.com"
  },
  hours: [
    { days: "Tuesday – Thursday", dinner: "5:00 PM – 10:00 PM", notes: "Aperitivo at Hearth Bar from 4:30 PM" },
    { days: "Friday – Saturday", dinner: "5:00 PM – 10:30 PM", notes: "Late supper wine pours until 11:30 PM" },
    { days: "Sunday Harvest Supper", dinner: "4:00 PM – 9:00 PM", notes: "Weekly rotating family-style feast" },
    { days: "Monday", dinner: "Closed", notes: "Kitchen foraging & local farm visiting day" }
  ],
  currentSeason: {
    name: "Early Autumn Harvest",
    dates: "September – November",
    highlightIngredients: ["Foraged Chanterelles", "Heirloom Kabocha", "Persimmon", "Mission Figs", "Heritage Mangalitsa Pork", "Valley Olive Oil"]
  }
};

export const MENU_ITEMS: MenuItem[] = [
  // STARTERS
  {
    id: "dish-1",
    name: "Charred Fig & House Cultured Stracciatella",
    italianName: "Fichi Arrostiti e Stracciatella",
    category: "starters",
    description: "Wood-fired Black Mission figs, hand-pulled raw milk stracciatella, wild thyme honey, candied walnut crumble, sourdough focaccia crisp.",
    price: 19,
    dietary: ["Vegetarian", "Hearth", "Farm-Direct"],
    farmSource: "Riverbend Orchards & Clover Valley Dairy",
    winePairing: "Domaine de l'Écu 'Granite' Melon de Bourgogne 2021",
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80",
    isSeasonalSpecial: true
  },
  {
    id: "dish-2",
    name: "Embers-Roasted Heirloom Beet Tartare",
    italianName: "Battuta di Barbabietole alla Brace",
    category: "starters",
    description: "Golden and chioggia beets roasted in wood embers for 4 hours, black garlic emulsion, pickled mustard seeds, horseradish snow, rye tuile.",
    price: 18,
    dietary: ["GF", "Vegan", "Hearth", "Farm-Direct"],
    farmSource: "Green Gulch Organic Farm",
    winePairing: "Claus Preisinger 'Puszta Libre' Zweigelt/St. Laurent 2022",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    isSeasonalSpecial: false
  },
  {
    id: "dish-3",
    name: "Monterey Bay Halibut Crudo",
    italianName: "Crudo di Ippoglosso con Agrumi",
    category: "starters",
    description: "Line-caught Pacific halibut, blood orange ponzu, preserved Meyer lemon, Fresno chili oil, crispy caper leaves, sea salt flakes.",
    price: 24,
    dietary: ["GF", "Farm-Direct"],
    farmSource: "Sea Harvest Dock & Sun Orchard",
    winePairing: "Weingut Keller Trocken Riesling, Rheinhessen 2022",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
    isSeasonalSpecial: true
  },
  {
    id: "dish-4",
    name: "Wild Porcini & Sunchoke Velouté",
    italianName: "Zuppa Vellutata di Funghi di Bosco",
    category: "starters",
    description: "Roasted sunchoke velouté poured tableside over sautéed wild porcini, pine needle oil, and crispy shallot crumbs.",
    price: 17,
    dietary: ["GF", "Vegetarian", "Farm-Direct"],
    farmSource: "Mendocino Ridge Wild Foraged & Star Route Farm",
    winePairing: "Meinklang 'Graupert' Pinot Gris Skin Contact 2021",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    isSeasonalSpecial: false
  },

  // PASTAS
  {
    id: "dish-5",
    name: "Handmade Nettle Agnolotti",
    italianName: "Agnolotti alle Ortiche e Ricotta",
    category: "pastas",
    description: "Hand-rolled heritage yolk dough filled with foraged stinging nettle and sheep's milk ricotta, brown butter emulsion, toasted pine nuts, 30-month Parmigiano.",
    price: 29,
    dietary: ["Vegetarian", "Farm-Direct"],
    farmSource: "Highland Sheep Dairy & Valley Mill Grains",
    winePairing: "Occhipinti 'SP68' Bianco, Sicily 2022",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    isSeasonalSpecial: true
  },
  {
    id: "dish-6",
    name: "Braised Wild Boar Pappardelle",
    italianName: "Pappardelle al Ragù di Cinghiale",
    category: "pastas",
    description: "Wide hand-cut ribbons tossed with 12-hour Chianti braised Sonoma wild boar, crushed juniper berries, rosemary sprig, Pecorino Romano.",
    price: 33,
    dietary: ["Hearth", "Farm-Direct"],
    farmSource: "Sonoma Mountain Ranch & Stone Ground Flour",
    winePairing: "Tenuta delle Terre Nere Etna Rosso 2021",
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281691?auto=format&fit=crop&w=800&q=80",
    isSeasonalSpecial: false
  },
  {
    id: "dish-7",
    name: "Squid Ink Tagliolini with Manila Clams",
    italianName: "Tagliolini al Nero di Seppia",
    category: "pastas",
    description: "House-extruded cuttlefish ink pasta, sweet Tomales Bay clams, slow-melted leeks, Calabrian chili paste, white wine reduction, herb pangrattato.",
    price: 31,
    dietary: ["Farm-Direct"],
    farmSource: "Hog Island Oyster Co & Little Organic Farm",
    winePairing: "Benito Santos 'Igrexario de Saiar' Albariño 2022",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    isSeasonalSpecial: false
  },

  // MAINS
  {
    id: "dish-8",
    name: "Wood-Fired Heritage Pork Chop",
    italianName: "Costoletta di Maiale alla Brace",
    category: "mains",
    description: "14oz dry-aged Berkshire chop seared over applewood coals, roasted cider-glazed shallots, braised rainbow chard, roasted plum and sage reduction.",
    price: 44,
    dietary: ["GF", "Hearth", "Farm-Direct"],
    farmSource: "Prather Ranch Heritage Pastures",
    winePairing: "Matthiasson Cabernet Franc, Napa Valley 2020",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    isSeasonalSpecial: true
  },
  {
    id: "dish-9",
    name: "Wild King Salmon on Cedar Plank",
    italianName: "Salmone Selvaggio al Legno di Cedro",
    category: "mains",
    description: "Flame-roasted Pacific king salmon with charred fennel confit, saffron beurre blanc, Romanesco broccoli, crispy sunchoke chips.",
    price: 42,
    dietary: ["GF", "Hearth", "Farm-Direct"],
    farmSource: "Bodega Bay Fishermen Collective",
    winePairing: "Arnot-Roberts Chardonnay, Sonoma Coast 2021",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    isSeasonalSpecial: false
  },
  {
    id: "dish-10",
    name: "Fire-Roasted Delicata Squash & Ancient Grains",
    italianName: "Zucca Delicata Arrostita con Farro",
    category: "mains",
    description: "Caramelized stuffed winter squash, roasted farro piccolo, king oyster mushroom 'scallops', pomegranate seeds, pumpkin seed salsa verde.",
    price: 28,
    dietary: ["Vegan", "Hearth", "Farm-Direct"],
    farmSource: "Full Belly Farm & Community Mill",
    winePairing: "Gutiérrez de la Vega 'Viña Gose' Orange Moscatel 2021",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    isSeasonalSpecial: true
  },
  {
    id: "dish-11",
    name: "Prime Wood-Grilled Ribeye for Two",
    italianName: "Bistecca Fiorentina alla Brace",
    category: "mains",
    description: "32oz bone-in dry-aged ribeye carved for the table, smoked sea salt, roasted bone marrow jus, wood-fired rosemary fingerling potatoes, salsa cruda.",
    price: 98,
    dietary: ["GF", "Hearth", "Farm-Direct"],
    farmSource: "Five Dot Grass-Fed Ranch",
    winePairing: "Paolo Scavino Barolo 'Bric dël Fiasc' 2018",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
    isSeasonalSpecial: false
  },

  // DESSERTS
  {
    id: "dish-12",
    name: "Warm Roasted Fig & Olive Oil Cake",
    italianName: "Torta all'Olio d'Oliva e Fichi Caldi",
    category: "desserts",
    description: "Polenta and extra-virgin olive oil sponge, hearth-roasted mission figs, rosemary gelato, sea salt caramel drizzle.",
    price: 15,
    dietary: ["Vegetarian", "Hearth", "Farm-Direct"],
    farmSource: "Katz Farm Olive Oil & Straus Family Creamery",
    winePairing: "Château d'Yquem Sauternes 2015 / Macvin du Jura",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80",
    isSeasonalSpecial: true
  },
  {
    id: "dish-13",
    name: "Dark Chocolate & Smoked Hazelnut Tart",
    italianName: "Crostata di Cioccolato Fondente e Nocciole",
    category: "desserts",
    description: "72% single-origin dark chocolate ganache, hearth-smoked Oregon hazelnuts, espresso mascarpone quenelle, flaky sea salt.",
    price: 16,
    dietary: ["Vegetarian", "Farm-Direct"],
    farmSource: "Dandelion Small Batch Cacao",
    winePairing: "Quinta do Noval 10 Year Tawny Port",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    isSeasonalSpecial: false
  },
  {
    id: "dish-14",
    name: "Farmstead Cheese Board with Honeycomb",
    italianName: "Selezione di Formaggi con Favo di Miele",
    category: "desserts",
    description: "Three rotating northern California artisanal cheeses, raw wildflower honeycomb, pickled green walnuts, sourdough seed crisps.",
    price: 22,
    dietary: ["Vegetarian", "Farm-Direct"],
    farmSource: "Point Reyes Farmstead & Marshall's Farm Honey",
    winePairing: "Château Simone Palette Blanc 2020",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    isSeasonalSpecial: false
  },

  // DRINKS
  {
    id: "dish-15",
    name: "Smoked Sage & Ember Old Fashioned",
    category: "drinks",
    description: "Small-batch rye whiskey, charred applewood bitters, demerara infused with garden sage, torched orange peel.",
    price: 18,
    dietary: ["Hearth"],
    farmSource: "Kitchen Herb Garden & Sonoma Rye",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
    isSeasonalSpecial: true
  },
  {
    id: "dish-16",
    name: "Terra Botanica Spritz",
    category: "drinks",
    description: "House amaro blend, fermented quince syrup, verjus, biodynamic sparkling wine, garden rosemary sprig.",
    price: 16,
    dietary: ["Vegan", "Farm-Direct"],
    farmSource: "Heirloom Quince Trees & Natural Bubbles",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    isSeasonalSpecial: false
  },
  {
    id: "dish-17",
    name: "Golden Hour Amber Wine (Glass / Bottle)",
    category: "drinks",
    description: "Skin-contact Ribolla Gialla & Friulano 2021. Notes of dried apricot, beeswax, wild herbs, and vibrant minerality.",
    price: 19,
    dietary: ["Vegan", "Farm-Direct"],
    farmSource: "Gravner Amphora Winery, Oslavia",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
    isSeasonalSpecial: false
  }
];

export const EVENTS_DATA: EventItem[] = [
  {
    id: "event-1",
    title: "Full Moon Hearth & Garden Supper",
    subtitle: "A 5-Course candlelit culinary journey under the heated olive arbor",
    date: "October 14, 2026",
    time: "6:30 PM – 9:30 PM",
    price: "$145 per guest (Optional $65 Wine Flight)",
    spotsLeft: 8,
    category: "special_dinner",
    description: "An intimate gathering celebrating the peak harvest. Chef Elena curates five communal courses cooked entirely over open embers, paired with rare low-intervention natural wines poured by Sommelier Mateo.",
    included: [
      "Welcome botanical spritz and warm hearth cicchetti",
      "5-Course seasonal tasting menu served family-style",
      "Live acoustic classical guitar in the courtyard",
      "Gift jar of house-made wild thyme infused sea salt"
    ],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "event-2",
    title: "Wild Foraging & Chanterelle Masterclass",
    subtitle: "Morning woodland walk followed by lunch & live cooking demonstration",
    date: "November 7, 2026",
    time: "10:00 AM – 2:30 PM",
    price: "$180 per person",
    spotsLeft: 4,
    category: "workshop",
    description: "Join resident mycologist David Vance and Chef Elena on an exclusive excursion into nearby coastal pine forests. Return to Terra & Hearth for a fireside cooking workshop and 3-course mushroom feast.",
    included: [
      "Guided 2-hour forest foraging with basket & field guide",
      "Hands-on fresh pasta rolling and wild mushroom preparation",
      "3-Course wine-paired lunch at the Chef's Counter",
      "Freshly foraged mushroom basket to take home"
    ],
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "event-3",
    title: "The Natural & Skin-Contact Wine Salon",
    subtitle: "Deep dive into clay amphorae, pet-nats, and orange wines",
    date: "November 19, 2026",
    time: "5:30 PM – 7:30 PM",
    price: "$85 per person",
    spotsLeft: 12,
    category: "special_dinner",
    description: "Sommelier Mateo Ruiz hosts an engaging tasting of 6 rare, un-sulfured natural wines from micro-growers across Northern Italy, Georgia, and California, paired with regional farmstead cheeses and salumi.",
    included: [
      "Guided tasting flight of 6 natural wines",
      "Artisanal farmstead cheese & charcuterie board",
      "Sommelier tasting workbook and vineyard origin maps",
      "15% off cellar bottle purchases for the evening"
    ],
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "event-4",
    title: "Weekly Sunday Hearth Supper",
    subtitle: "Our beloved neighborhood tradition of warmth, wine, and slow food",
    date: "Every Sunday Evening",
    time: "4:00 PM – 9:00 PM",
    price: "$65 per adult / $28 per child under 12",
    spotsLeft: 24,
    category: "weekly",
    description: "Every Sunday, we shut off the regular menu and prepare a comforting four-course family feast centered around slow wood-roasted heritage cuts, fresh farm vegetables, crusty bread, and seasonal fruit tarts.",
    included: [
      "Freshly baked sourdough boules with churned sea-salt butter",
      "Family-style seasonal salad & handmade pasta course",
      "Hearth-carved roast (vegetarian centerpiece always available)",
      "Traditional rustic dessert for the table"
    ],
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "gal-1",
    title: "Embers of White Oak",
    category: "interior",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    caption: "The open live-fire hearth at dusk, fueled with seasoned local orchard wood."
  },
  {
    id: "gal-2",
    title: "Hand-Folded Agnolotti",
    category: "dishes",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=80",
    caption: "Morning pasta production using farm-fresh organic yolk and stone-ground heritage flour."
  },
  {
    id: "gal-3",
    title: "The Candlelit Dining Room",
    category: "interior",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    caption: "Reclaimed beam ceilings, plaster walls, and hand-thrown ceramic tableware."
  },
  {
    id: "gal-4",
    title: "Autumn Fig & Stracciatella",
    category: "dishes",
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1200&q=80",
    caption: "Warm wood-fired figs drizzled with raw honey over creamy stracciatella."
  },
  {
    id: "gal-5",
    title: "Botanical Libations & Spritzes",
    category: "drinks",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80",
    caption: "Herbal aperitifs infused with bay laurel, rosemary, and seasonal stone fruit."
  },
  {
    id: "gal-6",
    title: "Morning Harvest at Green Gulch",
    category: "farm",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
    caption: "Chef Elena picking heirloom varieties at sunrise just 8 miles from our door."
  },
  {
    id: "gal-7",
    title: "Pacific Halibut Crudo",
    category: "dishes",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=80",
    caption: "Line-caught halibut with blood orange, chili oil, and sea salt flakes."
  },
  {
    id: "gal-8",
    title: "Biodynamic Wine Cellar",
    category: "drinks",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
    caption: "Over 300 natural, organic, and biodynamic labels selected by Mateo Ruiz."
  },
  {
    id: "gal-9",
    title: "Olive Arbor Terrace",
    category: "interior",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    caption: "Our heated garden terrace surrounded by century-old Tuscan olive trees."
  },
  {
    id: "gal-10",
    title: "Foraged Wild Chanterelles",
    category: "farm",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
    caption: "Golden chanterelles harvested from the redwood groves after the first autumn rains."
  },
  {
    id: "gal-11",
    title: "Wood-Fired Bone-in Ribeye",
    category: "dishes",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=80",
    caption: "Dry-aged heritage beef carved over rosemary sprigs and smoked sea salt."
  },
  {
    id: "gal-12",
    title: "Smoked Hazelnut & Chocolate Tart",
    category: "dishes",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&q=80",
    caption: "Single origin dark cacao tart with hearth-smoked hazelnuts and espresso cream."
  }
];

export const FARM_PARTNERS: FarmPartner[] = [
  {
    name: "Green Gulch Organic Farm",
    location: "Muir Beach, CA",
    distance: "7.8 miles",
    products: "Heirloom greens, roots, and brassicas",
    description: "Practicing certified organic farming in coastal microclimates with deep respect for natural biodiversity and soil vitality.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Clover Valley Heritage Dairy",
    location: "Petaluma, CA",
    distance: "18.4 miles",
    products: "Raw milk, hand-pulled curds & cultured butter",
    description: "Pasture-raised Jersey cows grazing rotational clover meadows produce rich milk for our daily fresh cheeses and hearth sauces.",
    image: "https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Valley Mill Grain Millers",
    location: "Sonoma County, CA",
    distance: "24.1 miles",
    products: "Stone-ground ancient wheats & polenta",
    description: "Cold stone-milling certified organic heirloom Sonora wheat, spelt, and durum grains within 48 hours of entering our kitchen.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Riverbend Orchards & Apiary",
    location: "Sebastopol, CA",
    distance: "32.0 miles",
    products: "Heirloom figs, stone fruit & wildflower honey",
    description: "Third-generation orchard maintaining 40+ varietals of heritage stone fruit alongside active pollinator bee colonies.",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80"
  }
];

export const REVIEWS = [
  {
    quote: "A masterclass in restraint and flavor. Terra & Hearth proves that when you cook with genuine fire and ingredients picked this morning, dinner becomes an intimate ritual.",
    source: "Eater Dining Guide",
    author: "Julian Vance",
    badge: "Restaurant of the Year Nominee"
  },
  {
    quote: "The hand-folded nettle agnolotti and the ember-charred pork chop lingered in my memory for weeks. One of the warmest dining rooms in California.",
    source: "San Francisco Chronicle",
    author: "Maya Chen",
    badge: "Top 25 Bay Area Tables"
  },
  {
    quote: "A shining standard for sustainable, zero-waste kitchen craftsmanship. Mateo's natural wine list is a breath of fresh, honest air.",
    source: "Michelin Guide Review",
    author: "Inspector Notes",
    badge: "Green Star Distinction"
  }
];
