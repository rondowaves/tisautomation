export interface Product {
  id: string;
  name: string;
  reference?: string;
  brand?: string;
  specs: {
    power?: string;
    speed?: string;
    protection?: string;
    efficiency?: string;
    voltage?: string;
    current?: string;
    caliber?: string;
    curve?: string;
    series?: string;
    characteristics?: string[];
    ratio?: string;
    output_speed?: string;
    diameter?: string;
    [key: string]: string | string[] | undefined;
  };
  price: number;
  active: boolean;
  image?: string;
}

export interface ProductCategory {
  [category: string]: {
    [subcategory: string]: {
      [type: string]: Product[] | {
        id?: string;
        [key: string]: any;
      };
    };
  };
}

// 1. Fix duplicate products
const deduplicateProducts = (products: Product[] | any): Product[] => {
  // If input is not an array, return empty array
  if (!Array.isArray(products)) {
    console.warn('deduplicateProducts received non-array input:', products);
    return [];
  }

  // Filter out any non-object items
  const validProducts = products.filter(product => 
    product && typeof product === 'object' && 'id' in product
  );

  const uniqueIds = new Set<string>();
  return validProducts.filter(product => {
    if (uniqueIds.has(product.id)) {
      return false;
    }
    uniqueIds.add(product.id);
    return true;
  });
};

// 2. Standardize voltage formats
const standardizeVoltage = (voltage: string) => {
  return voltage.replace(/[vV]/, 'V')
                .replace(/[-\/]/, '/')
                .trim();
};

// 3. Standardize power formats
const standardizePower = (power: string) => {
  return power.toLowerCase()
              .replace(/\s+/g, '')
              .replace(/kw/, 'KW');
};

// 4. Fix price inconsistencies
const validatePrice = (product: Product) => {
  if (product.price < 0) {
    product.price = 0;
  }
  return product;
};

// 5. Normalize specs format
const normalizeSpecs = (specs: any) => {
  // Si specs est undefined ou null, retourner un objet vide
  if (!specs || typeof specs !== 'object') {
    return {};
  }

  const normalizedSpecs: any = {};
  
  try {
    for (const [key, value] of Object.entries(specs)) {
      if (!key) continue;  // Skip if key is empty or undefined
      
      const normalizedKey = key.toLowerCase()
                             .replace(/\s+/g, '_')
                             .replace(/[^\w]/g, '');
                             
      if (typeof value === 'string') {
        normalizedSpecs[normalizedKey] = value.trim();
      } else {
        normalizedSpecs[normalizedKey] = value;
      }
    }
  } catch (error) {
    console.warn('Error normalizing specs:', error);
    return {};
  }

  return normalizedSpecs;
};

// Example fixes for specific categories:
const standardizeMotors = (product: Product) => {
  if (product.specs.power) {
    product.specs.power = standardizePower(product.specs.power);
  }
  if (product.specs.voltage) {
    product.specs.voltage = standardizeVoltage(product.specs.voltage);
  }
  // Add protection class if missing for motors
  if (!product.specs.protection && product.name.toLowerCase().includes('moteur')) {
    product.specs.protection = 'IP55';
  }
  return product;
};

const standardizeDisjunctors = (product: Product) => {
  // Ensure consistent naming pattern
  if (product.name.toLowerCase().includes('disjoncteur')) {
    product.name = product.name.replace(/disj\w+/i, 'DISJONCTEUR')
                             .toUpperCase();
  }
  return product;
};

// Main standardization function
const standardizeProduct = (product: Product): Product => {
  // Basic validation
  if (!product.id || !product.name) {
    throw new Error(`Invalid product data: ${JSON.stringify(product)}`);
  }

  // Normalize product data
  return {
    ...product,
    name: product.name.trim(),
    specs: normalizeSpecs(product.specs),
    price: Math.max(0, product.price),
    active: Boolean(product.active)
  };
};

