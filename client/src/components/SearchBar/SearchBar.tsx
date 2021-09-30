import React, { useState, FC } from 'react';
import { useDispatch } from 'react-redux';
import { getNameProduct } from '../../redux/actions/products_action'

interface Props {
    currentPage(pageNum: number): void
}

const SearchBar: FC<Props> = ({currentPage}) => {
    const [name, setName] = useState('')
    const dispatch = useDispatch();

    const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }
    const handleSubmit = () => {
        dispatch(getNameProduct(name))
        setName('')
        currentPage(1)
    }
    
    return (
        <div>
            <input 
                type="text"
                placeholder="find videogame..."
                value={name}
                onChange={(e) => handleInputChange(e)}
            />
            <button onClick={() => handleSubmit()} >Search</button>
        </div>
    )
}

export default SearchBar;
