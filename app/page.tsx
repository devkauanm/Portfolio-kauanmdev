import { About } from '@/components/about'
import { BackToTop } from '@/components/back-to-top'
import { Contact } from '@/components/contact'
import { Differentials } from '@/components/differentials'
import { Experience } from '@/components/experience'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'
import { Stats } from '@/components/stats'
import { TechStack } from '@/components/tech-stack'

export default function Page() {
  return (
    <div className="overflow-x-hidden">
      <SiteNav />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Differentials />
        <Stats />
        <Contact />
      </main>
      <SiteFooter />
      <BackToTop />
    </div>
  )
}
