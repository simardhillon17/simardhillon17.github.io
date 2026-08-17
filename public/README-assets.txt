Drop these files into this `public/` folder before deploying:

1. resume.pdf   — your resume (linked from the nav "Resume" button and #about).
                  The site references /resume.pdf.

2. og.png       — (optional) 1200x630 social share image. If omitted, the
                  <meta og:image> just 404s harmlessly; remove the tag in
                  src/layouts/Base.astro if you don't want one.

Anything placed in public/ is served at the site root, e.g.
public/resume.pdf  ->  https://simardhillon17.github.io/resume.pdf
