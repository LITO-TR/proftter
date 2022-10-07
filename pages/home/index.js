import { useEffect, useState } from 'react'
import AppLayout from '../../components/AppLayout'
import Publication from '../../components/Publication'
export default function HomePage () {
  const [publication, setPublication] = useState([])

  useEffect(() => {
    fetch('/api/statuses/home_publication')
      .then((res) => res.json())
      .then(setPublication)
  }, [])
  return (
        <>
            <AppLayout>
                <header>
                    <h2>Inicio</h2>
                </header>
                <section>
                    {publication.map(({ id, username, avatar, description, video }) =>
                        <Publication
                            avatar={avatar}
                            id={id}
                            key={id}
                            description={description}
                            username={username}
                            video={video}>
                        </Publication>)}
                </section>
                <nav></nav>
            </AppLayout>
            <style jsx>{`
            header {
              align-items: center;
              border-bottom: 1px solid #ccc;
              height: 49px;
              display: flex;
              position: sticky;
              top: 0;
              width: 100%;
              }
              h2 {
               font-size: 21px;
               font-weight: 800;
              }
              section {
                padding-top: 49px;
              }
              nav {
                bottom: 0;
                border-top: 1px solid #ccc;
                height: 49px;
                position: sticky;
                width: 100%;
              }
        `}</style>
        </>
  )
}
