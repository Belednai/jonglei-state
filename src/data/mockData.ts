// Mock data for Jonglei State Government Portal
// Includes administrative divisions, departments, projects, news, and contact information

export interface County {
  id: string;
  name: string;
  capital: string;
  population: number;
  area: number; // in km²
  payams: Payam[];
  commissioner: string;
  phone: string;
  email: string;
}

export interface Payam {
  id: string;
  name: string;
  headquarters: string;
  population: number;
  bomas: Boma[];
  chief: string;
}

export interface Boma {
  id: string;
  name: string;
  population: number;
  chief: string;
}

export interface Department {
  id: string;
  name: string;
  description: string;
  head: string;
  staff: number;
  location: string;
  phone: string;
  email: string;
  services: string[];
  status: string;
  budget?: number;
  counties?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  status: string;
  progress: number;
  budget: number;
  spent: number;
  startDate: string;
  endDate: string;
  location: string;
  beneficiaries: number;
  category: string;
  priority: string;
  manager: string;
  updates: ProjectUpdate[];
  counties: string[];
  payams?: string[];
}

export interface ProjectUpdate {
  date: string;
  title: string;
  description: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  publishedDate: string;
  readTime: number;
  featured: boolean;
  image: string;
  views: number;
  county?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: string;
  organizer: string;
  status: string;
  capacity?: number;
  registered?: number;
  county?: string;
  payam?: string;
  image?: string;
}

export interface ContactInfo {
  type: string;
  name: string;
  position: string;
  phone: string;
  email: string;
  address: string;
  county?: string;
  payam?: string;
  workingHours: string;
}

