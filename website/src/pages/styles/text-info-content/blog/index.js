import React from 'react';
import PropTypes from 'prop-types';
import ComponentShowcase from 'containers/Showcase/ComponentShowcase';
import BlogTextInfoContent from 'docs/styles/textInfoContent/blog/BlogTextInfoContentStyle';

const BlogTextInfoContentStylePage = () => {
  return (
    <ComponentShowcase
      metadata={BlogTextInfoContent.metadata}
      renderComponent={() => <BlogTextInfoContent />}
    />
  );
};

BlogTextInfoContentStylePage.propTypes = {
  path: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  uri: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default BlogTextInfoContentStylePage;

