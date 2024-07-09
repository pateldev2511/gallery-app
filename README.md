# Project Name

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Description

This project is a web application built with React and Next.js. It uses Supabase for database management and storage, and utilizes the Next.js Image component for optimized image display. The application allows users to upload and store images in a Supabase bucket and view them efficiently.

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Configuration](#configuration)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying app/page.js. The page auto-updates as you edit the file.

This project uses [next/font](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

**Usage**

**1. Upload Images:**

• Navigate to the upload section of the application.

• Select the images you want to upload.

• Click the upload button.

**2. View Images:**

• Navigate to the gallery section.

• The images will be displayed using Next.js’s optimized Image component.

**Features**

• User authentication with Supabase.

• Image upload and storage in Supabase buckets.

• Optimized image display using Next.js Image component.

• Responsive design for mobile and desktop.

**Technologies Used**

**• React:** A JavaScript library for building user interfaces.

**• Next.js:** A React framework with hybrid static & server rendering, and route pre-fetching.

**• Supabase:** An open-source Firebase alternative providing authentication, database, and storage services.

**• Next.js Image:** A component for optimized image handling.

**Configuration**

•**Supabase Configuration:**

Ensure you have correctly set up your Supabase project and bucket. The .env.local file should have the necessary environment variables.

    NEXT\_PUBLIC\_SUPABASE\_URL=your-supabase-url
    NEXT\_PUBLIC\_SUPABASE\_ANON\_KEY=your-supabase-anon-key

•**Next.js Configuration:**

The next.config.js file should be configured to support the Supabase storage URL for image optimization.

    module.exports = {
    images: {
    domains: \['your-supabase-url.supabase.co'\],
    },
    }

## Screenshots

Include screenshots of your application below to give users a visual idea of what to expect.


<img width="1683" alt="login" src="https://github.com/pateldev2511/gallery-app/assets/57655776/0672d525-79f9-484d-bf3e-378dd88fb321">

<img width="1683" alt="main" src="https://github.com/pateldev2511/gallery-app/assets/57655776/f6a9ea36-a215-4f6a-9af2-1ea19aedd2c8">

<img width="1683" alt="full-view" src="https://github.com/pateldev2511/gallery-app/assets/57655776/772323e0-720c-41de-9ce0-da3846488bc4">

<img width="1683" alt="fvrts" src="https://github.com/pateldev2511/gallery-app/assets/57655776/438d0210-332c-48d8-98a9-17d9922a449a">


**Learn More**

To learn more about Next.js, take a look at the following resources:

•[Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

•[Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

**Deploy on Vercel**

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

**Contributing**

1.  Fork the repository.

2.  Create your feature branch (git checkout -b feature/YourFeature).

3.  Commit your changes (git commit -m 'Add some YourFeature').

4.  Push to the branch (git push origin feature/YourFeature).

5.  Open a pull request.

**License**

Distributed under the MIT License. See LICENSE for more information.

Feel free to reach out if you have any questions or need further assistance with setting up or using the project. Enjoy coding!
