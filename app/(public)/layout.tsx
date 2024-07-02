import { ReactNode } from 'react';

// ** component
import { Navbar, Container } from '@components';

const PublicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <Navbar />
      {children}
    </Container>
  );
};

export default PublicLayout;