// Administrative Divisions Data
export const counties: County[] = [
  {
    id: "bor",
    name: "Bor County",
    capital: "Bor Town",
    population: 315000,
    area: 8400,
    commissioner: "Hon. James Manyok Gatluak",
    phone: "+211 123 456 801",
    email: "commissioner@bor.jonglei.gov.ss",
    payams: [
      {
        id: "bor-central",
        name: "Bor Central",
        headquarters: "Bor Town",
        population: 85000,
        chief: "Chief Peter Deng Majok",
        bomas: [
          { id: "bor-town", name: "Bor Town", population: 45000, chief: "Chief John Garang" },
          { id: "malek", name: "Malek", population: 25000, chief: "Chief Mary Akech" },
          { id: "kolnyang", name: "Kolnyang", population: 15000, chief: "Chief Daniel Mabior" }
        ]
      },
      {
        id: "anyidi",
        name: "Anyidi",
        headquarters: "Anyidi",
        population: 65000,
        chief: "Chief Rebecca Nyandeng",
        bomas: [
          { id: "anyidi-center", name: "Anyidi Center", population: 30000, chief: "Chief Michael Deng" },
          { id: "makuach", name: "Makuach", population: 20000, chief: "Chief Sarah Bol" },
          { id: "panrieng", name: "Panrieng", population: 15000, chief: "Chief Joseph Majok" }
        ]
      },
      {
        id: "jalle",
        name: "Jalle",
        headquarters: "Jalle",
        population: 55000,
        chief: "Chief Abraham Deng Nhial",
        bomas: [
          { id: "jalle-center", name: "Jalle Center", population: 25000, chief: "Chief Grace Akol" },
          { id: "pakeer", name: "Pakeer", population: 18000, chief: "Chief Thomas Mading" },
          { id: "werkok", name: "Werkok", population: 12000, chief: "Chief Elizabeth Deng" }
        ]
      },
      {
        id: "malual-chaat",
        name: "Malual Chaat",
        headquarters: "Malual",
        population: 48000,
        chief: "Chief David Majok Garang",
        bomas: [
          { id: "malual", name: "Malual", population: 22000, chief: "Chief Agnes Nyong" },
          { id: "chaat", name: "Chaat", population: 16000, chief: "Chief Paul Deng" },
          { id: "pawel", name: "Pawel", population: 10000, chief: "Chief Martha Akech" }
        ]
      }
    ]
  },
  {
    id: "twic-east",
    name: "Twic East County",
    capital: "Panyagor",
    population: 185000,
    area: 6200,
    commissioner: "Hon. Martha Mayen Deng",
    phone: "+211 123 456 802",
    email: "commissioner@twiceast.jonglei.gov.ss",
    payams: [
      {
        id: "panyagor",
        name: "Panyagor",
        headquarters: "Panyagor",
        population: 65000,
        chief: "Chief William Deng Majok",
        bomas: [
          { id: "panyagor-town", name: "Panyagor Town", population: 35000, chief: "Chief Susan Akol" },
          { id: "malith", name: "Malith", population: 18000, chief: "Chief James Mabior" },
          { id: "thonyor", name: "Thonyor", population: 12000, chief: "Chief Catherine Deng" }
        ]
      },
      {
        id: "kongor",
        name: "Kongor",
        headquarters: "Kongor",
        population: 55000,
        chief: "Chief Peter Garang Deng",
        bomas: [
          { id: "kongor-center", name: "Kongor Center", population: 28000, chief: "Chief Helen Majok" },
          { id: "pajiek", name: "Pajiek", population: 15000, chief: "Chief Samuel Deng" },
          { id: "wangkai", name: "Wangkai", population: 12000, chief: "Chief Rachel Akech" }
        ]
      },
      {
        id: "panyang",
        name: "Panyang",
        headquarters: "Panyang",
        population: 45000,
        chief: "Chief Mary Deng Akol",
        bomas: [
          { id: "panyang-center", name: "Panyang Center", population: 22000, chief: "Chief Robert Mabior" },
          { id: "aliab", name: "Aliab", population: 13000, chief: "Chief Joyce Majok" },
          { id: "wunrok", name: "Wunrok", population: 10000, chief: "Chief Andrew Deng" }
        ]
      }
    ]
  },
  {
    id: "duk",
    name: "Duk County",
    capital: "Padiet",
    population: 125000,
    area: 4800,
    commissioner: "Hon. Simon Mabior Riiny",
    phone: "+211 123 456 803",
    email: "commissioner@duk.jonglei.gov.ss",
    payams: [
      {
        id: "padiet",
        name: "Padiet",
        headquarters: "Padiet",
        population: 45000,
        chief: "Chief Elizabeth Deng Majok",
        bomas: [
          { id: "padiet-town", name: "Padiet Town", population: 25000, chief: "Chief George Akol" },
          { id: "panakuach", name: "Panakuach", population: 12000, chief: "Chief Margaret Deng" },
          { id: "wernyol", name: "Wernyol", population: 8000, chief: "Chief Francis Mabior" }
        ]
      },
      {
        id: "panpandiar",
        name: "Panpandiar",
        headquarters: "Panpandiar",
        population: 40000,
        chief: "Chief John Garang Majok",
        bomas: [
          { id: "panpandiar-center", name: "Panpandiar Center", population: 20000, chief: "Chief Anna Akech" },
          { id: "nyarweng", name: "Nyarweng", population: 12000, chief: "Chief Peter Deng" },
          { id: "buong", name: "Buong", population: 8000, chief: "Chief Rose Majok" }
        ]
      },
      {
        id: "pajut",
        name: "Pajut",
        headquarters: "Pajut",
        population: 40000,
        chief: "Chief Daniel Deng Akol",
        bomas: [
          { id: "pajut-center", name: "Pajut Center", population: 18000, chief: "Chief Lucy Mabior" },
          { id: "wunlang", name: "Wunlang", population: 12000, chief: "Chief Moses Majok" },
          { id: "pagarau", name: "Pagarau", population: 10000, chief: "Chief Jennifer Deng" }
        ]
      }
    ]
  },
  {
    id: "uror",
    name: "Uror County",
    capital: "Motot",
    population: 165000,
    area: 5600,
    commissioner: "Hon. Rebecca Nyandeng Garang",
    phone: "+211 123 456 804",
    email: "commissioner@uror.jonglei.gov.ss",
    payams: [
      {
        id: "motot",
        name: "Motot",
        headquarters: "Motot",
        population: 55000,
        chief: "Chief Abraham Deng Majok",
        bomas: [
          { id: "motot-center", name: "Motot Center", population: 28000, chief: "Chief Grace Akol" },
          { id: "pathai", name: "Pathai", population: 15000, chief: "Chief David Mabior" },
          { id: "wangkei", name: "Wangkei", population: 12000, chief: "Chief Sarah Deng" }
        ]
      },
      {
        id: "pieri",
        name: "Pieri",
        headquarters: "Pieri",
        population: 50000,
        chief: "Chief Mary Akech Deng",
        bomas: [
          { id: "pieri-center", name: "Pieri Center", population: 25000, chief: "Chief Joseph Majok" },
          { id: "pulchuol", name: "Pulchuol", population: 15000, chief: "Chief Helen Akol" },
          { id: "wicok", name: "Wicok", population: 10000, chief: "Chief Michael Deng" }
        ]
      },
      {
        id: "pathai",
        name: "Pathai",
        headquarters: "Pathai",
        population: 35000,
        chief: "Chief Simon Garang Majok",
        bomas: [
          { id: "pathai-center", name: "Pathai Center", population: 18000, chief: "Chief Catherine Mabior" },
          { id: "yuai", name: "Yuai", population: 10000, chief: "Chief Paul Deng" },
          { id: "waat", name: "Waat", population: 7000, chief: "Chief Rebecca Akech" }
        ]
      }
    ]
  },
  {
    id: "nyirol",
    name: "Nyirol County",
    capital: "Yuai",
    population: 95000,
    area: 4200,
    commissioner: "Hon. Gabriel Deng Garang",
    phone: "+211 123 456 805",
    email: "commissioner@nyirol.jonglei.gov.ss",
    payams: [
      {
        id: "yuai",
        name: "Yuai",
        headquarters: "Yuai",
        population: 35000,
        chief: "Chief Martha Akol Deng",
        bomas: [
          { id: "yuai-town", name: "Yuai Town", population: 18000, chief: "Chief Thomas Majok" },
          { id: "waat", name: "Waat", population: 10000, chief: "Chief Agnes Mabior" },
          { id: "jiech", name: "Jiech", population: 7000, chief: "Chief Samuel Deng" }
        ]
      },
      {
        id: "chuil",
        name: "Chuil",
        headquarters: "Chuil",
        population: 30000,
        chief: "Chief Peter Akech Garang",
        bomas: [
          { id: "chuil-center", name: "Chuil Center", population: 15000, chief: "Chief Mary Majok" },
          { id: "langkien", name: "Langkien", population: 8000, chief: "Chief John Deng" },
          { id: "wunlit", name: "Wunlit", population: 7000, chief: "Chief Elizabeth Akol" }
        ]
      },
      {
        id: "maar",
        name: "Maar",
        headquarters: "Maar",
        population: 30000,
        chief: "Chief James Deng Mabior",
        bomas: [
          { id: "maar-center", name: "Maar Center", population: 15000, chief: "Chief Susan Majok" },
          { id: "nyal", name: "Nyal", population: 8000, chief: "Chief William Akech" },
          { id: "pultruk", name: "Pultruk", population: 7000, chief: "Chief Joyce Deng" }
        ]
      }
    ]
  },
  {
    id: "ayod",
    name: "Ayod County",
    capital: "Ayod",
    population: 105000,
    area: 3800,
    commissioner: "Hon. Agnes Akol Kachuol",
    phone: "+211 123 456 806",
    email: "commissioner@ayod.jonglei.gov.ss",
    payams: [
      {
        id: "ayod-central",
        name: "Ayod Central",
        headquarters: "Ayod",
        population: 40000,
        chief: "Chief Michael Deng Akol",
        bomas: [
          { id: "ayod-town", name: "Ayod Town", population: 20000, chief: "Chief Helen Majok" },
          { id: "jiech", name: "Jiech", population: 12000, chief: "Chief Robert Deng" },
          { id: "wunamom", name: "Wunamom", population: 8000, chief: "Chief Grace Akech" }
        ]
      },
      {
        id: "pagak",
        name: "Pagak",
        headquarters: "Pagak",
        population: 35000,
        chief: "Chief Sarah Garang Majok",
        bomas: [
          { id: "pagak-center", name: "Pagak Center", population: 18000, chief: "Chief Daniel Mabior" },
          { id: "walgak", name: "Walgak", population: 10000, chief: "Chief Martha Deng" },
          { id: "jiokow", name: "Jiokow", population: 7000, chief: "Chief Paul Akol" }
        ]
      },
      {
        id: "walgak",
        name: "Walgak",
        headquarters: "Walgak",
        population: 30000,
        chief: "Chief Joseph Majok Garang",
        bomas: [
          { id: "walgak-center", name: "Walgak Center", population: 15000, chief: "Chief Rachel Deng" },
          { id: "mogok", name: "Mogok", population: 8000, chief: "Chief Andrew Mabior" },
          { id: "thonyor", name: "Thonyor", population: 7000, chief: "Chief Catherine Majok" }
        ]
      }
    ]
  },
  {
    id: "pochalla",
    name: "Pochalla County",
    capital: "Pochalla",
    population: 85000,
    area: 7200,
    commissioner: "Hon. David Majok Chol",
    phone: "+211 123 456 807",
    email: "commissioner@pochalla.jonglei.gov.ss",
    payams: [
      {
        id: "pochalla-central",
        name: "Pochalla Central",
        headquarters: "Pochalla",
        population: 35000,
        chief: "Chief Elizabeth Akol Garang",
        bomas: [
          { id: "pochalla-town", name: "Pochalla Town", population: 18000, chief: "Chief George Deng" },
          { id: "maruwa", name: "Maruwa", population: 10000, chief: "Chief Mary Mabior" },
          { id: "boma-state", name: "Boma State", population: 7000, chief: "Chief Samuel Majok" }
        ]
      },
      {
        id: "kapeta",
        name: "Kapeta",
        headquarters: "Kapeta",
        population: 25000,
        chief: "Chief Peter Deng Akech",
        bomas: [
          { id: "kapeta-center", name: "Kapeta Center", population: 12000, chief: "Chief Anna Majok" },
          { id: "mogos", name: "Mogos", population: 8000, chief: "Chief Francis Deng" },
          { id: "kigille", name: "Kigille", population: 5000, chief: "Chief Margaret Akol" }
        ]
      },
      {
        id: "maruwa-payam",
        name: "Maruwa",
        headquarters: "Maruwa",
        population: 25000,
        chief: "Chief John Garang Deng",
        bomas: [
          { id: "maruwa-center", name: "Maruwa Center", population: 12000, chief: "Chief Susan Mabior" },
          { id: "kigille", name: "Kigille", population: 8000, chief: "Chief Moses Majok" },
          { id: "boma", name: "Boma", population: 5000, chief: "Chief Jennifer Akech" }
        ]
      }
    ]
  }
];

