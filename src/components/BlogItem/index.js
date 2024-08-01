import './index.css'

const BlogItem = props => {
  const {details} = props

  return (
    <li>
      <div className="text-container">
        <div>
          <h1>{details.title}</h1>
          <p>{details.description}</p>
        </div>
        <p>{details.publishedDate}</p>
      </div>
      <hr />
    </li>
  )
}

export default BlogItem
