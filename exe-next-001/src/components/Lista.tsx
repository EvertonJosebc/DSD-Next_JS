import { ReactNode } from "react"

type listaProps = {
  children: ReactNode
}

export default function Lista({children}: listaProps){
  return <ul>{children}</ul>
}