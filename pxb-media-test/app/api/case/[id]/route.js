import { NextResponse } from "next/server";

const dataCases = [
  {
    id: "dreamhack",
    title: "DreamHack Summer and Winter",
    author: "Adam Peleback",
    date: "13/07/2024",
    categories: ["Events", "Case Study"],
    intro:
      "PXB Media's long-standing partnership with DreamHack, the worlds largest digital festival, showcases our expertise in large-scale esports event production.",
    imageUrl: "/dh-stage.jpg",
    secondaryImageUrl: "/dh1.jpg",
    imageCredit: "Rikard Fagerberg",
    servicesProvided: {
      broadcastProduction: [
        "Production Planning",
        "Technical Direction",
        "Technical Ops Management",
        "Replay Operation",
        "In-game Direction",
        "Audio Engineering",
        "IMAG Playout",
        "Camera Operation",
        "Stage Hosting & Desk commentating",
        "Overlay Design & Implementation"
      ],
      operations: [
        "Project Management",
        "Server Administration",
        "Server Management",
        "Stage Management",
        "Competition Administration"
      ]
    },
    paragraphs: [
      "For multiple years, PXB Media has been a trusted partner of Dreamhack, delivering top-tier services for their Summer and Winter events. We have been responsible for a wide range of activities, ranging from the Free play Area, the BYOC LAN tournaments to our flagship, the LAN tournament stage. Our comprehensive broadcast production services include production planning, technical direction, replay operations, in-game direction, audio engineering, and camera operation.",
      "We run the full show at the LAN tournament stage, ranging from Cosplay competitions, to the main BYOC tournaments, to the award ceremonies. Our team is responsible for the entire broadcast production, ensuring a seamless viewing experience for both the live audience and online viewers.",
      "Our operational services extend to project management, server administration, stage management, broadcast graphics, and talent management. We work closely with DreamHack to ensure that their vision, and the vision of their partners, is brought to life in the most engaging and professional manner possible.",
      "The events taking place on stage are award shows, fun competitions for the audience, eg. live GeoGuessr, as well as exciting finals in the BYOC tournaments. We also help organize internal logistics for Dreamhack, eg by hosting the Dreamhack Crew Info-meet before the event gets going.",
      "PXB Medias relationship with DreamHack has been instrumental in pioneering the execution of digital festivals in the esports production space. Together, we continue to captivate and cultivate the hearts and minds of the entire gaming community.",
      "Our work at DreamHack exemplifies our ability to handle large-scale, complex events that require a wide range of technical expertise and creative vision. It showcases our capacity to deliver high-quality broadcasts, manage intricate technical setups, and create engaging experiences for both live and online audiences.",
    ],
  },
  {
    id: "tfconnect",
    title: "TFConnect: Gaming for Charity",
    author: "Adam Peleback",
    date: "15/08/2024",
    categories: ["Charity", "TF2", "Gaming"],
    intro:
      "PXB Media helped raise over 30 000 dollars for charity with a custom-built studio setup and live broadcasting services over 4 days.",
    imageUrl: "/tf.connect-136.jpg",
    secondaryImageUrl: "/tf.connect-205.jpg",
    imageCredit: "Simon Aatig",
    servicesProvided: {
      broadcastProduction: [
        "Production Planning",
        "Technical Direction",
        "Technical Ops Management",
        "Replay Operation",
        "In-game Direction",
        "Audio Engineering",
        "IMAG Playout",
        "Camera Operation",
        "Broadcast talent and hosting",
        "Overlay Design & Implementation"

      ],
      studioServices: [
        "Set Design and build",
      ],
      eventManagement: [
       "Project Management",
       "Segment Coordination",
       "Talent Management",
        "Video Editing",
        "Event Photography", 
        "Hospitality"
      ],
      contentCreation: [
        "Video Editing",
        "Event Photography"
      ]
    },
    paragraphs: [
      "For TFConnect, a charity fundraising event originating from the Team Fortress 2 community, PXB Media provided a comprehensive suite of broadcast production services. Our team expertly handled technical direction, replay operation, audio engineering, and camera operation, ensuring a seamless viewing experience for both in-person and online attendees. This event, which has raised over $80,000 since 2018 in support of various charities such as SpecialEffect, benefited greatly from our technical expertise and dedication.",
      "A standout feature of this project was our custom-built studio setup. Our set designers and builders created an innovative, tech-themed environment that perfectly complemented the event's forward-thinking atmosphere. This studio became the hub for interviews, panel discussions, and product demonstrations throughout the event, providing a dynamic and engaging space for all activities.",
      "Our production planners and project managers coordinated complex segment transitions, while our talent managers ensured that speakers and presenters were well-prepared and comfortable on camera. Video editors crafted compelling recaps and highlight reels, and our event photographers captured the energy and excitement of the conference, preserving its memorable moments.",
      "The technical operations team, led by experienced technical directors, managed a state-of-the-art control room, enabling smooth switching between multiple stages and breakout sessions. Our overlay designers created dynamic, information-rich graphics that enhanced the viewer experience, making the event more interactive and informative.",
      "This case demonstrates PXB Media's ability to blend traditional broadcasting techniques with innovative technologies, creating a hybrid event that engaged audiences both on-site and around the world. Our work on TFConnect showcases our expertise in producing high-quality, tech-focused content that resonates with industry professionals, tech enthusiasts, and the charitable community alike.",
    ],
  },
  {
    id: "svenskaonlineligan",
    title: "Svenska Onlineligan Season 7 Playoffs: Elevating Swedish Esports",
    author: "Adam Peleback",
    date: "20/09/2024",
    categories: ["Esports", "Broadcasting", "Case Study"],
    intro:
      "PXB Media transformed the Svenska Onlineligan Season 7 Playoffs into a professional, studio-based esports spectacle.",
    imageUrl: "/SOLSlutspel-155.jpg",
    secondaryImageUrl: "/SOLplayoffs2.jpg",
    imageCredit: "Simon Aatig",
    servicesProvided: {
      broadcastProduction: [
        "Technical Direction",
        "Technical Ops Management",
        "Replay Operations",
        "In-game Direction",
        "Replay Observing", 
        "Audio Engineering",
        "IMAG Playout",
        "Overlay Design & Implementation"
      ],
      studioServices: [
        "Studio Rental",
        "Set Design and Build",
        "Lighting Design", 
        "Broadcast equipment rental"
      ],
      competitionManagement: [
        "Competition Area Design",
        "Player Station Setup",
        "Player Warm-up Area Design",
        "Spectator Viewing Area Design"
      ]
    },
    paragraphs: [
      "For the Svenska Onlineligan (Swedish Online League) Season 7 Playoffs, PXB Media delivered a comprehensive production package that elevated the event to new heights. Our services spanned broadcast production, studio facilities, and competition area design.",
      "Our broadcast team, led by experienced Technical Directors, managed all aspects of the production. This included replay operations, in-game direction, audio engineering, and implementation of custom-designed overlays. The result was a polished, professional broadcast that captivated viewers and highlighted the skills of Swedens top esports talent.",
      "A key feature of this project was our studio rental and set design services. Our team created a custom-built set that reflected the energy and excitement of esports while providing a functional space for commentators and analysts. The studio was equipped with state-of-the-art lighting designed by our specialists to ensure optimal on-camera performance.",
      "In addition to the broadcast elements, we also designed and built the competition area. This included individual player stations, a dedicated warm-up area, and a viewing zone for live spectators. Our careful planning ensured that players could perform at their best while also creating an engaging experience for the on-site audience.",
      "This case demonstrates PXB Medias ability to handle all aspects of a major esports event, from the technical broadcast elements to the physical design of the competition space. Our work on the Svenska Onlineligan Playoffs showcases our commitment to elevating esports productions and creating memorable experiences for players and fans alike.",
    ],
  },
  {
    id: "subzero",
    title: "Subzero E-games: Bringing Esports to Östersund",
    author: "Adam Peleback",
    date: "05/11/2024",
    categories: ["Esports", "Event Management", "Case Study"],
    intro:
      "PXB Media brought world-class esports production to Östersund with the Subzero E-games, utilizing a sports arena for a unique gaming experience.",
    imageUrl: "/subzero1.jpg",
    secondaryImageUrl: "/subzero2.jpg",
    imageCredit: "Kirsty Meek",
    servicesProvided: {
      broadcastProduction: [
       "Broadcast Project Management",
        "Technical Direction",
        "Technical Ops Management",
        "Replay Operations",
        "In-game Direction",
        "Audio Engineering",
        "Replay Observing",
        "IMAG Playouot on Jumbotron",
        "Overlay Design & Implementation", 
        "Broadcast Equipment Rental"
      ],
      leagueOperations: [
        "Competition Management",
        "Game Server Administration"
      ],
      eventManagement: [
        "Stage Management",
        "Floor Administration"
      ]
    },
    paragraphs: [
      "The Subzero E-games in Östersund presented a unique challenge that PXB Media was eager to tackle. Our team provided a full range of services, from broadcast production to league operations, transforming a traditional sports arena into an esports haven.",
      "Our broadcast production team, led by seasoned Technical Directors and Operations Managers, set up a comprehensive system that included replay operations, in-game direction, and audio engineering. A standout feature was our use of the arenas jumbotron for IMAG (Image Magnification) playout, providing spectators with an immersive viewing experience.",
      "PXB Medias expertise extended beyond just broadcast. Our team managed league operations, including competition management and game server administration. This ensured fair play and smooth running of all tournaments throughout the event.",
      "On the ground, our Stage Managers and Floor Administrators coordinated the flow of the event, managing player movements, audience interactions, and adhering to the event schedule. Their efforts were crucial in maintaining the high-energy atmosphere that esports events are known for.",
      "This case exemplifies PXB Medias ability to adapt to unique venues and create engaging esports experiences in non-traditional settings. By bringing high-quality production values to Östersund, we helped put the city on the map as an esports destination.",
    ],
  },
  {
    id: "esportsm",
    title: "E-sport SM 2023: Championing Swedish Esports",
    author: "Adam Peleback",
    date: "18/12/2024",
    categories: ["Esports", "Event Production", "Case Study"],
    intro:
      "PXB Media delivered a world-class production for E-sport SM 2023, showcasing the best of Swedish esports talent.",
    imageUrl: "/esportsm1.png",
    secondaryImageUrl: "/esportsm2.png",
    imageCredit: "?",
    servicesProvided: {
      
      broadcastProduction: [
        "Broadcast and Event Project Management",
        "Technical Direction",
        "Technical Ops Management",
        "Replay Operations",
        "In-game Direction",
        "IMAG Playout",
        "Replay Observing",
        "Audio Engineering",
        "Motion Graphics Design",
        "Overlay Design & Implementation",
        "Broadcast Equipment Rental"
      ],
      leagueOperations: [
       "Competition Management",
        "Game Server Administration",
        "Player Support"
      ]
    },
    paragraphs: [
      "For E-sport SM 2023 (Swedish Championships in Esports), PXB Media provided end-to-end event and broadcast management services, creating a flagship event for the Swedish esports scene.",
      "Our Production and Project Managers oversaw all aspects of the event, ensuring seamless coordination between broadcast, competition, and audience experiences. Technical Directors led our broadcast team, managing everything from replay operations to IMAG playout.",
      "A highlight of our production was the custom motion graphics and overlays created by our design team. These elements added a distinct, professional flair to the broadcast, enhancing viewer engagement and clearly presenting crucial match information.",
      "Behind the scenes, our team handled all aspects of league operations. This included managing the complex tournament structure across multiple games, ensuring fair play, and addressing any competitive issues that arose.",
      "By combining top-tier broadcast production with smooth event operations, PXB Media helped elevate E-sport SM 2023 to new heights. This case demonstrates our ability to handle large-scale, multi-game esports events while maintaining the highest standards of production quality.",
    ],
  },
  {
    id: "abax",
    title: "ABAX Webinar: Streamlined Corporate Communication",
    author: "Adam Peleback",
    date: "22/01/2025",
    categories: ["Corporate", "Webinar Production", "Case Study"],
    intro:
      "PXB Media developed a flexible, high-quality production solution for ABAXs internal ABAX Talks video podcast series.",
    imageUrl: "/abaximg.png",
    secondaryImageUrl: "/abaximg.png",
    imageCredit: "Photographer Name",
    servicesProvided: {
      productionSetup: [
        "Technical System Design",
        "Equipment Rental"
      ],
      technicalOperations: [
        "Technical Direction",
        "Audio Engineering"
      ],
      contentCreation: [
        "Video Podcast Production"
      ]
    },
    paragraphs: [
      "For ABAX, a leading telematics company, PXB Media created a streamlined production setup for their internal ABAX Talks video podcast. This project showcased our ability to adapt our high-end production capabilities to a more intimate, corporate-focused environment.",
      "Our Technical Directors designed a flexible system that could be easily set up and operated, while still delivering professional-quality output. This allowed ABAX to produce regular content without the need for a full-scale studio setup.",
      "The PXB Media team provided comprehensive technical operations management, ensuring that each episode of ABAX Talks ran smoothly from a production standpoint. This allowed ABAX staff to focus on content creation and presentation.",
      "We also supplied all necessary equipment through our rental services, providing ABAX with access to high-quality production gear without the need for significant capital investment.",
      "This case demonstrates PXB Medias versatility in handling projects of various scales and our ability to create tailored solutions for corporate clients. By bringing our broadcast expertise to ABAXs internal communications, we helped them elevate their messaging and engage their staff more effectively.",
    ],
  },
  {
    id: "lansforsakringarfifa",
    title: "Länsförsäkringar Fifa Derby: Bringing live esports to Småland",
    author: "Adam Peleback",
    date: "22/01/2025",
    categories: ["Corporate", "Offline event", "Fifa"],
    intro:
      "PXB Media helped conceptualize the FIFA Derby by Länsförsäkringar at GRO36 and provided a live broadcast.",
    imageUrl: "/GRO362.jpg",
    secondaryImageUrl: "/GRO361.jpg",
    imageCredit: "GRO36",
    servicesProvided: {
      productionSetup: [
        "Technical System Design",
        "Equipment Rental"
      ],
      technicalOperations: [
        "Technical Direction",
        "Audio Engineering"
      ],
    },
    paragraphs: [
      "For Länsförsäkringar Jönköping, PXB Media took part in conceptualizing and creating a local derby between Värnamo and Jönköping in EA FC 2024.",
      "At the beautiful venue of GRO36, we provided a live broadcast coverage for the derby between Värnamo and Jönköping Södra, in front of a live crowd.",
      "There were 2 matches played, one between football players from the respective clubs, and one between the respective clubs professional esports teams, which gave the audience both a taste for professional esports and the excitement of seeing athletes compete in an unusual environment.",
      "The main point of the event was to draw attention to Länsförsäkringars work to ensure a safe environment for all young people who enjoy games, by educating leaders in the community to help provide the support and attention that is needed to build a community to be proud of."
    ],
  },
];

export async function GET(req, { params }) {
  const { id } = params;

  const data = dataCases.find((item) => item.id === id);

  if (!data) {
    return NextResponse.json({ error: "Data not found" }, { status: 404 });
  }

  return NextResponse.json(data);
}