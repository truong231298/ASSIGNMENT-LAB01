const EditForm = (props) => {
    return (
        <form action="">
            <label htmlFor="">Brand</label>
            <input type="text" />
            <label htmlFor="">Model</label>
            <input type="text" />
            <label htmlFor="">Price</label>
            <input type="text" />
            <button>Update</button>
            <button>Cancel</button>
        </form>
    )
}
export default EditForm