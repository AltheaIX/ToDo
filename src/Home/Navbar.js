import { Logo, NavItem } from '../components/Navbar';

export default function Navbar() {
  return (
    <>
      <div className="flex items-center py-12">
        <Logo name="Althea" />
        <div className="w-9/12">
          <ul className="flex justify-end space-x-9">
            <NavItem name="Home" link="/" />
            <NavItem name="ToDo" link="/Todo" />
          </ul>
        </div>
      </div>
    </>
  );
}
