# CSS notes


selects the second section in the html
`section:nth-child(2)`


:active
changes when clicked (only while clicking)

selects default font on system
`font-family: system-ui;`


width 80% of a container will be left aligned to 80% of the page. 
adding margin: auto will create equal margins left and right making it centered.

[attribute] to select elements with certain attributes and style them

[type="button"]

could use href, role, type, (not just class)

ul[role="list"] {
    list-style-type: none;
}

will remove bullet points. 

a [href^="https"] {
    ^ matches any that begins with https
}

### focus mode

When you click inside a text box/input box

input:focus {
    outline: 2px solid red;
}

outline rather than border


### pseudo elements

google can not see pseudo elements so it does not count in the SEO

p::first-letter {

}

a [href^="https"]::before {
    content:":cake";
    margin: 8px;
}

a [href^="https"]::after {
    content:"cake";
    margin: 8px;
}


child selection
.main-section > article {}

### Positioning

position: fixed
takes the box out of the normal flow and fixes it in position. 

When position is not static (default) you can use these props:
right
left
bottom
top

to move the box around. 

Position absolute makes the positional relative to the elements parent –– Parent must not be static

absoulate only works if a parent is position: relative. Otherwise it will default to be relative to the main body .


Relative does not take the item out of the page flow. 

### Sticky

Specify where you want the item to stop moving. Ex where user is scrolling and the image is 30px from the top, stop moving. 

Could be used for chapter heading, so the heading sticks will the user scrolls. 

z-index default is 0. -1 will make something go behind everything else. 

2rem = 2 x the default font size. 