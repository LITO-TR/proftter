import Head from 'next/head'
import Link from 'next/link'
import {useRouter} from 'next/router'
import AppLayout from '../components/AppLayout'
import Button from '../components/Button'
import Icon from '../components/Icon' 
import {colors} from '../styles/theme'
import { loginWithGoogle, onAuthStateChanged } from '../firebase/client'
import { useEffect, useState } from 'react'
// devit

export default function Home() {
  const [user, setUser] = useState(null)
  useEffect(()=> {
    onAuthStateChanged(setUser)
  },[])
  const handleClick = () => {
    loginWithGoogle()
    .then(user => {
      const { avatar, username, url} = user 
      setUser(user)
    }).catch(err => {
      console.log(err)
    })
  }
  const router = useRouter()

  return (
    <>
      <Head>
        <title>devter 🐦</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <section>
        <div>
        <Icon imgRoute='/UGEL_LOGO.png' width='120px' alt='Logo'></Icon>
        </div>
        <div>
        
          {
            user ===null ?
            <Button onClick={handleClick}>
              <Icon width="17px"  imgRoute="/icon-google.png"></Icon>
              Login With Gmail
            </Button>
            : <div>
                <img src={user.avatar}></img>
                <strong>{user.username}</strong>
              </div>
          }
          
        </div>
        </section>
      </AppLayout>

      <style jsx>{`
          div {
            margin: 8px
          }
          section {
            display:grid;
            height: 100%;
            place-content: center;
            place-items: center;
          }
          h2 {
            font-size: 14px;
            color: ${colors.primary}
          }
      `}</style>
    </>
  )
}