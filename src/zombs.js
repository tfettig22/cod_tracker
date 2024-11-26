const HEADSHOTS = {
  name: "Headshots",
  challenge: "Get 2000 headshots."
}

const KILLS = {
  name: "Kills",
  challenge: "Get 2000 kills."
}

const GOLD = {
  name: "Mystic Gold",
  challenge: "Get 10 kills rapidly, 15 times."
}

const OPAL = {
  name: "Opal",
  challenge: "Get 30 special zombie kills."
}

const AFTERLIFE = {
  name: "Afterlife",
  challenge: "Get 20 or more consecutive kills without taking damage, 10 times."
}

const NEBULA = {
  name: "Nebula",
  challenge: "Get 10 elite zombie kills."
}

const CRYO = {
  name: "Cryo Freeze",
  challenge: "Get 300 kills with Cryo Freeze equipped."
}

const NAPALM = {
  name: "Napalm Burst",
  challenge: "Get 300 kills with Napalm Burst equipped."
}

const BRAINROT = {
  name: "Brain Rot",
  challenge: "Get 300 kills with Brain Rot equipped."
}

const DEADWIRE = {
  name: "Dead Wire",
  challenge: "Get 300 kills with Dead Wire equipped."
}

const VERMIN = {
  name: "Vermin",
  challenge: "Get 30 vermin kills."
}

const PARASITE = {
  name: "Parasite",
  challenge: "Get 30 parasite kills."
}

const CRIT = {
  name: "Critical",
  challenge: "Get 5 critical kills rapidly, 15 times."
}

const RARE = {
  name: "Rare+",
  challenge: "Get 300 kills at Rare rarity or higher."
}

const MANGLER = {
  name: "Mangler",
  challenge: "Get 10 Mangler kills."
}

const ARMORED = {
  name: "Armored",
  challenge: "Get 75 armored zombie kills."
}

const TACTICAL = {
  name: "Tactical",
  challenge: "Get 100 zombie kills while they're affected by your tactical equipment."
}

const PACKED = {
  name: "Pack-A-Punched",
  challenge: "Get 300 kills while Pack-A-Punched."
}

const HIP = {
  name: "Hipfire",
  challenge: "Get 300 hipfire kills."
}

const POINTBANK = {
  name: "Point Blank",
  challenge: "Get 300 point blank kills."
}

const RELOAD = {
  name: "No Reloads",
  challenge: "Get 10 kills without reloading, 15 times."
}

