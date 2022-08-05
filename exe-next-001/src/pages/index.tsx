import type { NextPage } from 'next'
import Lista from '../components/Lista'
import Item from '../components/Item'

const Home: NextPage = () => {
  return (
    <>
    <Lista>
      <Item text='Item1'></Item>
      <Item text='Item2'></Item>
      <Item text='Item3'></Item>
    </Lista>
    </>
  )
}

export default Home
