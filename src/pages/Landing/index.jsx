import DefaultLayout from "@layouts/DefaultLayout"
import Footer from "@/components/Modules/LandingPage/Footer"
import Jumbotron from "@/components/Modules/LandingPage/Jumbotron"
import SectionDownload from "@/components/Modules/LandingPage/SectionContents/SectionDownload"
import SectionEnjoy from "@/components/Modules/LandingPage/SectionContents/SectionEnjoy"
import SectionFAQ from "@/components/Modules/LandingPage/SectionContents/SectionFAQ"
import SectionProfile from "@/components/Modules/LandingPage/SectionContents/SectionProfile"
import SectionWatch from "@/components/Modules/LandingPage/SectionContents/SectionWatch"

function Landing() {
  return (
    <DefaultLayout>
      <Jumbotron />
      <SectionEnjoy />
      <SectionDownload />
      <SectionWatch />
      <SectionProfile />
      <SectionFAQ />
      <Footer />
    </DefaultLayout>
  )
}

export default Landing