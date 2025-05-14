import { Formik, Form, Field,   } from "formik"
import { useState } from "react"
import { CircleLoader } from "react-spinners"
export default function SearchBar() {
    const [searchBarField, setFieldBarField] = useState('')
    const [isLoader, setLoader] = useState(false)

    const handleSearch = () => {
        setLoader(true)
        setTimeout(() => {
            console.log('Find your order', setFieldBarField)
            setLoader(false)
        },2000)
    }
    

    
    return (
        <Formik>
            <Form>
                <Field type='text' name='text'
                    value={searchBarField}
                    placeholder='Enter the film name'
                onChange={(e) => setFieldBarField(e.target.value)}
                />
                {searchBarField.trim() &&
                    (<button type="submit" onClick={handleSearch}>Search</button>)
                }
                {isLoader && <CircleLoader/>}
            </Form>
</Formik>
    )
};

