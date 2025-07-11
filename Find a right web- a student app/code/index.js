// index.js

/**
 * Find a Right Web - Student App grid with advanced search functionality and animated UI.
 * Contains 100 courses across 10 groups. Each course uses its own logo.
 */

const courses = [
  // Group 1: Online Learning Platforms (1-10)
  {
    name: "Coursera",
    category: "Online Learning Platforms",
    link: "https://www.coursera.org",
    logo: "logos/coursera.png",
    categoryClass: "general"
  },
  {
    name: "edX",
    category: "Online Learning Platforms",
    link: "https://www.edx.org",
    logo: "logos/edx.png",
    categoryClass: "general"
  },
  {
    name: "Udemy",
    category: "Online Learning Platforms",
    link: "https://www.udemy.com",
    logo: "logos/udemy.png",
    categoryClass: "general"
  },
  {
    name: "Skillshare",
    category: "Online Learning Platforms",
    link: "https://www.skillshare.com",
    logo: "logos/skillshare.png",
    categoryClass: "general"
  },
  {
    name: "Khan Academy",
    category: "Online Learning Platforms",
    link: "https://www.khanacademy.org",
    logo: "logos/khanacademy.png",
    categoryClass: "general"
  },
  {
    name: "LinkedIn Learning",
    category: "Online Learning Platforms",
    link: "https://www.linkedin.com/learning",
    logo: "logos/linkedin_learning.png",
    categoryClass: "general"
  },
  {
    name: "FutureLearn",
    category: "Online Learning Platforms",
    link: "https://www.futurelearn.com",
    logo: "logos/futurelearn.png",
    categoryClass: "general"
  },
  {
    name: "Alison",
    category: "Online Learning Platforms",
    link: "https://www.alison.com",
    logo: "logos/alison.png",
    categoryClass: "general"
  },
  {
    name: "MasterClass",
    category: "Online Learning Platforms",
    link: "https://www.masterclass.com",
    logo: "logos/masterclass.png",
    categoryClass: "general"
  },
  {
    name: "Pluralsight",
    category: "Online Learning Platforms",
    link: "https://www.pluralsight.com",
    logo: "logos/pluralsight.png",
    categoryClass: "general"
  },

  // Group 2: Technology and Programming (11-20)
  {
    name: "freeCodeCamp",
    category: "Technology and Programming",
    link: "https://www.freecodecamp.org",
    logo: "logos/freecodecamp.png",
    categoryClass: "tech"
  },
  {
    name: "Codecademy",
    category: "Technology and Programming",
    link: "https://www.codecademy.com",
    logo: "logos/codecademy.png",
    categoryClass: "tech"
  },
  {
    name: "Udacity",
    category: "Technology and Programming",
    link: "https://www.udacity.com",
    logo: "logos/udacity.png",
    categoryClass: "tech"
  },
  {
    name: "MIT OpenCourseWare",
    category: "Technology and Programming",
    link: "https://ocw.mit.edu",
    logo: "logos/mit_opencourseware.png",
    categoryClass: "tech"
  },
  {
    name: "HackerRank",
    category: "Technology and Programming",
    link: "https://www.hackerrank.com",
    logo: "logos/hackerrank.png",
    categoryClass: "tech"
  },
  {
    name: "LeetCode",
    category: "Technology and Programming",
    link: "https://leetcode.com",
    logo: "logos/leetcode.png",
    categoryClass: "tech"
  },
  {
    name: "The Odin Project",
    category: "Technology and Programming",
    link: "https://www.theodinproject.com",
    logo: "logos/theodinproject.png",
    categoryClass: "tech"
  },
  {
    name: "CS50 by Harvard",
    category: "Technology and Programming",
    link: "https://cs50.harvard.edu",
    logo: "logos/cs50.png",
    categoryClass: "tech"
  },
  {
    name: "Kaggle",
    category: "Technology and Programming",
    link: "https://www.kaggle.com",
    logo: "logos/kaggle.png",
    categoryClass: "tech"
  },
  {
    name: "Google Digital Garage",
    category: "Technology and Programming",
    link: "https://learndigital.withgoogle.com",
    logo: "logos/google_digital_garage.png",
    categoryClass: "tech"
  },

  // Group 3: Business and Management (21-30)
  {
    name: "HubSpot Academy",
    category: "Business and Management",
    link: "https://academy.hubspot.com",
    logo: "logos/hubspot_academy.png",
    categoryClass: "business"
  },
  {
    name: "Google Skillshop",
    category: "Business and Management",
    link: "https://skillshop.withgoogle.com",
    logo: "logos/google_skillshop.png",
    categoryClass: "business"
  },
  {
    name: "Harvard Business School Online",
    category: "Business and Management",
    link: "https://online.hbs.edu",
    logo: "logos/harvard_business.png",
    categoryClass: "business"
  },
  {
    name: "Wharton Online",
    category: "Business and Management",
    link: "https://online.wharton.upenn.edu",
    logo: "logos/wharton_online.png",
    categoryClass: "business"
  },
  {
    name: "Coursera for Business",
    category: "Business and Management",
    link: "https://www.coursera.org/business",
    logo: "logos/coursera_business.png",
    categoryClass: "business"
  },
  {
    name: "Grow with Google",
    category: "Business and Management",
    link: "https://grow.google",
    logo: "logos/grow_with_google.png",
    categoryClass: "business"
  },
  {
    name: "Digital Marketing Institute",
    category: "Business and Management",
    link: "https://digitalmarketinginstitute.com",
    logo: "logos/digital_marketing_institute.png",
    categoryClass: "business"
  },
  {
    name: "edureka!",
    category: "Business and Management",
    link: "https://www.edureka.co",
    logo: "logos/edureka.png",
    categoryClass: "business"
  },
  {
    name: "Startup School by Y Combinator",
    category: "Business and Management",
    link: "https://startupschool.org",
    logo: "logos/startup_school.png",
    categoryClass: "business"
  },
  {
    name: "Lean In",
    category: "Business and Management",
    link: "https://leanin.org",
    logo: "logos/leanin.png",
    categoryClass: "business"
  },

  // Group 4: Creative Arts and Design (31-40)
  {
    name: "Canva Design School",
    category: "Creative Arts and Design",
    link: "https://designschool.canva.com",
    logo: "logos/canva.png",
    categoryClass: "creative"
  },
  {
    name: "Behance",
    category: "Creative Arts and Design",
    link: "https://behance.net",
    logo: "logos/behance.png",
    categoryClass: "creative"
  },
  {
    name: "Dribbble",
    category: "Creative Arts and Design",
    link: "https://dribbble.com",
    logo: "logos/dribbble.png",
    categoryClass: "creative"
  },
  {
    name: "Domestika",
    category: "Creative Arts and Design",
    link: "https://domestika.org",
    logo: "logos/domestika.png",
    categoryClass: "creative"
  },
  {
    name: "CreativeLive",
    category: "Creative Arts and Design",
    link: "https://creativelive.com",
    logo: "logos/creativelive.png",
    categoryClass: "creative"
  },
  {
    name: "ArtStation Learning",
    category: "Creative Arts and Design",
    link: "https://artstation.com",
    logo: "logos/artstation.png",
    categoryClass: "creative"
  },
  {
    name: "Proko",
    category: "Creative Arts and Design",
    link: "https://proko.com",
    logo: "logos/proko.png",
    categoryClass: "creative"
  },
  {
    name: "Shaw Academy",
    category: "Creative Arts and Design",
    link: "https://shawacademy.com",
    logo: "logos/shaw_academy.png",
    categoryClass: "creative"
  },
  {
    name: "Tuts+ by Envato",
    category: "Creative Arts and Design",
    link: "https://tutsplus.com",
    logo: "logos/tutsplus.png",
    categoryClass: "creative"
  },
  {
    name: "Lynda.com (LinkedIn Learning)",
    category: "Creative Arts and Design",
    link: "https://www.linkedin.com/learning",
    logo: "logos/lynda.png",
    categoryClass: "creative"
  },

  // Group 5: Science and Engineering (41-50)
  {
    name: "Khan Academy Science",
    category: "Science and Engineering",
    link: "https://www.khanacademy.org/science",
    logo: "logos/khan_academy_science.png",
    categoryClass: "science"
  },
  {
    name: "Brilliant",
    category: "Science and Engineering",
    link: "https://brilliant.org",
    logo: "logos/brilliant.png",
    categoryClass: "science"
  },
  {
    name: "OpenLearn by Open University",
    category: "Science and Engineering",
    link: "https://open.edu/openlearn",
    logo: "logos/openlearn.png",
    categoryClass: "science"
  },
  {
    name: "Wolfram Alpha Courses",
    category: "Science and Engineering",
    link: "https://education.wolfram.com",
    logo: "logos/wolfram.png",
    categoryClass: "science"
  },
  {
    name: "Stanford Online",
    category: "Science and Engineering",
    link: "https://online.stanford.edu",
    logo: "logos/stanford_online.png",
    categoryClass: "science"
  },
  {
    name: "NASA STEM",
    category: "Science and Engineering",
    link: "https://nasa.gov/stem",
    logo: "logos/nasa.png",
    categoryClass: "science"
  },
  {
    name: "Engineering.com",
    category: "Science and Engineering",
    link: "https://engineering.com",
    logo: "logos/engineering.png",
    categoryClass: "science"
  },
  {
    name: "SciLearn by ScienceDirect",
    category: "Science and Engineering",
    link: "https://sciencedirect.com",
    logo: "logos/scilearn.png",
    categoryClass: "science"
  },
  {
    name: "Physics Girl (YouTube)",
    category: "Science and Engineering",
    link: "https://youtube.com/physicsgirl",
    logo: "logos/physicsgirl.png",
    categoryClass: "science"
  },
  {
    name: "ResearchGate",
    category: "Science and Engineering",
    link: "https://researchgate.net",
    logo: "logos/researchgate.png",
    categoryClass: "science"
  },

  // Group 6: Languages and Communication (51-60)
  {
    name: "Duolingo",
    category: "Languages and Communication",
    link: "https://duolingo.com",
    logo: "logos/duolingo.png",
    categoryClass: "languages"
  },
  {
    name: "Babbel",
    category: "Languages and Communication",
    link: "https://babbel.com",
    logo: "logos/babbel.png",
    categoryClass: "languages"
  },
  {
    name: "Rosetta Stone",
    category: "Languages and Communication",
    link: "https://rosettastone.com",
    logo: "logos/rosetta_stone.png",
    categoryClass: "languages"
  },
  {
    name: "Busuu",
    category: "Languages and Communication",
    link: "https://busuu.com",
    logo: "logos/busuu.png",
    categoryClass: "languages"
  },
  {
    name: "Memrise",
    category: "Languages and Communication",
    link: "https://memrise.com",
    logo: "logos/memrise.png",
    categoryClass: "languages"
  },
  {
    name: "LingQ",
    category: "Languages and Communication",
    link: "https://lingq.com",
    logo: "logos/lingq.png",
    categoryClass: "languages"
  },
  {
    name: "Preply",
    category: "Languages and Communication",
    link: "https://preply.com",
    logo: "logos/preply.png",
    categoryClass: "languages"
  },
  {
    name: "Italki",
    category: "Languages and Communication",
    link: "https://italki.com",
    logo: "logos/italki.png",
    categoryClass: "languages"
  },
  {
    name: "BBC Languages",
    category: "Languages and Communication",
    link: "https://bbc.co.uk/languages",
    logo: "logos/bbc_languages.png",
    categoryClass: "languages"
  },
  {
    name: "Open Culture Language Courses",
    category: "Languages and Communication",
    link: "https://openculture.com",
    logo: "logos/open_culture.png",
    categoryClass: "languages"
  },

  // Group 7: Personal Development (61-70)
  {
    name: "Mindvalley",
    category: "Personal Development",
    link: "https://mindvalley.com",
    logo: "logos/mindvalley.png",
    categoryClass: "personal"
  },
  {
    name: "Headspace",
    category: "Personal Development",
    link: "https://headspace.com",
    logo: "logos/headspace.png",
    categoryClass: "personal"
  },
  {
    name: "Calm",
    category: "Personal Development",
    link: "https://calm.com",
    logo: "logos/calm.png",
    categoryClass: "personal"
  },
  {
    name: "TED-Ed",
    category: "Personal Development",
    link: "https://ed.ted.com",
    logo: "logos/teded.png",
    categoryClass: "personal"
  },
  {
    name: "OpenSesame",
    category: "Personal Development",
    link: "https://opensesame.com",
    logo: "logos/opensesame.png",
    categoryClass: "personal"
  },
  {
    name: "Big Think Edge",
    category: "Personal Development",
    link: "https://bigthink.com/edge",
    logo: "logos/bigthink.png",
    categoryClass: "personal"
  },
  {
    name: "Coursera Guided Projects",
    category: "Personal Development",
    link: "https://www.coursera.org/guided-projects",
    logo: "logos/coursera_guided.png",
    categoryClass: "personal"
  },
  {
    name: "Medium",
    category: "Personal Development",
    link: "https://medium.com",
    logo: "logos/medium.png",
    categoryClass: "personal"
  },
  {
    name: "Notion Learn",
    category: "Personal Development",
    link: "https://notion.so",
    logo: "logos/notion.png",
    categoryClass: "personal"
  },
  {
    name: "Goodreads",
    category: "Personal Development",
    link: "https://goodreads.com",
    logo: "logos/goodreads.png",
    categoryClass: "personal"
  },

  // Group 8: Specialized Skills and Certifications (71-80)
  {
    name: "AWS Training and Certification",
    category: "Specialized Skills and Certifications",
    link: "https://aws.amazon.com/training",
    logo: "logos/aws.png",
    categoryClass: "specialized"
  },
  {
    name: "Microsoft Learn",
    category: "Specialized Skills and Certifications",
    link: "https://learn.microsoft.com",
    logo: "logos/microsoft_learn.png",
    categoryClass: "specialized"
  },
  {
    name: "IBM SkillsBuild",
    category: "Specialized Skills and Certifications",
    link: "https://skillsbuild.org",
    logo: "logos/ibm_skillsbuild.png",
    categoryClass: "specialized"
  },
  {
    name: "Cisco Networking Academy",
    category: "Specialized Skills and Certifications",
    link: "https://netacad.com",
    logo: "logos/cisco.png",
    categoryClass: "specialized"
  },
  {
    name: "Scrum.org",
    category: "Specialized Skills and Certifications",
    link: "https://scrum.org",
    logo: "logos/scrum.png",
    categoryClass: "specialized"
  },
  {
    name: "PMP Institute",
    category: "Specialized Skills and Certifications",
    link: "https://pmi.org",
    logo: "logos/pmp.png",
    categoryClass: "specialized"
  },
  {
    name: "CompTIA Certifications",
    category: "Specialized Skills and Certifications",
    link: "https://comptia.org",
    logo: "logos/comptia.png",
    categoryClass: "specialized"
  },
  {
    name: "Salesforce Trailhead",
    category: "Specialized Skills and Certifications",
    link: "https://trailhead.salesforce.com",
    logo: "logos/salesforce.png",
    categoryClass: "specialized"
  },
  {
    name: "Unity Learn",
    category: "Specialized Skills and Certifications",
    link: "https://learn.unity.com",
    logo: "logos/unity.png",
    categoryClass: "specialized"
  },
  {
    name: "SAP Learning Hub",
    category: "Specialized Skills and Certifications",
    link: "https://learninghub.sap.com",
    logo: "logos/sap.png",
    categoryClass: "specialized"
  },

  // Group 9: Free Courses and Open Resources (81-90)
  {
    name: "OpenLearn",
    category: "Free Courses and Open Resources",
    link: "https://open.edu/openlearn",
    logo: "logos/openlearn.png",
    categoryClass: "free"
  },
  {
    name: "Class Central",
    category: "Free Courses and Open Resources",
    link: "https://classcentral.com",
    logo: "logos/class_central.png",
    categoryClass: "free"
  },
  {
    name: "Academic Earth",
    category: "Free Courses and Open Resources",
    link: "https://academicearth.org",
    logo: "logos/academic_earth.png",
    categoryClass: "free"
  },
  {
    name: "Open Culture Free Courses",
    category: "Free Courses and Open Resources",
    link: "https://openculture.com",
    logo: "logos/open_culture_free.png",
    categoryClass: "free"
  },
  {
    name: "OER Commons",
    category: "Free Courses and Open Resources",
    link: "https://oercommons.org",
    logo: "logos/oer_commons.png",
    categoryClass: "free"
  },
  {
    name: "Learn Anything",
    category: "Free Courses and Open Resources",
    link: "https://learn-anything.xyz",
    logo: "logos/learn_anything.png",
    categoryClass: "free"
  },
  {
    name: "University of the People",
    category: "Free Courses and Open Resources",
    link: "https://uopeople.edu",
    logo: "logos/uopeople.png",
    categoryClass: "free"
  },
  {
    name: "Saylor Academy",
    category: "Free Courses and Open Resources",
    link: "https://saylor.org",
    logo: "logos/saylor.png",
    categoryClass: "free"
  },
  {
    name: "Learning Lab by MIT",
    category: "Free Courses and Open Resources",
    link: "https://learninglab.mit.edu",
    logo: "logos/mit_learninglab.png",
    categoryClass: "free"
  },
  {
    name: "Library Genesis",
    category: "Free Courses and Open Resources",
    link: "https://libgen.is",
    logo: "logos/library_genesis.png",
    categoryClass: "free"
  },

  // Group 10: Hobby and Niche Skills (91-100)
  {
    name: "Ravelry (Knitting)",
    category: "Hobby and Niche Skills",
    link: "https://ravelry.com",
    logo: "logos/ravelry.png",
    categoryClass: "hobby"
  },
  {
    name: "Chess.com",
    category: "Hobby and Niche Skills",
    link: "https://chess.com",
    logo: "logos/chess.png",
    categoryClass: "hobby"
  },
  {
    name: "Cooking for Engineers",
    category: "Hobby and Niche Skills",
    link: "https://cookingforengineers.com",
    logo: "logos/cooking_for_engineers.png",
    categoryClass: "hobby"
  },
  {
    name: "Duolingo Music (Beta)",
    category: "Hobby and Niche Skills",
    link: "https://duolingo.com",  // Adjust if a dedicated music URL exists
    logo: "logos/duolingo_music.png",
    categoryClass: "hobby"
  },
  {
    name: "YouTube Learning",
    category: "Hobby and Niche Skills",
    link: "https://youtube.com/learning",
    logo: "logos/youtube_learning.png",
    categoryClass: "hobby"
  },
  {
    name: "DIY.org (Kids’ Learning)",
    category: "Hobby and Niche Skills",
    link: "https://diy.org",
    logo: "logos/diy.png",
    categoryClass: "hobby"
  },
  {
    name: "CodeCombat",
    category: "Hobby and Niche Skills",
    link: "https://codecombat.com",
    logo: "logos/codecombat.png",
    categoryClass: "hobby"
  },
  {
    name: "GCFGlobal",
    category: "Hobby and Niche Skills",
    link: "https://edu.gcfglobal.org",
    logo: "logos/gcfglobal.png",
    categoryClass: "hobby"
  },
  {
    name: "Craftsy",
    category: "Hobby and Niche Skills",
    link: "https://craftsy.com",
    logo: "logos/craftsy.png",
    categoryClass: "hobby"
  },
  {
    name: "Skillshare Teams",
    category: "Hobby and Niche Skills",
    link: "https://skillshare.com/teams",
    logo: "logos/skillshare_teams.png",
    categoryClass: "hobby"
  }
];
const careers = [
// General Career Companies (1-19)
 { name: "Microsoft", link: "https://careers.microsoft.com/" },
 { name: "Google", link: "https://careers.google.com/" },
 { name: "Amazon (AWS)", link: "https://www.amazon.jobs/" },
 { name: "Facebook (Meta)", link: "https://www.metacareers.com/" },
 { name: "Oracle", link: "https://www.oracle.com/careers/" },
 { name: "Deloitte", link: "https://www2.deloitte.com/global/en/careers.html" },
 { name: "Accenture", link: "https://www.accenture.com/in-en/careers" },
 { name: "Capgemini", link: "https://www.capgemini.com/careers/" },
 { name: "IBM", link: "https://www.ibm.com/careers" },
 { name: "SAP Labs", link: "https://jobs.sap.com/" },
 { name: "Cisco Systems", link: "https://jobs.cisco.com/" },
 { name: "Uber Technologies", link: "https://www.uber.com/global/en/careers/" },
 { name: "Novartis", link: "https://www.novartis.com/careers" },
 { name: "Micron Technology", link: "https://micron.eightfold.ai/careers" },
 { name: "Qualcomm", link: "https://www.qualcomm.com/company/careers" },
 { name: "Apple", link: "https://jobs.apple.com/" },
 { name: "Salesforce", link: "https://www.salesforce.com/company/careers/" },
 { name: "Infosys", link: "https://www.infosys.com/careers/" },
 { name: "Wipro", link: "https://careers.wipro.com/" },
 { name: "HCL Technologies", link: "https://www.hcltech.com/careers" },
 { name: "Google", link: "https://careers.google.com/" },
 { name: "Dell EMC", link: "https://jobs.dell.com/" },
 { name: "IBM", link: "https://www.ibm.com/careers/" },
  { name: "AWS (Amazon Web Services)", link: "https://aws.amazon.com/careers/" },
  { name: "Salesforce", link: "https://www.salesforce.com/company/careers/" },
  { name: "Cisco", link: "https://jobs.cisco.com/" },
  { name: "Wipro", link: "https://careers.wipro.com/" },
  { name: "Infosys", link: "https://careers.infosys.com/" },
  { name: "HCL Technologies", link: "https://www.hcltech.com/careers" },
  { name: "Tech Mahindra", link: "https://www.techmahindra.com/careers/" },
  { name: "LTIMindtree", link: "https://www.ltimindtree.com/careers/" },
  { name: "Persistent Systems", link: "https://www.persistent.com/careers/" },
  // Education & Learning Platforms
  { name: "Coursera", link: "https://about.coursera.org/careers" },
  { name: "Alison", link: "https://alison.com/about/careers" },
  { name: "Skillshop (Google)", link: "https://skillshop.withgoogle.com/" },
  { name: "edX", link: "https://www.edx.org/careers" },
  { name: "Udemy", link: "https://about.udemy.com/careers/" },
  { name: "Udacity", link: "https://www.udacity.com/careers" },
  { name: "Great Learning", link: "https://www.greatlearning.in/careers" },
  { name: "FutureLearn", link: "https://www.futurelearn.com/careers" },
  { name: "NPTEL (India)", link: "https://nptel.ac.in/careers" },
  { name: "SWAYAM (India)", link: "https://swayam.gov.in/" },
  { name: "FreeCodeCamp", link: "https://www.freecodecamp.org/careers/" },
  { name: "LinkedIn Learning", link: "https://www.linkedin.com/learning/" },
  // Indian Corporations & Banks
  { name: "Reliance Industries", link: "https://careers.ril.com/" },
  { name: "Tata Consultancy Services (TCS)", link: "https://www.tcs.com/careers" },
  { name: "HDFC Bank", link: "https://www.hdfcbank.com/personal/careers" },
  { name: "ICICI Bank", link: "https://www.icicicareers.com/" },
  { name: "State Bank of India (SBI)", link: "https://sbi.co.in/careers" },
  { name: "Axis Bank", link: "https://www.axisbank.com/careers" },
  { name: "Kotak Mahindra Bank", link: "https://www.kotak.com/en/careers.html" },
  { name: "Bajaj Finance", link: "https://www.bajajfinserv.in/careers" },
  { name: "Bharti Airtel", link: "https://www.airtel.in/careers/" },
  { name: "Adani Group", link: "https://www.adanicareers.com/" },
  // Automotive & Manufacturing
  { name: "Tata Motors", link: "https://www.tatamotors.com/careers/" },
  { name: "Maruti Suzuki", link: "https://www.marutisuzuki.com/careers" },
  { name: "Mahindra & Mahindra", link: "https://www.mahindra.com/careers" },
  { name: "Bajaj Auto", link: "https://www.bajajauto.com/careers" },
  { name: "Eicher Motors", link: "https://www.eicher.in/careers/" },
  // Pharma & Healthcare
  { name: "Sun Pharmaceutical", link: "https://www.sunpharma.com/careers" },
  { name: "Cipla", link: "https://www.cipla.com/careers" },
  { name: "Dr. Reddy’s", link: "https://www.drreddys.com/careers/" },
  { name: "Lupin", link: "https://www.lupin.com/careers/" },
  // Other Notable Companies
  { name: "Hindustan Unilever (HUL)", link: "https://www.unilever.com/careers/" },
  { name: "Larsen & Toubro (L&T)", link: "https://www.larsentoubro.com/careers/" },
  { name: "ITC Limited", link: "https://www.itcportal.com/careers/" },
  { name: "Coal India", link: "https://www.coalindia.in/careers" },
  { name: "Nestle India", link: "https://www.nestle.in/careers" },
  { name: "Swiggy", link: "https://careers.swiggy.com/" },
  { name: "Zomato", link: "https://www.zomato.com/careers" },
  { name: "DLF", link: "https://www.dlf.in/careers" },
  // Additional Pharmaceutical Companies
  { name: "Aurobindo Pharma", link: "https://www.aurobindo.com/careers/" },
  { name: "Alkem Laboratories", link: "https://www.alkemlabs.com/careers" },
  { name: "Glenmark Pharmaceuticals", link: "https://www.glenmarkpharma.com/careers" },
  { name: "Biocon", link: "https://www.biocon.com/careers/" },
  { name: "Ipca Laboratories", link: "https://www.ipca.com/careers/" },
  { name: "Ajanta Pharma", link: "https://www.ajantapharma.com/careers/" },
  { name: "Suven Pharmaceuticals", link: "https://www.suven.com/careers/" },
  // Banking & Financial Services
  { name: "Vodafone Idea", link: "https://careers.vi.co.in/" },
  { name: "PB Fintech (PolicyBazaar)", link: "https://www.policybazaar.com/careers/" },
  { name: "Muthoot Finance", link: "https://www.muthootfinance.com/careers" },
  { name: "Indian Bank", link: "https://www.indianbank.in/careers/" },
  { name: "YES Bank", link: "https://www.yesbank.in/careers" },
  { name: "IDFC First Bank", link: "https://www.idfcfirstbank.com/careers" },
  { name: "Bandhan Bank", link: "https://www.bandhanbank.com/careers/" },
  { name: "UCO Bank", link: "https://www.ucobank.com/english/careers.aspx" },
  { name: "Bank of Maharashtra", link: "https://www.bankofmaharashtra.in/careers" },
  // Automotive & Manufacturing (Additional)
  { name: "Tube Investments of India", link: "https://www.tiindia.com/careers" },
  { name: "Bharat Forge", link: "https://www.bharatforge.com/careers/" },
  { name: "Ashok Leyland", link: "https://www.ashokleyland.com/careers" },
  { name: "MRF Limited", link: "https://www.mrfcareers.com/" },
  { name: "Exide Industries", link: "https://www.exideindustries.com/careers" },
  { name: "Sona BLW Precision Forgings", link: "https://www.sonablw.com/careers/" },
  { name: "Schaeffler India", link: "https://www.schaeffler.com/careers" },
  // Real Estate & Infrastructure
  { name: "Prestige Estates", link: "https://www.prestigeconstructions.com/careers" },
  { name: "Oberoi Realty", link: "https://www.oberoirealty.com/careers/" },
  { name: "Phoenix Mills", link: "https://www.thephoenixmills.com/careers/" },
  { name: "Brigade Enterprises", link: "https://www.brigadegroup.com/careers" },
  // Energy & Utilities
  { name: "NLC India", link: "https://www.nlcindia.in/careers/" },
  { name: "Petronet LNG", link: "https://www.petronetlng.com/careers" },
  { name: "Gujarat Gas", link: "https://www.gujaratgas.com/careers/" },
  // Technology & IT Services
  { name: "Mphasis", link: "https://www.mphasis.com/careers.html" },
  { name: "KPIT Technologies", link: "https://www.kpit.com/careers/" },
  { name: "Tata Technologies", link: "https://www.tatatechnologies.com/careers/" },
  { name: "Coforge", link: "https://www.coforge.com/careers" },
  { name: "L&T Technology Services", link: "https://www.ltts.com/careers/" },
  // Consumer Goods & Retail
  { name: "Vishal Mega Mart", link: "https://www.vishalretail.co.in/careers" },
  { name: "Metro Brands", link: "https://www.metrobrands.in/careers" },
  { name: "Page Industries (Jockey)", link: "https://www.pageindustries.com/careers" },
  { name: "Aditya Birla Fashion & Retail", link: "https://www.abfrl.com/careers/" },
  { name: "Nykaa (FSN E-Commerce)", link: "https://www.nykaa.com/careers" },
  // Miscellaneous
  { name: "Indian Railway Catering & Tourism Corp (IRCTC)", link: "https://www.irctc.com/careers/" },
  { name: "SRF Limited", link: "https://www.srf.com/careers/" },
  { name: "Voltas", link: "https://www.voltas.com/careers/" },
  { name: "Blue Star", link: "https://www.bluestarindia.com/careers" },
  { name: "Cochin Shipyard", link: "https://cochinshipyard.in/careers.html" },
  { name: "Tata Communications", link: "https://www.tatacommunications.com/careers/" },
  // Additional 100+ Entries (pattern continues)
  { name: "Radico Khaitan", link: "https://www.radicokhaitan.com/careers/" },
  { name: "Dr. Lal PathLabs", link: "https://www.lalpathlabs.com/careers/" },
  { name: "Laurus Labs", link: "https://www.lauruslabs.com/careers/" },
  { name: "Emcure Pharmaceuticals", link: "https://www.emcure.co.in/careers/" },
  { name: "Alembic Pharmaceuticals", link: "https://www.alembicpharmaceuticals.com/careers/" },
  { name: "Wockhardt", link: "https://www.wockhardt.com/careers/" },
  { name: "Neuland Laboratories", link: "https://www.neulandlabs.com/careers/" },
  { name: "Sundram Fasteners", link: "https://www.sundram.com/careers" },
  { name: "Timken India", link: "https://www.timken.com/careers/" },
  { name: "Amara Raja Energy & Mobility", link: "https://www.amararaja.com/careers/" },
  { name: "JBM Auto", link: "https://www.jbmgroup.com/careers/" },
  { name: "BEML Limited", link: "https://www.bemlindia.in/careers/" },
  { name: "ICICI Securities", link: "https://www.icicisecurities.com/careers/" },
  { name: "PNB Housing Finance", link: "https://www.pnbhousing.com/careers/" },
  { name: "IIFL Finance", link: "https://www.iifl.com/careers/" },
  { name: "Karur Vysya Bank", link: "https://www.kvb.co.in/careers/" },
  { name: "Manappuram Finance", link: "https://www.manappuram.com/careers/" },
  { name: "Sobha Limited", link: "https://www.sobha.com/careers/" },
  { name: "NCC Limited", link: "https://www.ncclimited.com/careers/" },
  { name: "AFCONS Infrastructure", link: "https://www.afcons.com/careers/" },
  { name: "IRCON International", link: "https://www.ircon.org/careers/" },
  { name: "Cyient", link: "https://www.cyient.com/careers/" },
  { name: "Zensar Technologies", link: "https://www.zensar.com/careers/" },
  { name: "Sonata Software", link: "https://www.sonata-software.com/careers/" },
  { name: "Newgen Software", link: "https://www.newgensoft.com/careers/" },
  { name: "Bata India", link: "https://www.bata.in/careers/" },
  { name: "Relaxo Footwears", link: "https://www.relaxofootwear.com/careers/" },
  { name: "Kajaria Ceramics", link: "https://www.kajariaceramics.com/careers/" },
  { name: "Doms Industries", link: "https://www.domsindustries.com/careers/" },
  { name: "Gujarat State Petronet", link: "https://www.gspcgroup.com/careers/" },
  { name: "Inox Wind", link: "https://www.inoxwind.com/careers/" },
  { name: "KSB Limited", link: "https://www.ksb.com/careers/" },
  { name: "Tata Chemicals", link: "https://www.tatachemicals.com/careers/" },
  { name: "Crompton Greaves Consumer Electricals", link: "https://www.crompton.co.in/careers/" },
  { name: "Whirlpool India", link: "https://www.whirlpoolindia.com/careers/" },
  { name: "Blue Dart Express", link: "https://www.bluedart.com/careers/" },  
  { name: "RITES Limited", link: "https://www.rites.com/careers/" },
 { name: "Indian Energy Exchange", link: "https://www.iexindia.com/careers/" },
 { name: "Indiamart Intermesh", link: "https://www.indiamart.com/careers/" },
  // Indian IT Leaders (20-29)
 { name: "Tata Consultancy Services (TCS)", link: "https://www.tcs.com/careers" },
 { name: "HCL Technologies", link: "https://www.hcltech.com/careers" },
 { name: "Tech Mahindra", link: "https://careers.techmahindra.com/" },
 { name: "Cognizant", link: "https://www.cognizant.com/us/en/careers" },
 { name: "L&T Infotech", link: "https://www.ltimindtree.com/careers/" },
 { name: "Mindtree", link: "https://www.ltimindtree.com/careers/" },
 { name: "Mphasis", link: "https://careers.mphasis.com/" },
 { name: "Persistent Systems", link: "https://www.persistent.com/careers/" },
 { name: "Zensar Technologies", link: "https://www.zensar.com/careers" },
 { name: "Hexaware Technologies", link: "https://hexaware.com/careers/" },
 // Product-Based Tech Companies (30-40)
 { name: "ServiceNow", link: "https://careers.servicenow.com/" },
 { name: "Adobe", link: "https://adobe.wd5.myworkdayjobs.com/en-US/external_experienced" },
 { name: "Atlassian", link: "https://www.atlassian.com/company/careers" },
 { name: "Workday", link: "https://www.workday.com/en-us/company/careers.html" },
 { name: "Informatica", link: "https://careers.informatica.com/" },
 { name: "NetApp", link: "https://www.netapp.com/careers/" },
 { name: "AMD", link: "https://www.amd.com/en/corporate/careers" },
 { name: "Dell Technologies", link: "https://jobs.dell.com/" },
 { name: "NVIDIA", link: "https://www.nvidia.com/en-us/about-nvidia/careers/" },
 { name: "Thomson Reuters", link: "https://www.thomsonreuters.com/en/careers.html" },
 { name: "Zoho Corporation", link: "https://www.zoho.com/careers.html" },
 // Startups and Unicorns (41-50)
 { name: "Swiggy", link: "https://careers.swiggy.com/" },
 { name: "Zomato", link: "https://www.zomato.com/careers" },
 { name: "Flipkart (Walmart Labs)", link: "https://www.flipkartcareers.com/" },
 { name: "Byju's", link: "https://careers.byjus.com/" },
 { name: "Freshworks", link: "https://www.freshworks.com/company/careers/" },
 { name: "Meesho", link: "https://careers.meesho.com/" },
 { name: "OYO", link: "https://www.oyorooms.com/careers" },
 { name: "Bigbasket", link: "https://www.bigbasket.com/careers/" },
 { name: "Practo", link: "https://www.practo.com/company/careers" },
 { name: "Cure.fit", link: "https://www.cult.fit/careers" },
 // BFSI IT Service Providers (51-60)
 { name: "JP Morgan Chase", link: "https://careers.jpmorgan.com/us/en/" },
 { name: "HSBC Technology", link: "https://www.hsbc.com/careers" },
 { name: "Wells Fargo", link: "https://www.wellsfargo.com/about/careers/" },
 { name: "Franklin Templeton", link: "https://www.franklintempletoncareers.com/" },
 { name: "Standard Chartered Global Business Services", link: "https://www.sc.com/en/global-careers/" },
 { name: "UBS", link: "https://www.ubs.com/global/en/careers.html" },
 { name: "Goldman Sachs", link: "https://www.goldmansachs.com/careers/" },
 { name: "Deutsche Bank", link: "https://careers.db.com/" },
 { name: "Bank of America", link: "https://careers.bankofamerica.com/" },
 { name: "Citi Bank", link: "https://www.citigroup.com/citi/careers/" },
 // Engineering and R&D Centers (61-70)
 { name: "Boeing", link: "https://jobs.boeing.com/" },
 { name: "Honeywell", link: "https://careers.honeywell.com/" },
 { name: "Rolls-Royce", link: "https://careers.rolls-royce.com/" },
 { name: "GE Digital", link: "https://jobs.gecareers.com/" },
 { name: "Airbus", link: "https://www.airbus.com/en/careers" },
 { name: "Siemens", link: "https://www.siemens.com/global/en/company/jobs.html" },
 { name: "Bosch", link: "https://www.bosch.com/careers/" },
 { name: "3M", link: "https://www.3m.com/3M/en_US/careers-us/" },
 { name: "Rockwell Automation", link: "https://www.rockwellautomation.com/en-us/careers.html" },
 { name: "ABB", link: "https://careers.abb/" },
 // Gaming and Media Tech Companies (71-75)
 { name: "Electronic Arts (EA)", link: "https://www.ea.com/careers" },
 { name: "Rockstar Games", link: "https://www.rockstargames.com/careers" },
 { name: "Zynga", link: "https://www.zynga.com/careers/" },
 { name: "Unity Technologies", link: "https://careers.unity.com/" },
 { name: "Netflix (Hyderabad operations)", link: "https://jobs.netflix.com/" },
 // Emerging Startups (76-80)
 { name: "Darwinbox", link: "https://darwinbox.com/careers" },
 { name: "Truecaller (India operations)", link: "https://careers.truecaller.com/" },
 { name: "Paytm (Hyderabad office)", link: "https://paytm.com/careers/" },
 { name: "Razorpay", link: "https://razorpay.com/careers/" },
 { name: "PhonePe", link: "https://www.phonepe.com/careers/" },
 // Analytics and Big Data (81-85)
 { name: "Mu Sigma", link: "https://www.mu-sigma.com/careers" },
 { name: "Fractal Analytics", link: "https://fractal.ai/careers/" },
 { name: "Tiger Analytics", link: "https://www.tigeranalytics.com/careers/" },
 { name: "ThoughtSpot", link: "https://www.thoughtspot.com/careers" },
 { name: "Saama Technologies", link: "https://www.saama.com/careers/" },
 // Cybersecurity Companies (86-90)
 { name: "Palo Alto Networks", link: "https://www.paloaltonetworks.com/careers" },
 { name: "Symantec (NortonLifeLock)", link: "https://www.nortonlifelock.com/us/en/careers/" },
 { name: "Check Point Software Technologies", link: "https://careers.checkpoint.com/" },
 { name: "Fortinet", link: "https://www.fortinet.com/careers" },
 { name: "FireEye", link: "https://www.trellix.com/company/careers/" },
 // Other Notable Companies (91-100)
 { name: "Pegasystems", link: "https://www.pega.com/about/careers" },
 { name: "Hitachi Vantara", link: "https://www.hitachivantara.com/en-us/company/careers.html" },
 { name: "Teradata", link: "https://www.teradata.com/Careers" },
 { name: "OpenText", link: "https://www.opentext.com/about/careers" },
 { name: "Informatica", link: "https://careers.informatica.com/" },
 { name: "Sutherland Global Services", link: "https://www.sutherlandglobal.com/careers" },
 { name: "Concentrix", link: "https://careers.concentrix.com/" },
 { name: "Sitel", link: "https://www.sitel.com/careers/" },
 { name: "DXC Technology", link: "https://careers.dxc.com/" },
 { name: "Virtusa", link: "https://www.virtusa.com/careers" }
];
// --- Sidebar Navigation ---
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const menuProfile = document.getElementById("menuProfile");
const menuCourses = document.getElementById("menuCourses");
const menuCareers = document.getElementById("menuCareers");
const profileSection = document.getElementById("profileSection");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("visible");
  });
}
if (menuProfile) {
  menuProfile.addEventListener("click", () => {
    window.location.href = "profile.html";
  });
}
if (menuCourses) {
  menuCourses.addEventListener("click", () => {
    window.location.href = "courses.html";
  });
}
if (menuCareers) {
  menuCareers.addEventListener("click", () => {
    window.location.href = "career.html";
  });
}

