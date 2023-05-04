## Spotify's hackathon backend

The slideshow our team prodused: https://www.canva.com/design/DAFfGshr3yc/Q5bDBpcv8T3075XKrBWzXQ/edit?utm_content=DAFfGshr3yc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

Figma from UX part of our team: https://www.figma.com/file/1iKePzmVdRMwtT25y4GCsK/Spotify-Goodies?node-id=35%3A53&t=6b95VFbrFbsw6Cv9-1

![Xeniya Shoiko](https://user-images.githubusercontent.com/53381916/231593857-6a406597-2448-4485-8ee7-c4f4e3d41966.jpg)


## The problem space:
How would you make sharing Podcasts as fun, easy, and rewarding as sharing music?
<img width="1291" alt="The problem defenition" src="https://user-images.githubusercontent.com/53381916/236076995-0b4dde8d-c3d3-410b-953b-90460952105d.png">


Among many problems of sharing podcasts to name a few
- Platforms-incompatibility;
- Length: Podcasts can be quite lengthy, and sharing a long audio file can be cumbersome. This can be especially challenging for people who prefer to consume content in smaller, bite-sized chunks.
- Technical Know-How: such as how to find and share the direct link to a specific episode. 
- Personalization: Podcasts can be a very personal form of media.

As a team, we tackled the challenge of sharing Podcasts and realized that the length of the podcast is a major obstacle in sharing them. With the decreasing attention span in recent years, we knew we had to find a solution. So, we brainstormed and came up with an idea to give users the power to limit the exact second of the share snippet, allowing their recipients to know exactly what was sent and continue listening to the entire file if they wish. This approach allowed us include a postproduction process and made it easier for users to share specific parts of a podcast with their audience.

![data pipeline](https://user-images.githubusercontent.com/53381916/231593954-f4aefec9-9607-40d5-8383-cf36e946fec7.png)

## Inner workings:
Our addition to the platform was to allow users to share audio snippets (Soundbites) of their favorite podcasts with their network. On the backend, we process the Soundbite to extract relevant information. As a member of the development team, I was responsible for building the server-side using Node.js, Express.js, and MySQL in JavaScript.

My contributions included setting up a MySQL database to store user data, implementing RESTful APIs for data exchange, I worked on optimizing the server-side code to ensure fast and reliable performance.

By leveraging these technologies and my expertise, we were able to deliver a high-quality, user-friendly platform simprovement solution that allows podcast listeners to easily share and discover new content.   

1. I set up a database
The schema creates a table called `quotes` with three columns:
- `id`: an auto-incrementing integer field serving as the primary key for the table.
- `text_snipet`: a string field with a maximum length of 500 characters and is required (i.e., not nullable).
- `created_at`: a timestamp field that defaults to the current time when a new row is inserted.

The schema creation also includes a promise-based function that logs a message when the table is created successfully and catches any errors during the table creation process.

2. I was in charge of implementing a feature that sent our Soundbite to an external API called `rapidapi.com` for converting audio or video into text. I retrieved a JSON response from the API,
```
{
  "statusCode": 200,
  "statusMessage": "OK",
  "hasError": false,
  "request": {
    "conversationID": "06a6b52310f9489a822477c169a9b908",
    "linkFile": null,
    "packetID": "afd3b58bf6a84efb879d122be0a5068e",
    "timeStamp": 133276350016675710,
    "userID": <myID>
  },
  "data": {
    "phonetic": null,
    "text": "THERE ARE THREE SOUTH THERE THAT WE DON'T UNDERSTAND YOU ARE ALWAYS LOOKING FOR ANSWERS WE HAVE ONLY BEGUN TO SCRATCH THE SURFACE ",
    "duration": 11
  }
}
```
which allowed me to extract the text content from the MP3 files. Then, I used this information to create and write data files that we could easily insert into our database. To do this, I used the endpoint, which helped generate the data files from the external audio-to-text API responses:
```
http://<host>/api-text-to-speach  // the endpoint to generate a data-file a from response of an external API 
```

3. To enable further analysis of our soundbites, I created an endpoint for our Data Scientists to query all the quotes from the database at 
```
http://<host>/all-quotes  // this endpoint to return all quotes from db
``` 
The goal was to leverage the power of NLP to extract valuable insights from the quotes, such as: Sentiment Analysis, Topic Modeling, Named Entity Recognition, Text Summarization, Language Translation, Intent Recognition, Text Classification, Entity Relationship Extraction. The end result would be a dashboard that presents these insights in a clear and actionable manner, allowing us to make data-driven decisions and improve the overall podcast listening experience for our users.
