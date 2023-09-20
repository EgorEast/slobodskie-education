'use client';

import Image from 'next/image';

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

export default function Home() {
  return (
    <StyledMain>
      <StyledImage src='/education.jpg' alt='Education image' width={500} height={200} priority />
      Академия
    </StyledMain>
  );
}
