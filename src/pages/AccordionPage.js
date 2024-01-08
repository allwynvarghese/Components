import Accordion from "./components/Accordion";

function AccordionPage (){
    //Accordion
    const items = [
        {
            id: 1,
            heading: 'Reactjs',
            content: 'React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.'
        },
        {
            id: 2,
            heading: 'JavaScript',
            content: 'JavaScript, often abbreviated as JS, is a programming language and core technology of the World Wide Web, alongside HTML and CSS.'
        },
        {
            id: 3,
            heading: 'Angular',
            content: 'Angular is a TypeScript-based, free and open-source single-page web application framework led by the Angular Team at Google'
        },
        
    ]

    return (
        <div>
            <Accordion items={items}/>
        </div>
    )
}

export default AccordionPage;