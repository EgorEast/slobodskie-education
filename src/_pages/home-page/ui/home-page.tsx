'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

export const HomePage = () => {
  const [appBadgeCounter, setAppBadgeCounter] = useState(0)

  useEffect(() => {
    if (!navigator.setAppBadge) return

    let promise

    if (appBadgeCounter > 0) promise = navigator.setAppBadge(appBadgeCounter)
    else promise = navigator.clearAppBadge()

    promise.catch(error => {
      console.error('Ошибка обновления бэйджа приложения: ', error)
    })
  }, [appBadgeCounter])

  return (
    <StyledMain>
      <Link href='/hello'>Hello</Link>
      <StyledImage
        src='/images/education.jpg'
        alt='Education image'
        width={500}
        height={200}
        priority
      />
      <div>app badge counter: {appBadgeCounter}</div>
      <button onClick={() => setAppBadgeCounter(counter => counter + 1)}>
        increment app badge
      </button>
      <button onClick={() => setAppBadgeCounter(0)}>clear app badge</button>
      Академия
    </StyledMain>
  )
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6rem;
  min-height: 100dvh;

  background-color: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.font};
`

const StyledImage = styled(Image)`
  border: 2px solid #000;
`
