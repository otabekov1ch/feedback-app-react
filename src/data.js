const data = 
  {
    "currentUser": {
      "image": "./assets/user-images/image-zena.jpg",
      "name": "Zena Kelley",
      "username": "velvetround"
    },
    "productRequests": [
      {
        "id": 1,
        "title": "Add tags for solutions",
        "category": "enhancement",
        "upvotes": 127,
        "isUpvoted": false,
        "status": "suggestion",
        "description": "Easier to search for solutions based on a specific stack.",
        "comments": [
          {
            "id": 1,
            "content": "Awesome idea! Trying to find framework-specific projects within the hubs can be tedious",
            "user": {
              "image": "./assets/user-images/image-suzanne.jpg",
              "name": "Suzanne Chang",
              "username": "upbeat1811"
            }
          },
          {
            "id": 2,
            "content": "Please use fun, color-coded labels to easily identify them at a glance",
            "user": {
              "image": "./assets/user-images/image-thomas.jpg",
              "name": "Thomas Hood",
              "username": "brawnybrave"
            }
          }
        ]
      },
      {
        "id": 2,
        "title": "Add a dark theme option",
        "category": "feature",
        "upvotes": 58,
        "isUpvoted": true,
        "status": "suggestion",
        "description": "It would help people with light sensitivities and who prefer dark mode.",
        "comments": [
          {
            "id": 3,
            "content": "Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.",
            "user": {
              "image": "./assets/user-images/image-elijah.jpg",
              "name": "Elijah Moss",
              "username": "hexagon.bestagon"
            }
          },
          {
            "id": 4,
            "content": "Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and  apparently saves battery life.",
            "user": {
              "image": "./assets/user-images/image-james.jpg",
              "name": "James Skinner",
              "username": "hummingbird1"
            },
            "replies": [
              {
                "content": "While waiting for dark mode, there are browser extensions that will also do the job. Search for 'dark theme' followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.",
                "replyingTo": "hummingbird1",
                "user": {
                  "image": "./assets/user-images/image-anne.jpg",
                  "name": "Anne Valentine",
                  "username": "annev1990"
                }
              },
              {
                "content": "Good point! Using any kind of style extension is great and can be highly customizable, like the ability to change contrast and brightness. I'd prefer not to use one of such extensions, however, for security and privacy reasons.",
                "replyingTo": "annev1990",
                "user": {
                  "image": "./assets/user-images/image-ryan.jpg",
                  "name": "Ryan Welles",
                  "username": "voyager.344"
                }
              }
            ]
          }
        ]
      },
      {
        "id": 3,
        "title": "Q&A within the challenge hubs",
        "category": "feature",
        "upvotes": 64,
        "isUpvoted": true,
        "status": "suggestion",
        "description": "Challenge-specific Q&A would make for easy reference.",
        "comments": [
          {
            "id": 5,
            "content": "Much easier to get answers from devs who can relate, since they've either finished the challenge themselves or are in the middle of it.",
            "user": {
              "image": "./assets/user-images/image-george.jpg",
              "name": "George Partridge",
              "username": "soccerviewer8"
            }
          }
        ]
      },
      {
        "id": 4,
        "title": "Add image/video upload to feedback",
        "category": "enhancement",
        "upvotes": -1,
        "isUpvoted": false,
        "status": "suggestion",
        "description": "Images and screencasts can enhance comments on solutions.",
        "comments": [
          {
            "id": 6,
            "content": "Right now, there is no ability to add images while giving feedback which isn't ideal because I have to use another app to show what I mean",
            "user": {
              "image": "./assets/user-images/image-javier.jpg",
              "name": "Javier Pollard",
              "username": "warlikeduke"
            }
          },
          {
            "id": 7,
            "content": "Yes I'd like to see this as well. Sometimes I want to add a short video or gif to explain the site's behavior..",
            "user": {
              "image": "./assets/user-images/image-roxanne.jpg",
              "name": "Roxanne Travis",
              "username": "peppersprime32"
            }
          }
        ]
      },
      {
        "id": 5,
        "title": "Ability to follow others",
        "category": "feature",
        "upvotes": 41,
        "isUpvoted": false,
        "status": "suggestion",
        "description": "Stay updated on comments and solutions other people post.",
        "comments": [
          {
            "id": 8,
            "content": "I also want to be notified when devs I follow submit projects on FEM. Is in-app notification also in the pipeline?",
            "user": {
              "image": "./assets/user-images/image-victoria.jpg",
              "name": "Victoria Mejia",
              "username": "arlen_the_marlin"
            },
            "replies": [
              {
                "content": "Bumping this. It would be good to have a tab with a feed of people I follow so it's easy to see what challenges they’ve done lately. I learn a lot by reading good developers' code.",
                "replyingTo": "arlen_the_marlin",
                "user": {
                  "image": "./assets/user-images/image-zena.jpg",
                  "name": "Zena Kelley",
                  "username": "velvetround"
                }
              }
            ]
          },
          {
            "id": 9,
            "content": "I've been saving the profile URLs of a few people and I check what they’ve been doing from time to time. Being able to follow them solves that",
            "user": {
              "image": "./assets/user-images/image-jackson.jpg",
              "name": "Jackson Barker",
              "username": "countryspirit"
            }
          }
        ]
      },
      {
        "id": 6,
        "title": "Preview images not loading",
        "category": "bug",
        "upvotes": 3,
        "isUpvoted": false,
        "status": "suggestion",
        "description": "Challenge preview images are missing when you apply a filter."
      },
      {
        "id": 7,
        "title": "More comprehensive reports",
        "category": "feature",
        "upvotes": 0,
        "isUpvoted": false,
        "status": "planned",
        "description": "It would be great to see a more detailed breakdown of solutions.",
        "comments": [
          {
            "id": 10,
            "content": "This would be awesome! It would be so helpful to see an overview of my code in a way that makes it easy to spot where things could be improved.",
            "user": {
              "image": "./assets/user-images/image-victoria.jpg",
              "name": "Victoria Mejia",
              "username": "arlen_the_marlin"
            }
          },
          {
            "id": 11,
            "content": "Yeah, this would be really good. I'd love to see deeper insights into my code!",
            "user": {
              "image": "./assets/user-images/image-jackson.jpg",
              "name": "Jackson Barker",
              "username": "countryspirit"
            }
          }
        ]
      },
      {
        "id": 8,
        "title": "Learning paths",
        "category": "feature",
        "upvotes": 29,
        "isUpvoted": false,
        "status": "planned",
        "description": "Sequenced projects for different goals to help people improve.",
        "comments": [
          {
            "id": 12,
            "content": "Having a path through the challenges that I could follow would be brilliant! Sometimes I'm not sure which challenge would be the best next step to take. So this would help me navigate through them!",
            "user": {
              "image": "./assets/user-images/image-george.jpg",
              "name": "George Partridge",
              "username": "soccerviewer8"
            }
          }
        ]
      },
      {
        "id": 9,
        "title": "One-click portfolio generation",
        "category": "feature",
        "upvotes": 62,
        "isUpvoted": false,
        "status": "in-progress",
        "description": "Add ability to create professional looking portfolio from profile.",
        "comments": [
          {
            "id": 13,
            "content": "I haven't built a portfolio site yet, so this would be really helpful. Might it also be possible to choose layout and colour themes?!",
            "user": {
              "image": "./assets/user-images/image-ryan.jpg",
              "name": "Ryan Welles",
              "username": "voyager.344"
            }
          }
        ]
      },
      {
        "id": 10,
        "title": "Bookmark challenges",
        "category": "feature",
        "upvotes": 31,
        "isUpvoted": false,
        "status": "in-progress",
        "description": "Be able to bookmark challenges to take later on.",
        "comments": [
          {
            "id": 14,
            "content": "This would be great! At the moment, I'm just starting challenges in order to save them. But this means the My Challenges section is overflowing with projects and is hard to manage. Being able to bookmark challenges would be really helpful.",
            "user": {
              "image": "./assets/user-images/image-suzanne.jpg",
              "name": "Suzanne Chang",
              "username": "upbeat1811"
            }
          }
        ]
      },
      {
        "id": 11,
        "title": "Animated solution screenshots",
        "category": "bug",
        "upvotes": 9,
        "isUpvoted": false,
        "status": "in-progress",
        "description": "Screenshots of solutions with animations don’t display correctly."
      },
      {
        "id": 12,
        "title": "Add micro-interactions",
        "category": "enhancement",
        "upvotes": 71,
        "isUpvoted": false,
        "status": "live",
        "description": "Small animations at specific points can add delight.",
        "comments": [
          {
            "id": 15,
            "content": "I'd love to see this! It always makes me so happy to see little details like these on websites.",
            "user": {
              "image": "./assets/user-images/image-victoria.jpg",
              "name": "Victoria Mejia",
              "username": "arlen_the_marlin"
            },
            "replies": [
              {
                "content": "Me too! I'd also love to see celebrations at specific points as well. It would help people take a moment to celebrate their achievements!",
                "replyingTo": "arlen_the_marlin",
                "user": {
                  "image": "./assets/user-images/image-suzanne.jpg",
                  "name": "Suzanne Chang",
                  "username": "upbeat1811"
                }
              }
            ]
          }
        ]
      },
      {
        "id": "2022-06-18T05:24:12.559Z",
        "title": "Nimasi bu?",
        "category": "UI",
        "upvotes": 0,
        "isUpvoted": false,
        "status": "suggestion",
        "description": "Margini ko'payib ketibdi",
        "comments": []
      },
      {
        "id": "2022-06-18T05:29:16.839Z",
        "title": "Ozgina xatolik chiqibdi",
        "category": "Enhancement",
        "upvotes": 0,
        "isUpvoted": false,
        "status": "suggestion",
        "description": "aaaa",
        "comments": []
      },
      {
        "id": "2022-06-18T05:30:00.546Z",
        "title": "Natus debitis eligen",
        "category": "UI",
        "upvotes": 0,
        "isUpvoted": false,
        "status": "suggestion",
        "description": "Eos fugiat quam vel ",
        "comments": []
      },
      {
        "id": "2022-06-18T05:30:59.135Z",
        "title": "Qui sunt voluptatum",
        "category": "UI",
        "upvotes": 0,
        "isUpvoted": false,
        "status": "suggestion",
        "description": "lk",
        "comments": []
      },
      {
        "id": "2022-06-18T05:32:57.873Z",
        "title": "Mollit esse velit om",
        "category": "UI",
        "upvotes": 0,
        "isUpvoted": false,
        "status": "suggestion",
        "description": "Voluptatem neque tem",
        "comments": []
      },
      {
        "id": "2022-06-18T05:33:34.493Z",
        "title": "Quasi tempor volupta",
        "category": "UI",
        "upvotes": 0,
        "isUpvoted": false,
        "status": "suggestion",
        "description": "Cupidatat nihil sint",
        "comments": []
      },
      {
        "id": "2022-06-18T05:35:56.263Z",
        "title": "Consequuntur beatae ",
        "category": "UI",
        "upvotes": 0,
        "isUpvoted": false,
        "status": "suggestion",
        "description": "Amet quisquam saepe",
        "comments": []
      },
      {
        "id": "2022-06-18T05:36:35.942Z",
        "title": "In labore porro cons",
        "category": "UI",
        "upvotes": -1,
        "isUpvoted": false,
        "status": "suggestion",
        "description": "Minim earum dolor al",
        "comments": []
      },
      {
        "id": "2022-06-18T05:37:04.990Z",
        "title": "Nimasi bu?",
        "category": "UI",
        "upvotes": 0,
        "isUpvoted": false,
        "status": "suggestion",
        "description": "asdf",
        "comments": []
      },
      {
        "id": "2022-06-18T05:37:34.365Z",
        "title": "Earum natus in quia ",
        "category": "UI",
        "upvotes": 0,
        "isUpvoted": false,
        "status": "suggestion",
        "description": "Nam et quia exercita",
        "comments": []
      }
    ],
    "suggestionFilter": [
      {
        "name": "UI",
        "isActive": false,
        "category": "UI",
        "id": "1"
      },
      {
        "name": "UX",
        "isActive": false,
        "category": "UX",
        "id": "2"
      },
      {
        "name": "Enhancement",
        "isActive": false,
        "category": "Enhancement",
        "id": "3"
      },
      {
        "name": "Bug",
        "isActive": false,
        "category": "Bug",
        "id": "4"
      },
      {
        "name": "Feature",
        "isActive": false,
        "category": "Feature",
        "id": "5"
      }
    ]
  }



export default data;