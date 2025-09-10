import searchIcon from 'assets/icon-search.svg'
import './search.scss'

export const Search = () => {
    return (
        <>
            <section className="search">
                <h2>How’s the sky looking today?</h2>
                <div className="form">
                    <div className="input-box">
                        <input type="text" />
                        <img src={searchIcon} alt="search icon" />
                    </div>
                    <button aria-label='search button'>Search</button>
                </div>
            </section>
        </>
    )
}