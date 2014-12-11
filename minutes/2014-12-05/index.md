---
layout: default
title: Minutes for 2014-12-05
---

## Venue: 314.216

## Start: 6:35 p.m.

## Attendance

  * Delan Azabani
  * Kye Russell
  * Josh Batchelor
  * Adam Parsons
  * Nathaniel Roach
  * Luke Mercuri

## Apologies

  * Jasmine Quek

## Old minutes

  * Great

## Treasury report

  * Until 2014-11-28
  * Duration: 16 days
  * Revenue: $1135
    * Pool was $375
    * LAN: $110 total
      * $100 in cash
      * $10 from card transactions on TidyClub
    * Adventure World: $650 total
      * $190 in cash
      * $460 from card transactions on TidyClub
  * Net profit on hand: -$886.52 (not accounting for card transactions or grants)
  * Deposit: will complete after signatory changes
  * Bank balance: will complete after signatory changes
  * LAN owing: Daniel Brown, Kieran Gee

### Accounting and report changes

  * Treasuries have previously been messy, but will be better next year when accounts are sorted
  * Previously we counted what was in the safe and pool table, and checked discrepancy by using the last treasury period's safe balance
  * Event signups and other incidental transactions were then manually reconciled as they arose
  * The long delays involved in depositing cheques makes accurate discrepancy calculations nearly impossible
  * Our bank account's signatories will be changed on Monday
  * We will try to enable online banking with hardware security tokens
  * Subsequently:
    * Ensure that TidyClub is used to track event signups where possible
    * Treasury reports should include itemised revenue and expenditure transactions
    * Avoid reimbursing committee members with cheques

### Spending policy

  * We need to write a new spending policy for 2015
  * This should be detailed (read: not based on the 2014 "Wario" policy)
  * The new spending policy shall adhere to section 12.10.1 of the constitution
  * Delan will send Josh the spending policy from 2004 as inspiration
  * The new spending policy will be sent to the list for discussion at the next meeting

## Past events

### End of year LAN

  * Was the best we could do, with what little time we had and last minute room changes, it was still pretty good
  * Delan has put a map of power outlets and capacities on the wiki for 314.216
  * Thank you Scott for the aircons!
  * The LAN was rather short with no real direction
  * Luke: In future, for short LANs especially, we should have plans for competitions and planned activities
  * Projector content was lacking, no one really wanted to do it, and people will always complain about the content
    * Will have more TV shows on the projector next LAN
    * Projector playlists should be thoroughly prepared before the LAN starts
  * Adam will make a form for people to put suggestions into
  * Most of the committee was out of the room at any given time
    * Three committee members must attend setup and teardown
    * At least two committee members must be present at all times, instead of just one
    * Three or four would be preferable

## Upcoming events

### Weemas LAN

  * Room booking is from Thursday 22 Jan, 8:30pm - Tuesday 27 Jan, 1:00pm
  * Official times will be from Friday 23 Jan, 9:00am - Tuesday 27 Jan, 10:30am
  * Open door cardax policy has been sorted out with Amanda
  * Scott has kindly allowed us to continue using his aircons for Weemas
    * The aircons are currently stored with Delan
  * We have all three rooms in 215.300 for the entire duration of the event
  * Proposed room layout:
    * Room 1: Ordinary LAN room
    * Room 2: Sleeping room
    * Room 3: Committee storage room (for FAL goods, etc.), console games and competitions or both

## PMH server

  * IPv6 would have been handy to provide some direct access to virtual machines
    * ECE sadly does not have any IPv6 address space
    * To quote Iain: "because Curtin"
  * Firmware, Debian and libvirt have been configured
  * RAID volumes: RAID 1 (146 x 2) + RAID 10 (300 x 4)
  * Outbound works, but no inbound connectivity yet
    * Nathaniel has emailed Iain to request this be changed
    * Iain will contact CITS but it could potentially take months
  * Use 10.13.0.0/16 as our local campus subnet
  * Nathaniel has started further configuration planning on the wiki

## Handover

