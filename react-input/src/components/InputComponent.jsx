const InputComponent=(props)=>{
    const {setInputText}=props;

    return(
        <input onChange={(e)=>{
            setInputText(e.target.value)

        }}
        
            type="text"
            >
                
        </input>

    )
}

export default InputComponent;