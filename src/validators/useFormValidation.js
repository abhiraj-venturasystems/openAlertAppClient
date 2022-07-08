import React, { useState } from "react";

// function checkObjectHasValue(object){
// 	let hasValue = false;
// 	for (var key in object) {
// 		if (object.hasOwnProperty(key)) {
// 			if(object[key]){
// 			hasValue =  true;
// 			}
// 		}
// 	}
// 	return hasValue;
// }

const useFormValidation = (initialState)=>{

    const [values, setValues]= useState({...initialState});
    const [errors, setErrors] = useState({});

    // if(!checkObjectHasValue(values) && JSON.stringify(values) !== JSON.stringify(initialState)){
	// 	setValues({...initialState});
	// }


    const handleChange = (event, file = false, multi = false)=>{
        //An onChange event handler returns a Synthetic Event object which contains 
        //useful meta data such as the target input's id, name, and current value.

        setValues({
            ...values,
            [event.target.name]: event.target.value
            
        });
        setErrors({
            ...errors,
            [event.target.name]: ""
        });
    }

    const  handleSubmit = async (event, actionObject, file=false)=>{
        //this will be used to prevent a default action belogs to the event
        //eg: page got refreshed after form submission (event.preventDefault() prevent the page reload after submission)
        event.preventDefault();

        try{

            if(file){
                //ie, if any uploading happends

                //The special thing about FormData is that, network methods such as fetch, can accept 
                //a FormData object as a body. It's encoded and sent out with Content-Type: multipart/form-data
                const formData = new FormData();
                //The Object.keys() method returns an array of a given object's own 
                //enumerable property names, iterated in the same order that a normal loop would
                Object.keys(values).map((keys)=>{
                    formData.append([keys],values[keys]);
                });
                await actionObject(formData);
            }
            else{
                //this submitted action must pass on mapDispatchToProps, then only the dispatch call works with redux
                await actionObject(values);
            }
            
        }
        catch(err){
            throw err;
        }
        
    }


    //here returning results of handleChange(), handleSubmit() as functions (not as function results)
    //We can use this functions as it is in other components
    return {
        handleChange,
        handleSubmit,
        values,
        errors
    }


}

export default useFormValidation;

