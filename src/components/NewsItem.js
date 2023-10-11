function NewsItem({item}) {
  const websiteUrl = item.url
  const website = websiteUrl.split('https://').pop().split('/')[0]

  const date = item.publishedAt
  const formateDate = date.replace('T', ' ')
  const formatTime = formatDate.replace('Z', '')

  return (
    <a href="" className="article">
      <div className="article-image">
        <img src="" alt="" />
      </div>
      <div className="article-content">
        <div className="article-source">
          <img src="" alt=""/>
          <span></span>
        </div>
        <div className="article-title">
          <h2></h2>
        </div>
        <p className="article-description">

        </p>
        <div className="article-details">
          <small><b>Published At: </b></small>
        </div>
      </div>
    </a>
  )
}

export default NewsItem