// Define individual category objects
const eclairage_industriel = {
  led: {
    projecteurs: [
      {
        id: "P10209",
        name: "PROJECTEUR LED",
        image: "projecteur-led-200w.jpg",
        specs: {
          power: "200W",
          voltage: "230V AC",
          protection: "IP65",
          precable: true
        },
        price: 185000,
        active: false
      },
      {
        id: "P10210",
        name: "PROJECTEUR LED",
        image: "projecteur-led-1000w.jpg",
        specs: {
          power: "1000W",
          efficiency: "110 lm/W",
          protection: "IP65"
        },
        price: 152000,
        active: true
      }
    ],
    reglettes: [
      {
        id: "P10194",
        name: "REGLETTES LED IP65",
        image: "reglette-led-ip65.jpg",
        specs: {
          power: "40W",
          type: "duo"
        },
        price: 0,
        active: true
      }
    ]
  }
};

const outillage_mesure = {
  mesure_electrique: {
    multimetres: [
      {
        id: "P10065",
        name: "MULTI-METRE",
        reference: "2100",
        price: 0,
        active: true,
        specs: {}
      },
      {
        id: "P10041",
        name: "MEGO-METRE UNI-T",
        reference: "4T501A",
        brand: "UNI-T",
        price: 0,
        active: true,
        specs: {}
      }
    ],
    testeurs: [
      {
        id: "P10043",
        name: "TESTER",
        reference: "734563",
        brand: "DUOYI",
        price: 0,
        active: true,
        specs: {}
      },
      {
        id: "P10042",
        name: "DIGITAL EARTH",
        price: 0,
        active: true,
        specs: {}
      }
    ]
  },
  outillage_specialise: {
    cles: [
      {
        id: "P10229",
        name: "Cliquet 1/2",
        specs: {
          brand: "Stahlwille",
          reference: "13231011"
        },
        price: 0,
        active: false
      }
    ],
    adaptateurs: [
      {
        id: "P10230",
        name: "Adaptateur Agrandisseur 1/2-3/4",
        specs: {
          brand: "Force",
          reference: "80946MPB"
        },
        price: 0,
        active: false
      }
    ],
    limes: [
      {
        id: "P10234",
        name: "SET DE LIMES",
        specs: {
          brand: "Force",
          reference: "5056"
        },
        price: 0,
        active: false
      }
    ]
  }
};

const maintenance = {
  filtration: {
    huile: {
      products: [
        {
          id: "P10255",
          name: "FITRE A HUILE",
          reference: "1560B87305",
          specs: {
            alternative_references: ["MICRO MD013661", "LF3369", "FLEETGUARD"]
          },
          price: 18500,
          active: true
        },
        {
          id: "P10264",
          name: "FILTRE A HUILE",
          specs: {
            reference: ["1560B87305", "MICRO MD013661", "LF3369", "FLEETGUARD"]
          },
          price: 265000,
          active: true
        }
      ]
    },
    carburant: {
      products: [
        {
          id: "P10258",
          name: "FILTRE A GAS OIL",
          reference: "3005828",
          specs: {
            alternative_reference: "FF5048",
            brand: "FLEETGUARD"
          },
          price: 36420,
          active: true
        }
      ]
    }
  },
  produits: {
    nettoyants: [
      {
        id: "P10069",
        name: "WD-40",
        price: 0,
        active: true,
        specs: {}
      },
      {
        id: "P10070",
        name: "DECALAMINAGE MOTEUR INTEGRAL",
        price: 0,
        active: true,
        specs: {}
      }
    ]
  },
  pieces_detachees: {
    products: [
      {
        id: "P10167A",
        name: "ADAPTATEUR USB SIEMENS",
        reference: "6GK1571-0BA00-0AA0",
        price: 350000,
        active: true,
        specs: {}
      }
    ]
  },
  consommables: {
    products: [
      {
        id: "P10264",
        name: "FILTRE A HUILE",
        specs: {
          reference: ["1560B87305", "MICRO MD013661", "LF3369", "FLEETGUARD"]
        },
        price: 265000,
        active: true
      }
    ]
  }
};

