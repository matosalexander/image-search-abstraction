## Image Search Abstraction Layer for [Free Code Camp](https://www.freecodecamp.com/challenges/image-search-abstraction-layer)

### User Stories:

> I can get the image URLs, alt text and page urls for a set of images relating to a given search string.

> I can paginate through the responses by adding a ?offset=2 parameter to the URL.

> I can get a list of the most recently submitted search strings.

### Example Usage:

`https://evening-retreat-91413.herokuapp.com/api/searchimage/dragon%20ball%20super?offset=1`

`https://evening-retreat-91413.herokuapp.com/api/latest`

### Example Output:
```javascript
  [
     {
       url: "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Dragon_Ball_Super_Key_visual.jpg/220px-Dragon_Ball_Super_Key_visual.jpg",
       snippet: "Dragon Ball Super is an ongoing Japanese anime television series produced by Toei Animation that began airing on July 5, 2015",
       thumbnail: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQeQXKygEERr1mAVzPQK_OUzBoKNG0_Qe-cW-KJ0Yu884H8tK4JJi5etsI",
       context: "https://en.wikipedia.org/wiki/Dragon_Ball_Super"
     }
  ]

```
```javascript

  [
     {
       term: "dragon ball super",
       when: "2017-01-27T12:11:27.484Z"
     },
     {
       term: "free code camp",
       when: "2017-01-27T12:02:07.952Z"
     }
  ]
```

[Demo](https://evening-retreat-91413.herokuapp.com)