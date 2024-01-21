import { useState, useEffect, useRef } from "react";
import { BsArrowDownSquareFill } from "react-icons/bs";
import Panel from "./Panel";


function Dropdown({ options }){

    //state for showing/hiding options
    const [showOptions, setShowOptions] = useState(false);

    //show selection div state
    const [selection, setSelection] = useState(null);

    //useRef
    const divEl = useRef();

    //useEffect to close the dropdown when clicked outside and also to cleanup
    useEffect(()=>{
        const handler = (event)=>{
            if(!divEl.current) return;

            if(!divEl.current.contains(event.target)){
                setShowOptions(false);
            }

            //to cleanup when this div is removed
            return ()=>{
                document.removeEventListener('click', handler);
            }
        }
        document.addEventListener('click', handler, true); //true to update the state in Capture phase
    }, [])

    //handleShowOptionClick event handler
    const handleShowOptionClick = ()=>{
        setShowOptions(!showOptions);
    }

    function changeSelection(selection){
        setSelection(selection)
    }

    //handleOptionSelect event listener
    const handleOptionSelect = (option)=>{
        changeSelection(option.label);
        setShowOptions(false);
    }

    //getting each option from the options prop
    const renderedOptions = options.map(option=>{
        return <Panel onClick={()=>handleOptionSelect(option)} key={option.value}>{option.label}</Panel>
    })

    return(
        <div ref={divEl}> 
            <Panel className="flex justify-between item-center cursor-pointer" onClick={handleShowOptionClick}>
                {selection?selection:'Select...'} 
                <div className="text-lg"><BsArrowDownSquareFill /></div>
            </Panel>
            {showOptions && <div>{renderedOptions}</div>}
        </div>
    )
}

export default Dropdown;