// ! State
let totalVotes = 0 // Starting value

// ! Event
// When called will increase the vote count by 1
function upVoteHandler() {

    totalVotes++
    console.log("Current Total Votes:", totalVotes)

    // Render
    render()
}

// ! Event
function downVoteHandler() {
    totalVotes--
    console.log("Current Total Votes:", totalVotes)

    // Render
    render()

}

// ! Render
function render() {
    console.log("render() activated... ")

    // Selector
    const voteCountSpan = document.getElementById("vote-count")
    voteCountSpan.innerText = totalVotes
}