function Table({ data, config, keyFn }){

    //Rendered headers
    const renderedHeaders = config.map(header=>{
        return  <th key={header.name}>{header.name}</th>
    })

    //Renedered rows
    const renderedRow = data.map(rowData=>{
        //nested mapping
        const renderedCells = config.map(column=>{
            return <td className="p-3" key={column.name}>{column.render(rowData)}</td>
        })

        return  (<tr className="border-b" key={keyFn(rowData)}>
                    { renderedCells }
                </tr>)
    })

    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    { renderedHeaders }
                </tr>
            </thead>
            <tbody>
                { renderedRow }
            </tbody>
        </table>
    );
}

export default Table;