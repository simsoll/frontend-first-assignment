# Project description
Develop a prototype of a website for construction workers and reflect upon the design
decisions made. The prototype shall work on both mobile phones, tablets, and
desktop computers. The construction worker should be able to purchase from the mobile phone or
tablet and rapidly find products while working in the field. The target user for the desktop version is
administration peaople in an office who needs to verify and approve purchases. 

## Functional requirements
The website shall contain the following pages and features:
The site must be responsive and must include: 
* Frontpage.
* Product catalogue with a gallery/list of minimum 32 products. The product page can hold 16
products, so there has to be at least two pages with products.
* Purchase history that lists ealier purchases.
* Scanning function (on the mobile version) of barcodes or products serial numbers which allow
for quick order and delivery. You may fake this feature through the camera on the mobile phone,
or you may try out libraries that supports this functionality.

# Design part



## Style guide

### Headline

### B-head

### Navigation

### Body

### Byline

### Color palette

## Styleguide considerations
Purpose?
* Informative
* Easy accessible: Should work on mobile 
* Not necessary to draw the user in
 * “hit and run”: Find what you are looking for, easy order and then get out of the way to continue on the “more important” work
* Relate to the user: Geometric fonts (less is more, clear, geometric to support the constructional aspect)


Audience?
* Age: 18-60
 * It’s a rather wide-aged ordinance which should be reflected in the choice of style (not too modern and too old fashioned)
* Gender: Primarily male
* Cultural niche: Working class, they know what they want. Field workers on mobile with cold and dirty fingers and office workers. 
 * We also here have a rather wide cultural spectrum. The field workers shouldn’t think “wow, this is clearly made for the managers back home” and the also the other way around.


Tone?
* Casual
* Friendly
* Formal 
* Fun

Should include
* Spacing
* Colors: Choose first a base color and thereafter a color scheme. 
 * Use saturation and value to guide the viewer and/or draw attention to something ([Price])
 * Schemes
    * http://paletton.com/#uid=53s0u0kAjDM00++i4K4HojQ+S0i
    * http://paletton.com/#uid=23s0u0kAjDM00++i4K4HojQ+S0i
 * Black/white on the entire page and then color the important parts to draw the user toward
 * Book: I send you this cadmium red
 * http://miraclesalad.com/whatthecolor.php
 * Not use black on white (boooring)
 * Alternative to Photoshop: PIXLR.com
 * Colorcombos.com
 * Colorzilla
* Base color proposals ([Dukin])
 * Blue (security, truth, stability, loyalty, open communication)
 * White (simplicity, cleanliness, faith)
 * Brown (durability, class, age, stability)
 * Black (power, drama, bold, strong)
* Further resources: https://www.smashingmagazine.com/2010/07/designing-style-guidelines-for-brands-and-websites/
* Buttons
* Fonts
* Layout and grids
* Icons

## Design choices and composition
*The construction worker should be able to purchase from t he mobile phone or tablet and rapidly find products while working in the field.* 

When logged in as a worker the product pages should be in focus. However, the order history should still be visible for the worker to see what have previously been ordered and if the orders have been approved. 

*The target user for the desktop version is administration peaople in an office who needs to verify and approve purchases.*
 - focus: purchase history (orders need to have states: ordered, confirmed)
 - purchase still needs to be possible
 
### Navigation
 * Search box, as some people will only use search boxes for navigation (or if they are in a hurry)
    * Don’t make it hard for the user – stick to the formula
 * Users should always have a sense of where they are
    * Logo in top left should get people back to the home page (gives a fresh start)
    * Highlight navigation bars indicating the current location (“You are here”). Can be used in combination with tabs both from primary (top) navigation and secondary (left) navigation thereby improving the visual cues.
 * Don’t invent the wheel – people expect navigation to be in standard places
 * Lower-level navigation should get the same attention when designing as the top-level
 * Every page needs a name. Page names are the street signs of the Web.
 * Whatever page the users is on, he/she should always be able to answer (the gangster/trunk test)
    * What site is this? (Site ID)
    * What page am I on? (Page name)
    * What are the major sections of this site? (Sections)
    * What are my options at this level?  (Local navigation)
    * Where am I in the scheme of things? (“You are here” indicators)
    * How can I search?

## Choice of colours and fonts

How can we use the color to enhance user experience 
* in the field?
* in the office?
 
# Technical part

## Technical considerations
* JSON files are used instead of a database with the following entities
 * Products
 * Orders
 * Users
* A simple barcode detection algorithm is used by just choosing a random product among the available/filtered products 

## Used technologies, libraries and frameworks
* Handlebars

## Setting up


## Build process


# Ideas
* Create the styleguide as a separate application as for Connect
 * https://www.mozilla.org/en-US/styleguide/websites/sandstone/typefaces/
 * Include mark-up, styling and description/explanation sections

* Book: Designing Web Navigation
* Inspiration: www.awwwards.com
* Use tabs instead of a navigation bar
 * Why? Found out where in [Krug] this is mentioned!
* Fonts
 * http://www.1001fonts.com/
 * Adobe typekit



