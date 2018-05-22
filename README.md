# CCSNHS
Website for CCS NHS.

This repository contains the code for the Collegium Charter School National
Honor Society website.

## Code Formatting
1.  HTML
    *   Indent all child elements in by 1 tab or four spaces.
    *   Declare document type on the first line of every file
        using the following syntax:
        
            <!DOCTYPE html>
        
    *   Use lowercase element names in all tags.
    *   Close all html elements.
    *   Close the following elements on the same line:
        *   `<h1></h1>`, `<h2></h2>`, etc.
        *   `<strong></strong>`, `<em></em>`, etc.
        *   All head elements (eg. `<title></title>`, `<link/>`, etc.)
    *   Close all empty HTML tags with a `/`.
    *   All images should contain an `alt` attribute.
    *   Specify text encoding in the head.

2.  CSS
    *   Start all CSS files with the following syntax:

            /* =========[ CSS ]========= */
    
    *   The CCS file should contain three sections. Start all
        sections with the following syntax:

            /* ---------[ Section Name ]--------- */

    *   List the styling of elements in the first section, the
        styling of classes in the second, and the styling of ids
        in the third.
    *   Each section should be sorted alphabetically.
    *   When listing a given element's properties in CSS, use the
        following order:
        *   Sizing properties
            *   width
            *   height
            *   min-width
            *   min-height
        *   Positioning properties (padding, border, margin, etc.)
            *   padding
            *   border
            *   margin
            *   float
            *   overflow
            *   overflow-x
            *   overflow-y
            *   (Note: Directional properties such as
            margin-bottom or right must be listed in compass rose
            order (i.e. top, right, bottom, left).)
        *   Styling properties
            *   background-color
            *   color
        *   Text-styling properties
            *   text-align
            *   text-transform
            *   font-size
            *   font-style
            *   font-weight
        *   Display properties
            *   display
            *   z-index
        *   Other properties
        *   (Note: If a property contains a URL, it must be placed
            towards the bottom of the property list.)
        *   Properties not specifically given an order are left to
            the discretion of the developer.
    *   Add one new blank line after each CSS block.
    *   All hexadecimal color values should be at least six characters
        in length.
    *   All letters in hexadecimal color values should be capitalized.

3.  JavaScript
    *   Always include a comment on the line above each JavaScript
        function detailing the action which that function performs.
    *   All hexadecimal color values should be at least six characters
        in length.
    *   All letters in hexadecimal color values should be capitalized.

4.  To-Do List
    *   All problems and bugs must be reported in the specified section
        of the list. Once a problem or bug appears to be fixed, add a
        '[RESOLVED]' in the line below it. After seven days, all problems
        and bugs marked with '[RESOLVED]' will be deleted from the to-do
        list.