const services = {
  prestations: {
    installation: [
      {
        id: "S001",
        name: "Installation Standard",
        price: 50000,
        active: true,
        specs: {}
      }
    ],
    maintenance: [
      {
        id: "S002",
        name: "Maintenance Préventive",
        specs: {
          included: ["Inspection", "Nettoyage", "Calibration"]
        },
        price: 75000,
        active: true
      }
    ]
  }
};

const automatisme_controle = {
  automates: {
    products: [
      {
        id: "P10167",
        name: "ADAPTATEUR USB SIEMENS",
        image: "adaptateur-usb-siemens.jpg",
        reference: "6GK1571-0BA00-0AA0",
        price: 350000,
        active: true,
        specs: {}
      }
    ]
  },
  capteurs: {
    products: [
      {
        id: "P10168",
        name: "FIN DE COURSE SIEMENS",
        reference: "38E5112-0CT11",
        price: 132699,
        active: true,
        specs: {}
      },
      {
        id: "P10169",
        name: "MODULE DE DETECTION DE COURANT SIEMENS",
        reference: "34UF7100-1AA00-0",
        price: 186375,
        active: true,
        specs: {}
      }
    ]
  },
  electrovannes: {
    pneumatiques: {
      products: [
        {
          id: "P10290",
          name: "ELECTROVANNE PAKER HANNIFIN",
          reference: "341N03",
          price: 389150,
          active: true,
          specs: {}
        },
        {
          id: "P10292",
          name: "SOLENOIRE ELECTROVANNE",
          reference: "CI2/2440210780",
          price: 160000,
          active: true,
          specs: {}
        }
      ]
    }
  },
  piezoelectriques: {
    products: [
      {
        id: "P10055",
        name: "CONTACT -ZBE-102",
        reference: "ZBE-102",
        brand: "TELETECNIQUE",
        price: 0,
        active: true,
        specs: {}
      }
    ]
  }
};

const equipement_industriel = {
  levage: {
    commandes: [
      {
        id: "P10187",
        name: "MANIPULATEUR JOYTICK HAULOTTE",
        reference: "2441305180",
        price: 350000,
        active: true,
        specs: {}
      },
      {
        id: "P10188",
        name: "INTERUPTEUR HAULOTTE",
        reference: "2440901630",
        price: 25000,
        active: true,
        specs: {}
      }
    ]
  },
  signalisation: {
    reperage: [
      {
        id: "P10196",
        name: "RUBAN DE SIGNALISATION",
        specs: {
          dimensions: "50X100M",
          color: "ROUGE BLANC",
          reference: "MANUTAN 1262M55-EPI"
        },
        price: 3000,
        active: true
      }
    ]
  }
};

const mesure_detection = {
  instruments_mesure: {
    electrique: [
      {
        id: "P10244",
        name: "LAMPE TUBE TF DE 36/BI",
        specs: {
          longueur: "1.20m"
        },
        price: 1500,
        active: true
      }
    ]
  },
  detecteurs: {
    proximite: [
      {
        id: "P10174",
        name: "CAPTEUR INDUCTIF DE PROXIMITE",
        reference: "XS630B1PAM12",
        price: 50800,
        active: true
      },
      {
        id: "P10048",
        name: "DETECTEUR DE COURANT - 3UF7100-1AA00.0",
        reference: "3UF7100-1AA00.0",
        specs: {
          marque: "SIEMENS"
        },
        price: 0,
        active: true
      }
    ]
  },
  fin_de_course: {
    industriels: [
      {
        id: "P10049",
        name: "FIN DE COURSE",
        reference: "3SE5110.0CT11",
        specs: {
          marque: "SIEMENS"
        },
        price: 0,
        active: true
      }
    ]
  }
};

