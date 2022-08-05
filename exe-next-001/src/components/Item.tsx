type itemProps = {
    text: string
  }
  export default function Item({text}: itemProps){
    return(
      <li>{text}</li>
    )
  }