// --- Courses Grid and Search ---
let debounceTimeout = null;
const debounceDelay = 300;

document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();
  const grid = document.getElementById("grid");
  const searchInput = document.getElementById("searchInput");
  const emptyState = document.getElementById("emptyState");
  const logoutBtn = document.getElementById("logoutBtn");
  
  if (currentPage === "courses.html") {
    displayCourses(courses);
  } else {
    if (grid) grid.innerHTML = "";
  }
  
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      if (debounceTimeout) clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => {
        performAdvancedSearch(searchInput.value);
      }, debounceDelay);
    });
  }
  
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      window.location.href = "login.html";
    });
  }
  
  function displayCourses(courseList) {
    grid.innerHTML = "";
    emptyState.style.display = courseList.length === 0 ? "block" : "none";
    courseList.forEach((course, index) => {
      const card = document.createElement("div");
      card.classList.add("card", course.categoryClass || "default", "fade-in");
      card.style.animationDelay = `${index * 0.05}s`;
      
      const iconDiv = document.createElement("div");
      iconDiv.classList.add("card-icon");
      const img = document.createElement("img");
      img.src = course.logo;
      img.alt = course.name + " logo";
      img.classList.add("course-logo");
      img.setAttribute("loading", "lazy");
      iconDiv.appendChild(img);
      card.appendChild(iconDiv);
      
      const contentDiv = document.createElement("div");
      contentDiv.classList.add("card-content");
      
      const title = document.createElement("div");
      title.classList.add("card-title");
      title.innerHTML = highlightMatches(course.name, searchInput.value);
      contentDiv.appendChild(title);
      
      const category = document.createElement("div");
      category.classList.add("card-category");
      category.innerHTML = highlightMatches(course.category, searchInput.value);
      contentDiv.appendChild(category);
      
      // Favorite Icon
      const favIcon = document.createElement("span");
      favIcon.innerHTML = "♡";
      favIcon.classList.add("fav-icon");
      favIcon.setAttribute("aria-label", "Mark as Favorite");
      favIcon.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleFavorite(course);
      });
      contentDiv.appendChild(favIcon);
      
      // Visit Button
      const button = document.createElement("a");
      button.classList.add("card-button");
      button.textContent = "Visit";
      button.href = course.link;
      button.target = "_blank";
      contentDiv.appendChild(button);
      
      card.appendChild(contentDiv);
      card.addEventListener("animationend", () => {
        card.classList.remove("fade-in");
      });
      grid.appendChild(card);
    });
  }
  
  function performAdvancedSearch(query) {
    const normalizedQuery = normalizeQuery(query);
    setTimeout(() => {
      const results = courses
        .map((course) => {
          const score = calculateMatchScore(course, normalizedQuery);
          return { course, score };
        })
        .filter((result) => result.score > 0.4)
        .sort((a, b) => b.score - a.score)
        .map((result) => result.course);
      displayCourses(results);
    }, 0);
  }
  
  function calculateMatchScore(course, query) {
    const nameScore = calculateJaroWinklerScore(normalizeQuery(course.name), query) * 0.6;
    const categoryScore = calculateJaroWinklerScore(normalizeQuery(course.category), query) * 0.3;
    const keywordScore = calculateKeywordScore(course, query) * 0.1;
    let total = nameScore + categoryScore + keywordScore;
    return Math.min(Math.max(total, 0), 1);
  }
  
  function calculateKeywordScore(course, query) {
    const keywordMap = { js: "javascript", ai: "artificial intelligence", ml: "machine learning" };
    const processedQuery = keywordMap[query.toLowerCase()] || query;
    const courseText = (course.name + " " + course.category).toLowerCase();
    return courseText.includes(processedQuery) ? 1.0 : 0.0;
  }
  
  function normalizeQuery(str) {
    return str.toLowerCase().replace(/[^a-z0-9]/g, "");
  }
  
  function calculateJaroWinklerScore(s1, s2) {
    const jaroScore = jaroDistance(s1, s2);
    const prefixScale = 0.1;
    let prefix = 0;
    for (let i = 0; i < Math.min(4, s1.length, s2.length); i++) {
      if (s1[i] === s2[i]) prefix++;
      else break;
    }
    return jaroScore + prefix * prefixScale * (1 - jaroScore);
  }
  
  function jaroDistance(s1, s2) {
    if (s1 === s2) return 1.0;
    const len1 = s1.length;
    const len2 = s2.length;
    if (len1 === 0 || len2 === 0) return 0.0;
    const matchDistance = Math.floor(Math.max(len1, len2) / 2) - 1;
    const s1Matches = new Array(len1).fill(false);
    const s2Matches = new Array(len2).fill(false);
    let matches = 0;
    for (let i = 0; i < len1; i++) {
      const start = Math.max(0, i - matchDistance);
      const end = Math.min(i + matchDistance + 1, len2);
      for (let j = start; j < end; j++) {
        if (s2Matches[j]) continue;
        if (s1[i] !== s2[j]) continue;
        s1Matches[i] = true;
        s2Matches[j] = true;
        matches++;
        break;
      }
    }
    if (matches === 0) return 0.0;
    let t = 0;
    let k = 0;
    for (let i = 0; i < len1; i++) {
      if (!s1Matches[i]) continue;
      while (!s2Matches[k]) k++;
      if (s1[i] !== s2[k]) t++;
      k++;
    }
    t = t / 2;
    return ((matches / len1) + (matches / len2) + ((matches - t) / matches)) / 3.0;
  }
  
  function highlightMatches(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(regex, '<span class="highlight">$1</span>');
  }
});

