# @prasiddha/react-appshell

@@prasiddha/react-appshell provides you with the base template for your application. It has navbar, sidebar and a section where your main app goes.

## Installation

Use the package manager [npm](https://nodejs.org/en/) to install @prasiddha/react-image-loader.

```terminal
npm install @prasiddha/react-appshell --save
```

## Usage

With @prasiddha/react-appshell you can create a basic drawer layout instantly.

You can find the template for the App Shell at:
https://github.com/Prasiddha22/react-appshell

```tsx
import { AppShell } from './Components/AppShell';

const App = () => {
  return (
    <AppShell
      sidebarOpen={sidebarOpen}
      sidebarBackgroundColor={'#f8fafb'}
      sidebarHeader={<SidebarHeader />}
      sidebarContent={<SidebarContent />}
      sidebarFooter={<SidebarFooter />}
      sidebarOpenedWidth={'300px'}
      sidebarClosedWidth={0}
      navbarContent={<NavContent />}
      navbarFullWidth={false}
    >
      {/* <AppPrimo /> */}
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id atque dolorem
      doloremque ullam repellendus assumenda ratione eveniet, vel blanditiis vitae
      repellat neque inventore quaerat. Aperiam doloribus autem nihil alias veritatis!
    </AppShell>
  );
};

export default App;
```

## Props

| Property                                                                                                                   | Required | Default value | Description                                                                            |
| :------------------------------------------------------------------------------------------------------------------------- | :------- | :------------ | :------------------------------------------------------------------------------------- |
| `navbarContent?: React.ReactNode`                                                                                          | no       |               | Your navbar content                                                                    |
| `navbarFullWidth?: boolean`                                                                                                | no       | false         | Determine if the navbar will be of full width or not                                   |
| <code>navbarPosition?: 'static' &#124; 'relative' &#124; 'absolute' &#124; 'sticky' &#124; 'fixed' &#124; undefined</code> | no       | 'sticky'      |                                                                                        |
| `sidebarBackgroundColor: string`                                                                                           | no       | white         | Sidebar background color                                                               |
| `sidebarHeader?: React.ReactNode`                                                                                          | no       |               | Sidebar Header                                                                         |
| `sidebarContent: React.ReactNode`                                                                                          | yes      |               | Main content of Sidebar                                                                |
| `sidebarFooter?: React.ReactNode`                                                                                          | no       |               | Sidebar Footer                                                                         |
| <code>sidebarOpenedWidth?: number &#124; string</code>                                                                     | no       | '250px'       | Width when the sidebar is open                                                         |
| <code>sidebarClosedWidth?: number &#124; string</code>                                                                     | no       | '0px'         | Width when the sidebar is close                                                        |
| `sidebarTransitionDuration?: number`                                                                                       | no       | 0.5           | transition duration for the sidebar open and close                                     |
| `sidebarOpen: boolean`                                                                                                     | yes      | true          | sidebar open/close state                                                               |
| <code>sidebarBreakpoint?: 'sm' &#124; 'md' &#124; 'lg' &#124; 'xl' </code>                                                 | no       | 'sm'          | breakpoint where sidebar will be detached from the main body and acts more like drawer |

###

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
