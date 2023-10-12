# 🌐 Client Requests Task

Welcome to Client Request Table.
This App allows you to explore the statistics information about percentage of client request about certaint fields.
This page is responsive for any type of screen.
Click on the top Button to hide or show the table.

![Table](https://i.ibb.co/ZhWy63w/Screenshot-2023-10-12-at-7-30-48-PM.png)

## Notes

I created a constant variable with Api data array length, an empty array for the result that we return from the function, and an empty object to store the amount of requests for each sector.

To get the percentage of requests I decided to go through the data array and count the amount of requests for each sector. I compared the name of the sector and increased it by 1. Calculated data stored in an object.

So, now we have an object with summarized data and by the next step, I'm iterating by each object key to calculate the percentage of requests in significant sectors relative to the total amount of requests. By the next step I stored calculated data in the prepared array in a format { name: string, percantage: number }.

Returning array to insert the data from it to the table.

Here you can find a [DEMO LINK](https://test-task-substantive.vercel.app/)