// --- Career Cards Rendering ---
function displayCareerCards(careerArray) {
  const grid = document.getElementById("careerGrid");
  const emptyState = document.getElementById("emptyState");
  grid.innerHTML = "";
  emptyState.style.display = careerArray.length === 0 ? "block" : "none";
  careerArray.forEach((company, index) => {
    const card = document.createElement("div");
    card.classList.add("card", "fade-in");
    card.style.animationDelay = `${index * 0.05}s`;
    
    const contentDiv = document.createElement("div");
    contentDiv.classList.add("card-content", "text-center");
    
    const title = document.createElement("div");
    title.classList.add("card-title");
    title.textContent = company.name;
    contentDiv.appendChild(title);
    
    const button = document.createElement("a");
    button.classList.add("card-button");
    button.textContent = "Visit";
    button.href = company.link;
    button.target = "_blank";
    contentDiv.appendChild(button);
    
    card.appendChild(contentDiv);
    card.addEventListener("animationend", () => {
      card.classList.remove("fade-in");
    });
    grid.appendChild(card);
  });
}

// --- Favorites Feature (for Profile Page) ---
function toggleFavorite(course) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const index = favorites.findIndex(fav => fav.link === course.link);
  if (index === -1) {
    favorites.push(course);
  } else {
    favorites.splice(index, 1);
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
  if (window.location.pathname.split("/").pop() === "profile.html") {
    displayFavorites();
  }
}

