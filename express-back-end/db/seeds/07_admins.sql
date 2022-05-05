INSERT INTO users (
  username,
  email,
  password_digest,
  first_name,
  last_name,
  avatar_url,
  description,
  is_admin
) VALUES (
  'admin',
  'admin@admin.com',
  -- This hash is just "test"
  '$2b$10$mse7257yG2NPziJsNah6YeUVlERo6/HwtJJIVqe4gVVHskKfGYui6', 
  'test',
  'admin',
  'https://media.istockphoto.com/photos/african-mature-man-with-spectacles-picture-id1152603187?k=20&m=1152603187&s=612x612&w=0&h=GFzEtU3SUuueO3bqgM3GbQ8GTehFBM-V4CRPSbreims=',
  'Test admin for testing purposes',
  'true'
)