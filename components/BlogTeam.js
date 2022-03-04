import { attributes } from '../content/tiimi.md'
import { useEffect, useState } from 'react';

export default function GetBlogTeam({emails, lan}){
    let { title, headerIMG, persons } = attributes;
    const [team, setTeam] = useState([])
    const [loading, setLoading] = useState(true)
    function filterBlog(){
        for (let i = 0; i < persons.length; i++) {
            for (let j = 0; j < emails.length; j++) {
                if(emails[j].name == persons[i].email){
                    setTeam(team => [...team, persons[i]])
                    console.log(team)
                }
            }
        }
        setLoading(false)
        return(0)
    }
    useEffect(()=> {
        filterBlog()
    }, [])

    return(
        <> {
            loading ?
                <div>
                    Loading...
                </div>
            :
            <div>
                By:
                {team.map((val, index) => (
                    <div key={index}>
                        {val.name}
                    </div>
                ))}
            </div>
        }
        </>
    )
}