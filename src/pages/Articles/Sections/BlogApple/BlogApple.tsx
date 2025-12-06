import React, { useEffect, useState } from "react";
import "./style.scss";

interface Post {
   id: number;
   image: string;
   title: string;
   date: string;
   tags: string[];
}

const BlogApple: React.FC = () => {
   const [posts, setPosts] = useState<Post[]>([]);
   const [currentPage, setCurrentPage] = useState(1);
   const postsPerPage = 2;

   useEffect(() => {
      fetch("http://localhost:3000/BlogApple")
         .then((res) => res.json())
         .then((data) => setPosts(data))
   }, []);

   const totalPages = Math.ceil(posts.length / postsPerPage);
   const startIndex = (currentPage - 1) * postsPerPage;
   const visiblePosts = posts.slice(startIndex, startIndex + postsPerPage);

   return (
      <div className="news-page">
         <div className="news-grid news-grid--top">
            {visiblePosts.map((post) => (
               <div key={post.id} className="news-card">
                  <img src={post.image} alt={post.title} className="news-card__img" />
                  <div className="news-card__body">
                     <h3 className="news-card__title">{post.title}</h3>
                     <p className="news-card__date">{post.date}</p>
                     <div className="news-card__tags">
                        {post.tags.map((tag, index) => (
                           <span key={index} className="news-card__tag">
                              {tag}
                           </span>
                        ))}
                     </div>
                  </div>
               </div>
            ))}
         </div>

         <div className="news-grid news-grid--bottom">
            {posts.slice(2, 6).map((post) => (
               <div key={post.id} className="news-card">
                  <img src={post.image} alt={post.title} className="news-card__img" />
                  <div className="news-card__body">
                     <h3 className="news-card__title">{post.title}</h3>
                     <p className="news-card__date">{post.date}</p>
                     <div className="news-card__tags">
                        {post.tags.map((tag, index) => (
                           <span key={index} className="news-card__tag">
                              {tag}
                           </span>
                        ))}
                     </div>
                  </div>
               </div>
            ))}
         </div>

         <div className="pagination">
            <span
               onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
               className={currentPage === 1 ? "disabled" : ""}
            >
               Назад
            </span>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
               <span
                  key={page}
                  className={page === currentPage ? "active" : ""}
                  onClick={() => setCurrentPage(page)}
               >
                  {page}
               </span>
            ))}

            <span
               onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
               className={currentPage === totalPages ? "disabled" : ""}
            >
               Вперёд
            </span>
         </div>
      </div>
   );
};

export default BlogApple;
