import {useState, useCallback} from 'react'

const useFormFields = (callback) => {
    const [inputs, setInputs] = useState({});
    const handleSubmit = useCallback(event => {
        event && event.preventDefault()
        callback && callback()
    }, [callback])
    const handleInputChange = (event) => {
      event.persist();
      setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }
    return {
      handleSubmit,
      handleInputChange,
      inputs
    };
}

export default useFormFields