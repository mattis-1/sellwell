import Header from "@/components/header"
import AnnouncementBar from "@/components/karriere/announcement-bar"
import Hero from "@/components/karriere/hero"
import Benefits from "@/components/karriere/benefits"
import FeaturedSection from "@/components/karriere/featured-section"
import AboutSection from "@/components/karriere/about-section"
import EmployeeTestimonials from "@/components/karriere/employee-testimonials"
import TimelineSection from "@/components/karriere/timeline-section"
import StatsSection from "@/components/karriere/stats-section"
import InfiniteScroll from "@/components/karriere/infinite-scroll"
import FAQSection from "@/components/karriere/faq-section"
import FinalCTA from "@/components/karriere/final-cta"
import Footer from "@/components/footer"

export default function KarrierePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <Benefits />
        <FeaturedSection />
        <AboutSection />
        <EmployeeTestimonials />
        <StatsSection />
        <TimelineSection />
        <InfiniteScroll />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
