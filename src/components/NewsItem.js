function NewsItem({item}) {

  const websiteUrl = item.url
  console.log(websiteUrl)
  const website = websiteUrl.split('https://').pop().split('/')[0]

  const date = item.publishedAt
  const formatDate = date.replace('T', ' ')
  const formatTime = formatDate.replace('Z', '')

  return (
    <a href={item.url} className="article">
      <div className="article-image">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="article-content">
        <div className="article-source">
          <img src={`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE%2CSIZE%2CURL&url=http://${website}&size=16`} alt={item.source.id}/>
          <span>{item.source.name}</span>
        </div>
        <div className="article-title">
          <h2>{item.title}</h2>
        </div>
        <p className="article-description">
          {item.description}
        </p>
        <div className="article-details">
          <small><b>Published At: </b>{formatTime}</small>
        </div>
      </div>
    </a>
  )
}

export default NewsItem

// #7:06
// need to add add to favorite
// fuck im so not productive
// another lazy day being tour guide for my thai friendsssssssssssssss
// today i went to IT fair fucking did not do any code
