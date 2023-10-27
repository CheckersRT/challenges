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

´´´p::first-letter {

}
´´´

```a [href^="https"]::before {
    content:":cake";
    margin: 8px;
}```

```a [href^="https"]::after {
    content:":cake";
    margin: 8px;
}```


child selection
`.main-section > article {}`


