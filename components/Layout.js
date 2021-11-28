import Styles from '../styles/Layout.module.css'
import Nav from './Nav'
import Header from './Header'

const Layout=({children})=>{
    return(
        <>
        <Nav></Nav>
        <div className={Styles.container}>
        <main className={Styles.main}>
        <Header></Header>
        {children}
        </main>
            
        </div>
        </>
    )
}

export default Layout;