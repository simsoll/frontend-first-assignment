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
for quick purchase and delivery. You may fake this feature through the camera on the mobile phone,
or you may try out libraries that supports this functionality.

# General considerations
As the construction workers will be using the website while working in the field and mainly when missing tools or building material, the website should accommodate their needs in a fast, simple and intuitive way, so they the can get back to the work that really matters as quickly as possible. Their three main goals of using the website will be to easily find the needed products, place purchases and to quickly get an overview of already placed purchases, which haven't yet been approved. 

For the administration people in the office it should be easy to get an overview of yet to be approved purchases, approve these purchases and to see the purchase history for accounting purposes.

Taking both the construction workers and the administration people into account the audience is rather wide-aged, properly aged from around 16 to 60 years of age, and the construction workers will primarily be males. Besides the wide-aged audience we also have some cultural variety with the construction workers on one side and the administration people on the other side. The field workers shouldn’t be thinking the website is clearly made for the administration people back in the office and vice versa. 

Both the design and the technical implementation will try to address these considerations.

# Design part
Consider the following:
* Lessons from Bauhaus?
 * Form Follows Function (Never sacrifice your message for your design. Focus on readability, narrative, and information. Use your design to reinforce your message, never the other way around.
 * Always a Connection Between Color and Shape (Blue correspond with the circle)
 * Clean, Powerful Typography Matters (Be as imaginative with your typography as you are with every other tool in your toolbox, but make sure it never detracts from your message. Remember the styles and values.)
 * You Don't Have to Abolish Capital Letters, But Sometimes It Helps (Make your design accessible. If you’re  hoping to appeal to a wide audience, avoid over-styling. Reduce your design to its most essential elements.)
 * Imitation is the Highest From of Flattery: Bauhaus is Everywhere (When you see a great graphic idea, be inspired)
 
Based on the target audience and the primary use of the site, the goal of the design will be to have a simple and intuitive navigation, which enables the user to be productive and quickly find the needed tools or materials. The goal of the design should not be to draw the user in and keep him/her on the site, as both the construction workers and administration people main tasks using the website should not take very long time. 

The design should also support that the construction workers often will be outdoors when using the website - sometimes maybe in under bad weather conditions and while having cold, dirty or wet fingers and of course using mobile devices with smaller screen sizes. 

As for the wide-age audience and cultural variety the design style cannot be too fancy but should instead support the functional goals of the website to be productive and enabling completion of the task at hand as quickly as possible. The design will not be addressing these challenges by having different designs for construction workers and administration people, but will be a consistent across users and devices. However, this will put some constraints on the design possibilities. 

The design should send the message that this a trustworthy and reliable website that will solve the users needs. The language should be simple, clear and in an informative tone. 

## Style guide
The style guide descripted in this section will be a guidance and a set of rules for a constent design on the webpage.

### Style guide considerations
To address the mentioned design goals and considerations from last section the choice of design will be flat and simple and thereby quick to grasp by the user.  


Should include
 * Use saturation and value to guide the viewer and/or draw attention to something ([Price])

### Typeface
The website uses the Open Sans typeface - a humanist sans-serif typeface - as it's well suited for the flat design supporting the design target and it works well on both web and mobile. It makes the content easily readable even in small sizes, which will be very beneficial for the construction workers on their smaller screen sizes.

Besides the Open Sans typeface the geometric Walkway typeface will be used both when naming the title of the site - as a simple logo - and in the navigation to create contrast and catch attention. The geometric font type also fits in the overall construction-site setting.

* Logo typeface? Find slide which talks about typeface contrasts

#### Body text
The body font size is 1.4 rem with an appropriate line-height, which will enhance readability on all devices.

??? Add body + lorem text + css selector

#### Headings
As the hierarchical structure of the site is rather shallow only a few different headings are needed. The focus here is to create a typographical scale which enables the user to easily visualize the hierarchical structure and to let the headings stand out compared to the body text.

??? Add h1, h2, small/byline + css selectors


#### Navigation
The font size on navigation elements is ???rem to draw more attention than the body text, but still not taking focus away from the largest headlines. The font-size on the active navigation link will be slightly larger in order to catch attention and create a sense of depth.

??? Add .navigation + css selector

### Colors
The following two subsections will discuss the choice of the overall color scheme for the site along with the typeface colors. The color scheme will be applied in later sections presenting buttons, widgets, navigation, etc.

#### Color scheme
http://paletton.com/#uid=23p0u0kr7EB4wXHicLyChsjL3g2

Color schemes for flat designs are often brighter and more colorful than those for other sites. Even though flat designs tents to use several different colors, the site goes for a more simple and minimalistic approach by using a monochromatic color scheme supporting the rather limited content. The base color will be blue as it signals security, truth, stability, loyalty and open communication, which assists the overall goal of the site. 

To offset the primary cold blue monochromatic colors a complementary brown color is added to the final color scheme to help create more depth in the site and will be used to catch the users attention on call-to-action elements by standing out with the blue background colors. The brown color signals durability and stability, which - as the blue color - is well suited for the goals of this site.

<table class="color-table">
	<tbody><tr>
		<th>Primary color:</th>
		<td class="sample sample-1 primary-1">
			<div class="white">#D4EDF5</div>
			<div class="black">#D4EDF5</div>
		</td>
		<td class="sample sample-2 primary-2">
			<div class="white">#5FB4D1</div>
			<div class="black">#5FB4D1</div>
		</td>
		<td class="sample sample-0 primary-0">
			<div class="white">#2396BC</div>
			<div class="black">#2396BC</div>
		</td>
		<td class="sample sample-3 primary-3">
			<div class="white">#046B8D</div>
			<div class="black">#046B8D</div>
		</td>
		<td class="sample sample-4 primary-4">
			<div class="white">#013C50</div>
			<div class="black">#013C50</div>
		</td>
	</tr>
	<tr>
		<th>Complement color:</th>
		<td class="sample sample-1 complement-1">
			<div class="white">#FFEEDB</div>
			<div class="black">#FFEEDB</div>
		</td>
		<td class="sample sample-2 complement-2">
			<div class="white">#FFB86E</div>
			<div class="black">#FFB86E</div>
		</td>
		<td class="sample sample-0 complement-0">
			<div class="white">#FF9627</div>
			<div class="black">#FF9627</div>
		</td>
		<td class="sample sample-3 complement-3">
			<div class="white">#E27400</div>
			<div class="black">#E27400</div>
		</td>
		<td class="sample sample-4 complement-4">
			<div class="white">#804200</div>
			<div class="black">#804200</div>
		</td>
	</tr>
</tbody></table>

#### Typeface
As black text is difficult to read on a light background the default typeface color will be gray color (#5D5D5D).

??? Body + lorem + css selector

In situations where the background color is a dark blue or brown color, a light brown or light blue color will be used instead to increase the contract between the background color and the typeface color.

??? Examples

### Buttons
https://www.mozilla.org/en-US/styleguide/websites/sandstone/buttons/
Consider
* Use color to create depth - warmer/less cold colors appear nearer
* States: default, hover (lighter), active (darker), insensitive/disabled (fully satuated) 
* User flow: primary, secondary, alert, warning

#### Primary

#### Secondary

#### Disabled

### Widgets

### Products

### Purchases

### Icons

### Logo & Images

### Navigation
* Use color to create depth (warmer/less cold colors appear nearer
* All links use the Logo font to signify that these have some special meaning. Font size and width are increased when selected to increase the illusion of depth by putting the other links more in the background. 
* Fixed positioned to more easily navigate on products and purchases pages and keeps navigation bar connected with the content
* Can't place navigation elements in bottom of page due to Safari triggers options

### Grid system
The site will be using a 12-column grid system with a 2% gutter along with the following break points

* Max-width 479px for mobile
* Min-width 480px for mobile (horizontal view)
* Min-width 768px for tablet
* Min-width 992px for laptop
* Min-width 1200px for desktop

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

* similarity: buttons, icons on purchases-widgets and purchases 

*The construction worker should be able to purchase from t he mobile phone or tablet and rapidly find products while working in the field.* 

When logged in as a worker the product pages should be in focus. However, the purchase history should still be visible for the worker to see what have previously been purchased and if the purchases have been approved. 

*The target user for the desktop version is administration people in an office who needs to verify and approve purchases.*
 - focus: purchase history (purchases need to have states: purchased, confirmed)
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
 * Purchases
 * Users
* A simple barcode detection algorithm is used by just choosing a random product among the available/filtered products 
* Interaction triggers both ajax post against back-end and front-end logic to enhance user experience (more fluid experience instead of reloading the page for every interaction)
 * server roundtrip vs instant update in UI (improved responsiveness and user experience)
* pagination implementation (load everything/long initial load + responsiveness vs load incrementaly vs ajax call/infinity scrolling)
 * mention that due to the implementation details it is not possible/complicated to go the infinity scrolling route   

## Technologies, libraries and frameworks
* Handlebars

## Setting up


## Build process
Be cautious when updating font-awesome as it might break the build process as the appropiate css and font files are not copied to the ./public/vendor folder. The "main" property in .bower.json file should look like the following to insure with css and font files are copied correctly to the ./public/vendor/ folder

'''javascript
  "main": [
    "css/font-awesome.css",
    "fonts/*.*"
  ],
'''

## Further development
* Add purchase states: reject submitted bids. 
* Edit submitted purchases
* Clear all added products
* close button in top right