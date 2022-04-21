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
  'test',
  'test',
  'user',
  'image.com',
  'Test user for testing purposes'
), (
  'user2',
  'fake@email.com',
  'testpass',
  'user',
  '2',
  'image2.com',
  'Hello'
);