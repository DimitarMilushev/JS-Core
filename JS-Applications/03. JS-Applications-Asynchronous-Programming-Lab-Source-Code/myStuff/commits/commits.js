function loadCommits() {
    // AJAX call …

    
    let username = $("#username").val();
    let repo = $("#repo").val();

    const url = `https://api.github.com/repos/${username}/${repo}/commits`;


    $.get(url)
      .then(displayCommits);

      function displayCommits(commits) {
        for(let commit of commits) {
          $("#commits").append(`<li>${commit.commit.author.name}: ${commit.commit.message}</li>`);
        }
        console.log(commits);
      }
}