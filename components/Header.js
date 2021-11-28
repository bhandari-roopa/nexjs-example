import HeaderStyles from '../styles/header.module.css'
import Nav from './Nav'

const Header=({children})=>{
    return(
       
        <div >
        <h1 className={HeaderStyles.title}><span>
            NextJs</span>Learning</h1>
            <p className={HeaderStyles.description}>Learn nextjs with knowledge of react!!!</p>
        </div>
      
    )
}

export default Header;