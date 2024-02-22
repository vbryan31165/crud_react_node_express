import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const URI = 'http://localhost:8001/blogs/'

const CompCreateBlog = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()


    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {title: title, content: content})
        navigate('/')
    }

    return(
        <div>
            <h3>Crear POST</h3>
            <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Title</label>
                    <input value={title} onChange={(e)=> setTitle(e.target.value)} type='texto' className='form-control'></input>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Content</label>
                    <textarea value={content} onChange={(e)=> setContent(e.target.value)} type='texto' className='form-control'></textarea>
                </div>
                <button type='submit' className='btn btn-primary'>Store</button>
            </form>
        </div>
    )
}

export default CompCreateBlog