const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <h1 id="User">@rarejules</h1>
      <input
        type="text"
        name="title"
        value={props.formValues.title}
        onChange={props.handleChange}
      ></input>
      <textarea
        rows="10"
        name="content"
        value={props.formValues.content}
        onChange={props.handleChange}
      ></textarea>
      <button id="Save">Save</button>
      {/* <input id="Delete" type="submit" value="Delete" /> */}
    </form>
  )
}

export default Form