function displayFavorites() {
  const favGrid = document.getElementById("favoritesGrid");
  const favEmptyState = document.getElementById("favEmptyState");
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  favGrid.innerHTML = "";
  favEmptyState.style.display = favorites.length === 0 ? "block" : "none";
  favorites.forEach((course, index) => {
    const card = document.createElement("div");
    card.classList.add("card", "fade-in");
    card.style.animationDelay = `${index * 0.05}s`;
    
    const iconDiv = document.createElement("div");
    iconDiv.classList.add("card-icon");
    const img = document.createElement("img");
    img.src = course.logo;
    img.alt = course.name + " logo";
    img.classList.add("course-logo");
    img.setAttribute("loading", "lazy");
    iconDiv.appendChild(img);
    card.appendChild(iconDiv);
    
    const contentDiv = document.createElement("div");
    contentDiv.classList.add("card-content");
    const title = document.createElement("div");
    title.classList.add("card-title");
    title.textContent = course.name;
    contentDiv.appendChild(title);
    
    const button = document.createElement("a");
    button.classList.add("card-button");
    button.textContent = "Visit";
    button.href = course.link;
    button.target = "_blank";
    contentDiv.appendChild(button);
    
    card.appendChild(contentDiv);
    card.addEventListener("animationend", () => {
      card.classList.remove("fade-in");
    });
    favGrid.appendChild(card);
  });
}
