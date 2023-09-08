import { hamburger } from '@/assets/icons';
import { headerLogo } from '@/assets/images';
import { navLinks } from '@/content';

const Navbar = () => {
  return (
    <header className='padding-x absolute z-10 w-full py-8'>
      <nav className='max-container flex items-center justify-between'>
        <a href='/'>
          <img src={headerLogo} alt='Nike Logo' width={130} height={29} />
        </a>
        <ul className='flex flex-1 items-center justify-center gap-16 max-lg:hidden'>
          {navLinks.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                className='font-montserrat text-lg leading-normal text-slate-gray'
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='Menu' width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