// Enhanced Departments Data
export const departments: Department[] = [
  {
    id: "administration",
    name: "Office of the Governor",
    description: "Executive leadership, policy coordination, and strategic oversight of all government operations across Jonglei State",
    head: "H.E. Governor Denay Jock Chagor",
    staff: 85,
    location: "Governor's Complex, Main Building, Bor Town",
    phone: "+211 123 456 790",
    email: "governor@jonglei.gov.ss",
    services: ["Executive Leadership", "Policy Development", "Inter-agency Coordination", "Strategic Planning", "Public Relations"],
    status: "Active",
    budget: 5500000,
    counties: ["all"]
  },
  {
    id: "county-administration",
    name: "County Administration",
    description: "Coordination and oversight of county-level government operations, commissioners, and local administration",
    head: "Director General James Manyok Gatluak",
    staff: 120,
    location: "Administrative Block B, Bor Town",
    phone: "+211 123 456 791",
    email: "counties@jonglei.gov.ss",
    services: ["County Oversight", "Local Government Support", "Administrative Coordination", "Policy Implementation"],
    status: "Active",
    budget: 3200000,
    counties: ["bor", "twic-east", "duk", "uror", "nyirol", "ayod", "pochalla"]
  },
  {
    id: "payam-boma-affairs",
    name: "Payam & Boma Affairs",
    description: "Management and support of payam and boma level administration, traditional authorities, and community governance",
    head: "Director Mary Akech Deng",
    staff: 95,
    location: "Community Affairs Building, Bor Town",
    phone: "+211 123 456 792",
    email: "payams@jonglei.gov.ss",
    services: ["Payam Administration", "Boma Coordination", "Traditional Authority Liaison", "Community Development"],
    status: "Active",
    budget: 2800000,
    counties: ["all"]
  },
  {
    id: "finance",
    name: "Ministry of Finance & Economic Planning",
    description: "Financial management, budget planning, revenue collection, and economic development planning for the state",
    head: "Hon. Minister Peter Garang Majok",
    staff: 65,
    location: "Treasury Building, Bor Town",
    phone: "+211 123 456 793",
    email: "finance@jonglei.gov.ss",
    services: ["Budget Planning", "Revenue Collection", "Financial Oversight", "Economic Planning", "Procurement"],
    status: "Active",
    budget: 4200000,
    counties: ["all"]
  },
  {
    id: "health",
    name: "Ministry of Health",
    description: "Healthcare service delivery, public health programs, and medical infrastructure development across all counties",
    head: "Hon. Minister Dr. Sarah Johnson Akol",
    staff: 450,
    location: "Health Ministry Complex, Bor Town",
    phone: "+211 123 456 794",
    email: "health@jonglei.gov.ss",
    services: ["Healthcare Delivery", "Public Health Programs", "Medical Training", "Disease Prevention", "Maternal Health"],
    status: "Active",
    budget: 8500000,
    counties: ["all"]
  },
  {
    id: "education",
    name: "Ministry of Education",
    description: "Education policy, school management, teacher training, and educational infrastructure development",
    head: "Hon. Minister Prof. Michael Brown Deng",
    staff: 380,
    location: "Education Ministry, Bor Town",
    phone: "+211 123 456 795",
    email: "education@jonglei.gov.ss",
    services: ["School Administration", "Teacher Training", "Curriculum Development", "Adult Education", "Vocational Training"],
    status: "Active",
    budget: 7200000,
    counties: ["all"]
  },
  {
    id: "agriculture",
    name: "Ministry of Agriculture & Food Security",
    description: "Agricultural development, livestock management, food security programs, and rural development initiatives",
    head: "Hon. Minister Eng. David Wilson Majok",
    staff: 220,
    location: "Agriculture Complex, Bor Town",
    phone: "+211 123 456 796",
    email: "agriculture@jonglei.gov.ss",
    services: ["Crop Production", "Livestock Development", "Food Security", "Agricultural Extension", "Rural Development"],
    status: "Active",
    budget: 4800000,
    counties: ["all"]
  },
  {
    id: "infrastructure",
    name: "Ministry of Physical Infrastructure",
    description: "Road construction, water systems, public buildings, and infrastructure maintenance across the state",
    head: "Hon. Minister Eng. James Anderson Akol",
    staff: 185,
    location: "Public Works Building, Bor Town",
    phone: "+211 123 456 797",
    email: "infrastructure@jonglei.gov.ss",
    services: ["Road Construction", "Water Systems", "Public Buildings", "Infrastructure Maintenance", "Urban Planning"],
    status: "Active",
    budget: 12000000,
    counties: ["all"]
  },
  {
    id: "youth-sports",
    name: "Ministry of Youth & Sports",
    description: "Youth development programs, sports promotion, skills training, and youth empowerment initiatives",
    head: "Hon. Minister Lisa Thompson Deng",
    staff: 75,
    location: "Youth Center, Bor Town",
    phone: "+211 123 456 798",
    email: "youth@jonglei.gov.ss",
    services: ["Youth Development", "Sports Programs", "Skills Training", "Youth Employment", "Recreation Facilities"],
    status: "Active",
    budget: 2500000,
    counties: ["all"]
  },
  {
    id: "gender-social-welfare",
    name: "Ministry of Gender & Social Welfare",
    description: "Gender equality programs, social protection, child welfare, and support for vulnerable populations",
    head: "Hon. Minister Rebecca Nyandeng Akech",
    staff: 95,
    location: "Social Services Building, Bor Town",
    phone: "+211 123 456 799",
    email: "gender@jonglei.gov.ss",
    services: ["Gender Programs", "Child Protection", "Social Protection", "Disability Support", "Women Empowerment"],
    status: "Active",
    budget: 3100000,
    counties: ["all"]
  }
];

