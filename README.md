# Online forms

# About project
Web application (SPA) which helps user to create online forms, let other people answer forms, store form data and analyze.
This project is created on BSc Thesis purposes and to learn new things (Vite, React app architecture, e2e tests with cypress)

# Project status
In early development

# About architecture
libs\
---development-kit - Helper functions, hooks and facedes for external libraries hooks\
---ui - Reusable UI components, facades for MUI components\
online-forms\
---firebase - Firebase configuration\
---modules - Implementations of application features. Every module includes\
   ---components - components related to specific module\
   ---logic - hooks with implemented module logic\
   ---containers - place where logic and components are connected\
        ---module-name.module.tsx - entry level to using module\
   ---pages - place to connect multiple modules, add layout, entry level for routing\
   ---routes - configuration of routes\
   ---shared - place to store shared things - contexts, types, consts etc\
   ---theme - configuration of application theme - global styles, theme\
   
# Current stack
- React
- TypeScript
- Firebase
- React hook form
- Yup
- Styled Components
- Vite
- MUI

In the future to add:
- React Query
- Cypress
