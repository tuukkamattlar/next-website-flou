import ShortBallsCSS from './styles/ShortBalls.module.css'
import SkillSubCategoryCSS from './styles/SkillSubCategories.module.css'

import Link from 'next/link';

export default function SkillSubCategories({lan, subcategories}) {
    return (
            <div className={SkillSubCategoryCSS.container}>
            {subcategories.map((value, index) => (
                <div className={SkillSubCategoryCSS.category}>
                    <h3>{value.title[lan]}</h3>
                    <p>{value.description[lan]}</p>
                </div>
            ))}
        </div>
    )
  }
  