// Enhanced Projects Data
export const projects: Project[] = [
  {
    id: "healthcare-expansion-2024",
    title: "Jonglei State Healthcare Infrastructure Expansion Program",
    description: "Comprehensive healthcare infrastructure development including construction of 15 new health centers, 3 county hospitals, and mobile clinic services across all counties",
    status: "In Progress",
    progress: 68,
    budget: 15500000,
    spent: 10540000,
    startDate: "2023-06-01",
    endDate: "2025-05-31",
    location: "All Counties - Bor, Twic East, Duk, Uror, Nyirol, Ayod, Pochalla",
    beneficiaries: 485000,
    category: "Healthcare",
    priority: "High",
    manager: "Dr. Sarah Johnson Akol, Minister of Health",
    counties: ["bor", "twic-east", "duk", "uror", "nyirol", "ayod", "pochalla"],
    payams: ["bor-central", "anyidi", "panyagor", "kongor", "padiet", "motot", "yuai", "ayod-central"],
    updates: [
      {
        date: "2024-01-20",
        title: "Bor County Hospital Construction 75% Complete",
        description: "Major milestone achieved with the new 100-bed county hospital in Bor nearing completion. Medical equipment installation begins next month."
      },
      {
        date: "2024-01-15",
        title: "Mobile Clinic Services Launched in Remote Areas",
        description: "Five mobile health units now operational, serving remote payams and bomas with basic healthcare services and vaccination programs."
      },
      {
        date: "2024-01-08",
        title: "Health Worker Training Program Completed",
        description: "Successfully trained 120 community health workers across all counties to support primary healthcare delivery in rural areas."
      }
    ]
  },
  {
    id: "education-digital-transformation",
    title: "Digital Education Initiative - Jonglei 2030",
    description: "Transforming education through technology: establishing computer labs, internet connectivity, digital learning platforms, and teacher training in 150 schools across all counties",
    status: "Planning",
    progress: 25,
    budget: 8900000,
    spent: 2225000,
    startDate: "2024-02-01",
    endDate: "2026-12-31",
    location: "150 Schools across all counties",
    beneficiaries: 75000,
    category: "Education",
    priority: "High",
    manager: "Prof. Michael Brown Deng, Minister of Education",
    counties: ["bor", "twic-east", "duk", "uror", "nyirol", "ayod", "pochalla"],
    payams: ["bor-central", "anyidi", "jalle", "panyagor", "kongor", "padiet", "motot", "pieri"],
    updates: [
      {
        date: "2024-01-18",
        title: "Pilot Schools Selected and Infrastructure Assessment Completed",
        description: "25 pilot schools identified across counties. Infrastructure assessments show 80% require electrical upgrades before computer lab installation."
      },
      {
        date: "2024-01-10",
        title: "Teacher Training Curriculum Developed",
        description: "Comprehensive digital literacy curriculum for teachers completed, focusing on basic computer skills and digital teaching methods."
      }
    ]
  },
  {
    id: "water-sanitation-rural",
    title: "Rural Water Access & Sanitation Project",
    description: "Drilling 120 boreholes, constructing 45 water treatment facilities, and building sanitation infrastructure across rural payams and bomas",
    status: "In Progress",
    progress: 85,
    budget: 12300000,
    spent: 10455000,
    startDate: "2022-03-01",
    endDate: "2024-08-31",
    location: "Rural areas in Fangak, Pigi, Uror, Nyirol, Ayod Counties",
    beneficiaries: 285000,
    category: "Infrastructure",
    priority: "High",
    manager: "Eng. James Anderson Akol, Minister of Infrastructure",
    counties: ["uror", "nyirol", "ayod", "duk", "pochalla"],
    payams: ["motot", "pieri", "yuai", "chuil", "ayod-central", "padiet"],
    updates: [
      {
        date: "2024-01-22",
        title: "95 Boreholes Successfully Completed and Operational",
        description: "Significant progress with 95 out of 120 planned boreholes now operational, providing clean water access to over 200,000 people."
      },
      {
        date: "2024-01-12",
        title: "Water Quality Testing Shows Excellent Results",
        description: "Laboratory tests confirm all new water sources meet WHO standards for drinking water quality and safety."
      }
    ]
  },
  {
    id: "agriculture-mechanization",
    title: "Agricultural Mechanization & Food Security Program",
    description: "Providing modern farming equipment, improved seeds, fertilizers, and agricultural training to 5,000 farmers across all counties to boost food production",
    status: "In Progress",
    progress: 72,
    budget: 6800000,
    spent: 4896000,
    startDate: "2023-01-15",
    endDate: "2024-12-31",
    location: "All Counties - Focus on high agricultural potential areas",
    beneficiaries: 35000,
    category: "Agriculture",
    priority: "High",
    manager: "Eng. David Wilson Majok, Minister of Agriculture",
    counties: ["bor", "twic-east", "duk", "uror", "nyirol"],
    payams: ["bor-central", "anyidi", "panyagor", "padiet", "motot", "yuai"],
    updates: [
      {
        date: "2024-01-25",
        title: "Tractors and Equipment Distribution Completed",
        description: "Successfully distributed 45 tractors, 120 plows, and other farming equipment to farmer cooperatives across five counties."
      },
      {
        date: "2024-01-08",
        title: "Improved Seeds Show 45% Yield Increase",
        description: "Pilot farmers using improved sorghum and maize seeds report average yield increases of 45% compared to traditional varieties."
      }
    ]
  },
  {
    id: "road-connectivity-project",
    title: "Jonglei Inter-County Road Network Development",
    description: "Construction and rehabilitation of 450km of roads connecting county headquarters to payam centers and improving rural-urban connectivity",
    status: "In Progress",
    progress: 42,
    budget: 18500000,
    spent: 7770000,
    startDate: "2023-09-01",
    endDate: "2025-12-31",
    location: "Inter-county and rural-urban connection roads",
    beneficiaries: 650000,
    category: "Infrastructure",
    priority: "High",
    manager: "Eng. James Anderson Akol, Minister of Infrastructure",
    counties: ["all"],
    payams: ["all"],
    updates: [
      {
        date: "2024-01-20",
        title: "Bor-Panyagor Road Section Completed",
        description: "Successfully completed 65km road section connecting Bor County to Panyagor in Twic East County, reducing travel time by 40%."
      },
      {
        date: "2024-01-15",
        title: "Bridge Construction Begins Over White Nile",
        description: "Construction of strategic bridge over White Nile begins, which will improve year-round connectivity between eastern and western counties."
      }
    ]
  },
  {
    id: "youth-skills-entrepreneurship",
    title: "Youth Skills Development & Entrepreneurship Program",
    description: "Comprehensive vocational training, business skills development, and startup support for 8,000 young people across all counties",
    status: "Planning",
    progress: 15,
    budget: 4200000,
    spent: 630000,
    startDate: "2024-03-01",
    endDate: "2026-02-28",
    location: "Youth centers in all county headquarters and major payam centers",
    beneficiaries: 8000,
    category: "Social Development",
    priority: "Medium",
    manager: "Lisa Thompson Deng, Minister of Youth & Sports",
    counties: ["all"],
    payams: ["bor-central", "panyagor", "padiet", "motot", "yuai", "ayod-central", "pochalla-central"],
    updates: [
      {
        date: "2024-01-18",
        title: "Vocational Training Centers Identified",
        description: "Seven strategic locations selected for vocational training centers, with focus on carpentry, tailoring, mechanics, and agriculture."
      },
      {
        date: "2024-01-05",
        title: "Partnership with NGOs Established",
        description: "Signed MOUs with three international NGOs to provide technical expertise and additional funding for the program."
      }
    ]
  },
  {
    id: "livestock-development",
    title: "Livestock Development & Veterinary Services Project",
    description: "Improving livestock health, establishing veterinary clinics, cattle vaccination programs, and livestock market development",
    status: "In Progress",
    progress: 58,
    budget: 3800000,
    spent: 2204000,
    startDate: "2023-04-01",
    endDate: "2024-10-31",
    location: "Pastoral areas in all counties with focus on cattle camps",
    beneficiaries: 125000,
    category: "Agriculture",
    priority: "Medium",
    manager: "Dr. Gabriel Deng Garang, Director of Livestock",
    counties: ["all"],
    payams: ["pastoral areas"],
    updates: [
      {
        date: "2024-01-22",
        title: "Mobile Veterinary Units Deployed",
        description: "Eight mobile veterinary units now operational, providing vaccination and treatment services to cattle camps across the state."
      },
      {
        date: "2024-01-10",
        title: "Livestock Market Construction Begins",
        description: "Construction of modern livestock markets begins in Bor, Panyagor, and Yuai to improve cattle trade and farmer incomes."
      }
    ]
  },
  {
    id: "renewable-energy-initiative",
    title: "Solar Energy Access Project",
    description: "Installing solar power systems in schools, health centers, and government offices across rural areas to improve service delivery",
    status: "Planning",
    progress: 8,
    budget: 5600000,
    spent: 448000,
    startDate: "2024-04-01",
    endDate: "2025-12-31",
    location: "Rural schools, health centers, and government facilities",
    beneficiaries: 180000,
    category: "Infrastructure",
    priority: "Medium",
    manager: "Eng. Peter Akech Deng, Director of Energy",
    counties: ["all"],
    payams: ["rural payams"],
    updates: [
      {
        date: "2024-01-15",
        title: "Solar System Specifications Finalized",
        description: "Technical specifications completed for solar installations in 85 facilities, prioritizing health centers and schools."
      }
    ]
  }
];

