import { useState } from "react";
import { GoChevronDown,GoChevronLeft } from "react-icons/go";

function Accordion({items}){

    const [expContent, setExpContent] = useState(-1);

    //onClick event handler to expand accordion
    const handleClick = (index)=>{

        setExpContent(current=>{
            if(current === index) return -1;
            else return index;
        })
    }

    const renderedItem = items.map((item,index)=>{
        
        const extended = expContent === index;

        const icon = <span className="text-2xl">{(extended ? <GoChevronDown/> : <GoChevronLeft/>)}</span>

        return(
            <div key={item.id}>
                <div className="flex justify-between p-3 border-p bg-gray-200 items-center cursor-pointer" onClick={()=>handleClick(index)}>{item.heading} {icon}</div>
                {extended && <div className="border-p p-5">{item.content}</div>}
            </div>
        )
    })

    return (
        <div className="border-x border-t rounded">{renderedItem}</div>
    )
}

export default Accordion;