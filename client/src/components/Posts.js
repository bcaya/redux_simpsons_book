import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPosts } from '../actions/posts';
import { Container, Grid, Header, Card, Image } from 'semantic-ui-react';

class Posts extends React.Component {
  componentDidMount() {
    this.props.dispatch(getPosts())
  }

  posts = () => {
    return this.props.posts.map( post =>
      <Card key={post.id}>
        <Image src={post.picture} />
        <Card.Content>
          <Card.Header>
            {post.author}
          </Card.Header>
          <Card.Meta>
            <span>
              {post.description}
            </span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Link to={`/posts/${post.id}`}>
            View Post
          </Link>
        </Card.Content>
      </Card>
    )
  }

  render() {
    return (
      <Container>
        <Header as="h3" textAlign="center">Posts</Header>
          <Card.Group itemsPerRow={3}>
           { this.posts() }
          </Card.Group>
        </Container>
      )
    }
  }

  const mapStateToProps = (state) => {
    return { posts: state.posts }
  }

export default connect(mapStateToProps)(Posts);