// Enhanced News Articles
export const newsArticles: NewsArticle[] = [
  {
    id: "governor-2024-development-vision",
    title: "Governor Unveils Ambitious 2024-2026 Development Vision for Jonglei State",
    excerpt: "H.E. Governor Denay Jock Chagor announces comprehensive development strategy focusing on healthcare, education, infrastructure, and economic empowerment across all seven counties",
    content: "In a landmark address to the State Legislative Assembly, H.E. Governor Denay Jock Chagor presented the Jonglei State Development Vision 2024-2026, outlining ambitious plans to transform the lives of over 1.2 million citizens across all seven counties...",
    category: "Government",
    tags: ["Development", "Healthcare", "Education", "Infrastructure", "Economic Development"],
    author: "Office of the Governor Communications",
    publishedDate: "2024-01-25",
    readTime: 8,
    featured: true,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop&crop=center",
    views: 4580
  },
  {
    id: "bor-county-hospital-milestone",
    title: "New Bor County Hospital Reaches 75% Completion Milestone",
    excerpt: "The 100-bed county hospital in Bor Town achieves major construction milestone, expected to serve over 315,000 residents upon completion in mid-2024",
    content: "The construction of the new Bor County Hospital has reached a significant milestone with 75% completion, marking a major step forward in improving healthcare access for residents of Bor County and surrounding areas...",
    category: "Health",
    tags: ["Healthcare", "Infrastructure", "Hospital", "Bor County"],
    author: "Ministry of Health",
    publishedDate: "2024-01-20",
    readTime: 5,
    featured: true,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=300&fit=crop&crop=center",
    views: 3240,
    county: "bor"
  },
  {
    id: "digital-education-pilot-launch",
    title: "Digital Education Pilot Program Launches in 25 Schools Across Jonglei",
    excerpt: "Innovative digital learning initiative begins in pilot schools across all counties, bringing modern technology to rural education",
    content: "The Ministry of Education has officially launched the Digital Education Pilot Program in 25 carefully selected schools across Jonglei State's seven counties...",
    category: "Education",
    tags: ["Digital Learning", "Technology", "Schools", "Innovation", "Rural Education"],
    author: "Ministry of Education",
    publishedDate: "2024-01-18",
    readTime: 6,
    featured: false,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=300&fit=crop&crop=center",
    views: 2890
  },
  {
    id: "water-project-success-uror",
    title: "Clean Water Access Reaches 200,000 People in Uror and Nyirol Counties",
    excerpt: "Rural water project achieves major milestone with 95 boreholes operational, significantly improving water access in remote payams",
    content: "The Rural Water Access & Sanitation Project has achieved a remarkable milestone, with 95 out of 120 planned boreholes now operational across Uror and Nyirol counties...",
    category: "Infrastructure",
    tags: ["Water", "Sanitation", "Rural Development", "Public Health", "Uror", "Nyirol"],
    author: "Ministry of Physical Infrastructure",
    publishedDate: "2024-01-22",
    readTime: 4,
    featured: false,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=300&fit=crop&crop=center",
    views: 2156,
    county: "uror"
  },
  {
    id: "agriculture-mechanization-success",
    title: "Modern Farming Equipment Boosts Agricultural Production by 45%",
    excerpt: "Agricultural mechanization program shows impressive results as farmers report significant yield increases using improved seeds and modern equipment",
    content: "The Agricultural Mechanization & Food Security Program has delivered remarkable results in its first year, with participating farmers reporting average yield increases of 45%...",
    category: "Agriculture",
    tags: ["Agriculture", "Food Security", "Mechanization", "Farming", "Yield Increase"],
    author: "Ministry of Agriculture & Food Security",
    publishedDate: "2024-01-25",
    readTime: 5,
    featured: false,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=300&fit=crop&crop=center",
    views: 1876
  },
  {
    id: "bor-panyagor-road-completion",
    title: "Strategic Bor-Panyagor Road Connection Completed Ahead of Schedule",
    excerpt: "65km road section connecting Bor and Twic East counties completed, reducing travel time by 40% and improving trade opportunities",
    content: "In a significant achievement for inter-county connectivity, the Ministry of Physical Infrastructure has completed the strategic 65km road section connecting Bor County to Panyagor in Twic East County...",
    category: "Infrastructure",
    tags: ["Roads", "Transportation", "Connectivity", "Trade", "Bor County", "Twic East"],
    author: "Ministry of Physical Infrastructure",
    publishedDate: "2024-01-20",
    readTime: 4,
    featured: false,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=300&fit=crop&crop=center",
    views: 2340,
    county: "bor"
  },
  {
    id: "mobile-health-units-deployment",
    title: "Mobile Health Units Bring Medical Services to Remote Cattle Camps",
    excerpt: "Eight mobile veterinary and health units now serve pastoralist communities in remote areas, providing essential healthcare and veterinary services",
    content: "The Ministry of Health, in collaboration with the Ministry of Agriculture, has deployed eight mobile health units to serve pastoralist communities in remote cattle camps...",
    category: "Health",
    tags: ["Mobile Health", "Pastoralists", "Veterinary Services", "Remote Healthcare", "Cattle Camps"],
    author: "Ministry of Health",
    publishedDate: "2024-01-22",
    readTime: 4,
    featured: false,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=300&fit=crop&crop=center",
    views: 1654
  },
  {
    id: "youth-vocational-centers-announcement",
    title: "Seven Vocational Training Centers to Open Across Jonglei Counties",
    excerpt: "Youth Skills Development Program announces locations for new vocational training centers, offering opportunities for 8,000 young people",
    content: "The Ministry of Youth & Sports has announced the strategic locations for seven new vocational training centers that will serve as the foundation of the Youth Skills Development & Entrepreneurship Program...",
    category: "Education",
    tags: ["Youth Development", "Vocational Training", "Skills Development", "Employment", "Entrepreneurship"],
    author: "Ministry of Youth & Sports",
    publishedDate: "2024-01-18",
    readTime: 5,
    featured: false,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=300&fit=crop&crop=center",
    views: 2108
  },
  {
    id: "livestock-market-construction",
    title: "Modern Livestock Markets Under Construction in Three Counties",
    excerpt: "New livestock markets in Bor, Panyagor, and Yuai will improve cattle trade and increase farmer incomes across the state",
    content: "Construction has begun on three modern livestock markets in Bor, Panyagor, and Yuai, marking a significant step forward in improving cattle trade infrastructure...",
    category: "Agriculture",
    tags: ["Livestock", "Markets", "Cattle Trade", "Economic Development", "Farmer Income"],
    author: "Ministry of Agriculture & Food Security",
    publishedDate: "2024-01-10",
    readTime: 4,
    featured: false,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=300&fit=crop&crop=center",
    views: 1432
  },
  {
    id: "payam-chiefs-conference",
    title: "Annual Payam Chiefs Conference Addresses Traditional Governance and Development",
    excerpt: "Traditional leaders from 35 payams gather in Bor to discuss community development, conflict resolution, and collaboration with government",
    content: "The annual Payam Chiefs Conference brought together traditional leaders from all 35 payams across Jonglei State to discuss pressing issues of traditional governance, community development, and peaceful coexistence...",
    category: "Government",
    tags: ["Traditional Governance", "Payam Chiefs", "Community Development", "Conflict Resolution", "Traditional Authority"],
    author: "Ministry of Payam & Boma Affairs",
    publishedDate: "2024-01-15",
    readTime: 6,
    featured: false,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=300&fit=crop&crop=center",
    views: 1876
  },
  {
    id: "solar-energy-project-announcement",
    title: "Solar Energy Project to Power 85 Rural Facilities Across Jonglei",
    excerpt: "Renewable energy initiative will bring electricity to rural schools, health centers, and government offices, improving service delivery",
    content: "The Ministry of Physical Infrastructure has announced the Solar Energy Access Project, an ambitious initiative to install solar power systems in 85 rural facilities across all seven counties...",
    category: "Infrastructure",
    tags: ["Solar Energy", "Renewable Energy", "Rural Electrification", "Schools", "Health Centers"],
    author: "Ministry of Physical Infrastructure",
    publishedDate: "2024-01-15",
    readTime: 5,
    featured: false,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=300&fit=crop&crop=center",
    views: 1698
  },
  {
    id: "women-empowerment-program-launch",
    title: "Women's Economic Empowerment Program Launches in All Counties",
    excerpt: "New initiative provides business training, microfinance, and market access support to 2,000 women entrepreneurs across Jonglei State",
    content: "The Ministry of Gender & Social Welfare has launched a comprehensive Women's Economic Empowerment Program designed to support 2,000 women entrepreneurs across all seven counties...",
    category: "Social Development",
    tags: ["Women Empowerment", "Economic Development", "Microfinance", "Entrepreneurship", "Gender Equality"],
    author: "Ministry of Gender & Social Welfare",
    publishedDate: "2024-01-12",
    readTime: 5,
    featured: false,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=300&fit=crop&crop=center",
    views: 1543
  }
];

