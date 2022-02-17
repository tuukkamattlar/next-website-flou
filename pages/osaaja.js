import { useRouter } from 'next/router'


export default function Henkilo({ title }) {
    const router = useRouter()
    const { pid } = router.query.pid
    return(
        <div>
            <h1>Here is {pid}</h1>
        </div>
    )
  }
  