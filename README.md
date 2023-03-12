# Frontend Mentor - Notifications page solution

This is a solution to the [Notifications page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC).


### Link

- Live Site URL: [Notifications page](https://your-live-site-url.com)

## Challenge
In this challenge, I tried to make things as dynamic as possible to improve my skills in DOM manipulation using JavaScript. So instead of creating notifications statically, I created them to appear as though they were coming from a server in the form of JSON data.

notification.json is a JSON file containing a list of notifications related to a chess club. Each object in the list represents a different notification and has the following properties:

    - "from": an object with the name and icon of the person or entity that sent the notification

    - "title": a short description of the notification type

    - "subject": an object containing information about the related subject, such as a post or group, including the title and type of the subject

    - "read": a boolean indicating whether the notification has been read or not

    - "time": a string indicating how long ago the notification was received

    - "additional_content": any additional text related to the notification

    - "img_post": the URL of any image related to the notification, such as a picture or post image.

script.js  performs the following tasks:

    - It first initializes some variables:
      - ***body*** as the ***document.body*** object
      - ***notf_title_container*** as a collection of DOM elements with class ***container_notf***
      - ***nbr_notf*** as the DOM element with class ***number_of_notf***
      - ***mark_as_read*** as the DOM element with class ***mrk_as_read***.

    - It then sets the CSS cursor property of ***mark_as_read*** to "pointer".

    - It uses the ***fetch()*** function to retrieve data from a JSON file located at ***"./notification.json"***. The returned data is in JSON format, so the code uses the ***json()*** method to parse it into a JavaScript object. The ***unreadNotifications()*** function is then called to count the number of unread notifications in the data, and the ***addNotf()*** function is called to display the notifications on the page.

    - The ***unreadNotifications()*** function receives the parsed JSON data as its argument, and loops through the array of notification objects to count the number of unread notifications. It returns the count.

    - The ***addNotf()*** function receives the parsed JSON data as its argument, and loops through the array of notification objects to create a new DOM element for each notification using the ***buildNotfComponent()*** function. Each notification element is then appended to the body. The function also sets various event listeners and updates the notification element's content based on the data.

    - The ***buildNotfComponent()*** function creates a new ***div*** element and sets its HTML content to a string that represents the structure of the notification component. It then returns the new element.
