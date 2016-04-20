# Project description
Develop a prototype of a website for construction workers and reflect upon the design
decisions made. The prototype shall work on both mobile phones, tablets and
desktop computers. The construction worker should be able to purchase from the mobile phone or
tablet and rapidly find products while working in the field. The target user for the desktop version is
administration people in an office who needs to verify and approve purchases. 

## Functional requirements
The website shall contain the following pages and features:
The site must be responsive and must include: 
* Front page.
* Product catalogue with a gallery/list of minimum 32 products. The product page can hold 16
products, so there has to be at least two pages with products.
* Purchase history that lists earlier purchases.
* Scanning function (on the mobile version) of barcodes or products serial numbers which allow
for quick order and delivery. You may fake this feature through the camera on the mobile phone,
or you may try out libraries that supports this functionality.

# General considerations
As the construction workers will be using the website while working in the field and mainly when missing some spare parts, the website should accommodate their needs in a fast, simple and intuitive way, so they the can get back to the work that really matters as quickly as possible. Their three main goals of using the website will be to easily find the needed products, place orders and to quickly get an overview of already placed orders, which haven't yet been approved. 

For the administration people in the office it should be easy to get an overview of yet to be approved orders, approve or reject these orders and to see the order history for accounting purposes.

Taking both the construction workers and the administration people into account the audience is rather wide-aged, properly aged from around 16 to 60 years of age, and the construction workers will primarily be males. Besides the wide-aged audience we also have some cultural variety with the construction workers on one side and the administration people on the other side. The field workers shouldn’t be thinking the website is clearly made for the administration people back in the office and vice versa. 

Both the design and the technical implementation will try to address these considerations.

# Design part
Based on the target audience and the primary use of the site, the goal of the design should be to have a simple and intuitive navigation, which enables the user to be productive and quickly solve the task at hand. The design should not draw the user in and keep him/her on the site, as both the construction workers and administration people main tasks using the website should take a very short period of time. 

The design should also support that the construction workers often will be outdoors when using the website - sometimes maybe in under bad weather conditions and while having cold, dirty or wet fingers. 

As for the wide-age audience and cultural variety the design style cannot be too fancy but should instead support the functional goals of the website to be productive and enabling completion of the task at hand as quickly as possible. The design will not be adressing these challenges by having different designs for construction workers and administration people, but will be a cohesive across users and devices. However, this will but some constraints on the design possibilities. 

The design should send the message that this a trustworthy and reliable website that will solve the users needs. The language should be simple and clear and in an informative tone. 


Tone?
* Casual
* Friendly
* Formal 
* Fun


## Style guide
 * https://www.mozilla.org/en-US/styleguide/websites/sandstone/typefaces/

### Logo & Images

### Typography

#### Headline

#### B-head

#### Navigation
 
#### Body

#### Byline

### Color palette

### Icons


## Styleguide considerations
Fonts: Geometric fonts (less is more, clear, geometric to support the constructional aspect)
* Adobe typekit
* Open Sans

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
*Commented gestalt sketch that arguments for the choices made for the composition. Choice of
navigation possibilities related to literature from Frost, Krug, etc.*

*The construction worker should be able to purchase from t he mobile phone or tablet and rapidly find products while working in the field.* 

When logged in as a worker the product pages should be in focus. However, the order history should still be visible for the worker to see what have previously been ordered and if the orders have been approved. 

*The target user for the desktop version is administration people in an office who needs to verify and approve purchases.*
 - focus: purchase history (orders need to have states: ordered, confirmed)
 - purchase still needs to be possible
 
### Responsive design
As the users are going to access the website using both smartphones, tablets and desktop computers the website will need to be responsive adjusting the content based on the available screen dimensions.
 
### Navigation
Use tabs instead of a navigation bar. Why? Found out where in [Krug] this is mentioned!


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

### User variety

## Choice of colours and fonts
*You have to balance these elements and your choices shall spring from a knowledge of user
profile, context of use, and content.*

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
* Interaction triggers both ajax post against back-end and front-end logic to enhance user experience (more fluid experience instead of reloading the page for every interaction)
** server roundtrip vs instant update in UI

## Technologies, libraries and frameworks
* Handlebars

## Setting up


## Build process
Be cautious when updating font-awesome as it might break the build process as the appropiate css and font files are not copied to the ./public/vendor folder.