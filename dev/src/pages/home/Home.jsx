import Modal from '../../components/Modal'
import Notification from '../../components/Notification'
import Education from '../../components/sections/Education'
import Project from '../../components/sections/Project'
import Skills from '../../components/sections/Skills'
import WhyWorkWithMe from '../../components/sections/WhyWorkWithMe'
import Hero from './Hero'

function Home() {
  return (
    <div>
      <Notification />
      <Hero />
      <WhyWorkWithMe />
      <Skills />
      <Project />
      <Modal />
      <Education />
    </div>
  )
}

export default Home
