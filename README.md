# Online forms

# About project
Web application (SPA) which helps user to create online forms, let other people answer forms, store form data and analyze.
This project is created on BSc Thesis purposes and to learn new things (Vite, React app architecture, e2e tests with cypress)

# Project status
In development

# About architecture
libs\
---development-kit - Helper functions, hooks and facedes for external libraries hooks\
---ui - Reusable UI components, facades for MUI components\
online-forms\
---firebase - Firebase configuration\
---modules - Implementations of application features. Module can includes\
------components - Components related to specific module\
------logic - Hooks with implemented module logic\
------containers - Place where logic and components are connected\
---------module-name.module.tsx - Entry level to using module\
---routes - Configuration of routes\
---services - Services to handle API operations\
---theme - Configuration of application theme - global styles, theme\
---types - Shared types, interfaces, enums across application
   
# Stack
- React
- TypeScript
- Firebase
- React Hook Form
- React Query
- React Dropzone
- Yup
- Styled Components
- Vite
- MUI
- React Chart JS 2
- Date FNS

In the future to add:
- Cypress
