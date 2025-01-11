import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <h1 className='top-title'>掲示板</h1>
      <Link to="/threads/new" className='top-link'>スレッドをたてる</Link>
    </div>
  );
};

export default Header;
