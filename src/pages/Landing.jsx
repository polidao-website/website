import { useRef } from 'react'

import {
  TripleCards,
  // Download,
  Form,
  Hero,
  WhatsApp,
  SectionThree,
  SectionFour,
  SectionFive,
  // SectionSix,
  SectionSeven,
  SectionEight,
} from '../components'

export default function Landing() {
  const form = useRef(null)

  const scrollToForm = () => form.current.scrollIntoView()
  return (
    <main>
      <div className="position-relative">
        {/* shape Hero */}
        <Hero scrollToForm={scrollToForm} />
        {/* 1st Hero Variation */}
      </div>
      <TripleCards />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      {/* <SectionSix /> */}
      <div style={{ width: '100%', height: '5rem' }} />
      <SectionSeven />
      <SectionEight />
      <div ref={form}>
        <Form />
      </div>
      {/* <Download /> */}
      <WhatsApp />
    </main>
  )
}
