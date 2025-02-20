const loadMoreBtn = document.querySelector(".bloglist__main #loadMoreBtn");
const postsPerPage = document.querySelector(".bloglist__main").getAttribute("data-cards-count");
const allBlogs = document.querySelectorAll(".bloglist__main .blogslist__item");
let visiblePosts = postsPerPage;
if( allBlogs != null && loadMoreBtn != null){
    // Initially hide all posts beyond the first 'postsPerPage'
    for (let i = postsPerPage; i < allBlogs.length; i++) {
        allBlogs[i].classList.add("display-none");
    }
    
        // Add event listener to the 'Load More' button
        loadMoreBtn.addEventListener("click", function() {
        // Find the next set of hidden posts
        let count = 0;
        for (let i = visiblePosts; i < visiblePosts + postsPerPage; i++) {
            if (i < allBlogs.length) {
            allBlogs[i].classList.remove("display-none");
            count++;
            }
        }
    
        // Update the number of currently visible posts
        visiblePosts += count;
    
        // If all posts are visible, hide the 'Load More' button
        if (visiblePosts >= allBlogs.length) {
            this.classList.add("display-none");
        }
    });
}