### Safe

  * Delan has set a new "user" safe code
  * The "master" safe code is unknown (even to Callum) and does not reset upon power loss
  * Thankfully it doesn't appear to serve any significant purpose

### Cardax

  * Luke now has access to 215.104
  * No other committee members require cardax changes

### Signatories

  * AGM minutes have been printed and signed by everyone except Callum and Kieran
  * The Bankwest signatory form has now been filled by Delan, Kye and Josh
  * Signatories will be changed on Monday morning at the Guild branch
  * All three of the new signatories must attend, thankfully Josh is free on Monday

### Keys

  * Callum has given his key to Josh
  * Daniel has given his key to Nathaniel
  * Scott has given his key to Luke
  * Kieran has given his key to Adam
  * Alex had given her key to Delan
    * Delan since proceeded to lose the key at the LAN
  * Jimmy has not yet returned his key

### ling

  * Delan has updated /etc/aliases and /etc/group
  * Delan needs to prevent shadow committee from seeing club passwords
  * Kye will implement the functionality required to change Keydist administrators

### TidyClub

  * Kye has updated the user list
  * OCMs have slightly limited access permissions

## CoderDojo

  * No issues
  * This will likely remain the case until the next term nears

## Planning for 2015: Meetings

### Committee meetings

  * Delan, Kye, Josh and Luke will be unavailable from 2015-01-07 to 2015-01-19 due to #lca2015
  * Delan is otherwise generally free
  * Kye is generally free by appointment
  * Josh is unavailable during business hours due to work
  * Adam is mostly free with notice in advance
  * Luke has not yet been informed of his roster
  * Jasmine's availability is unclear except that Friday and Saturday are out
  * Nathaniel returns to civilisation around 2015-01-08

### Meeting with Amanda

  * We must book all events in the Pavilion with Amanda before Friday 2014-12-19
  * Executive committee should see Amanda on Monday 2014-12-15

### Meeting with Computing

  * Mike won't return until at least next year
  * Mihai generally can't be reached
  * Dave is keen, and Hannes may be a possibility too
  * Executive committee should meet on Monday 2014-12-15
  * What can ComSSA offer to Computing students and the department?
    * CoderDojo
    * DreamSpark management
    * Locker management (probably not worth it)
    * PMH server
    * Academic events and talks
    * Miscellaneous tutoring and mentoring
  * How could Computing help us?
    * Subsidise DreamSpark subscription for all Computing students
    * A common room (we can all dream)

### Meeting with occupants of 215.104

  * Need to ask Amanda how much pull we have over others
  * Discuss centralising things, the 4 computers dominate that room
  * We need to let Amanda know that we're having this meeting

### Meeting with CITS

  * We need to find competent and receptive people to establish rapport with
  * Brad knows a guy, and Dave's lab machine contacts are good candidates too
  * Further discussion suspended until next meeting

### Meeting with Guild

  * No issues to discuss in particular at the moment
  * Grant increases aren't a thing, see Jason's letter
    * Officially echo his naming and shaming of Sam Cavallaro and Miranda Wood

## Advertising

  * We need to shill hard next year
    * Computing only had around 90 new students this year
    * The incoming half size school cohort will make this situation worse
  * TidyClub should be used for all events
  * Posters for e.g. the lab hallways should be printed using next year's printing grant
    * Ensure that dates are left off event posters so that they can be reused
  * We have money remaining in our 2014 printing grant for a new banner
    * The largest old banner has:
      * No logo
      * Only COMSSA in capitals using the old typeface
      * No clear indication that we are a computing club
      * No explanation as to the meaning of our name
    * The new banner should have:
      * Claire's new logo and type
      * Additional full expansion of our club name
  * Electricity for the orientation day stall
    * Somewhat expensive at roughly $100
    * We could use this to provide live demos and immediate membership cards
  * The membership introduction booklet needs to be created from scratch
    * All event dates must be complete, correct and final, unlike this year
    * Luke has been delegated this task
  * Goodie bags at orientation day may be useful including:
    * Temporary tattoos ;)
      * The Guild printing grant can indeed cover this
    * USB drives
    * Flyers
    * Stickers
    * Lanyards
  * Shilling needs to happen at the first DSA and OOPD lectures
    * SE isn't strictly necessary as these students are generally a subset of DSA students

