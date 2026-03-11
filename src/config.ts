export const siteConfig = {
  name: "Artur Schaefer",
  title: "Mobile Software Engineer",
  description:
    "Artur Schaefer is a software engineer based in Barcelona, specializing in Android development with Kotlin and Java, as well as Flutter.",
  accentColor: "#1d4ed8",
  social: {
    email: "artur.schaefer2@gmail.com",
    linkedin: "https://www.linkedin.com/in/artur-schaefer/",
    github: "https://github.com/arturschaefer",
  },
  aboutMe:
    "I've been working with Android development for over seven years, focusing on Kotlin and Java as the main programming languages. I'm a Flutter enthusiast with an application published on Play Store. I have worked on projects across social media, food delivery, real estate, fintech, e-commerce, and transportation. It's important for me to share knowledge at every opportunity through mentoring and support for other developers.",
  skills: [
    "Kotlin",
    "Java",
    "Dart",
    "Flutter",
    "Android",
    "Jetpack",
    "Coroutines",
    "Hilt",
    "Room",
    "WorkManager",
    "ExoPlayer",
    "MVVM",
    "Clean Architecture",
    "Firebase",
    "Git",
  ],
  projects: [
    {
      name: "WorkClock",
      description:
        "WorkClock is a user-friendly app that simplifies work schedules by making shifts easy to track and manage. With shift management and login capabilities, it helps users stay organized and on top of their working hours.",
      link: "https://play.google.com/store/apps/details?id=com.schaefer.workclock",
      skills: ["Android", "Kotlin", "Mobile"],
    },
    {
      name: "Rule of Three",
      description:
        "A Flutter app built as my first production Flutter project, using libraries like MobX, SqFlite, and YouTube Player.",
      link: "https://play.google.com/store/apps/details?id=br.com.schaefer.rule_of_three",
      skills: ["Flutter", "Dart", "MobX"],
    },
    {
      name: "Catganisation",
      description:
        "An app where users can sign in and browse cat breeds, filter by country, and view detailed breed information including images, temperament, and related Wikipedia links.",
      link: "https://github.com/arturschaefer/Catganisation",
      skills: ["Android", "Firebase", "Google APIs"],
    },
  ],
  experience: [
    {
      company: "Turing",
      title: "Software Engineer",
      dateRange: "Jun 2024 - Jun 2025",
      bullets: [
        "Working on a huge social media application with approximately 1.1 billion Monthly Active Users worldwide. My team is responsible for posting media and content into the platform",
        "Made the analytics migration on Android for the modules owned by the team. This initiative was aligned with product to reduce costs around data sent to the servers",
        "Implemented client side of a LLM feature validating content while before creating a post. It aligns with platform vision for better and safe content for users",
        "The current initiative is around allowing users to consume other social media contents inside our app using embed approach. ",
      ],
    },
    {
      company: "Eero (a Amazon company)",
      title: "Software Engineer",
      dateRange: "Jun 2024 - Jun 2025",
      bullets: [
        "Worked on the app's core features, such as setting up new devices and troubleshooting connections. There are fun challenges with different connections and communication with physical devices.",
        "Delivered a feature that enables users to install a new router with less than 3 clicks. It reduces the user's journey to install a new router and can also be installed seamlessly, which means without any user interaction.",
        "Developing a new setup experience as the point of contact for the Android side.",
        "Interviewing candidates for SWE positions.",
      ],
    },
    {
      company: "Glovo",
      title: "Software Engineer",
      dateRange: "Mar 2022 - Apr 2024",
      bullets: [
        "Built a new courier scheduling experience end-to-end, from backend contract definition and analytics tracking to Android implementation.",
        "Acted as the main point of contact for onboarding engineers on mobile features.",
      ],
    },
    {
      company: "SQLI",
      title: "Android Developer",
      dateRange: "Sep 2021 - Mar 2022",
      bullets: [
        "Responsible for refactoring and improving a legacy Android codebase from 2015 to modern technologies.",
      ],
    },
    {
      company: "PicPay",
      title: "Android Developer",
      dateRange: "Oct 2020 - Aug 2021",
      bullets: [
        "Built biometric validation to protect user access and account recovery.",
        "Worked on Android security for a product serving over 50 million users.",
      ],
    },
    {
      company: "Hotmart",
      title: "Developer",
      dateRange: "Aug 2019 - Oct 2020",
      bullets: [
        "Redesigned media consumption and posting flows for an app with 500k+ users.",
        "Built offline media experience using ExoPlayer, Room, and WorkManager.",
        "Contributed to Chromecast implementation in the video player.",
      ],
    },
    {
      company: "Usemobile",
      title: "Android Developer",
      dateRange: "Sep 2018 - Aug 2019",
      bullets: [
        "Delivered Android applications from scratch, shipping three apps from zero to Play Store.",
      ],
    },
    {
      company: "Synergia Consultoria Socioambiental",
      title: "Information Technology Support Assistant",
      dateRange: "Jan 2017 - Aug 2018",
      bullets: ["Provided IT support and technical assistance."],
    },
    {
      company: "CNPq",
      title: "Volunteer Researcher",
      dateRange: "Jul 2016 - Jun 2017",
      bullets: ["Focused on ontology and real-world applications."],
    },
    {
      company: "Ifes - Instituto Federal do Espírito Santo",
      title: "Programming Class Monitor",
      dateRange: "Jul 2016 - Dec 2016",
      bullets: ["Mentored programming students using Python, Java, and C/C++."],
    },
    {
      company: "CNPq",
      title: "Undergraduate Research Assistant",
      dateRange: "Jan 2015 - Jan 2016",
      bullets: [
        "Worked with educational robotics using LEGO EV3 to motivate students and reduce evasion.",
        "Implemented robotics solutions in Java and later C/C++ for performance.",
        "Achieved 3rd place at the IEEE Latin American Robotics Competition.",
      ],
    },
  ],
  education: [
    {
      school: "Udacity",
      degree: "Android Developer Nanodegree, Development of Mobile Applications",
      dateRange: "2018",
      achievements: [
        "Started working with Jetpack components and Android best practices during the specialization.",
      ],
    },
    {
      school: "Ifes - Instituto Federal do Espírito Santo",
      degree: "Bachelor's degree, Information Technology",
      dateRange: "2014 - 2018",
      achievements: ["Completed undergraduate studies in information technology."],
    },
  ],
};
