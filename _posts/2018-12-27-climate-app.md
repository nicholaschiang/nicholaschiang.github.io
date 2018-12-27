---
layout: post
title: "Climate App Project"
date: 2018-12-27
---

I know that it's only been a day since I first posted about my ESK8 endeavor, but (as it is winter break, and I don't have much else to do) I decided that I might as well post about this as well. While this will probably get taken down as soon as I actually finish the project, I'm going to continue to update this as I progress in order to document the build process and make it easier to realize other app ideas.

My main driver for this project is just so that I can say that I tried, that I actually did *something* to try to solve our over-arching problem: **global warming**. Another one of the original motivations was to actually write something applicable for my English letter-to-authority (about something that needs to change, etc.) project... so, of course, I decided to write to Elon Musk regarding a global warming solution: a mobile carbon emissions tracker, something that could be easily distributed to millions with little (haha, basically none for me) entry cost, an app that would encourage people to change individual by individual.

So I'm here to try to document how I went about learning about Andriod and iOS app development (as I've never done this before) and how I ultimately either finish such an app or why I might give up in the future.

Stay tuned...

***

## The Dream
I wanted to create an app that, with the little initial setup of selecting your main vehicle of commute (i.e. car make and model), one could tell exactly how big their carbon footprint is and how to best reduce that carbon footprint to a more sustainable model. (I would calculate their daily *carbon quota* based off that car and give them a goal to reach in order to make living on Earth sustainable... i.e. the point where we start reducing carbon instead of adding)

## Progress (mostly problems)
The first big problem that I encountered was the issue of actually putting together a reliable database with an adequate selection of cars and their correlating carbon emissions.

That's the problem that I'm working on right now... and I haven't made much progress as of now.

## The Plan
This is where I'm going to list out what I want my app to do in the long run and how I'm working towards those goals in the moment. This will probably be always changing as I learn more... so nothing here is set in stone.

### Initial Setup
This is what the user will see when opening the app for the first time. (Listed in semi-chronological order)
- Welcome screen
- Make and model of car (Or one could just take a picture of their license plate? Or Vehicle Identification Number? >> probably not, as some people might not want to due to privacy reasons)
- Commute (Or connect apps like *Google Maps* or *Waze* to automatically input commute length, etc.)

### Screens (what's on the nav bar)
Listed below are the different tools or activities (in Andriod lingo) that will be built into the final app.
- Daily carbon quota and progress (i.e. negative pbar: Starts out full at the beginning of the day and slowly gets used up as carbon is released) >> This will probably also have a card-view system (not unlike *Instagram* or the *Facebook* mobile app with a scrolling interface) to show suggestions and snippets of the *Statistics* tool
- Advanced carbon footprint calculator (probably just taken off of one of the existing web calculators and fine-tuned for this application)
- Settings (to add cars, change other calculator input)
- Statistics (based off what is inputted during setup and the *Settings* screen, this tool will show the user exactly how much carbon is being released by what etc.)

### Infastructure
This is where I'll be basically solving problems like a centralized database for cars and their correlating average carbon emissions (now I'm thinking that *carbon emissions* will just become the *MPG* of any given car).
- Centralized car MPG database
- Easy way to input commute by connecting apps (i.e. *Google Maps* or *Waze* as we're just targeting Andriod users for now)
