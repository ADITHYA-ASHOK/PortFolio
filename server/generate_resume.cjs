const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument({ margin: 50, size: 'A4' });

// Setup stream
doc.pipe(fs.createWriteStream('../client/public/resume.pdf'));

// Colors & Fonts
const PRIMARY_COLOR = '#000000';
const SECONDARY_COLOR = '#444444';
const ACCENT_COLOR = '#0ea5e9';

// Helper for section titles
const sectionTitle = (title) => {
  doc.moveDown(1);
  doc.font('Helvetica-Bold').fontSize(14).fillColor(ACCENT_COLOR).text(title.toUpperCase());
  doc.moveTo(doc.x, doc.y).lineTo(doc.page.width - 50, doc.y).strokeColor(ACCENT_COLOR).stroke();
  doc.moveDown(0.5);
};

// --- HEADER ---
doc.font('Helvetica-Bold').fontSize(28).fillColor(PRIMARY_COLOR).text('ADITHYA ASHOK', { align: 'center' });
doc.moveDown(0.2);
doc.font('Helvetica').fontSize(12).fillColor(SECONDARY_COLOR).text('Aspiring Software Engineer | MERN Stack Developer', { align: 'center' });
doc.moveDown(0.5);

// Contact Info
doc.font('Helvetica').fontSize(10).fillColor(SECONDARY_COLOR);
doc.text('adithyaashok91@gmail.com | +91 7012155024 | Palai, Kerala', { align: 'center' });
doc.text('LinkedIn: linkedin.com/in/adithya-ashok12 | GitHub: github.com/ADITHYA-ASHOK', { align: 'center' });
doc.moveDown(1);

// --- PROFESSIONAL SUMMARY ---
sectionTitle('Professional Summary');
doc.font('Helvetica').fontSize(10).fillColor(PRIMARY_COLOR).text('Passionate Computer Science and Engineering student with strong foundations in Full Stack Development, Software Engineering, Database Management, and Problem Solving. Experienced in building responsive, scalable MERN stack web applications and data-driven solutions.', { align: 'justify' });

// --- EDUCATION ---
sectionTitle('Education');
doc.font('Helvetica-Bold').fontSize(11).fillColor(PRIMARY_COLOR).text('B.Tech Computer Science and Engineering');
doc.font('Helvetica-Oblique').fontSize(10).fillColor(SECONDARY_COLOR).text("St. Joseph's College of Engineering and Technology, Palai | Expected Graduation: 2027");

// --- SKILLS ---
sectionTitle('Technical Skills');
doc.font('Helvetica-Bold').fontSize(10).fillColor(PRIMARY_COLOR).text('Programming: ', { continued: true })
   .font('Helvetica').fillColor(SECONDARY_COLOR).text('Java, Python, JavaScript, SQL, C');
doc.font('Helvetica-Bold').fillColor(PRIMARY_COLOR).text('Frontend: ', { continued: true })
   .font('Helvetica').fillColor(SECONDARY_COLOR).text('HTML, CSS, React.js, Tailwind CSS');
doc.font('Helvetica-Bold').fillColor(PRIMARY_COLOR).text('Backend: ', { continued: true })
   .font('Helvetica').fillColor(SECONDARY_COLOR).text('Node.js, Express.js');
doc.font('Helvetica-Bold').fillColor(PRIMARY_COLOR).text('Databases & Tools: ', { continued: true })
   .font('Helvetica').fillColor(SECONDARY_COLOR).text('MongoDB, MySQL, Git, GitHub, VS Code, Postman');
doc.font('Helvetica-Bold').fillColor(PRIMARY_COLOR).text('Core Concepts: ', { continued: true })
   .font('Helvetica').fillColor(SECONDARY_COLOR).text('OOP, REST APIs, DBMS, DSA, UML Modeling');

// --- PROJECTS ---
sectionTitle('Featured Projects');

const addProject = (title, tech, desc) => {
  doc.font('Helvetica-Bold').fontSize(11).fillColor(PRIMARY_COLOR).text(title, { continued: true })
     .font('Helvetica-Oblique').fontSize(10).fillColor(SECONDARY_COLOR).text(` | ${tech}`);
  doc.font('Helvetica').fontSize(10).fillColor(PRIMARY_COLOR).text(desc);
  doc.moveDown(0.5);
};

addProject('MicroAlert', 'React, Node.js, MongoDB, AI Verification', 'Hyperlocal disaster management and real-time alert platform with geo-tagged reporting, AI-assisted risk verification, and emergency support mechanisms.');
addProject('SkyLytix', 'React, Node.js, NASA APIs, Chart.js', 'Advanced weather intelligence platform using NASA Earth observation data to provide interactive environmental insights and forecasting analytics.');
addProject('FindMyDonor', 'React, Node.js, Express, MongoDB', 'Blood donation platform featuring a robust matching algorithm based on location and blood group for rapid emergency response.');

// --- EXPERIENCE ---
sectionTitle('Experience');

doc.font('Helvetica-Bold').fontSize(11).fillColor(PRIMARY_COLOR).text('Full Stack Developer Intern', { continued: true })
   .font('Helvetica').fontSize(10).fillColor(SECONDARY_COLOR).text(' - NeST Technologies', { align: 'left' });
doc.font('Helvetica-Oblique').fontSize(10).text('June 2025 - July 2025');
doc.font('Helvetica').fillColor(PRIMARY_COLOR).text('• Developed responsive web applications using the MERN stack.');
doc.text('• Integrated robust RESTful APIs and managed MongoDB databases.');
doc.moveDown(0.5);

doc.font('Helvetica-Bold').fontSize(11).fillColor(PRIMARY_COLOR).text('Industrial Visit Trainee', { continued: true })
   .font('Helvetica').fontSize(10).fillColor(SECONDARY_COLOR).text(' - Experion Technologies', { align: 'left' });
doc.font('Helvetica-Oblique').fontSize(10).text('2024');
doc.font('Helvetica').fillColor(PRIMARY_COLOR).text('• Gained critical industry exposure to AI Applications and Software Development Workflows.');

// --- LEADERSHIP & CERTIFICATIONS ---
sectionTitle('Leadership & Certifications');
doc.font('Helvetica').fontSize(10).fillColor(PRIMARY_COLOR);
doc.text('• Volunteer Secretary, NSS Unit, SJCET: Leading student volunteers in impactful social initiatives.');
doc.text('• ASTRA Volunteer, SJCET: Event coordination for technical and non-technical events.');
doc.text('• Certifications: Java Programming & Data Structures (Infosys Springboard), Privacy and Security in Online Social Media (NPTEL), NeST Internship (NeST Cyber Campus).');

// Finalize
doc.end();
console.log('PDF Resume generated successfully at client/public/resume.pdf');
