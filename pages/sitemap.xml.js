import React from "react";
import fs from "fs";
import { getAllPosts } from "../lib/api";

const Sitemap = () => {};

export const getServerSideProps = ({ res }) => {
  const baseUrl = "https://fireforms.io";
  const allPosts = getAllPosts(["date", "slug"]);


  //dev: "http://localhost:3000"
  //production: "https://fireforms.io",


  const staticPages = fs
    .readdirSync("./pages")
    .filter((staticPage) => {
      return !["_app.js", "_document.js", "sitemap.xml.js"].includes(
        staticPage
      );
    })
    .map((staticPagePath) => {
      return `${baseUrl}/${staticPagePath}`;
    });
  //

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
          ${allPosts
            .map((post) => {
              return `
              <url>
                <loc>${baseUrl}/documents/${post.slug}</loc>
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