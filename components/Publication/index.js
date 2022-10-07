import Avatar from '../Avatar/index'
import ReactPlayer from 'react-player'
export default function Publication ({ avatar, username, description, video, id }) {
  return (
        <>
            <article>
                <div>
                    <Avatar alt={username} src={avatar}></Avatar>
                </div>
                <section>
                    <strong>{username}</strong>
                    <p>{description}</p>
                    <ReactPlayer url={video} controls={true}></ReactPlayer>
                </section>
            </article>
            <style jsx>{`
            article {
              border-bottom: 2px solid #eaf7ff;
              display: flex;
              padding: 10px 15px;
            }
             div {
            padding-right: 10px;
            }
            p {
              line-height: 1.3125;
              margin: 0;
            }

            `}</style>
        </>
  )
}