const weapons = [
  {
    id: 1,
    order: 1,
    name: "XM4",
    type: "AR",
    challenges: [
      HEADSHOTS, NAPALM, VERMIN, GOLD, OPAL, AFTERLIFE, NEBULA
    ]
  },
  {
    id: 2,
    order: 1,
    name: "AK-74",
    type: "AR",
    challenges: [
      HEADSHOTS, CRIT, PACKED, GOLD, OPAL, AFTERLIFE, NEBULA
    ]
  },
  {
    id: 3,
    order: 1,
    name: "AMES 85",
    type: "AR",
    challenges: [
      HEADSHOTS, RARE, BRAINROT, GOLD, OPAL, AFTERLIFE, NEBULA
    ]
  },
  {
    id: 4,
    order: 1,
    name: "GPR 91",
    type: "AR",
    challenges: [
      HEADSHOTS, CRYO, TACTICAL, GOLD, OPAL, AFTERLIFE, NEBULA
    ]
  },
  {
    id: 5,
    order: 1,
    name: "Model L",
    type: "AR",
    challenges: [
      HEADSHOTS, ARMORED, CRIT, GOLD, OPAL, AFTERLIFE, NEBULA
    ]
  },
  {
    id: 6,
    order: 1,
    name: "Goblin MK2",
    type: "AR",
    challenges: [
      HEADSHOTS, MANGLER, CRIT, GOLD, OPAL, AFTERLIFE, NEBULA
    ]
  },
  {
    id: 7,
    order: 1,
    name: "AS VAL",
    type: "AR",
    challenges: [
      HEADSHOTS, PARASITE, DEADWIRE, GOLD, OPAL, AFTERLIFE, NEBULA
    ]
  },
  {
    id: 8,
    order: 1,
    name: "Krig C",
    type: "AR",
    challenges: [
      HEADSHOTS, CRYO, TACTICAL, GOLD, OPAL, AFTERLIFE, NEBULA
    ]
  },
  {
    id: 9,
    order: 2,
    name: "C9",
    type: "SMG",
    challenges: [
      HEADSHOTS, PARASITE, PACKED, GOLD, OPAL, AFTERLIFE, NEBULA
    ]
  },
  {
    id: 10,
    order: 2,
    name: "KSV",
    type: "SMG",
    challenges: [
      HEADSHOTS, DEADWIRE, HIP, GOLD, OPAL, AFTERLIFE, NEBULA
    ]
  },
  {
    id: 11,
    order: 2,
    name: "Tanto .22",
    type: "SMG",
    challenges: [
      HEADSHOTS, CRIT, PACKED, GOLD, OPAL, AFTERLIFE, NEBULA
    ]
  },
  {
    id: 12,
    order: 2,
    name: "PP-919",
    type: "SMG",
    challenges: [
      HEADSHOTS, CRYO, RELOAD, GOLD, OPAL, AFTERLIFE, NEBULA
    ]
  },
  {
    id: 13,
    order: 2,
    name: "Jackal PDW",
    type: "SMG",
    challenges: [
      HEADSHOTS, NAPALM, HIP, GOLD, OPAL, AFTERLIFE, NEBULA
    ]
  },
  {
    id: 14,
    order: 2,
    name: "Kompakt 92",
    type: "SMG",
    challenges: [
      HEADSHOTS, RARE, POINTBANK, GOLD, OPAL, AFTERLIFE, NEBULA
    ]
  },
  {
    id: 15,
    order: 2,
    name: "Saug",
    type: "SMG",
    challenges: [
      HEADSHOTS, DEADWIRE, POINTBANK, GOLD, OPAL, AFTERLIFE, NEBULA
    ]
  },
  {
    id: 16,
    order: 3,
    name: "PU-21",
    type: "LMG",
    challenges: [
      HEADSHOTS, MANGLER, HIP, GOLD, OPAL, AFTERLIFE, NEBULA
    ]
  },
  {
    id: 17,
    order: 3,
    name: "XMG",
    type: "LMG",
    challenges: [
      HEADSHOTS, RELOAD, BRAINROT, GOLD, OPAL, AFTERLIFE, NEBULA
    ]
  },
  {
    id: 18,
    order: 3,
    name: "GPMG-7",
    type: "LMG",
    challenges: [
      HEADSHOTS, POINTBANK, RELOAD, GOLD, OPAL, AFTERLIFE, NEBULA
    ]
  },
  {
    id: 19,
    order: 4,
    name: "Marine SP",
    type: "Shotgun",
    challenges: [
      HEADSHOTS, RARE, HIP, GOLD, OPAL, AFTERLIFE, NEBULA
    ]
  },
  {
    id: 20,
    order: 4,
    name: "ASG-89",
    type: "Shotgun",
    challenges: [
      HEADSHOTS, TACTICAL, PARASITE, GOLD, OPAL, AFTERLIFE, NEBULA
    ]
  },
  {
    id: 21,
    order: 5,
    name: "SWAT 5.56",
    type: "Marksman",
    challenges: [
      HEADSHOTS, TACTICAL, ARMORED, GOLD, OPAL, AFTERLIFE, NEBULA
    ]
  },
  {
    id: 22,
    order: 5,
    name: "Tsarkov 7.62",
    type: "Marksman",
    challenges: [
      HEADSHOTS, TACTICAL, DEADWIRE, GOLD, OPAL, AFTERLIFE, NEBULA
    ]
  },
  {
    id: 23,
    order: 5,
    name: "AEK-973",
    type: "Marksman",
    challenges: [
      HEADSHOTS, NAPALM, CRYO, GOLD, OPAL, AFTERLIFE, NEBULA
    ]
  },
  {
    id: 24,
    order: 5,
    name: "DM-10",
    type: "Marksman",
    challenges: [
      HEADSHOTS, CRIT, RARE, GOLD, OPAL, AFTERLIFE, NEBULA
    ]
  },
  {
    id: 25,
    order: 6,
    name: "LW3A1 Frostline",
    type: "Sniper",
    challenges: [
      HEADSHOTS, RARE, PARASITE, GOLD, OPAL, AFTERLIFE, NEBULA
    ]
  },
  {
    id: 26,
    order: 6,
    name: "SVD",
    type: "Sniper",
    challenges: [
      HEADSHOTS, PACKED, CRIT, GOLD, OPAL, AFTERLIFE, NEBULA
    ]
  },
  {
    id: 27,
    order: 6,
    name: "LR 7.62",
    type: "Sniper",
    challenges: [
      HEADSHOTS, MANGLER, BRAINROT, GOLD, OPAL, AFTERLIFE, NEBULA
    ]
  },
  {
    id: 28,
    order: 7,
    name: "9mm PM",
    type: "Pistol",
    challenges: [
      HEADSHOTS, CRYO, DEADWIRE, GOLD, OPAL, AFTERLIFE, NEBULA
    ]
  },
  {
    id: 29,
    order: 7,
    name: "Grekhova",
    type: "Pistol",
    challenges: [
      HEADSHOTS, MANGLER, CRIT, GOLD, OPAL, AFTERLIFE, NEBULA
    ]
  },
  {
    id: 30,
    order: 7,
    name: "GS45",
    type: "Pistol",
    challenges: [
      HEADSHOTS, RARE, HIP, GOLD, OPAL, AFTERLIFE, NEBULA
    ]
  },
  {
    id: 31,
    order: 7,
    name: "Stryder .22",
    type: "Pistol",
    challenges: [
      HEADSHOTS, POINTBANK, VERMIN, GOLD, OPAL, AFTERLIFE, NEBULA
    ]
  },
  {
    id: 32,
    order: 8,
    name: "CIGMA 28",
    type: "Launcher",
    challenges: [
      KILLS, PACKED, ARMORED, GOLD, OPAL, AFTERLIFE, NEBULA
    ]
  },
  {
    id: 33,
    order: 8,
    name: "HE-1",
    type: "Launcher",
    challenges: [
      KILLS, VERMIN, RARE, GOLD, OPAL, AFTERLIFE, NEBULA
    ]
  },
  {
    id: 34,
    order: 9,
    name: "Knife",
    type: "Melee",
    challenges: [
      KILLS, BRAINROT, ARMORED, GOLD, OPAL, AFTERLIFE, NEBULA
    ]
  },
  {
    id: 35,
    order: 9,
    name: "Baseball Bat",
    type: "Melee",
    challenges: [
      KILLS, RARE, VERMIN, GOLD, OPAL, AFTERLIFE, NEBULA
    ]
  },
  {
    id: 36,
    order: 9,
    name: "Power Drill",
    type: "Melee",
    challenges: [
      KILLS, RARE, MANGLER, GOLD, OPAL, AFTERLIFE, NEBULA
    ]
  },
  {
    id: 37,
    order: 10,
    name: "Sirin 9mm",
    type: "Special",
    challenges: [
      HEADSHOTS, HIP, PARASITE, GOLD, OPAL, AFTERLIFE, NEBULA
    ]
  },
];

const sortWeapons = (list) => {
  return list.sort((a, b) => {
    return a.order - b.order;
  });
};

export const sortedWeapons = sortWeapons(weapons);