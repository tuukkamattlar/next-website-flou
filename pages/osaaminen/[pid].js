import { useRouter } from 'next/router'


export default function Henkilo({ title, lan }) {
    const router = useRouter()
    const { pid } = router.query
    return(
        <div>
            <h1>Osaaminen {pid}</h1>
        </div>
    )
  }
  