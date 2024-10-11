let reviews = [];

function addReview() {
  const reviewText = document.getElementById('reviewText').value;
  const reviewRating = parseInt(document.getElementById('reviewRating').value);
  
  if (reviewText === "") {
    alert("Please write a review before submitting.");
    return;
  }

  const review = {
    text: reviewText,
    rating: reviewRating
  };
  
  reviews.push(review);
  displayReviews();
  calculateAverageRating();
  document.getElementById('reviewText').value = ""; 
}

function displayReviews() {
  const reviewList = document.getElementById('reviewList');
  reviewList.innerHTML = "";

  reviews.forEach(review => {
    const listItem = document.createElement('li');
    listItem.innerHTML = <strong>${'★'.repeat(review.rating)}</strong> - '${review.text}';
    reviewList.appendChild(listItem);
  });
}

function calculateAverageRating() {
  const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
  const averageRating = (totalRating / reviews.length).toFixed(1);
  document.getElementById('averageRating').innerText = averageRating || "0";
}