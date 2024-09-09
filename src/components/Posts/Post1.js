import React, { useEffect, useState } from "react";

const Post1 = ()=> {
   
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch('https://netiquetteinfo.com/wp-json/wp/v2/posts/6832');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPost();
  }, []);


  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <section className="blog-breadcrumb-area">
        <div className="custom-container custom-container-blog">
          <ul className="breadcrumb-list">
            <li>
              <a href="/">Home</a>
            </li>
            
            <li>{post.title.rendered}</li>  
          </ul>
          <h1>{post.title.rendered}</h1>
        </div>
      </section>

      <section className="blog-2-area blog-2-details-area">
        <div className="custom-container custom-container-blog">
          <div className="custom-row">
            <div className="blog-2-item-box">
              <img
                fetchpriority="high"
                width="667"
                height="400"
                src="/wp-content/uploads/2023/12/blog-7.jpg"
                className="attachment-synck-blog-details size-synck-blog-details wp-post-image"
                alt=""
                decoding="async"
                srcset="/wp-content/uploads/2023/12/blog-7.jpg 667w, /wp-content/uploads/2023/12/blog-7-300x180.jpg 300w, /wp-content/uploads/2023/12/blog-7-350x210.jpg 350w"
                sizes="(max-width: 667px) 100vw, 667px"
              />{" "}
              <div
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              />    
              <div className="blog-post-tags">
                <a href="/tag/artificial-intelligence/" rel="tag">
                  Artificial Intelligence
                </a>{" "}
              </div>
              <div className="blog-comment-box"></div>
            </div>

            <aside className="blog-2-sidebar-wrap">
              <div
                id="block-2"
                className="blog-2-sidebar-widget categories-widget widget_block widget_search"
              >
                <form
                  role="search"
                  method="get"
                  action="/"
                  className="wp-block-search__button-outside wp-block-search__text-button wp-block-search"
                >
                  <label
                    className="wp-block-search__label"
                    for="wp-block-search__input-1"
                  >
                    Search
                  </label>
                  <div className="wp-block-search__inside-wrapper ">
                    <input
                      className="wp-block-search__input"
                      id="wp-block-search__input-1"
                      placeholder=""
                      value=""
                      type="search"
                      name="s"
                      required=""
                    />
                    <button
                      aria-label="Search"
                      className="wp-block-search__button wp-element-button"
                      type="submit"
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>
              <div
                id="block-3"
                className="blog-2-sidebar-widget categories-widget widget_block"
              >
                <div className="wp-block-group">
                  <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                    <h2 className="wp-block-heading">Recent Posts</h2>
                    <ul className="wp-block-latest-posts__list wp-block-latest-posts">
                      <li>
                        <a
                          className="wp-block-latest-posts__post-title"
                          href="/practical-guide-implementing-ai-in-your-business/"
                        >
                          Practical Guide: Implementing AI in Your Business
                        </a>
                      </li>
                      <li>
                        <a
                          className="wp-block-latest-posts__post-title"
                          href="/user-centered-design-its-significance-in-web-and-app-development/"
                        >
                          User-Centered Design: Its Significance in Web and App
                          Development
                        </a>
                      </li>
                      <li>
                        <a
                          className="wp-block-latest-posts__post-title"
                          href="/responsive-design-why-its-crucial-for-your-website/"
                        >
                          Responsive Design: Why It’s Crucial for Your Website
                        </a>
                      </li>
                      <li>
                        <a
                          className="wp-block-latest-posts__post-title"
                          href="/key-steps-in-developing-a-successful-mobile-app/"
                        >
                          Key Steps in Developing a Successful Mobile App
                        </a>
                      </li>
                      <li>
                        <a
                          className="wp-block-latest-posts__post-title"
                          href="/content-management-system-cms/"
                        >
                          Content Management System (CMS)
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                id="block-4"
                className="blog-2-sidebar-widget categories-widget widget_block"
              >
                <div className="wp-block-group">
                  <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                    <h2 className="wp-block-heading">Recent Comments</h2>
                    <div className="no-comments wp-block-latest-comments">
                      No comments to show.
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="block-5"
                className="blog-2-sidebar-widget categories-widget widget_block"
              >
                <div className="wp-block-group">
                  <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                    <h2 className="wp-block-heading">Archives</h2>
                    <ul className="wp-block-archives-list wp-block-archives">
                      {" "}
                      <li>
                        <a href="/2024/05/">May 2024</a>
                      </li>
                      <li>
                        <a href="/2024/01/">January 2024</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                id="block-6"
                className="blog-2-sidebar-widget categories-widget widget_block"
              >
                <div className="wp-block-group">
                  <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                    <h2 className="wp-block-heading">Categories</h2>
                    <ul className="wp-block-categories-list wp-block-categories">
                      {" "}
                      <li className="cat-item cat-item-1">
                        <a href="/category/uncategorized/">Uncategorized</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Post1;
