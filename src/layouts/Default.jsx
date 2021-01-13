import {
  Header,
  CardsFooter,
} from '../components'

export default function Default({ children }) {
  return (
    <>
      <Header />
      {children}
      <CardsFooter />
    </>
  )
}
