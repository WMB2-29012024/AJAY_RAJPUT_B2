const FormComponent=({setInputText})=>{
    const handleSubmitEvent=(e)=>{
        e.preventDefault()
        setInputText(e.target.formInput.value)
    }
    return(
        <form 
        onSubmit={handleSubmitEvent}>
            <input  id="formInput" type="text"></input>
            <button type="submit">Submit</button>
        </form>
    )

}

export default FormComponent ;