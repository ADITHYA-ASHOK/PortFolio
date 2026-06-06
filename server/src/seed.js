import mongoose from 'mongoose';
import connectDB from './config/db.js';
import config from './config/env.js';
import Admin from './models/Admin.js';
import Profile from './models/Profile.js';
import Project from './models/Project.js';
import Skill from './models/Skill.js';
import SocialLink from './models/SocialLink.js';
import Timeline from './models/Timeline.js';
import Certification from './models/Certification.js';
import Leadership from './models/Leadership.js';

async function seed() {
  await connectDB();
  console.log('🌱 Seeding database...\n');

  // Seed Admin
  const existingAdmin = await Admin.findOne({ email: config.adminEmail });
  if (!existingAdmin) {
    await Admin.create({ email: config.adminEmail, password: config.adminPassword });
    console.log('✅ Admin account created');
  } else {
    console.log('⏭️  Admin already exists');
  }

  // Seed Profile
  const existingProfile = await Profile.findOne();
  if (!existingProfile) {
    await Profile.create({
      name: 'Adithya Ashok',
      title: 'Aspiring Software Engineer | MERN Stack Developer | Open Source Contributor',
      bio: 'Passionate Computer Science and Engineering student with strong foundations in Full Stack Development, Software Engineering, Database Management, and Problem Solving.',
      careerObjective: 'To leverage my expertise in MERN stack development and problem-solving to build innovative software solutions at a leading technology company.',
      email: 'adithyaashok91@gmail.com',
      phone: '+91 7012155024',
      location: 'Palai, Kerala, India',
      education: [{
        institution: "St. Joseph's College of Engineering and Technology, Palai",
        degree: 'B.Tech Computer Science and Engineering',
        year: 'Expected Graduation: 2027',
        gpa: '',
      }],
      achievements: [
        'MuLearn Active Member',
        'Rewriting Code Participant',
        'Open Source Contributor',
      ],
    });
    console.log('✅ Profile created');
  } else {
    console.log('⏭️  Profile already exists');
  }

  // Seed Projects
  const projectCount = await Project.countDocuments();
  if (projectCount === 0) {
    await Project.insertMany([
      {
        title: 'MicroAlert',
        description: 'Hyperlocal disaster management and real-time alert platform with geo-tagged reporting, AI-assisted risk verification, and emergency support.',
        detailedDescription: 'MicroAlert is a comprehensive hyperlocal disaster management platform designed to protect communities. It features real-time geo-tagged reporting, AI-assisted risk verification for rapid emergency response, and localized support mechanisms.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Firebase', 'REST APIs', 'AI Verification'],
        githubUrl: 'https://github.com/ADITHYA-ASHOK/MicroAlert.git',
        featured: true,
        order: 1,
      },
      {
        title: 'SkyLytix',
        description: 'Weather intelligence platform using NASA Earth observation data to provide environmental insights and analytics.',
        detailedDescription: 'SkyLytix is an advanced weather intelligence and analytics platform that leverages NASA Earth observation data. It provides users with deep environmental insights, interactive data visualization, and powerful forecasting analytics.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'NASA APIs', 'Chart.js'],
        githubUrl: 'https://github.com/ADITHYASHOK/Skylytix.git',
        featured: true,
        order: 2,
      },
      {
        title: 'FindMyDonor',
        description: 'Blood donation platform connecting donors and recipients through location and blood-group-based matching.',
        detailedDescription: 'FindMyDonor bridges the critical gap between blood donors and those in need. It features a robust matching algorithm based on location and blood group, enabling fast and efficient connections during medical emergencies.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
        githubUrl: 'https://github.com/ADITHYA-ASHOK/FindMyDonor.git',
        featured: true,
        order: 3,
      },
      {
        title: 'Library Management System',
        description: 'Menu-driven Library Management System developed in C using file handling concepts.',
        detailedDescription: 'A robust terminal-based Library Management System built with C. It utilizes advanced file handling concepts to persistently store book records, member details, and transaction history.',
        technologies: ['C Programming', 'File Handling', 'Data Structures'],
        githubUrl: 'https://github.com/ADITHYA-ASHOK/Libmanage.git',
        featured: true,
        order: 4,
      },
    ]);
    console.log('✅ Projects created');
  } else {
    console.log('⏭️  Projects already exist');
  }

  // Seed Skills
  const skillCount = await Skill.countDocuments();
  if (skillCount === 0) {
    await Skill.insertMany([
      { category: 'Programming', name: 'Java', proficiency: 85, order: 1 },
      { category: 'Programming', name: 'Python', proficiency: 75, order: 2 },
      { category: 'Programming', name: 'JavaScript', proficiency: 85, order: 3 },
      { category: 'Programming', name: 'SQL', proficiency: 80, order: 4 },
      { category: 'Programming', name: 'C', proficiency: 70, order: 5 },
      
      { category: 'Frontend', name: 'HTML', proficiency: 90, order: 1 },
      { category: 'Frontend', name: 'CSS', proficiency: 85, order: 2 },
      { category: 'Frontend', name: 'React.js', proficiency: 85, order: 3 },
      { category: 'Frontend', name: 'Tailwind CSS', proficiency: 85, order: 4 },
      
      { category: 'Backend', name: 'Node.js', proficiency: 80, order: 1 },
      { category: 'Backend', name: 'Express.js', proficiency: 80, order: 2 },
      
      { category: 'Database', name: 'MongoDB', proficiency: 80, order: 1 },
      { category: 'Database', name: 'MySQL', proficiency: 75, order: 2 },
      
      { category: 'Tools', name: 'Git', proficiency: 85, order: 1 },
      { category: 'Tools', name: 'GitHub', proficiency: 85, order: 2 },
      { category: 'Tools', name: 'VS Code', proficiency: 90, order: 3 },
      { category: 'Tools', name: 'Postman', proficiency: 80, order: 4 },

      { category: 'Concepts', name: 'OOP', proficiency: 85, order: 1 },
      { category: 'Concepts', name: 'REST APIs', proficiency: 85, order: 2 },
      { category: 'Concepts', name: 'DBMS', proficiency: 80, order: 3 },
      { category: 'Concepts', name: 'DSA', proficiency: 75, order: 4 },
      { category: 'Concepts', name: 'UML Modeling', proficiency: 75, order: 5 },
      { category: 'Concepts', name: 'GUI Design', proficiency: 80, order: 6 },
      { category: 'Concepts', name: 'Mobile App Dev', proficiency: 70, order: 7 },
    ]);
    console.log('✅ Skills created');
  } else {
    console.log('⏭️  Skills already exist');
  }

  // Seed Social Links
  const socialCount = await SocialLink.countDocuments();
  if (socialCount === 0) {
    await SocialLink.insertMany([
      { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/adithya-ashok12', order: 1 },
      { platform: 'GitHub', url: 'https://github.com/ADITHYA-ASHOK', order: 2 },
      { platform: 'MuLearn', url: 'https://mulearn.org', order: 3 },
    ]);
    console.log('✅ Social links created');
  } else {
    console.log('⏭️  Social links already exist');
  }

  // Seed Timeline
  const timelineCount = await Timeline.countDocuments();
  if (timelineCount === 0) {
    await Timeline.insertMany([
      {
        title: 'Full Stack Developer Intern',
        subtitle: 'NeST Technologies',
        description: 'Gained hands-on experience in full-stack web development using MERN stack.',
        date: 'June 2025 – July 2025',
        category: 'experience',
        order: 1,
      },
      {
        title: 'Industrial Visit Trainee',
        subtitle: 'Experion Technologies',
        description: 'Industry exposure to AI Applications and Software Development Workflows.',
        date: '2024',
        category: 'experience',
        order: 2,
      },
      {
        title: 'Completed Multiple Certifications',
        subtitle: 'Infosys Springboard & NPTEL',
        description: 'Earned certifications in AI, Software Engineering, and Data Structures.',
        date: '2024',
        category: 'certification',
        order: 3,
      },
      {
        title: 'B.Tech Computer Science and Engineering',
        subtitle: "St. Joseph's College of Engineering and Technology, Palai",
        description: 'Pursuing Bachelor of Technology with Expected Graduation in 2027.',
        date: '2023 - 2027',
        category: 'education',
        order: 4,
      },
    ]);
    console.log('✅ Timeline entries created');
  } else {
    console.log('⏭️  Timeline already exists');
  }

  // Seed Leadership
  const leadershipCount = await Leadership.countDocuments();
  if (leadershipCount === 0) {
    await Leadership.insertMany([
      {
        title: 'Volunteer Secretary',
        organization: 'NSS Unit, SJCET',
        duration: 'Current',
        description: 'Leading student volunteers in impactful social initiatives and community service.',
        order: 1,
      },
      {
        title: 'ASTRA Volunteer',
        organization: "St. Joseph's College of Engineering and Technology",
        duration: '2024',
        description: 'Event volunteering and coordination for ASTRA tech fest.',
        order: 2,
      },
    ]);
    console.log('✅ Leadership entries created');
  } else {
    console.log('⏭️  Leadership already exists');
  }

  // Seed Certifications with exact images
  const certCount = await Certification.countDocuments();
  if (certCount === 0) {
    await Certification.insertMany([
      {
        title: 'Smart India Hackathon 24',
        issuer: 'MoE, Govt of India',
        date: '2024',
        category: 'Non-Technical',
        imageUrl: '/uploads/sih24.png',
        certificateUrl: '/uploads/sih24.png',
        description: 'Certificate of Participation for SIH 24.',
      },
      {
        title: 'Java Programming Fundamentals',
        issuer: 'Infosys Springboard',
        date: 'Oct 6, 2024',
        category: 'Technical',
        imageUrl: '/uploads/infosys_java.png',
        certificateUrl: '/uploads/infosys_java.png',
        description: 'Course completion certificate for Java Programming Fundamentals.',
      },
      {
        title: 'Data Structures',
        issuer: 'Infosys Springboard',
        date: 'Oct 20, 2024',
        category: 'Technical',
        imageUrl: '/uploads/infosys_data_structures.png',
        certificateUrl: '/uploads/infosys_data_structures.png',
        description: 'Course completion certificate for Data Structures.',
      },
      {
        title: 'Privacy and Security in Online Social Media',
        issuer: 'NPTEL',
        date: 'Jan-Apr 2025',
        category: 'Technical',
        imageUrl: '/uploads/nptel_privacy.png',
        certificateUrl: '/uploads/nptel_privacy.png',
        description: 'NPTEL Online Certification.',
      },
      {
        title: 'NeST Internship Certificate',
        issuer: 'NeST Cyber Campus',
        date: 'Jul 10, 2025',
        category: 'Internship',
        imageUrl: '/uploads/nest_internship.png',
        certificateUrl: '/uploads/nest_internship.png',
        description: 'Certificate of Internship in MERN Stack.',
      },
    ]);
    console.log('✅ Certifications created');
  } else {
    console.log('⏭️  Certifications already exist');
  }

  console.log('\n🎉 Seeding complete!');
  await mongoose.disconnect();
  process.exit(0);
}

seed().catch((err) => {
  console.error('Seed error:', err);
  process.exit(1);
});
