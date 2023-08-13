# React Grid-Menu Component

## Usage

### Appearance (theme)

-   css modules
-   Tailwind CSS
-   CVA

#### Customisation

Static or Layout components are customisable through an "appearance" prop. These components rely on the cn utility that uses tailwind-merge and clsx as dependencies.
e.g.

`<Grid appearance={{ wrapper: 'bg-blue-500'}}/>`

Dynamic components that can have multiple states or interactivity use the CVA utility. To customise the theme of these components look into the "theme.config.ts" file in the src directory.

#### Extend Tailwind VSCode intellisense

##### Add the following className attributes to the Tailwind extension

-   appearance

## Dependencies
