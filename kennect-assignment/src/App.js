import React, { useState } from 'react';
import UserNameEntry from './components/userEntry/UserNameEntry';
import NewPost from './components/post/NewPost';
import PostComment from './components/post/PostComment';
import SearchPostComment from './components/post/SearchPostComment';
import SearchResults from './components/search/SearchResults';
import NoPostsMessage from './components/search/NoPostsMessage';
import { Container, Typography } from '@mui/material'; // Remove unused imports
import { PostsContainerStyled, PostStyled, CommentsContainerStyled, CommentStyled, MessageStyled } from './Styles'; // Import the updated styles

const App = () => {
  const [isUserNameSubmitted, setIsUserNameSubmitted] = useState(false);
  const [userName, setUserName] = useState('');
  const [originalPosts, setOriginalPosts] = useState([]);
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleUserNameSubmit = (name) => {
    setIsUserNameSubmitted(true);
    setUserName(name);
  };

  // const handlePostSubmit = async (newPost) => {
  //   try {
  //     const response = await fetch('/api/posts', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },

  //       body: JSON.stringify(newPost),
  //     });
  
  //     const savedPost = await response.json();
  
  //     setOriginalPosts([...originalPosts, savedPost]);
  //     setDisplayedPosts([...originalPosts, savedPost]);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  
  // const handleCommentSubmit = async (postId, newComment) => {
  //   try {
  //     const response = await fetch(`/api/posts/${postId}/comments`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(newComment),
  //     });
  
  //     const savedPost = await response.json();
  
  //     setOriginalPosts((prevPosts) =>
  //       prevPosts.map((post) => (post.id === postId ? savedPost : post))
  //     );
  //     setDisplayedPosts((prevPosts) =>
  //       prevPosts.map((post) => (post.id === postId ? savedPost : post))
  //     );
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };


  const handlePostSubmit = (newPost) => {
    setOriginalPosts([...originalPosts, { ...newPost, id: originalPosts.length + 1, comments: [] }]);
    setDisplayedPosts([...originalPosts, { ...newPost, id: originalPosts.length + 1, comments: [] }]);
  };

  const handleCommentSubmit = (postId, newComment) => {
    setOriginalPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, { ...newComment, id: post.comments.length + 1 }] }
          : post
      )
    );
    setDisplayedPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, { ...newComment, id: post.comments.length + 1 }] }
          : post
      )
    );
  };

  const handleSearch = (searchQuery) => {
    setLoading(true);

    setTimeout(() => {
      if (!searchQuery.trim()) {
        // If search query is empty, display all original posts
        setDisplayedPosts([...originalPosts]);
      } else {
        // Implement search logic and update the state with search results
        const searchResults = originalPosts.filter(
          (post) =>
            post.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.postMessage.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.comments.some((comment) =>
              comment.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
              comment.commentMessage.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
        setDisplayedPosts(searchResults);
      }

      setLoading(false); // Set loading to false after processing search results
    }, 1000); // Simulating a delayed search process with setTimeout
  };

  return (
    <Container>
      {!isUserNameSubmitted ? (
        <UserNameEntry onUserNameSubmit={handleUserNameSubmit} />
      ) : (
        <div>
          <Typography variant="h4" gutterBottom>
            Welcome, {userName}!
          </Typography>
          <NewPost onPostSubmit={handlePostSubmit} />

          {/* Replace the existing posts container with the SearchResults component */}
          {displayedPosts.length > 0 ? (
            <SearchResults posts={displayedPosts} isLoading={loading} />
          ) : (
            <MessageStyled>
              <NoPostsMessage />
            </MessageStyled>
          )}

          <PostsContainerStyled>
            {/* Display existing posts */}
            {displayedPosts.map((post) => (
              <PostStyled key={post.id} elevation={3}>
                <Typography variant="h5" gutterBottom>
                  {post.userName}'s Post:
                </Typography>
                <Typography>{post.postMessage}</Typography>

                <CommentsContainerStyled>
                  <PostComment onCommentSubmit={(newComment) => handleCommentSubmit(post.id, newComment)} />
                  {/* Display existing comments */}
                  {post.comments.map((comment) => (
                    <CommentStyled key={comment.id} elevation={1}>
                      <Typography variant="body1">
                        {comment.userName}'s Comment: {comment.commentMessage}
                      </Typography>
                    </CommentStyled>
                  ))}
                </CommentsContainerStyled>
              </PostStyled>
            ))}
          </PostsContainerStyled>
          <SearchPostComment onSearch={handleSearch}></SearchPostComment>
        </div>
      )}
    </Container>
  );
};

export default App;
