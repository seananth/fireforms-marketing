import React from "react";

const Sitemap = () => {};

export const getServerSideProps = ({ res }) => {
  const baseUrl = "https://fireforms.io";

  //dev: "http://localhost:3000"
  //production: "https://fireforms.io",

  const staticPages = [
    "https://fireforms.io/",
    "https://fireforms.io/contact",
    "https://fireforms.io/blog",
  ];
  const dynamicPages = [
    {
      link: "https://fireforms.io/posts/how-to-embed-a-multi-step-form-wordpress",
      date: "2021-01-09",
    },
    {
      link: "https://fireforms.io/posts/how-to-embed-a-multi-step-form",
      date: "2021-01-04",
    },
    {
      link: "https://fireforms.io/posts/How-to-Embed-Multi-Step-Form-webflow",
      date: "2021-01-17",
    },
    {
      link: "https://fireforms.io/posts/Why-You-Should-Use-Multi-Step-Forms",
      date: "2021-01-02",
    },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${staticPages
          .map((url) => {
            return `
              <url>
                <loc>${url}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>1.0</priority>
              </url>
            `;
          })
          .join("")}
        ${dynamicPages
          .map((post) => {
            return `
              <url>
                <loc>${post.link}</loc>
                <lastmod>${post.date}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>1.0</priority>
              </url>
            `;
          })
          .join("")}
      </urlset>
    `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
