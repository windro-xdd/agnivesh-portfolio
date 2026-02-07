# Agnivesh Sarang Portfolio

A modern, cinematic portfolio website for a photographer and videographer, built with Next.js, Tailwind CSS, and Shadcn UI.

## Features

- **Auto-updating Gallery**: Connects to a Google Drive folder to automatically display photos. Uploading to Drive updates the site.
- **Video Portfolio**: Embeds for YouTube and Stornaway interactive films.
- **Cinematic Design**: Minimalist "dark mode" aesthetic with smooth animations and layout.
- **Responsive**: Fully optimized for mobile and desktop.

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Google Drive API](https://developers.google.com/drive) for image content.

## Getting Started

### Prerequisites

1.  Node.js 18+ installed.
2.  A Google Cloud Console project with the **Google Drive API** enabled.
3.  An API Key from Google Cloud Credentials.
4.  A Google Drive folder set to "Anyone with the link can view".

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/yourusername/agnivesh-portfolio.git
    cd agnivesh-portfolio
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Set up Environment Variables:
    Create a `.env.local` file in the root directory and add the following:

    ```env
    NEXT_PUBLIC_GOOGLE_DRIVE_API_KEY=your_api_key_here
    NEXT_PUBLIC_GOOGLE_DRIVE_FOLDER_ID=your_drive_folder_id_here
    ```

    *   `NEXT_PUBLIC_GOOGLE_DRIVE_API_KEY`: Your Google Cloud API Key.
    *   `NEXT_PUBLIC_GOOGLE_DRIVE_FOLDER_ID`: The ID of the public Google Drive folder containing your portfolio images (the string after `folders/` in the URL).

4.  Run the development server:
    ```bash
    npm run dev
    ```

5.  Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/).

1.  Push your code to a GitHub repository.
2.  Import the project in Vercel.
3.  Add the `NEXT_PUBLIC_GOOGLE_DRIVE_API_KEY` and `NEXT_PUBLIC_GOOGLE_DRIVE_FOLDER_ID` to the Vercel Project Settings > Environment Variables.
4.  Deploy.
