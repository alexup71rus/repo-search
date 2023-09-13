import { forwardRef } from 'react'
import cl from './Input.module.css'

export default forwardRef(function SearchInput(props, ref) {
    return <div className={cl.search}>
        <input 
            className={cl.searchInput}
            type="search" 
            {...props}
            ref={ref} />
    </div>
});