## Purchases and other expenditure

  * Card printer
    * Gregg may be able to buy a card printer for CoderDojo through Outreach
    * If this happens we may be able to access it for membership cards
  * Hard drives for the PMH server
    * Defer until we require additional disk space
  * Managed switches for the LAN
    * They allow many good things such as link aggregation and loop prevention
    * PLE sells six D-Link DGS-1100-24 managed switches for $954
    * Kye and Adam: Happy for this to happen given that we sell all of our old switches
    * Nathaniel will audit the model numbers of our current switches
    * Adam will handle selling the switches on the ComSSA Facebook group and page
    * Equipment will be offered at 30% off the current retail price where practical
    * Janky switch really needs to die, as a loud fan does not an enterprise make
    * Adam would like us to wait a little for possible alternatives, due to the large cost
  * Water toys for Adventure World
    * Consider purchasing these near the end of next year due to a lack of space
  * Pool table maintenance
    * Luke: buy better cues at around $50 each to avoid replacing them so often
    * We're down to two chalks left (counting only Triangle, not Phoenix)
    * Luke will buy a set of rubber holders and strings to tie chalks to the table
    * Luke will replace Daniel as Pool Table Manager Simulator 2015
  * DreamSpark
    * Our subscription will expire soon
    * Administrative questions:
      * Does ceasing to renew our subscription allow us to continue distributing old keys?
      * Do we immediately gain access to new SKUs during an annual subscription cycle?
    * Kye will continue to manage our DreamSpark subscription and Keydist
    * Perhaps try asking Computing to subsidise or assist with this?
  * Committee shirts
    * Guild grants officially reset in the 2015 calendar year
    * Curtin Concept will open about a week before orientation week
    * Jasmine has been delegated this task when Concept opens

## Financial investment

  * Term deposit should be the way to go
  * $15000 split should leave us with about $6000 to spend if necessary
  * Delan, Kye and Josh will investigate this after changing signatories

## Event schedule

  * Avoid teaching weeks 5, 7, 8 and 10 where possible due to tests and assignments
  * Asterisks indicate that a room booking needs to be made with Amanda
  * Grill the department — Monday 2015-03-02 (semester 1, calendar week 1)*
  * Movie night 1 — Friday 2015-03-13 (semester 1, calendar week 2)*
  * Ice skating — Tuesday 2015-03-17 (semester 1, calendar week 3)
  * Analogue games night 1 — Friday 2015-03-27 (semester 1, calendar week 4)*
  * LAN S01E01 — Friday 2015-04-03 (semester 1, calendar week 5)*
  * Rock climbing — Friday 2015-04-17 (semester 1, calendar week 7)
  * Games night 1 — Wednesday 2015-04-22 (semester 1, calendar week 8)*
  * Pot Black 1 — Friday 2015-05-01 (semester 1, calendar week 9)
  * LAN S01E02 — Friday 2015-06-26 (semester 1, calendar week 17)*
  * Analogue games night 2 — Friday 2015-08-14 (semester 2, calendar week 2)*
  * Gundam night — Wednesday 2015-08-19 (semester 2, calendar week 3)*
  * Games night 2 — Wednesday 2015-08-26 (semester 2, calendar week 4)*
  * LAN S02E01 — Friday 2015-08-28 (semester 2, calendar week 4)*
  * Movie night 2 — Friday 2015-09-11 (semester 2, calendar week 6)*
  * Pot Black 2 — Friday 2015-09-18 (semester 2, calendar week 7)
  * LAN S02E02 — Friday 2015-09-25 (semester 2, calendar week 8)*
  * Quiz night — Friday 2015-10-09 (semester 2, calendar week 10)
  * AGM — Wednesday 2015-10-14 (semester 2, calendar week 11)*
  * LAN S02E03 — Friday 2015-11-27 (semester 2, calendar week 17)*

## Detailed event discussion

### Quiz night

  * Getting Friday requires an early booking, or we will be relegated to Thursday
  * Kye will talk to Tanya (Tav manager) about the quiz night