const eclairage = {
  tubes_fluorescents: {
    standard: [
      {
        id: "P10253",
        name: "LAMPE TUBE TF18",
        specs: {
          longueur: "0.60m",
          tension: "220V"
        },
        price: 2500,
        active: true
      }
    ]
  },
  lampadaires: {
    industriels: [
      {
        id: "P10225",
        name: "LAMPADAIRE A CLOCHE LED ATT65 A",
        specs: {
          puissance: "200W",
          tension: "85-410V",
          efficacite: "110LM/W"
        },
        price: 0,
        active: true
      }
    ]
  }
};

const motorisation = {
  moteurs: {
    aluminium: [
      {
        id: "P10009",
        image: "moteur-aluminium.jpg",
        name: "2.2 KW - 1500trs - B35",
        specs: {
          power: "2.2kw",
          speed: "1500trs",
          voltage: "230/400V",
          efficiency: "IE3",
          ratio: "B35"
        },
        price: 0,
        active: true
      },
      {
        id: "P10010",
        image: "moteur-aluminium.jpg",
        name: "3 KW - 1500trs - B35",
        specs: {
          power: "3kw",
          speed: "1500trs",
          voltage: "230/400V",
          efficiency: "IE3",
          ratio: "B35"
        },
        price: 0,
        active: true
      },
      {
        id: "P10011",
        image: "moteur-aluminium.jpg",
        name: "4 KW - 1500trs - B35",
        specs: {
          power: "4kw",
          speed: "1500trs",
          voltage: "230/400V",
          efficiency: "IE3",
          ratio: "B35"
        },
        price: 0,
        active: true
      },
      {
        id: "P10012",
        image: "moteur-aluminium.jpg",
        name: "5.5 KW - 1500trs - B35",
        specs: {
          power: "5.5kw",
          speed: "1500trs",
          voltage: "230/400V",
          efficiency: "IE3",
          ratio: "B35"
        },
        price: 0,
        active: true
      },
      {
        id: "P10013",
        image: "moteur-aluminium.jpg",
        name: "7.5 KW - 1500trs - B35",
        specs: {
          power: "7.5kw",
          speed: "1500trs",
          voltage: "230/400V",
          efficiency: "IE3",
          ratio: "B35"
        },
        price: 0,
        active: true
      },
      {
        id: "P10014",
        image: "moteur-aluminium.jpg",
        name: "11 KW - 1500trs - B35",
        specs: {
          power: "11kw",
          speed: "1500trs",
          voltage: "230/400V",
          efficiency: "IE3",
          ratio: "B35"
        },
        price: 0,
        active: true
      },
      {
        id: "P10015",
        image: "moteur-aluminium.jpg",
        name: "15 KW - 1500trs - B35",
        specs: {
          power: "15kw",
          speed: "1500trs",
          voltage: "230/400V",
          efficiency: "IE3",
          ratio: "B35"
        },
        price: 0,
        active: true
      },
      {
        id: "P10016",
        image: "moteur-aluminium.jpg",
        name: "18.5 KW - 1500trs - B35",
        specs: {
          power: "18.5kw",
          speed: "1500trs",
          voltage: "230/400V",
          efficiency: "IE3",
          ratio: "B35"
        },
        price: 0,
        active: true
      },
      {
        id: "P10017",
        image: "moteur-aluminium.jpg",
        name: "22 KW - 1500trs - B35",
        specs: {
          power: "22kw",
          speed: "1500trs",
          voltage: "230/400V",
          efficiency: "IE3",
          ratio: "B35"
        },
        price: 0,
        active: true
      }
    ],
    fonte: [
      {
        id: "P10018",
        image: "moteur-aluminium.jpg",
        name: "0.75 KW - 1500trs - B35",
        specs: {
          power: "0.75kw",
          speed: "1500trs",
          voltage: "230/400V",
          efficiency: "IE3",
          ratio: "B35"
        },
        price: 0,
        active: true
      },
      {
        id: "P10019",
        image: "moteur-aluminium.jpg",
        name: "1.1 KW - 1500trs - B35",
        specs: {
          power: "1.1kw",
          speed: "1500trs",
          voltage: "230/400V",
          efficiency: "IE3",
          ratio: "B35"
        },
        price: 0,
        active: true
      },
      {
        id: "P10020",
        image: "moteur-aluminium.jpg",
        name: "1.5 KW - 1500trs - B35",
        specs: {
          power: "1.5kw",
          speed: "1500trs",
          voltage: "230/400V",
          efficiency: "IE3",
          ratio: "B35"
        },
        price: 0,
        active: true
      },
      {
        id: "P10021",
        image: "moteur-aluminium.jpg",
        name: "2.2 KW - 1500trs - B35",
        specs: {
          power: "2.2kw",
          speed: "1500trs",
          voltage: "230/400V",
          efficiency: "IE3",
          ratio: "B35"
        },
        price: 0,
        active: true
      },
      {
        id: "P10022",
        image: "moteur-aluminium.jpg",
        name: "3 KW - 1500trs - B35",
        specs: {
          power: "3kw",
          speed: "1500trs",
          voltage: "230/400V",
          efficiency: "IE3",
          ratio: "B35"
        },
        price: 0,
        active: true
      },
      {
        id: "P10023",
        image: "moteur-aluminium.jpg",
        name: "4 KW - 1500trs - B35",
        specs: {
          power: "4kw",
          speed: "1500trs",
          voltage: "230/400V",
          efficiency: "IE3",
          ratio: "B35"
        },
        price: 0,
        active: true
      }
    ]
  },
  motoreducteurs: {
    helicoidal: [
      {
        id: "P10001",
        name: "IRAM83 - 160M4A",
        specs: {
          power: "11kw",
          ratio: "18.47",
          output_speed: "76",
          diameter: "50x100 mm"
        },
        price: 2700000,
        active: true
      }
    ],
    irsam: [
      {
        id: "P10005",
        name: "IRSAM65 - 90L4A",
        specs: {
          power: "1.5kw",
          speed: "57.2tr/min",
          ratio: "25"
        },
        price: 750750,
        active: true
      }
    ]
  },
  demarreurs: {
    progressifs: [
      {
        id: "P10291",
        name: "DEMAREUR PROGRESSIF SIEMENS",
        specs: {
          power: "22 à 37KW",
          voltage: "400V",
          characteristics: ["Protection moteur Inclus", "Compact"]
        },
        price: 1500000,
        active: true
      }
    ]
  }
};

