# Welcome to The social media app HEX & Chill

## **The place for all witches and wizards to wind down**

## This is a school Project for my JS2 at Noroff

example of how my filestructure work:

### Lets create a post with createPost()

User submits createPost form
|
|--> postCreateService() sends request
|
|--> initCreatePost()
|
|--> createPost(postData)
|
|--> apiClient('/social/posts', { methor: 'POST'})
|
|--> API creates post
|
|--> response returned
|
|--> router() -> Go to home/newsfeed
|
|--> initHome() -> fetch posts again
|
|--> UI updates
