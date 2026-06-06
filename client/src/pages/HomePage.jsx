import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import SkillsSection from '../components/sections/SkillsSection';
import InternshipSection from '../components/sections/InternshipSection';
import LeadershipSection from '../components/sections/LeadershipSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import CertificationsSection from '../components/sections/CertificationsSection';
import OpenSourceSection from '../components/sections/OpenSourceSection';
import TimelineSection from '../components/sections/TimelineSection';
import ContactSection from '../components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <InternshipSection />
      <LeadershipSection />
      <ProjectsSection />
      <CertificationsSection />
      <OpenSourceSection />
      <TimelineSection />
      <ContactSection />
    </>
  );
}
