export const notes = `
# Header Component

## Purpose
Provides a generic header for display at the top of the page.
The current implementation is brand agnostic but eventually the branding should be encapsulated into the component.
The component uses an attribute selector which allows you to use the html [header](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header) element as the host.

The logo height is set internally with different heights for different screen sizes, it can not currently be modified to ensure consistency.

## Usage
Import the component in your application:

~~~js
@NgModule({
  ...
  imports: [LgHeaderModule],
})
~~~

and in your HTML:

~~~html
<header
  lg-header
  logo="/logo.svg"
  logoAlt="Company Logo"
  logoHref="http://company.com">
</header>
~~~

## Inputs

### LgHeaderComponent
| Name | Description | Type | Default | Required |
|------|-------------|:----:|:-----:|:-----:|
| \`\`logo\`\` | A url link to the logo | string | null | Yes |
| \`\`logoAlt\`\` | alt text to display alongside the logo | string | '2rem' | Yes |
| \`\`logoHref\`\` | Url link if the logo is clickable | string | null | No |
`;
