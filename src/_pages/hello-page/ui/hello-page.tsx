'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export const HelloPage = () => {
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
    <StyledHello>
      <Link href='/'>To home</Link>
      <div>hello</div>
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

const StyledImage = styled(Image)`
  border: 2px solid #000;
`
