# JQMobile
A jQuery Mobile theme for Drupal 8

##Overview
The theme includes a copy of jQuery Mobile version 1.4.5 (see complete documentation at http://jquerymobile.com/.)

jQuery Mobile manages much of the UI by adding data attributes and classes to various elements, which then get decorated by JQM. So the crux of this theme is to start with the Stark theme, then removing
all the core css to let JQM manage the styling.

Everything is responsive and should be mobile-friendly. So instead of horizontal navigation at the top of the page there are two slide-out panels for navigation and other information that are toggled open using icons.
They are the regions called Menu Panel (on the left) and Options Panel (on the right).
An icon for each appears to the left and right of the page title. Everything in those panels is hidden unless the icons are touched/clicked. The panel slide open when selected, and close again when the icon is toggled
or when the user touches/clicks outside the panel.

The theme provides a normal page with sidebars and an alternate page for a modal dialog display. The modal page will be used on any page that has a path with 'modal' in it. That could be created using pathauto, or by giving pages
a custom alias, or by creating a menu callback with a modal path.

Extend this theme by creating a sub-theme. The minimum required content for a sub-theme is a THEMENAME.info.yml file that has name, description, type, core and "base theme: jqmobile". The sub-theme info file also
needs the list of regions. Everything else will be inherited from the base theme, so you only have to add information about changes or additions.

##Limitations

jQuery Mobile likes to control the whole page, so other modules that try to do that can be a problem. The following may be problematic and broken, so disable for now:
- Quick Edit
- Toolbar
- Contextual Links

jQuery Mobile can be used as an admin theme in many places, but there are some places that just won't work. The most notable is the Views UI, which has lots of ajax and javascript that doesn't work right in this theme. If you need the Views UI you may need to use another admin theme.
