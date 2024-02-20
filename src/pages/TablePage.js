import Table from "../components/Table";

function TablePage(){

    const data = [
        {name: "Orange", color: "bg-orange-500", score: 3},
        {name: "Apple", color: "bg-red-500", score: 4},
        {name: "Papaya", color: "bg-yellow-500", score: 2},
        {name: "Kiwi", color: "bg-green-500", score: 1},
    ]

    const config = [
        {
            name: "Fruits", 
            render: (fruit)=>fruit.name
        },
        {
            name: "Colors",
            render: (fruit)=><div className={`p-3 m-2 ${fruit.color}`}></div>
        },
        {
            name: "Scores",
            render: (fruit)=>fruit.score
        }
    ]

    const keyFn = (fruit)=>{
        return fruit.name;
    }

    return (<div>
        <Table data={data} config={config} keyFn={keyFn}/>
    </div>)
}

export default TablePage;