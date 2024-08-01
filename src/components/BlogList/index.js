import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul type="none">
      {blogsList.map(eachItem => (
        <BlogItem key={eachItem.id} details={eachItem} />
      ))}
    </ul>
  )
}

export default BlogList
