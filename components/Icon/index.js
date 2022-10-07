export default function Icon ({ width, imgRoute }) {
  return (
        <>
                <img src={imgRoute}>
                </img>
                <style jsx>{`
                    img {
                        width:${width};
                        margin-right: 10px;
                        
                    }
                `}</style>
        </>
  )
}
