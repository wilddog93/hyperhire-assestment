export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  menus: [
    {
      label: "채용",
      href: "",
      icon: "",
      children: [
        {
          label: "채용",
          href: "/docs/1",
          icon: "",
          badge: {
            label: "New",
            color: "success",
            variant: "light",
          },
          children: [],
        },
        {
          label: "해외 개발자 원격 채용",
          href: "/docs/2",
          icon: "",
          badge: {
            label: "New",
            color: "success",
            variant: "light",
          },
          children: [],
        },
        {
          label: "외국인 원격 채용 (비개발 직군)",
          href: "/docs/3",
          icon: "",
          badge: {
            label: "New",
            color: "success",
            variant: "light",
          },
          children: [],
        },
        {
          label: "한국어 가능 외국인 채용",
          href: "/docs/4",
          icon: "",
          badge: {
            label: "New",
            color: "success",
            variant: "light",
          },
          children: [],
        },
      ],
    },
    {
      label: "해외 개발자 활용 서비스",
      href: "/",
      icon: "",
      badge: {
        label: "New",
        color: "success",
        variant: "light",
      },
      children: [],
    },
  ],
  profiles: [
    {
      id: 1,
      name: "Abhishek Gupta",
      role: "마케팅",
      experience: "2y+",
      skills: ["마케팅 콘텐츠 제작", "인스타그램 관리", "트위터 관리", "블로그 글작성"],
      image: "https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80",
      flag: "🇨🇴",
      salary: "월90만원",
    },
    {
      id: 2,
      name: "Abhishek Gupta", 
      role: "마케팅",
      experience: "2y+",
      skills: ["마케팅 콘텐츠 제작", "인스타그램 관리", "트위터 관리", "블로그 글작성"],
      image: "https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
      flag: "🇨🇴",
      salary: "월80만원",
    },
    {
      id: 3,
      name: "Abhishek Gupta",
      role: "마케팅",
      experience: "2y+",
      skills: ["마케팅 콘텐츠 제작", "인스타그램 관리", "트위터 관리", "블로그 글작성"],
      image: "https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
      flag: "🇨🇴",
      salary: "월100만원",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
