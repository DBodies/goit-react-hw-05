import { Formik, Form, Field,   } from "formik"
import { useState } from "react"
import { CircleLoader } from "react-spinners"

export default function SearchBar({onSubmit}) {
    const [searchBarField, setFieldBarField] = useState('')
    const [isLoader, setLoader] = useState(false)

    const handleSearch = (evt) => {
        setLoader(true)
        evt.preventDefault()
        const topic = searchBarField.trim()

        const form = evt.target
        
        
        if (!topic) {
            alert('Please choose your film')
            return 
        }
        onSubmit(topic)
        form.reset()
        setLoader(false)
        setFieldBarField("")
    }
    

    
    return (

        <div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    name='topic'
                    value={searchBarField}
                    placeholder='Enter the film name'
                    onChange={(e) => setFieldBarField(e.target.value)}
                />
                {searchBarField.trim() &&
                    (<button type="submit">Search</button>)
                }
                {isLoader && <CircleLoader/>}
            </form>
        </div>
    )
};