const commande_controle = {
  boutons_poussoirs: {
    industriels: [
      {
        id: "P10056",
        name: "CONTACT -ZBE-101",
        specs: {
          marque: "SCHNEIDER"
        },
        price: 0,
        active: true
      },
      {
        id: "P10057",
        name: "CONTACT - ZBV-B3",
        reference: "ZBV-B3",
        specs: {
          marque: "SCHNEIDER"
        },
        price: 0,
        active: true
      }
    ]
  },
  interrupteurs: {
    securite: [
      {
        id: "P10193",
        name: "INTERRUPTEUR LOCAL DE SECURITE",
        specs: {
          reference: "22153304",
          marque: "SOCOMEC",
          amperage: "40A",
          type: "ILS"
        },
        price: 178000,
        active: true
      }
    ],
    standard: [
      {
        id: "P10058",
        name: "INTERRUPTEUR",
        reference: "L0036 L0001",
        price: 0,
        active: true
      },
      {
        id: "P10059",
        name: "INTERRUPTEUR",
        specs: {
          marque: "SCHNEIDER"
        },
        price: 0,
        active: true
      }
    ]
  },
  telecommandes: {
    industrielles: [
      {
        id: "P10028",
        name: "MANETTE DE COMMANDE",
        reference: "T.04.76.34.18",
        specs: {
          marque: "RM2M"
        },
        price: 0,
        active: true
      }
    ]
  },
  distributeurs: {
    pneumatiques: [
      {
        id: "P10060",
        name: "DISTRIBUTEUR",
        reference: "4M210L-02",
        specs: {
          marque: "VALVE"
        },
        price: 0,
        active: true
      },
      {
        id: "P10192",
        name: "DISTRIBUTEUR JOUCOMATIC",
        specs: {
          reference: "52100002",
          tension: "AC 24V"
        },
        price: 264400,
        active: true
      }
    ]
  }
};

