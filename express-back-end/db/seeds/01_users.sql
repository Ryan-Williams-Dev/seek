INSERT INTO users (
  username,
  email,
  password_digest,
  first_name,
  last_name,
  avatar_url,
  description
) VALUES (
  'testuser',
  'test@test.com',
  -- This hash is just "test"
  '$2b$10$mse7257yG2NPziJsNah6YeUVlERo6/HwtJJIVqe4gVVHskKfGYui6', 
  'test',
  'user',
  'https://media.istockphoto.com/photos/african-mature-man-with-spectacles-picture-id1152603187?k=20&m=1152603187&s=612x612&w=0&h=GFzEtU3SUuueO3bqgM3GbQ8GTehFBM-V4CRPSbreims=',
  'Test user for testing purposes'
), (
  'user2',
  'fake@email.com',
  '$2b$10$mse7257yG2NPziJsNah6YeUVlERo6/HwtJJIVqe4gVVHskKfGYui6',
  'user',
  '2',
  'image2.com',
  'Hello'
), (
  'ryanmaceachern',
  'ryanm@email.com',
  '$2b$10$mse7257yG2NPziJsNah6YeUVlERo6/HwtJJIVqe4gVVHskKfGYui6',
  'Ryan',
  'MacEachern',
  'https://media.gettyimages.com/photos/handsome-young-adult-businessman-with-stubble-picture-id1250238624?s=612x612',
  'Old enough to party.'
), (
  'ryan-williams',
  'ryanw@geeemail.com',
  '$2b$10$mse7257yG2NPziJsNah6YeUVlERo6/HwtJJIVqe4gVVHskKfGYui6',
  'Ryan',
  'Williams',
  'https://media.istockphoto.com/photos/rear-view-of-a-toggenburg-goat-looking-away-picture-id516926142',
  'Greatest of All Time.'
), (
  'z-lo',
  'zarahliao@email.com',
  '$2b$10$mse7257yG2NPziJsNah6YeUVlERo6/HwtJJIVqe4gVVHskKfGYui6',
  'Zarah',
  'Liao',
  'https://t3.ftcdn.net/jpg/02/22/10/62/360_F_222106228_NP5f0gXi3JOCgmaTsEyg7RuyKgwDLGuY.jpg',
  'Love puzzles!'
), (
  'ramrod',
  'ramrod@email.com',
  '$2b$10$mse7257yG2NPziJsNah6YeUVlERo6/HwtJJIVqe4gVVHskKfGYui6',
  'Rodney',
  'Mullet',
  'https://thumbs.dreamstime.com/z/happy-man-okay-sign-portrait-white-background-showing-31418338.jpg',
  'Go big or go home'
), (
  'libby499',
  'elle@email.com',
  '$2b$10$mse7257yG2NPziJsNah6YeUVlERo6/HwtJJIVqe4gVVHskKfGYui6',
  'Elizabeth',
  'Proud',
  'https://media.gettyimages.com/photos/portrait-of-woman-with-afro-hair-smiling-with-white-wall-background-picture-id1218661893?s=612x612',
  'Ready to roll!'
), (
  'Rachie',
  'rach@gmail.com',
  '$2b$10$mse7257yG2NPziJsNah6YeUVlERo6/HwtJJIVqe4gVVHskKfGYui6',
  'Rachel',
  'Durham',
  'https://media.gettyimages.com/photos/funny-glasses-picture-id912438234?k=20&m=912438234&s=612x612&w=0&h=rv5iNjCkUToc9Nydybmb65bwoAosW5FI5_XZdQWMe24=',
  'You can not just use my likeness like this'
);