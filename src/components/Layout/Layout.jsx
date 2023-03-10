import { useSelector } from 'react-redux';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';
import { UserAuthMenu } from 'components/UserAuthMenu/UserAuthMenu';
import { selectToken } from 'redux/auth/auth-selectors';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  const token = useSelector(selectToken);

  return (
    <>
      <header>
        {token ? <UserAuthMenu /> : <AuthNavigation />}
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