const installation_electrique = {
  coffrets: {
    separation: [
      {
        id: "P10038",
        image: "coffret-separation.jpg",
        name: "BOITE DE SEPARATION",
        reference: "2310",
        specs: {
          marque: "WEGELEC"
        },
        price: 0,
        active: true
      }
    ]
  },
  fiches_prises: {
    industrielles: [
      {
        id: "P10171",
        name: "FICHE MALE 3P+T 32A LEGRAND",
        specs: {
          marque: "LEGRAND"
        },
        price: 35000,
        active: true
      }
    ]
  },
  transformateurs: {
    petite_puissance: [
      {
        id: "P10039",
        name: "TRANSFORMATION 220V/240V",
        price: 0,
        active: true
      },
      {
        id: "P10040",
        name: "TRANSFORMATION DE SEPARATION DE CIRCUIT",
        reference: "ABL6TS",
        specs: {
          marque: "SCHENEIDER"
        },
        price: 0,
        active: true
      }
    ]
  },
  accessoires_cables: {
    presse_etoupes: [
      {
        id: "P10036",
        name: "PRESSE TOP",
        specs: {
          dimensions: "m321,5"
        },
        price: 0,
        active: true
      },
      {
        id: "P10037",
        name: "PRESSE TOP",
        specs: {
          dimensions: "m251,5"
        },
        price: 0,
        active: true
      }
    ]
  }
};

const composants_mecaniques = {
  bagues_etancheite: {
    volvo: [
      {
        id: "P10097",
        name: "Bague d'etancheité VOLVO",
        type: "BAGUE",
        price: 314113,
        active: true
      }
    ]
  },
  courroies: {
    transmission: [
      {
        id: "P10102",
        name: "Courroie d'etrainement trapez VOLVO",
        price: 220000,
        active: true
      }
    ]
  },
  bougies: {
    standard: [
      {
        id: "P10030",
        name: "BOUGIE",
        reference: "7092",
        specs: {
          marque: "G-POWER"
        },
        price: 0,
        active: true
      }
    ]
  }
};

const identification_reperage = {
  reperage: {
    cables: [
      {
        id: "P10199",
        name: "REPERE CABLE",
        specs: {
          section: "1,5 / 1,5"
        },
        price: 15000,
        active: true
      }
    ],
    bagues: [
      {
        id: "P10031",
        name: "BAGUES REPERES",
        reference: "912-35-A",
        specs: {
          marque: "HWECMANN"
        },
        price: 0,
        active: true
      }
    ]
  }
};

const equipement_electronique = {
  convertisseurs: {
    usb: [
      {
        id: "P10170",
        name: "ADAPTATEUR USB SIEMENS/AMSAM",
        reference: "6GK1571-0BA00-0AA0",
        price: 180000,
        active: true
      }
    ]
  },
  batteries: {
    sitop: [
      {
        id: "P10191",
        name: "BATTERIE SITOP",
        specs: {
          marque: "SIEMENS",
          output: "24VDC-30A/12AH"
        },
        price: 0,
        active: true
      }
    ]
  }
};

