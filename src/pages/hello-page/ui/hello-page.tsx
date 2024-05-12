'use client'

import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

export const HelloPage = () => {
  console.log('hello')

  return (
    <StyledHello>
      <Link href='/'>To home</Link>
      <div>hello</div>
    </StyledHello>
  )
}

const StyledHello = styled.div`
  min-height: 100dvh;

  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.font};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
