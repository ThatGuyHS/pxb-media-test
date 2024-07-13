import { NextResponse } from 'next/server';

const dataCases = [
  {
    id: "1",
    title: "Dreamhack Summer and Winter",
    author: "Adam Peleback",
    date: "13/07/2024",
    categories: ["Events", "Case Study"],
    intro: "PXB Media's long-standing partnership with DreamHack, the worlds largest digital festival, showcases our expertise in large-scale esports event production.",
    imageUrl: "/dh-stage.jpg",
    secondaryImageUrl: "/dh1.jpg",
    imageCredit: "Rikard Fagerberg",
    paragraphs: [
      "For multiple years, PXB Media has been a trusted partner of Dreamhack, delivering top-tier services for their Summer and Winter events. We have been responsible for a wide range of activities, ranging from the Free play Area, the BYOC LAN tournaments to our flagship, the LAN tournament stage. Our comprehensive broadcast production services include production planning, technical direction, replay operations, in-game direction, audio engineering, and camera operation.",
      "We run the full show at the LAN tournament stage, ranging from Cosplay competitions, to the main BYOC tournaments, to the award ceremonies. Our team is responsible for the entire broadcast production, ensuring a seamless viewing experience for both the live audience and online viewers.",
      "Our operational services extend to project management, server administration, stage management, broadcast graphics, and talent management. We work closely with DreamHack to ensure that their vision, and the vision of their partners, is brought to life in the most engaging and professional manner possible.",
      "The events taking place on stage are award shows, fun competitions for the audience, eg. live GeoGuessr, as well as exciting finals in the BYOC tournaments. We also help organize internal logistics for Dreamhack, eg by hosting the Dreamhack Crew Info-meet before the event gets going.",
      "PXB Medias relationship with DreamHack has been instrumental in pioneering the execution of digital festivals in the esports production space. Together, we continue to captivate and cultivate the hearts and minds of the entire gaming community.",
      "Our work at DreamHack exemplifies our ability to handle large-scale, complex events that require a wide range of technical expertise and creative vision. It showcases our capacity to deliver high-quality broadcasts, manage intricate technical setups, and create engaging experiences for both live and online audiences."
    ]
  },
  {
    id: "2",
    title: "TFConnect: Innovating Tech Conference Broadcasting",
    author: "Eva Lindström",
    date: "15/08/2024",
    categories: ["Technology", "Innovation", "Case Study"],
    intro: "PXB Media revolutionized the TFConnect tech conference with cutting-edge broadcast production and innovative studio solutions.",
    imageUrl: "/tf.connect-12.jpg",
    secondaryImageUrl: "/tf.connect-12.jpg",
    imageCredit: "Photographer Name",
    paragraphs: [
      "For TFConnect, a premier technology conference, PXB Media provided a comprehensive suite of broadcast production services. Our team handled everything from technical direction and replay operation to audio engineering and camera operation, ensuring a seamless viewing experience for both in-person and online attendees.",
      "A standout feature of this project was our custom-built studio setup. Our Set Designers and Builders created an innovative, tech-themed environment that perfectly complemented the conferences forward-thinking atmosphere. This studio became the hub for interviews, panel discussions, and product demonstrations throughout the event.",
      "Our Production Planners and Project Managers coordinated complex segment transitions, while our Talent Managers ensured speakers and presenters were well-prepared and comfortable on camera. Video Editors crafted compelling recaps and highlight reels, and our Event Photographers captured the energy and excitement of the conference.",
      "The Technical Operations team, led by experienced Technical Directors, managed a state-of-the-art control room, enabling smooth switching between multiple stages and breakout sessions. Our Overlay Designers created dynamic, information-rich graphics that enhanced the viewer experience.",
      "This case demonstrates PXB Medias ability to blend traditional broadcasting techniques with innovative technologies, creating a hybrid event that engaged audiences both on-site and around the world. Our work on TFConnect showcases our expertise in producing high-quality, tech-focused content that resonates with industry professionals and tech enthusiasts alike."
    ]
  },
  {
    id: "3",
    title: "Svenska Onlineligan Season 7 Playoffs: Elevating Swedish Esports",
    author: "Sven Andersson",
    date: "20/09/2024",
    categories: ["Esports", "Broadcasting", "Case Study"],
    intro: "PXB Media transformed the Svenska Onlineligan Season 7 Playoffs into a professional, studio-based esports spectacle.",
    imageUrl: "/tf.connect-13.jpg",
    secondaryImageUrl: "/tf.connect-13.jpg",
    imageCredit: "Photographer Name",
    paragraphs: [
      "For the Svenska Onlineligan (Swedish Online League) Season 7 Playoffs, PXB Media delivered a comprehensive production package that elevated the event to new heights. Our services spanned broadcast production, studio facilities, and competition area design.",
      "Our broadcast team, led by experienced Technical Directors, managed all aspects of the production. This included replay operations, in-game direction, audio engineering, and implementation of custom-designed overlays. The result was a polished, professional broadcast that captivated viewers and highlighted the skills of Swedens top esports talent.",
      "A key feature of this project was our studio rental and set design services. Our team created a custom-built set that reflected the energy and excitement of esports while providing a functional space for commentators and analysts. The studio was equipped with state-of-the-art lighting designed by our specialists to ensure optimal on-camera performance.",
      "In addition to the broadcast elements, we also designed and built the competition area. This included individual player stations, a dedicated warm-up area, and a viewing zone for live spectators. Our careful planning ensured that players could perform at their best while also creating an engaging experience for the on-site audience.",
      "This case demonstrates PXB Medias ability to handle all aspects of a major esports event, from the technical broadcast elements to the physical design of the competition space. Our work on the Svenska Onlineligan Playoffs showcases our commitment to elevating esports productions and creating memorable experiences for players and fans alike."
    ]
  },
  {
    id: "4",
    title: "Subzero E-games: Bringing Esports to Östersund",
    author: "Lena Bergström",
    date: "05/11/2024",
    categories: ["Esports", "Event Management", "Case Study"],
    intro: "PXB Media brought world-class esports production to Östersund with the Subzero E-games, utilizing a sports arena for a unique gaming experience.",
    imageUrl: "/tf.connect-14.jpg",
    secondaryImageUrl: "/tf.connect-14.jpg",
    imageCredit: "Photographer Name",
    paragraphs: [
      "The Subzero E-games in Östersund presented a unique challenge that PXB Media was eager to tackle. Our team provided a full range of services, from broadcast production to league operations, transforming a traditional sports arena into an esports haven.",
      "Our broadcast production team, led by seasoned Technical Directors and Operations Managers, set up a comprehensive system that included replay operations, in-game direction, and audio engineering. A standout feature was our use of the arenas jumbotron for IMAG (Image Magnification) playout, providing spectators with an immersive viewing experience.",
      "PXB Medias expertise extended beyond just broadcast. Our team managed league operations, including competition management and game server administration. This ensured fair play and smooth running of all tournaments throughout the event.",
      "On the ground, our Stage Managers and Floor Administrators coordinated the flow of the event, managing player movements, audience interactions, and adhering to the event schedule. Their efforts were crucial in maintaining the high-energy atmosphere that esports events are known for.",
      "This case exemplifies PXB Medias ability to adapt to unique venues and create engaging esports experiences in non-traditional settings. By bringing high-quality production values to Östersund, we helped put the city on the map as an esports destination."
    ]
  },
  {
    id: "5",
    title: "E-sport SM 2023: Championing Swedish Esports",
    author: "Karl Johansson",
    date: "18/12/2024",
    categories: ["Esports", "Event Production", "Case Study"],
    intro: "PXB Media delivered a world-class production for E-sport SM 2023, showcasing the best of Swedish esports talent.",
    imageUrl: "/tf.connect-15.jpg",
    secondaryImageUrl: "/tf.connect-15.jpg",
    imageCredit: "Photographer Name",
    paragraphs: [
      "For E-sport SM 2023 (Swedish Championships in Esports), PXB Media provided end-to-end event and broadcast management services, creating a flagship event for the Swedish esports scene.",
      "Our Production and Project Managers oversaw all aspects of the event, ensuring seamless coordination between broadcast, competition, and audience experiences. Technical Directors led our broadcast team, managing everything from replay operations to IMAG playout.",
      "A highlight of our production was the custom motion graphics and overlays created by our design team. These elements added a distinct, professional flair to the broadcast, enhancing viewer engagement and clearly presenting crucial match information.",
      "Behind the scenes, our team handled all aspects of league operations. This included managing the complex tournament structure across multiple games, ensuring fair play, and addressing any competitive issues that arose.",
      "By combining top-tier broadcast production with smooth event operations, PXB Media helped elevate E-sport SM 2023 to new heights. This case demonstrates our ability to handle large-scale, multi-game esports events while maintaining the highest standards of production quality."
    ]
  },
  {
    id: "6",
    title: "ABAX Webinar: Streamlined Corporate Communication",
    author: "Astrid Lindqvist",
    date: "22/01/2025",
    categories: ["Corporate", "Webinar Production", "Case Study"],
    intro: "PXB Media developed a flexible, high-quality production solution for ABAXs internal ABAX Talks video podcast series.",
    imageUrl: "/tf.connect-16.jpg",
    secondaryImageUrl: "/tf.connect-16.jpg",
    imageCredit: "Photographer Name",
    paragraphs: [
      "For ABAX, a leading telematics company, PXB Media created a streamlined production setup for their internal ABAX Talks video podcast. This project showcased our ability to adapt our high-end production capabilities to a more intimate, corporate-focused environment.",
      "Our Technical Directors designed a flexible system that could be easily set up and operated, while still delivering professional-quality output. This allowed ABAX to produce regular content without the need for a full-scale studio setup.",
      "The PXB Media team provided comprehensive technical operations management, ensuring that each episode of ABAX Talks ran smoothly from a production standpoint. This allowed ABAX staff to focus on content creation and presentation.",
      "We also supplied all necessary equipment through our rental services, providing ABAX with access to high-quality production gear without the need for significant capital investment.",
      "This case demonstrates PXB Medias versatility in handling projects of various scales and our ability to create tailored solutions for corporate clients. By bringing our broadcast expertise to ABAXs internal communications, we helped them elevate their messaging and engage their staff more effectively."
    ]
  }
];

export async function GET(req, { params }) {
  const { id } = params;

  const data = dataCases.find(item => item.id === id);

  if (!data) {
    return NextResponse.json({ error: 'Data not found' }, { status: 404 });
  }

  return NextResponse.json(data);
}