const protection_electrique = {
  appareillage: {
    disjoncteurs_modulaires: [
      {
        id: "P10109",
        image: "disjoncteur-modulaire.jpg",
        name: "DISJONCTEUR C60N 4P C63A MERL A9F74463",
        price: 66950,
        active: true,
        specs: {}
      },
      {
        id: "P10110",
        name: "DISJONCTEUR ACTI9 IC40",
        specs: {
          caliber: "1P+N C16A",
          curve: "C",
          reference: "A9P52616"
        },
        price: 8060,
        active: true
      }
    ],
    disjoncteurs_moteur: [
      {
        id: "P10130",
        name: "DISJONCTEUR MOTEUR GV2ME20",
        specs: {
          series: "TESYS POWER",
          caliber: "13-18A"
        },
        price: 38000,
        active: true
      }
    ],
    contacteurs: [
      {
        id: "P10054",
        name: "CONTACTEURS - A600Q300 - ABB",
        reference: "A600Q300",
        brand: "ABB",
        price: 0,
        active: true,
        specs: {}
      },
      {
        id: "P10172",
        name: "CONTACTEUR SCHMEIDER 11KW 25A 3POLES 48V",
        reference: "LC1 D25E7",
        price: 35000,
        active: true,
        specs: {}
      }
    ],
    relais: [
      {
        id: "P10077",
        name: "RELAY - 2903660",
        reference: "2903660",
        price: 0,
        active: true,
        specs: {}
      },
      {
        id: "P10064",
        name: "RELAY GEN PURPOSE 4POT 6A14V",
        reference: "29036",
        price: 0,
        active: true,
        specs: {}
      }
    ]
  },
  securite: {
    parafoudres: [
      {
        id: "P10120",
        name: "PARAFOUDRE TETRAPOLIARE DEBROCHABLE",
        specs: {
          current: "20KA",
          voltage: "350V",
          options: "AVEC REPORT"
        },
        price: 102700,
        active: true
      }
    ],
    fusibles: [
      {
        id: "P10288",
        name: "FUSIBLE T2 aR 500A 690V",
        specs: {
          current: "500A",
          voltage: "690V"
        },
        price: 115556,
        active: true
      },
      {
        id: "P10289",
        name: "FUSIBLE T1 aR 400A 690V",
        specs: {
          current: "400A",
          voltage: "690V"
        },
        price: 66426,
        active: true
      }
    ],
    blocs_diff: [
      {
        id: "P10119",
        name: "BLOC DIFF VIGI C60",
        specs: {
          caliber: "4P 25A",
          sensitivity: "30MA",
          type: "AC MERL"
        },
        price: 107900,
        active: true
      }
    ]
  }
};

const distribution_electrique = {
  transformateurs: {
    isolement: [
      {
        id: "P10175",
        name: "TRANSFORMATEUR D'ISOLEMENT SCHNEIDER",
        specs: {
          voltage: "230-400V/230V",
          reference: "ABL6TS10U"
        },
        price: 223650,
        active: true
      }
    ]
  },
  onduleurs: {
    online: [
      {
        id: "P10117",
        name: "ONDULEUR DELTA CL3000 ONLINE",
        specs: {
          power: "3000VA",
          series: "CRYSTAL"
        },
        price: 615940,
        active: true
      }
    ]
  },
  ups: {
    standard: [
      {
        id: "P10274",
        name: "UPS NETWORK",
        price: 11899602,
        active: true,
        specs: {}
      }
    ]
  }
};

