export function Greeting({ title }) {
  console.log(title);
  return <h1>{title}</h1>;
}

export function UserCard(props) {
  console.log(props);
  return <div>
    <h1>{ props.name }</h1>
    <p> 💵{props.amount} </p>
    <p> { props.married ? '😡 married' : '😀 not married' }</p>
    <ul>
        <li>
            {props.address.city}
        </li>
        <li>
            {props.address.street}
        </li>
    </ul>
  </div>
}
