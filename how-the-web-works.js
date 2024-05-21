// **************************************
// HOW THE WEB WORKS EXERCISE
// **************************************

// - What is HTTP?

//     Hyper Text Transfer Protocol is governs how clients get data from, or send data to, a server.

// - What is a URL?

//     Short for Uniform Resource Locator, a URL is an address for some internet resource.

// - What is DNS?

//     Short for Domain Name System, this is a system that takes human-readable URLs and converts them into IP addresses.

// - What is a query string?

//     The query string allows you to pass key-value pairs into the URL, in the format `?key1=value1&key2=value2...`

// - List two HTTP Verbs and their use cases.
//     - GET - get some data from the server (most pages, search forms)
//     - POST - send some data to the server (pages that change data on server)
// - What is an HTTP request?

//     An HTTP request is a request from a client to a server which follows the HTTP protocol (eg a request for HTML from news.google.com)

// - What is an HTTP response?

//     An HTTP response is a response from a server to a client which follows the HTTP protocol (eg sending back HTML/CSS/JS/etc)

// - What is an HTTP header? Give a couple examples of request and response headers you have seen.
//     - Headers provide additional information about the request or the response. Here are some examples:
//     - Request headers: Host, User-Agent, Accept, Cookie, Cache-Control
//     - Response headers: Content-Type, Last-Modified, Set-Cookie, Cache-Control
// - What happens when you type a URL in a browser?
//     1. Your browser “resolves” the name into an IP address using DNS
//     2. Your browser makes a request to that IP address, including headers (info about browser, any previous cookies, and other things)
//     3. The server sends a response (typically, HTML, with a status code (200 if it was sucessful)
//     4. The browser makes a DOM from that HTML, and finds any other resources needed (images, CSS, JavaScript, etc)
//     5. The browser makes separate HTTP requests for those resources and receives response from the server for each

// Part 2

// 1. Using ***curl***, make a ***GET*** request to the *icanhazdadjoke.com* API to find all jokes involving the word “pirate”

// seanfroelich@Seans-MBP / % curl -H "Accept: application/json" "https://icanhazdadjoke.com/search?term=pirate"

// -H means Header

// {"current_page":1,"limit":20,"next_page":1,"previous_page":1,"results":[{"id":"QuscibaMClb","joke":"What does a
// pirate pay for his corn? A buccaneer!"},{"id":"2gii3LeN7Ed","joke":"Why couldn't the kid see the pirate movie? Because it was rated arrr!"},
// {"id":"SvzIBAQS0Dd","joke":"What did the pirate say on his 80th birthday? Aye Matey!"},{"id":"exXSCtkOKe","joke":"Why do pirates not know the alphabet?
// They always get stuck at \"C\"."},{"id":"SnOf2gqjiqc","joke":"Why are pirates called pirates? Because they arrr!"}],"search_term":"pirate","status":200,"total_jokes":5,
// "total_pages":1}

// 2. Use ***dig*** to find what the IP address is for *icanhazdadjoke.com*

// IP : 192.168.1.1

// 3. Make a simple web page and serve it using ***python3 -m http.server***. Visit the page in a browser.

// Part 3

// Test Button

document.addEventListener("DOMContentLoaded", (e) => {
  const mainSection = document.getElementById("main-section");
  document.getElementById("btn").addEventListener("click", function () {
    alert("I've been clicked!");
  });
  // Checkbox creates "h2: I've been Clicked" or Unchecked removes "h2: I've been Clicked"
  let checkBox = document.getElementById("checkBox");
  checkBox.addEventListener("click", function () {
    if (checkBox.checked) {
      let newH2 = document.createElement("h2");
      newH2.textContent = "I've been Clicked";
      mainSection.appendChild(newH2);
      // alert("I've been Checked!");
    } else {
      let h2 = mainSection.querySelector("h2");
      if (h2) {
        mainSection.removeChild(h2);
        //   alert("I've been Unchecked");
      }
    }
    // Post a comment section.
    const commentForm = document.getElementById("commentForm");
    const commentSection = document.getElementById("post-section");
    const submitBtn = document.getElementById("submit-post-text");

    commentForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent the form from submitting and refreshing the page

      const commentTextbox = document.getElementById("post-textbox").value;
      if (commentTextbox.trim() !== "") {
        // Create a new comment div
        const newComment = document.createElement("div");
        newComment.className = "comment";
        newComment.textContent = commentTextbox;

        // Create a remove button
        const removeBtn = document.createElement("span");
        removeBtn.className = "remove-btn";
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", function () {
          commentSection.removeChild(newComment);
        });
        // Append the new comment to the comment section
        commentSection.appendChild(newComment);

        //  Append the remove button to the new comment
        newComment.appendChild(removeBtn);

        // Clear the textbox
        document.getElementById("post-textbox").value = "";
      }
    });
  });
});
