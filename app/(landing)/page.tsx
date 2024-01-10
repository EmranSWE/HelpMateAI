import BrandingComponent from "@/components/landing/branding-page";
import ContentCreation from "@/components/landing/content-creation";
import FeaturePage from "@/components/landing/feature-page";
import FooterPage from "@/components/landing/footer-page";
import FAQ from "@/components/landing/frequenty-asked-question";
import { LandingCollage } from "@/components/landing/landing-collage";
import { LandingContent } from "@/components/landing/landing-content";
import { LandingHero } from "@/components/landing/landing-hero";
import { LandingNavbar } from "@/components/landing/landing-navbar";

const LandingPage = () => {
  return (
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
      <ContentCreation />
      <LandingCollage />
      <FeaturePage />
      <BrandingComponent />
      <LandingContent />
      <FAQ />
      <FooterPage />
    </div>
  );
};

export default LandingPage;
