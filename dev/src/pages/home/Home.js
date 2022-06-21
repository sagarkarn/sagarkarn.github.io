import Modal from '../../components/Modal'
import Notification from '../../components/Notification'
import Skills from '../../components/sections/Skills'
import Hero from './Hero'

function Home() {
  return (
    <div>
      <Notification />
      <Hero />
      <Skills />
      <Modal />
    </div>
  )
}

export default Home
