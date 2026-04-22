import BlogList from "@components/Blog/BlogList/BlogList";
import PageText from "../../components/Text/PageText/PageText";
  
  function Blog() {
    return (
      <div>
        <PageText heading="Blog" />
        <BlogList />
      </div>
    );
}

export default Blog;
