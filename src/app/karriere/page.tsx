import SellwellHero from "@/modules/karriere-lp/components/hero"
import SellwellAboutUs from "@/modules/karriere-lp/components/about"
import SellwellBenefits from "@/modules/karriere-lp/components/benefits"
import SellwellFaqSection from "@/modules/karriere-lp/components/faq"
import SellwellCtaSection from "@/modules/karriere-lp/components/ctasection"
import SellwellFooter from "@/modules/karriere-lp/components/footer"
import SellwellRequirements from "@/modules/karriere-lp/components/muss"
import SellwellExpectations from "@/modules/karriere-lp/components/erwartungen"
import SellwellTestimonials from "@/modules/karriere-lp/components/testimonials"
import "@/modules/karriere-lp/styles/karriere-lp-styles.css"
import Button from "@/modules/karriere-lp/components/button"

export default function SellwellLandingPage() {
    return (
      <div className="sellwell-landing">
        <SellwellHero />
        <SellwellBenefits />
        <Button>Text</Button>
        <SellwellRequirements />
        <SellwellExpectations />
        <SellwellTestimonials />
        <SellwellAboutUs />
        <SellwellFaqSection />
        <SellwellCtaSection />
        <SellwellFooter />
      </div>
    )
  }
  