const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    const likes = []
    blogs.map(blog => {
        likes.push(blog.likes)
    })
    const reducer = (sum, item) => {
        return sum + item
    }
    return likes.reduce(reducer, 0)
    
}

const favoriteBlog = (blogs) => {
    var mostLikes = blogs[0]
    blogs.map(blog => {
        if (blog.likes > mostLikes.likes) {
            mostLikes = blog
        }
    })
    return ({
        title: mostLikes.title,
        author: mostLikes.author,
        likes: mostLikes.likes
    })
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}