import {
  FaRocket,
  FaBuilding,
  FaIndustry,
  FaUserTie,
  FaCode,
  FaBriefcase,
  FaCreditCard,
  FaWallet,
  FaChartLine,
  FaBook,
  FaVideo,
  FaPodcast,
} from "react-icons/fa";

export const navLinks = [
  {
    name: "Products",
    href: "/products",
    sublinks: [
      {
        name: "Corporate Card",
        description: "Smart cards with real-time controls and rewards",
        href: "/products/corporate-card",
        icon: FaCreditCard,
      },
      {
        name: "Expense Management",
        description: "Automate and simplify your expense workflows",
        href: "/products/expense-management",
        icon: FaWallet,
      },
      {
        name: "Bill Pay",
        description: "Pay vendors quickly with automated approvals",
        href: "/products/bill-pay",
        icon: FaChartLine,
      },
    ],
  },
  {
    name: "Solutions",
    href: "/solutions",
    sublinks: [
      {
        name: "Startups",
        description: "Get the #1 financial stack for startups",
        href: "/solutions/startups",
        icon: FaRocket,
      },
      {
        name: "Mid-sized companies",
        description: "Scale faster with smart cards & controls",
        href: "/solutions/mid-sized",
        icon: FaBuilding,
      },
      {
        name: "Enterprise",
        description: "Spend smart across entities, currencies",
        href: "/solutions/enterprise",
        icon: FaIndustry,
      },
      {
        name: "Accounting firms",
        description: "Simplify close and earn rewards",
        href: "/solutions/accounting-firms",
        icon: FaUserTie,
      },
      {
        name: "B2B software",
        description: "Embed Brex cards in your products",
        href: "/solutions/b2b-software",
        icon: FaCode,
      },
      {
        name: "PE and VC Firms",
        description: "Manage spend for your firm & portfolio",
        href: "/solutions/pe-vc-firms",
        icon: FaBriefcase,
      },
    ],
  },
  {
    name: "Resources",
    href: "/resources",
    sublinks: [
      {
        name: "Blog",
        description: "Insights and updates from our team",
        href: "/resources/blog",
        icon: FaBook,
      },
      {
        name: "Webinars",
        description: "Live and recorded sessions on finance topics",
        href: "/resources/webinars",
        icon: FaVideo,
      },
      {
        name: "Podcasts",
        description: "Interviews and stories from industry leaders",
        href: "/resources/podcasts",
        icon: FaPodcast,
      },
    ],
  },
  {
    name: "Customers",
    href: "/customers",
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
];
