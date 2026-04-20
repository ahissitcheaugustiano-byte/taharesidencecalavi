import AnnouncementBanner from "@/components/AnnouncementBanner";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import RoomsSection from "@/components/RoomsSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <AnnouncementBanner />
      <Navbar />
      <HeroSection />
      <VideoSection />
      <AboutSection />
      <StatsSection />
      <RoomsSection />
      <AmenitiesSection />
      <GallerySection />
      <TestimonialsSection />
      <FAQSection />
      <LocationSection />
      <ContactSection />
      <Footer />
      <FloatingElements />
      <ExitIntentPopup />
    </div>
  );
};

export default Index;