// Upcoming Events and Activities
export const upcomingEvents: Event[] = [
  {
    id: "state-development-conference-2024",
    title: "Jonglei State Development Conference 2024",
    description: "Annual conference bringing together government officials, development partners, civil society, and community leaders to review progress and plan for the future",
    date: "2024-03-15",
    time: "09:00 AM",
    location: "Bor Freedom Hall, Bor Town",
    type: "Conference",
    organizer: "Office of the Governor",
    status: "Registration Open",
    capacity: 500,
    registered: 287,
    county: "bor",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop&crop=center"
  },
  {
    id: "county-commissioners-quarterly-meeting",
    title: "Quarterly County Commissioners Meeting",
    description: "Regular quarterly meeting of all county commissioners to discuss administrative matters, budget execution, and inter-county coordination",
    date: "2024-02-20",
    time: "10:00 AM",
    location: "Governor's Conference Room, Bor Town",
    type: "Official Meeting",
    organizer: "County Administration Department",
    status: "Scheduled",
    county: "bor"
  },
  {
    id: "payam-chiefs-training-workshop",
    title: "Payam Chiefs Leadership Training Workshop",
    description: "Capacity building workshop for payam chiefs focusing on conflict resolution, community development planning, and traditional governance",
    date: "2024-02-28",
    time: "08:30 AM",
    location: "Community Development Center, Bor Town",
    type: "Training",
    organizer: "Ministry of Payam & Boma Affairs",
    status: "Registration Open",
    capacity: 50,
    registered: 35
  },
  {
    id: "youth-entrepreneurship-fair",
    title: "Jonglei Youth Entrepreneurship Fair",
    description: "Exhibition and competition showcasing innovative business ideas from young entrepreneurs across all counties, with prizes and mentorship opportunities",
    date: "2024-03-08",
    time: "09:00 AM",
    location: "Bor Youth Center, Bor Town",
    type: "Fair/Exhibition",
    organizer: "Ministry of Youth & Sports",
    status: "Registration Open",
    capacity: 200,
    registered: 78,
    county: "bor"
  },
  {
    id: "agricultural-extension-training",
    title: "Agricultural Extension Workers Training Program",
    description: "Technical training for agricultural extension workers on modern farming techniques, crop management, and farmer advisory services",
    date: "2024-02-25",
    time: "08:00 AM",
    location: "Agricultural Training Center, Bor Town",
    type: "Training",
    organizer: "Ministry of Agriculture & Food Security",
    status: "Registration Closed",
    capacity: 40,
    registered: 40
  },
  {
    id: "health-workers-vaccination-training",
    title: "Community Health Workers Vaccination Training",
    description: "Training program for community health workers on vaccination protocols, cold chain management, and community health education",
    date: "2024-03-02",
    time: "09:00 AM",
    location: "Bor Teaching Hospital, Bor Town",
    type: "Training",
    organizer: "Ministry of Health",
    status: "Registration Open",
    capacity: 60,
    registered: 45,
    county: "bor"
  },
  {
    id: "womens-day-celebration",
    title: "International Women's Day Celebration",
    description: "State-wide celebration of International Women's Day featuring awards ceremony, cultural performances, and women's empowerment exhibitions",
    date: "2024-03-08",
    time: "10:00 AM",
    location: "Freedom Square, Bor Town",
    type: "Celebration",
    organizer: "Ministry of Gender & Social Welfare",
    status: "Open to Public",
    county: "bor"
  },
  {
    id: "inter-county-peace-dialogue",
    title: "Inter-County Peace and Reconciliation Dialogue",
    description: "Dialogue forum bringing together traditional leaders, youth, women, and government officials to discuss peace building and conflict prevention",
    date: "2024-03-20",
    time: "09:30 AM",
    location: "Peace Hall, Bor Town",
    type: "Dialogue",
    organizer: "Office of the Governor - Peace Committee",
    status: "Invitation Only",
    capacity: 150,
    registered: 120
  },
  {
    id: "digital-literacy-training-teachers",
    title: "Teacher Digital Literacy Training Workshop",
    description: "Training workshop for teachers on digital teaching methods, computer basics, and integration of technology in classroom instruction",
    date: "2024-02-22",
    time: "08:00 AM",
    location: "Bor Primary School, Bor Town",
    type: "Training",
    organizer: "Ministry of Education",
    status: "Registration Open",
    capacity: 80,
    registered: 65,
    county: "bor"
  },
  {
    id: "livestock-vaccination-campaign-launch",
    title: "State-wide Livestock Vaccination Campaign Launch",
    description: "Official launch of the annual livestock vaccination campaign targeting cattle, goats, and sheep across all counties",
    date: "2024-03-01",
    time: "10:00 AM",
    location: "Bor Livestock Market, Bor Town",
    type: "Campaign Launch",
    organizer: "Ministry of Agriculture & Food Security",
    status: "Open to Public",
    county: "bor"
  },
  {
    id: "budget-consultation-meeting-twic-east",
    title: "County Budget Consultation Meeting - Twic East",
    description: "Public consultation meeting for Twic East County residents to discuss budget priorities and development needs for 2024-2025",
    date: "2024-02-18",
    time: "10:00 AM",
    location: "Panyagor Community Hall, Panyagor",
    type: "Public Consultation",
    organizer: "Twic East County Administration",
    status: "Open to Public",
    county: "twic-east",
    payam: "panyagor"
  },
  {
    id: "mobile-court-services-duk",
    title: "Mobile Court Services - Duk County",
    description: "Mobile court services bringing legal services to remote payams for marriage registration, dispute resolution, and legal documentation",
    date: "2024-02-26",
    time: "09:00 AM",
    location: "Padiet Payam Headquarters, Padiet",
    type: "Public Service",
    organizer: "Duk County Administration",
    status: "Open to Public",
    county: "duk",
    payam: "padiet"
  }
];

