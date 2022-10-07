import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import AppLayout from '../components/AppLayout'
import Button from '../components/Button'
import Icon from '../components/Icon'
import { colors } from '../styles/theme'
import { loginWithGoogle, onAuthStateChanged } from '../firebase/client'
import { useEffect, useState } from 'react'
import Avatar from '../components/Avatar'

export default function Home () {
  const [user, setUser] = useState(null)
  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])
  const handleClick = () => {
    loginWithGoogle()
      .then(user => {
        const { avatar, username, url } = user
        setUser(user)
      }).catch(err => {
        console.log(err)
      })
  }
  const router = useRouter()

  return (
    <>
      <Head>
        <title>proftter 🐦</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <section>
        <div>
        <Icon imgRoute='/UGEL_LOGO.png' width='120px' alt='Logo'></Icon>
        </div>
        <div>

          {
            user === null
              ? <Button onClick={handleClick}>
              <Icon width="17px" imgRoute="/icon-google.png"></Icon>
              Login With Gmail
            </Button>
              : <div>
                <Avatar src={user.avatar} alt={user.username} text={user.username}></Avatar>
              </div>
          }

        </div>
        </section>
      </AppLayout>

      <style jsx>{`
      img {
          width: 120px;
        }
        div {
          margin-top: 16px;
        }
        section {
          display: grid;
          height: 100%;
          place-content: center;
          place-items: center;
        }
        h2 {
          color: ${colors.secondary};
          font-size: 21px;
          margin: 0;
        }
      `}</style>
    </>
  )
}
