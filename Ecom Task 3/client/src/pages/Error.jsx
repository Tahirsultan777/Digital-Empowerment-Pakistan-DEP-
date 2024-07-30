import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <>
            <section className='error_page'>
                <div className='content'>
                    <h2 className='header'>404</h2>
                    <h4>Sorry! page not found</h4>
                    <p>
                        Oops! it seem like the page you are trying to access does not exist.
                        If you believe there an issues feel free to report it, and we,ll look into it.
                    </p>
                    <div className="btns">
                        <NavLink to="/">return home</NavLink>
                        <NavLink to='/contact'>report problem</NavLink>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Error
