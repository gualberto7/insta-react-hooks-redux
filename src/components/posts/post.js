import React from 'react'

const Post = ({ match }) => {

    console.log(match.params.id)

    return (
        <div>
            post
        </div>
    )
}
 
export default Post