### Hack nights

  * The old card printer can be a project for members to work on
  * Further discussion suspended until next meeting

### Coding competitions

  * Perhaps use the /g/ programming competition roll sheet as inspiration
  * Further discussion suspended until next meeting

### Watering hole

  * Let's go for a pub crawl!
  * As a new event, we shall gauge interest on Facebook
  * Luke: We will need a bus, otherwise it just won't happen
  * Buses are expensive, however
  * Further discussion suspended until next meeting

### Sportsball

  * Soccer was great in semester 1
  * Formal: Curtin Stadium club sports
    * Perhaps ComSSA should incentivise participation by covering absentee fees
  * Informal: group runs, cycling, etc.
  * Further discussion suspended until next meeting

### Ethical hacking

  * Suspended until next meeting

### Pot Black

  * Seriously cheap pool
  * Something like $14/hour per table
  * That is per table, not per person
  * Organisation delegated to Luke

### Member teaching and learning

  * Casual "lectures" and "workshops" from committee members and other members
  * e.g. learn to use Linux, Python, etc.
  * Perhaps investigate how CASSA run these events
  * Attempt to get Computing staff members involved if possible

### Talks from the Industry

  * Delegate committee members to request talks at the next meeting
  * Potential speakers:
    * Computing lecturers
      * David Cooper
      * Hannes Herrmann
      * Mihai Lazarescu
    * Bankwest
      * Michael Thomas
      * Luke Batchelor
    * ACS
    * SK Games
    * Woodside
    * Google
    * Geoff Moir (Atlassian)
    * Jake Sebastian-Jones (Dolby)
    * Richard Pilgrim (iiNet)
    * CoderDojo speakers
    * Let's Make Games Perth
    * iVEC
    * Trent Lloyd (Oracle/MySQL)

## Sponsorship acquisition

  * For the new year, we need to confirm our existing sponsors
    * Nathaniel has been delegated this task
  * Honorary mention of PMH, Outreach and any other material donors

### Potential retail sponsors

  * PLE (Luke)
  * NetPlus (Luke)
  * Altronics (Nathaniel)
  * Jaycar (Nathaniel)
  * Boffins (Delan)
  * Good Games (Josh)
  * Luna (Jasmine)

### Potential industry sponsors

  * Dell (Luke)
  * ACS (Luke)
  * Linux Australia (Kye)
  * Fog Creek Software (Josh)
  * Valve
  * IEEE

## Action items

  * Delan, Josh, Kye: change signatories, investigate online banking and term deposit accounts
  * Delan: contact Boffins to request sponsorship
  * Delan: send Josh the spending policy from 2004 to help create one for 2015
  * Delan: remove %shadowcommittee from the wiki's committee_only namespace ACL
  * Delan: email David Cooper to book our meeting with Computing
  * Kye: implement the functionality required to change Keydist administrators
  * Kye: contact Linux Australia to request sponsorship
  * Kye: print new orientation day banner after Rami has completed the design
  * Kye: talk to Tanya to organise the quiz night booking
  * Josh: contact Good Games and Fog Creek Software to request sponsorship
  * Josh: deposit cash and write a new treasury report after signatories are changed
  * Josh: create a candidate spending policy for 2015
  * Josh: collect the final remaining cabinet key from Jimmy
  * Josh: collect LAN debts from Daniel Brown and Kieran Gee
  * Adam: create a form to allow members to suggest projector content
  * Adam: organise the meeting with Amanda
  * Adam: handle selling our old switches
  * Adam: ask Facebook what nights are better for ice skating and rock climbing
  * Jasmine: contact Luna to request sponsorship
  * Luke: contact PLE, NetPlus, Dell and ACS to request sponsorship
  * Luke: investigate the details of a Pot Black event for next year
  * Nathaniel: contact Tactics, Quality Comics, Tokyo Underground, Altronics and Jaycar to request sponsorship
  * Nathaniel: audit the model numbers of our existing switches

## Next meeting: Sunday 2015-01-04, 2:00 p.m.

## Finish: 10:57 p.m.