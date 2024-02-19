# Car Rental Problem
## Requirements
  - List cars available to rent for a given lat, long for a requested time window
  - Sort cars by price of the trip and distance
  - Owners should be able to overide the calendar and book the car for themselves
  - How to render the dashboard?

## Tech Exploration
  - Microservice design and architecture
  - Datastore structure
  - Two renters trying to book the same car at the same time
  - How do you handle scale? DB has 100M+ cars? 30k qps?
  - How would you design this to handle serving this out to the whole world?
  - Things you would monitor for
  - How would you handle deploys?
  - How would you make sure you meet our SLA?

---

## Data Model
Owner
- carIds

User
- userId

CarTable
- carId
- ownerId
- longitude
- latitude 
- pricePerHour
- pricePerDay

BookingsTable
- carId
- timestart
- timeend


## Api Model
### Owner
PUT /cars/booking
```
{}
```

### User
List cars available to rent for a given lat, long for a requested time window
Sort cars by price of the trip and distance
GET /cars


### App
How to render the dashboard?
GET /cars
PUT /cars/booking