const cablage_connexion = {
  cables: {
    industriels: {
      products: [
        {
          id: "P10111",
          name: "CABLE INDUSTRIEL-R2V 3X4MM",
          specs: {
            length: "100M"
          },
          price: 265200,
          active: true
        },
        {
          id: "P10129",
          name: "CABLE INDUSTRIEL-R2V 3X2.5mm² T",
          price: 1885,
          active: true,
          specs: {}
        }
      ]
    }
  },
  connectique: {
    bornes: [
      {
        id: "P10242",
        name: "COSSE A FOURCHE DEE 6MM2",
        specs: {
          packaging: "PAQUET DE 50PCS"
        },
        price: 19500,
        active: true
      }
    ],
    cosses: [
      {
        id: "P10243",
        name: "COSSE À SERTIR",
        specs: {
          type: "à fourche",
          section: "6mm²"
        },
        price: 19500,
        active: true
      }
    ],
    goulotte: [
      {
        id: "P10202",
        name: "GOULOTTE BLC AUTOCOLL25X16",
        reference: "M2516NAVING",
        price: 3000,
        active: true,
        specs: {}
      },
      {
        id: "P10203",
        name: "GOULOTTE BLANCHE40X16 1CAN",
        reference: "M4016N/ING",
        price: 2700,
        active: true,
        specs: {}
      }
    ]
  },
  rallonges: {
    standard: [
      {
        id: "P10179",
        name: "RALONGE ELECTRIQUE ORANGE",
        specs: {
          current: "16A",
          power: "3680W",
          length: "10m",
          type: "2P+T"
        },
        price: 35000,
        active: true
      },
      {
        id: "P10144",
        name: "RALLONGE ELECTRIQUE SCHWABE ALLEMAGNE",
        specs: {
          outlets: "6",
          protection: "PARAFOUDRE"
        },
        price: 20000,
        active: true
      }
    ]
  }
};

// Product categories definition
export const productCategories: ProductCategory = {
  commande_controle,
  installation_electrique,
  composants_mecaniques,
  identification_reperage,
  equipement_electronique,
  protection_electrique,
  distribution_electrique,
  cablage_connexion,
  eclairage_industriel,
  outillage_mesure,
  maintenance,
  services,
  automatisme_controle,
  equipement_industriel,
  mesure_detection,
  eclairage,
  motorisation
};

// Remove empty categories and subcategories
export const cleanEmptyCategories = (categories: ProductCategory): ProductCategory => {
  const cleanedCategories: ProductCategory = {};

  // Iterate through each category
  Object.entries(categories).forEach(([categoryName, category]) => {
    const cleanedCategory: any = {};

    // Iterate through subcategories
    Object.entries(category).forEach(([subcategoryName, subcategory]) => {
      const cleanedSubcategory: any = {};

      // Iterate through types
      Object.entries(subcategory).forEach(([typeName, products]) => {
        // Only keep types that have active products
        if (Array.isArray(products)) {
          const activeProducts = products.filter(p => p && p.active);
          if (activeProducts.length > 0) {
            cleanedSubcategory[typeName] = activeProducts;
          }
        }
      });

      // Only keep subcategories that have types with products
      if (Object.keys(cleanedSubcategory).length > 0) {
        cleanedCategory[subcategoryName] = cleanedSubcategory;
      }
    });

    // Only keep categories that have subcategories with products
    if (Object.keys(cleanedCategory).length > 0) {
      cleanedCategories[categoryName] = cleanedCategory;
    }
  });

  return cleanedCategories;
};

// Apply fixes to categories
const fixedCategories = Object.entries(productCategories).reduce((acc, [category, subcategories]) => {
  acc[category] = Object.entries(subcategories).reduce((subAcc, [subcategory, types]) => {
    subAcc[subcategory] = Object.entries(types).reduce((typeAcc, [type, products]) => {
      // Apply specific fixes based on category
      let fixedProducts = deduplicateProducts(products);
      
      switch (category) {
        case 'motorisation':
          fixedProducts = fixedProducts.map(standardizeMotors);
          break;
        case 'protection_electrique':
          fixedProducts = fixedProducts.map(standardizeDisjunctors);
          break;
      }
      
      // Apply general standardization
      typeAcc[type] = fixedProducts.map(standardizeProduct);
      return typeAcc;
    }, {});
    return subAcc;
  }, {});
  return acc;
}, {} as ProductCategory);

// Clean empty categories
const cleanedCategories = cleanEmptyCategories(fixedCategories);

export { cleanedCategories };
