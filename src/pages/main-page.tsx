import Image from 'next/image';
import Link from 'next/link';

import styled from 'styled-components';

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;
`;

const StyledImage = styled(Image)`
  border: 2px solid #000;
`;

const MainPage = () => (
  <StyledMain>
    <Link href='/hello'>Hello</Link>
    <StyledImage
      src='/images/education.jpg'
      alt='Education image'
      width={500}
      height={200}
      priority
    />
    Академия
  </StyledMain>
);

export default MainPage;
