function TodoRowItem() {

    const rowNumber = 1;
    const rowDescription= "Walking dead season 1" ;
    const rowAssigned = "Self";

    return (
        <tr>
            <th scope='row'>{rowNumber}</th>
            <td>{rowDescription}</td>
            <td>{rowAssigned}</td>
        </tr>
    )
}

export default TodoRowItem;