let allPosts = []

// Event handler
function onSubmitPost(event) {
    event.preventDefault();
    console.log('Submit button clicked!');

    // ! 1. Get data from inputs with selectors
    let inputContent = document.getElementById("content-input").value
    let inputAuthor = document.getElementById("author-input").value

    console.log("Input Data: ", [inputContent, inputAuthor])

    // ! 2. Package inputs into an object.
    const newPost = {
        content: inputContent,
        author: inputAuthor
    }
    // Add new post to state
    allPosts.push(newPost)
    console.log("All Posts: ", allPosts)
    // Update state....

    // Render
    render(); 

     // ! Clear inputs
     document.getElementById("content-input").value = ""
     document.getElementById("author-input").value = ""
}

function render() {
    // Selector for table to append posts
    let postsTable = document.getElementById("posts-table-body")

    // ! Clear the table first so there are no dupes
    postsTable.innerHTML = ""

    //! Loop over state (allPosts)
        // Append durrent post to table
    for (let post of allPosts) {
        console.log("Current post:", post)
        postsTable.innerHTML += `
            <tr>
                <td>${post.content}</td>
                <td>${post.author}</td>
            </tr>
        `
    }

}
