# Demo Presentation and User Journey

## Introduction
"Hi I'm Ryan..." and a one sentence background.

## Inspiration and Project Overview [w]
SEEK is a daily geolocation MOBILE game where users test their geography knowledge by guessing the location of unique, daily streetview locations. Players can connect with other players, compare scores and even create their own custom games to share with their friends.

### Tech Stack [m]
SEEK is built using React on the front-end, Express on the back-end and a Postgres database.
- *"We were excited to become more competent using component-based frameworks and state management that React requires. We immediately reconginzed the powerful capabilities of the library and really enjoyed implementing it here."*

## App Walkthrough

[m]*"One of our biggest challenges was just taking the first steps in building this app. With some many places to go, we had to really stay focused on building out the essential, core features of the app (MVP) before implementing any of our countless 'nice-to-have' features."*
### 1. Nav Bar
### 2. Drawer menu
### 3. Daily Game (R2)

  - Moving through streetview [w]
  - reset button [w]
  - drop marker and relocate marker [m]
  - submit answer [m]
    - show answer + guess markers
    - show scorecard
    - share link in Hopin stage chat
  - *"All users get the same puzzle each day, so you can head to the Leaderboard to check out how your friends fared."* [w]
### 4. Leaderboard [w]
  - (follow link on Daily Game scorecard)
  - Show follows-daily leaderboard
  - Use filter to display games played + total score
### 5. Create Custom Game [w]
  - Navigate map
  - Drop into streetview
  - back to map, drop pin, submit
  - share challenge link (clickable in production)
### 6. My Account [m]
  - (follow link after creating custom game)
  - display details on account page.
### 7. Play Custom Game [m]
  - use challenge link to begin custom game
  - take ~10 seconds to make a guess
  - show scorecard

  - *"In the future we'd like to implement a page where you can view all the custom game you've created and data around how other players have interacted with them."*

## Future Versions

Some features we'd like to implement in the future as we continue to work on this app include:

- Lots of smaller UI features that make navigating app more intuitive.
- multi-guess option for custom games

## Things We Learned

- State management when there's a lot of different things to keep track of
*"Working with the Google Maps API was difficult at first, because there are a lot of different use cases for the API and we had to sift through a lot of DENSE documentation to find the information that matched our use-case, front-end structure tech stack and language."*

## THAT'S A WRAP

1 - 3 - 1 mins for sections