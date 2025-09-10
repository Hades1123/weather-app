import { NavBar } from "components/navbar/navbar"
import { Search } from "components/search/search"
import { Main } from "components/main/main"
import './App.scss'

export const App = () => {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <Search />
                <Main />
            </main>
        </>
    )
}