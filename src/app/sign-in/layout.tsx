import React from 'react'

type Props = {
  children: React.ReactNode
}

// React.FCを利用してPropsの型を指定
const Layout: React.FC<Props> = (props) => {
  const { children } = props
  return <div>{children}</div>
}

export default Layout
