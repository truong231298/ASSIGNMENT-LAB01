const ListView = (props) => {
    return (
        <table>
            <tr>
                <th>Brand</th>
                <th>Model</th>
                <th>Price</th>
                <th colSpan={2}>Actions</th>
            </tr>


            <tr>
                <td>brand</td>
                <td>model</td>
                <td>price</td>
                <td>
                    <button>Edit</button>
                </td>
                <td>
                    <button>Delete</button>
                </td>
            </tr>

        </table>
    )
}
export default ListView