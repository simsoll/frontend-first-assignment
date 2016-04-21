<link rel="stylesheet" href="handover.css">

# Introduction
This document is part of the first mandatory assignment in the course Front-end Development held in Spring 2016 at BAAA - Business Academy Aarhus. 

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
Consider the following:
* Goal? What are the sites intent?
* Who are the sites users?
 * Age, gender, salary, origins, hobbies, motivations?
* On what platform and from where might this site be accessed?
* Should I break any "rules"?
As the construction workers will be using the website while working in the field and mainly when missing some spare parts, the website should accommodate their needs in a fast, simple and intuitive way, so they the can get back to the work that really matters as quickly as possible. Their three main goals of using the website will be to easily find the needed products, place orders and to quickly get an overview of already placed orders, which haven't yet been approved. 

For the administration people in the office it should be easy to get an overview of yet to be approved orders, approve these orders and to see the order history for accounting purposes.

Taking both the construction workers and the administration people into account the audience is rather wide-aged, properly aged from around 16 to 60 years of age, and the construction workers will primarily be males. Besides the wide-aged audience we also have some cultural variety with the construction workers on one side and the administration people on the other side. The field workers shouldn’t be thinking the website is clearly made for the administration people back in the office and vice versa. 

Both the design and the technical implementation will try to address these considerations.

# Design part
Consider the following:
* Lessons from Bauhaus?
 * Form Follows Function (Never sacrifice your message for your design. Focus on readability, narrative, and information. Use your design to reinforce your message, never the other way around.
 * Always a Connection Between Color and Shape (Blue correspond with the circle)
 * Clean, Powerful Typography Matters (Be as imaginative with your typography as you are with every other tool in your toolbox, but make sure it never detracts from your message. Remember the styles and values.)
 * You Don't Have to Abolish Capital Letters, But Sometimes It Helps (Make your design accessible. If you’re  hoping to appeal to a wide audience, avoid over-stylizing. Reduce your design to its most essential elements.)
 * Imitation is the Highest From of Flattery: Bauhaus is Everywhere (When you see a great graphic idea, be inspired)
 
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
* Why a style guide? Purpose? What value does it create?
 * Changing the style guide should change the site 

### Styleguide considerations
Fonts: Geometric fonts (less is more, clear, geometric to support the constructional aspect)
* Adobe typekit
* Open Sans

Should include
* Flat design: simple, quick to grasp
* Mention that you go for a simple flat design -> works well with Open Sans typeface
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

Consider the follow:
* Write down an explanation as to why you made these choices.

### Typeface
The website uses the Open Sans typeface - a humanist sans-serif typeface - as it's well suited for the flat design supporting the design target and it works well on both web and mobile. It makes the content easily readable even in small sizes, which will be very benificial for the construction workers on their smaller screen sizes.


#### Body text
The body font size is 1.4rem with an appropriate line-height, which will enhance readability on all devices.

??? Add body + lorem text

#### Headings
As the hierarchical structure of the site is rather shallow only a few different headings are needed. The focus here is to create a typographical scale which enables the user to easily visualize the hierarchical structure and to let the headings stand out compared to the body text.

??? Add h1, h2, small/byline    


#### Navigation
The font size on navigation elements is ???rem to draw more attention than the body text, but still not taking focus away from the largest headlines.

??? Add .navigation

### Colors
http://paletton.com/#uid=23p0u0kr7EB4wXHicLyChsjL3g2

Color schemes for flat designs are often brighter and more colorful than those for other sites. Even though flat designs tents to use several different colors, the site goes for a more simple and minimalistic approach by using a blue monochromatic color scheme supporting the rather limited content. The blue color signals security, truth, stability, loyalty and open communication, which assists the overall goal of the site. 

To offset the cold blue monochromatic colors a complementary brown color is added to the final color scheme to help create more depth in the site and will be used to catch the users attention on call-to-action elements by standing out with the blue background colors. 


Consider the following:
* What colours are used where and why?
 * How do the colours support the content? How to they set the mood?
 * Use color to create depth (warmer/less cold colors appear nearer (should both be used in navigation and button design))
* Clear and distinct examples of all the colours
 * #code + CMYK-code
 * A description of where, when and why
* Background vs links vs text

#### Background

#### Link

#### Typeface
* Black text on whit is difficult to read. Text with a boarder can be read on any background (never use black)

### Buttons
https://www.mozilla.org/en-US/styleguide/websites/sandstone/buttons/
Consider
* States: default, hover (lighter), active (darker), insensitive/disabled (fully satuated) 
* User flow: primary, secondary, alert, warning

### Widgets

### Products

### Orders

### Icons

### Logo & Images

### Navigation

### Grid system
https://www.mozilla.org/en-US/styleguide/websites/sandstone/grids/
default: 12 columns at a width of X (X determined by wrapper)

Screenformat: (mobile, mobile horizon, tablet, desktop)
Page width: 320px, ...
Column width: x%, ...
Gutter: x%, ...
'# of columns: 5, ...

## Design choices and composition
*Commented gestalt sketch that arguments for the choices made for the composition. Choice of
navigation possibilities related to literature from Frost, Krug, etc.*

Widgets
* figure/ground + closure creates some depth in an overall flat-designed page. It makes the call-to-action (the button) stand out.
* symmetry: 
 

*The construction worker should be able to purchase from t he mobile phone or tablet and rapidly find products while working in the field.* 

When logged in as a worker the product pages should be in focus. However, the order history should still be visible for the worker to see what have previously been ordered and if the orders have been approved. 

*The target user for the desktop version is administration people in an office who needs to verify and approve purchases.*
 - focus: purchase history (orders need to have states: ordered, confirmed)
 - purchase still needs to be possible
 
### Responsive design
As the users are going to access the website using both smartphones, tablets and desktop computers the website will need to be responsive adjusting the content based on the available screen dimensions.
 
### Navigation
Use tabs instead of a navigation bar. Why? Found out where in [Krug] this is mentioned!

 * Should be connected with the content  
 * Brand logo as escape hatch
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

## Further development
* Add order states: reject submitted bids. 
* Edit submitted orders
* Clear all added products