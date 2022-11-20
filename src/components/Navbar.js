export function Logo(props) {
  return <div className="w-3/12 uppercase text-2xl text-white font-semibold tracking-widest">{props.name}</div>;
}

export function NavItem(props) {
  return (
    <li className="text-white text-opacity-60 font-semibold">
      <a href={props.link}>{props.name}</a>
    </li>
  );
}