// Enhanced Contact Information
export const contactInfo: ContactInfo[] = [
  {
    type: "State Level",
    name: "Office of the Governor",
    position: "H.E. Governor Denay Jock Chagor",
    phone: "+211 123 456 790",
    email: "governor@jonglei.gov.ss",
    address: "Governor's Complex, Main Building, Bor Town, Jonglei State",
    workingHours: "Monday - Friday: 8:00 AM - 5:00 PM"
  },
  {
    type: "County Level",
    name: "Bor County Commissioner",
    position: "Hon. James Manyok Gatluak",
    phone: "+211 123 456 801",
    email: "commissioner@bor.jonglei.gov.ss",
    address: "Bor County Headquarters, Bor Town",
    county: "bor",
    workingHours: "Monday - Friday: 8:00 AM - 5:00 PM, Saturday: 9:00 AM - 1:00 PM"
  },
  {
    type: "County Level",
    name: "Twic East County Commissioner",
    position: "Hon. Martha Mayen Deng",
    phone: "+211 123 456 802",
    email: "commissioner@twiceast.jonglei.gov.ss",
    address: "Twic East County Headquarters, Panyagor",
    county: "twic-east",
    workingHours: "Monday - Friday: 8:00 AM - 5:00 PM"
  },
  {
    type: "County Level",
    name: "Duk County Commissioner",
    position: "Hon. Simon Mabior Riiny",
    phone: "+211 123 456 803",
    email: "commissioner@duk.jonglei.gov.ss",
    address: "Duk County Headquarters, Padiet",
    county: "duk",
    workingHours: "Monday - Friday: 8:00 AM - 5:00 PM"
  },
  {
    type: "County Level",
    name: "Uror County Commissioner",
    position: "Hon. Rebecca Nyandeng Garang",
    phone: "+211 123 456 804",
    email: "commissioner@uror.jonglei.gov.ss",
    address: "Uror County Headquarters, Motot",
    county: "uror",
    workingHours: "Monday - Friday: 8:00 AM - 5:00 PM"
  },
  {
    type: "County Level",
    name: "Nyirol County Commissioner",
    position: "Hon. Gabriel Deng Garang",
    phone: "+211 123 456 805",
    email: "commissioner@nyirol.jonglei.gov.ss",
    address: "Nyirol County Headquarters, Yuai",
    county: "nyirol",
    workingHours: "Monday - Friday: 8:00 AM - 5:00 PM"
  },
  {
    type: "County Level",
    name: "Ayod County Commissioner",
    position: "Hon. Agnes Akol Kachuol",
    phone: "+211 123 456 806",
    email: "commissioner@ayod.jonglei.gov.ss",
    address: "Ayod County Headquarters, Ayod",
    county: "ayod",
    workingHours: "Monday - Friday: 8:00 AM - 5:00 PM"
  },
  {
    type: "County Level",
    name: "Pochalla County Commissioner",
    position: "Hon. David Majok Chol",
    phone: "+211 123 456 807",
    email: "commissioner@pochalla.jonglei.gov.ss",
    address: "Pochalla County Headquarters, Pochalla",
    county: "pochalla",
    workingHours: "Monday - Friday: 8:00 AM - 5:00 PM"
  },
  {
    type: "Emergency Services",
    name: "Emergency Response Center",
    position: "Emergency Coordinator",
    phone: "+211 987 654 321",
    email: "emergency@jonglei.gov.ss",
    address: "Emergency Operations Center, Bor Town",
    workingHours: "24/7 Emergency Response"
  },
  {
    type: "Payam Level",
    name: "Bor Central Payam",
    position: "Chief Peter Deng Majok",
    phone: "+211 123 456 851",
    email: "chief@borcentral.jonglei.gov.ss",
    address: "Bor Central Payam Headquarters, Bor Town",
    county: "bor",
    payam: "bor-central",
    workingHours: "Monday - Saturday: 8:00 AM - 4:00 PM"
  },
  {
    type: "Payam Level",
    name: "Panyagor Payam",
    position: "Chief William Deng Majok",
    phone: "+211 123 456 852",
    email: "chief@panyagor.jonglei.gov.ss",
    address: "Panyagor Payam Headquarters, Panyagor",
    county: "twic-east",
    payam: "panyagor",
    workingHours: "Monday - Saturday: 8:00 AM - 4:00 PM"
  }
];

export default {
  counties,
  departments,
  projects,
  newsArticles,
  upcomingEvents,
  contactInfo
};
