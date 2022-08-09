import '../style/style.css';
const InputSelect = ({label,options,placeholder,value,onChange}) => {
    return(
        <div id="input">
            <label >{label}</label>
                <select className="inbox" name={label} value={value} placeholder={placeholder} onChange={(event)=>onChange(event.target.value)}>
                    {
                        options.map((item)=>(<option key={item.key} selected={item.key === value} >{item.label}</option>))
                    }
                    </select>
            
        </div>

    );
}

export default InputSelect;

