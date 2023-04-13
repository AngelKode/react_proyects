import { useEffect } from "react";
import { useState } from "react";

export const useForm = (initialForm = {}) => {

    const [formState, setformState] = useState(initialForm);
    const [valid, setValid] = useState(false);

    //Handle when the form changes
    useEffect(() => {
      
        //Validate form state
        setValid(isAllFormDataValid());
    
        return () => {}
    }, [formState])
    

    const onInputChange = ({target}) => {

        //Get input data
        const {name, value} = target;

        setformState({
            ...formState,
            [name] : value
        })
    }

    const onResetForm = () => {
        setformState(initialForm)
        setValid(false);
    }

    const isAllFormDataValid = () => {
        //Get all data
        let formDataArray = Object.entries({...formState});
        //Iterate over formDataArray to validate all entries
        return formDataArray.find(([key,value]) => value === "") === undefined;
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        valid
    }
}
